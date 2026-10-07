-- Élite Prod
-- Tabla de solicitudes. Solo permite inserts anónimos.
-- Ejecutar en el SQL Editor de Supabase.
-- El server action inserta sin .select(): no hace falta política de lectura.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  event_type text not null,
  event_date date not null,
  message text not null,
  created_at timestamptz not null default now(),
  constraint leads_name_length check (char_length(btrim(name)) between 2 and 80),
  constraint leads_email_length check (char_length(email) between 5 and 160),
  constraint leads_email_format check (email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  constraint leads_phone_length check (char_length(phone) between 8 and 30),
  constraint leads_event_type check (event_type in ('privado', 'festival', 'otro')),
  constraint leads_message_length check (char_length(message) between 10 and 2000)
);

alter table public.leads enable row level security;

revoke all on table public.leads from public;
revoke all on table public.leads from anon;
revoke all on table public.leads from authenticated;

grant insert on table public.leads to anon;

drop policy if exists "anon_insert_leads" on public.leads;

create policy "anon_insert_leads"
  on public.leads
  for insert
  to anon
  with check (true);
