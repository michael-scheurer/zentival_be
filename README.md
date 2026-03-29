# Zentival

Backend and frontend for the Zentival music festival website (Bern, Switzerland). Built with Nuxt 3, Vuetify, and Pinia. Supports payments via Stripe or Mollie.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and configure:

- `NUXT_PUBLIC_PAYMENT_PROVIDER` — `stripe` or `mollie`
- `NUXT_STRIPE_API_KEY` — Stripe secret key
- `NUXT_MOLLIE_API_KEY` — Mollie API key

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```
