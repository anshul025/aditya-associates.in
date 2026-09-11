# Plan: Protecting the Website and Client Data

## What is already protected today

- The Supabase database password lives only on the server. Visitors to the website can never see it.
- When the project is saved to GitHub, the password and other secrets are NOT included in the code. GitHub only gets the website code.
- The site runs on HTTPS, so everything visitors send (including the registration form) travels encrypted.

## What is NOT protected today

- The client list is currently open. The website has a behind-the-scenes address that returns every registered client's name, phone number and chosen service. Anyone who knows that address could read the full list. Clients cannot see it by browsing the site, but it is not locked.
- The registration form has no spam protection. A bot could fill it many times and flood the Supabase table with fake entries.

## Proposed work

1. Lock the client list with an owner password
   - The behind-the-scenes address that returns the client list will require a secret password.
   - Without the password, nobody can download the client details.
   - The public registration form stays open to everyone — clients keep applying normally.

2. Add quiet spam protection to the form
   - An invisible check that real visitors never notice, but bots fail.
   - Fake submissions get rejected before they reach Supabase.

3. Supabase table stays as is
   - Data already sits in the owner's private Supabase project, visible only when logged into their Supabase account.

## Decision needed from the user

- Choose the owner password that will guard the client list (or one can be generated and shared privately).
- Optional: say if a small password-protected page on the website is wanted too, so the owner can view leads on their phone without opening the Supabase dashboard. That is a separate, larger piece of work and can be decided later.

## Assumptions

- Locking the client list and adding spam protection are wanted, since the user asked whether things are protected.
- The public form must keep working for everyone with no password — only the viewing side gets locked.
