-- Manual Pochi La Biashara subscription payments for ElimuNest.
-- Run after 202610190001_learning_backend.sql.

create table if not exists public.subscription_payment_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_months smallint not null check (plan_months in (1, 3)),
  amount_kes integer not null check (
    (plan_months = 1 and amount_kes = 499)
    or (plan_months = 3 and amount_kes = 999)
  ),
  payer_phone text not null check (payer_phone ~ '^([+]?254|0)[17][0-9]{8}$'),
  mpesa_receipt text not null check (mpesa_receipt ~ '^[A-Z0-9]{8,12}$'),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  review_note text
);

create unique index if not exists subscription_payment_receipt_unique
  on public.subscription_payment_requests (upper(mpesa_receipt));
create index if not exists subscription_payment_user_created
  on public.subscription_payment_requests (user_id, created_at desc);

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan_months smallint not null check (plan_months in (1, 3)),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  latest_payment_request_id uuid not null references public.subscription_payment_requests(id),
  updated_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

alter table public.subscription_payment_requests enable row level security;
alter table public.subscriptions enable row level security;

drop policy if exists "Users read their subscription payment requests" on public.subscription_payment_requests;
create policy "Users read their subscription payment requests"
  on public.subscription_payment_requests for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Users submit their own subscription payment requests" on public.subscription_payment_requests;
create policy "Users submit their own subscription payment requests"
  on public.subscription_payment_requests for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and status = 'pending'
    and reviewed_at is null
    and review_note is null
  );

drop policy if exists "Admins read all subscription payment requests" on public.subscription_payment_requests;
create policy "Admins read all subscription payment requests"
  on public.subscription_payment_requests for select to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Users read their subscription" on public.subscriptions;
create policy "Users read their subscription"
  on public.subscriptions for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Admins read all subscriptions" on public.subscriptions;
create policy "Admins read all subscriptions"
  on public.subscriptions for select to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

grant select, insert on public.subscription_payment_requests to authenticated;
grant select on public.subscriptions to authenticated;

-- Published teacher-authored lesson bodies are returned only to active subscribers.
-- The API separately permits the first three built-in curriculum lessons.
drop policy if exists "Published lessons are readable" on public.teacher_lessons;
create policy "Active subscribers read published lessons"
  on public.teacher_lessons for select to authenticated
  using (
    status = 'published'
    and (
      (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
      or exists (
        select 1 from public.subscriptions s
        where s.user_id = (select auth.uid()) and s.ends_at > now()
      )
    )
  );

create or replace function public.review_subscription_payment(
  p_request_id uuid,
  p_decision text,
  p_review_note text default null
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_request public.subscription_payment_requests%rowtype;
  v_start timestamptz;
  v_end timestamptz;
begin
  if (auth.jwt() -> 'app_metadata' ->> 'role') is distinct from 'admin' then
    raise exception 'Administrator access is required.' using errcode = '42501';
  end if;

  if p_decision not in ('approve', 'reject') then
    raise exception 'Decision must be approve or reject.' using errcode = '22023';
  end if;

  select * into v_request
  from public.subscription_payment_requests
  where id = p_request_id
  for update;

  if not found or v_request.status <> 'pending' then
    raise exception 'This payment request is no longer pending.' using errcode = '22023';
  end if;

  if p_decision = 'approve' then
    select greatest(ends_at, now()) into v_start
    from public.subscriptions
    where user_id = v_request.user_id
    for update;

    v_start := coalesce(v_start, now());
    v_end := v_start + make_interval(months => v_request.plan_months);

    insert into public.subscriptions (
      user_id, plan_months, starts_at, ends_at, latest_payment_request_id, updated_at
    ) values (
      v_request.user_id, v_request.plan_months, v_start, v_end, v_request.id, now()
    )
    on conflict (user_id) do update set
      plan_months = excluded.plan_months,
      starts_at = excluded.starts_at,
      ends_at = excluded.ends_at,
      latest_payment_request_id = excluded.latest_payment_request_id,
      updated_at = excluded.updated_at;
  end if;

  update public.subscription_payment_requests
  set status = case when p_decision = 'approve' then 'approved' else 'rejected' end,
      reviewed_at = now(),
      review_note = nullif(left(coalesce(p_review_note, ''), 500), '')
  where id = v_request.id;

  return jsonb_build_object(
    'id', v_request.id,
    'status', case when p_decision = 'approve' then 'approved' else 'rejected' end
  );
end;
$$;

revoke all on function public.review_subscription_payment(uuid, text, text) from public;
grant execute on function public.review_subscription_payment(uuid, text, text) to authenticated;

-- Promote the named project administrator if their Auth account already exists.
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where lower(email) = 'lawrencesagini663@gmail.com';
