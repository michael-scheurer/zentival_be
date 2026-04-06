# Zentival Backend — Custom Instructions

## Project Overview

Zentival is a full-stack Nuxt 3 website for the Zentival music festival (Bern, Switzerland) with integrated payment processing (Stripe and Mollie).

## Tech Stack

- **Framework:** Nuxt 3 with Vue 3 and TypeScript
- **UI:** Vuetify 3 (Material Design), Sass/SCSS
- **State:** Pinia stores
- **Payments:** Stripe SDK + custom Mollie API client
- **Icons:** Lucide Vue Next, MDI
- **Linting:** ESLint via @nuxt/eslint

## Project Structure

- `pages/` — Nuxt page routes (index, datenschutz, impressum)
- `components/` — Vue components organized by feature (index/, acts/, founding/, layout/)
- `server/api/` — API endpoints split by payment provider (stripe/, mollie/)
- `server/utils/` — Server utilities (Mollie client, payment helpers)
- `store/` — Pinia stores (notification, totalPayments)
- `composables/` — Vue composables (acts data)
- `types/` — TypeScript type definitions
- `plugins/` — Nuxt plugins (Vuetify setup)
- `assets/styles/` — SCSS stylesheets
- `assets/img/` — Image assets

## Conventions

- Use TypeScript for all code. Follow existing type definitions in `types/`.
- Use Vue 3 Composition API with `<script setup lang="ts">`.
- Use Vuetify components for UI — do not introduce additional CSS frameworks.
- Server API routes follow Nuxt convention: `server/api/<provider>/<resource>.<method>.ts`.
- Payment provider is selected at runtime via `NUXT_PUBLIC_PAYMENT_PROVIDER` env var (stripe or mollie).
- Use Pinia for shared state. Composables for reusable logic.
- German language is used for user-facing content (Datenschutz, Impressum, etc.).

## Environment Variables

- `NUXT_PUBLIC_PAYMENT_PROVIDER` — "stripe" or "mollie"
- `NUXT_MOLLIE_API_KEY` — Mollie API key
- `NUXT_STRIPE_API_KEY` — Stripe API key

## Theme Colors

- Primary: `#013366`
- Secondary: `#ef233c`

## Important Notes

- No database — acts data is hardcoded in `composables/acts.ts`, payments are fetched from provider APIs.
- No test framework is configured yet.
- The file `server/utils/payment-helper.ts.ts` has a double `.ts` extension (known issue).
