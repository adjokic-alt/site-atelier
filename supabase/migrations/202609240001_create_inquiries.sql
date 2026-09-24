create extension if not exists pgcrypto;

create type public.inquiry_status as enum (
  'new',
  'reviewing',
  'contacted',
  'closed'
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  brief_id text not null unique,
  reference_code text not null unique,
  status public.inquiry_status not null default 'new',
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  project_country text not null,
  project_categories text[] not null default '{}',
  primary_style text,
  budget_currency text,
  budget_range text,
  strength_level text not null,
  triage_priority text not null,
  fit_flags jsonb not null default '[]'::jsonb,
  brief_data jsonb not null,
  pdf_file_name text not null,
  customer_email_id text,
  internal_email_id text,
  submitted_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

comment on table public.inquiries is
  'Private server-only inquiry records. No anon or authenticated policies are defined.';

create index inquiries_status_created_at_idx
  on public.inquiries (status, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger inquiries_set_updated_at
before update on public.inquiries
for each row execute function public.set_updated_at();
