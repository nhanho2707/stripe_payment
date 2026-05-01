# Stripe Payment Shop

A simple e-commerce page with 2 products ($10 and $20), integrated with Stripe Checkout, built with Next.js and ready to deploy on Vercel.

## Features

- 🛒 Two products: **Basic Package ($10)** and **Premium Package ($20)**
- 💳 Secure Stripe Checkout integration
- ✅ Success and cancel redirect pages
- 🚀 One-click Vercel deploy

## Getting Started

### 1. Clone & install

```bash
npm install
```

### 2. Configure Stripe keys

Copy the example env file and fill in your [Stripe API keys](https://dashboard.stripe.com/apikeys):

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the following **Environment Variables** in the Vercel project settings:
   - `STRIPE_SECRET_KEY` – your Stripe secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` – your Stripe publishable key
4. Click **Deploy**.

## Project Structure

```
├── pages/
│   ├── _app.js                     # Global styles
│   ├── index.js                    # Shop homepage (2 products)
│   ├── success.js                  # Post-payment success page
│   ├── cancel.js                   # Post-payment cancel page
│   └── api/
│       └── checkout_sessions.js    # Stripe Checkout session API
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   └── Result.module.css
├── .env.example
└── next.config.js
```
