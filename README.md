# ElimuNest

ElimuNest is a Kenyan curriculum learning website built with React and Vite. Learners can browse subjects, work through interactive lessons and quizzes, track completed lessons, and contact the team. Lessons 1-3 are free. Later lessons unlock with an approved subscription.

## Features

- Curriculum learning pages for CBC grades and Form 3-4.
- Interactive lesson examples, practice questions, bookmarks, and progress tracking.
- Supabase authentication and database-backed teacher lessons.
- Manual Pochi La Biashara subscription payments:
  - KSh 499 for one month.
  - KSh 999 for three months.
  - Learners submit their M-PESA receipt for manual review before access is enabled.
- Admin payment review at `/admin/subscriptions` for the configured administrator account.

## Tech stack

- React 19, React Router, and Vite.
- Supabase Auth and Postgres with row-level security.
- Vercel hosting and serverless API functions for protected lesson delivery.

## Local development

1. Install Node.js (LTS) and npm.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` in the project root with the Supabase settings below.
4. Start the Vite development server:

   ```bash
   npm run dev
   ```

Build the production frontend with `npm run build`. Run the configured ESLint checks with `npm run lint`.

## Environment variables

Set these in `.env.local` for local development and in Vercel for Production, Preview, and Development as needed:

```dotenv
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Use the Supabase **publishable** key. Never put a Supabase `service_role` key in frontend or Vercel variables used by these functions. The publishable key is intended for client use; database permissions are enforced with row-level security.

## Supabase setup

Run these SQL migrations in order in **Supabase SQL Editor**:

1. `supabase/migrations/202610190001_learning_backend.sql`
2. `supabase/migrations/202610240001_manual_subscriptions.sql`

The second migration creates payment request and subscription tables, enables row-level security, restricts published teacher lessons to active subscribers, and gives the administrator role to the named email if its Auth account already exists. If that account is created afterward, rerun the final `UPDATE auth.users` statement from the migration after signup.

After granting the admin role, sign out and sign back in so the refreshed Auth token contains the role. Use the administrator account configured in the Supabase migration to manage payment requests.

## Subscription payments

This project currently uses manual Pochi payment review, not an automated Daraja checkout:

1. A learner signs in and opens **Plans**.
2. They pay the selected amount to the Pochi La Biashara number shown on the subscription page using M-PESA.
3. They submit the payer phone number and M-PESA receipt code on the site.
4. An administrator checks the receipt against the Pochi statement and approves or rejects it at `/admin/subscriptions`.
5. Approval activates or extends the subscription. Paid lesson access is checked by the server and database policies.

The site does not verify Pochi receipts automatically. Do not approve a request until the receipt appears in the business statement.

## Deployment on Vercel

1. Import the GitHub repository into Vercel and use the Vite framework preset.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` as Vercel environment variables.
3. Deploy. Vercel serves the React app and the API functions in `api/`.
4. After changing environment variables, redeploy so the build and serverless functions receive them.

The SPA rewrite is configured in `vercel.json`. There is no Render service required for this Vercel deployment.
