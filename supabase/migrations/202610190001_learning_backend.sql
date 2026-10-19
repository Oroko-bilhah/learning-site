-- ElimuNest application data. Run this migration in the Supabase SQL editor.
create table if not exists public.teacher_lessons (
  id text primary key,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  grade_id text not null,
  subject text not null,
  topic text not null,
  title text not null,
  status text not null check (status in ('draft', 'published')),
  lesson_data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.class_schedules (
  id text primary key,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  grade_id text not null,
  subject text not null,
  title text not null,
  starts_at timestamptz,
  flexible boolean not null default false,
  mode text not null default 'Online',
  class_data jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.assessments (
  id text primary key,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  grade_id text not null,
  subject text not null,
  title text not null,
  deadline timestamptz not null,
  assessment_data jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.learner_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  grade_id text not null default 'grade-1',
  created_at timestamptz not null default now()
);

alter table public.learner_profiles enable row level security;
drop policy if exists "Learners read their profile" on public.learner_profiles;
create policy "Learners read their profile"
  on public.learner_profiles for select to authenticated
  using (user_id = (select auth.uid()));
grant select on public.learner_profiles to authenticated;

create or replace function public.create_learner_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.learner_profiles (user_id, grade_id)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'grade_id', 'grade-1'))
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_profile_created on auth.users;
create trigger on_auth_user_profile_created
  after insert on auth.users
  for each row execute procedure public.create_learner_profile();

insert into public.learner_profiles (user_id, grade_id)
select id, coalesce(raw_user_meta_data ->> 'grade_id', 'grade-1')
from auth.users
on conflict (user_id) do nothing;

create index if not exists teacher_lessons_public_lookup
  on public.teacher_lessons (grade_id, subject, status);
create index if not exists class_schedules_grade_time
  on public.class_schedules (grade_id, starts_at);
create index if not exists assessments_grade_deadline
  on public.assessments (grade_id, deadline);

alter table public.teacher_lessons enable row level security;
alter table public.class_schedules enable row level security;
alter table public.assessments enable row level security;

drop policy if exists "Published lessons are readable" on public.teacher_lessons;
create policy "Published lessons are readable"
  on public.teacher_lessons for select to anon, authenticated
  using (status = 'published');

drop policy if exists "Teachers read their lessons" on public.teacher_lessons;
create policy "Teachers read their lessons"
  on public.teacher_lessons for select to authenticated
  using (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

drop policy if exists "Teachers create lessons" on public.teacher_lessons;
create policy "Teachers create lessons"
  on public.teacher_lessons for insert to authenticated
  with check (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

drop policy if exists "Teachers update their lessons" on public.teacher_lessons;
create policy "Teachers update their lessons"
  on public.teacher_lessons for update to authenticated
  using (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  )
  with check (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

drop policy if exists "Teachers delete their lessons" on public.teacher_lessons;
create policy "Teachers delete their lessons"
  on public.teacher_lessons for delete to authenticated
  using (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

drop policy if exists "Signed-in learners read class schedules" on public.class_schedules;
create policy "Signed-in learners read class schedules"
  on public.class_schedules for select to authenticated
  using (
    exists (
      select 1 from public.learner_profiles profile
      where profile.user_id = (select auth.uid()) and profile.grade_id = class_schedules.grade_id
    )
    or (teacher_id = (select auth.uid())
      and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
        or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher'))
  );
drop policy if exists "Teachers manage their class schedules" on public.class_schedules;
create policy "Teachers manage their class schedules"
  on public.class_schedules for all to authenticated
  using (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  )
  with check (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

drop policy if exists "Signed-in learners read assessments" on public.assessments;
create policy "Signed-in learners read assessments"
  on public.assessments for select to authenticated
  using (
    exists (
      select 1 from public.learner_profiles profile
      where profile.user_id = (select auth.uid()) and profile.grade_id = assessments.grade_id
    )
    or (teacher_id = (select auth.uid())
      and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
        or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher'))
  );
drop policy if exists "Teachers manage their assessments" on public.assessments;
create policy "Teachers manage their assessments"
  on public.assessments for all to authenticated
  using (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  )
  with check (
    teacher_id = (select auth.uid())
    and (auth.jwt() -> 'app_metadata' ->> 'role' = 'teacher'
      or (auth.jwt() -> 'app_metadata' -> 'roles') ? 'teacher')
  );

grant select on public.teacher_lessons to anon, authenticated;
grant insert, update, delete on public.teacher_lessons to authenticated;
grant select on public.class_schedules, public.assessments to authenticated;
grant insert, update, delete on public.class_schedules, public.assessments to authenticated;
