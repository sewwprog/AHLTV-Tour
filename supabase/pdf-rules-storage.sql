-- AHLTV Tour PDF tournament rules storage.
-- Execute ONCE in the SQL editor of the project actually used by AHLTV Tour:
-- https://hfxzdifqcjbslmxffvlf.supabase.co
-- Creates a SEPARATE public bucket. Existing logos/images are untouched.
-- Public read is intentional: tournament rules are publicly downloadable.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('ahltv-rules', 'ahltv-rules', true, 5242880, array['application/pdf']::text[])
on conflict (id) do update
  set public = true,
      file_size_limit = 5242880,
      allowed_mime_types = array['application/pdf']::text[];

-- Restrict uploads to authenticated AHLTV admins only.
-- Files are uploaded under tournaments/<numeric-id>/rules-<random>.pdf.
drop policy if exists "AHLTV admins upload tournament PDFs" on storage.objects;
create policy "AHLTV admins upload tournament PDFs"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'ahltv-rules'
  and (storage.foldername(name))[1] = 'tournaments'
  and (storage.foldername(name))[2] ~ '^[0-9]+$'
  and lower(storage.extension(name)) = 'pdf'
  and exists (
    select 1 from public.admin_users a
    where a.user_id = (select auth.uid())
  )
);
-- No UPDATE/DELETE policy needed: new unique filenames avoid overwrites.
-- Public download uses Supabase public-bucket behavior.
