# Lynrose E-commerce

A Next.js storefront and admin dashboard for browsing products, managing catalog data, and completing checkout with M-Pesa STK push.

## Features

- Product browsing, category pages, and product detail pages
- Cart state managed with Redux Toolkit
- Clerk authentication for signed-in and signed-out user flows
- Admin area for managing products and user accounts
- MongoDB persistence through Mongoose
- Product image uploads with UploadThing
- Safaricom Daraja STK push checkout flow

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Redux Toolkit
- Clerk
- MongoDB and Mongoose
- UploadThing
- Safaricom Daraja SDK

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and set the values required by your deployment:

```bash
NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

If your UploadThing or payment provider setup uses additional keys, add them to the same file as needed.

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run Next.js linting
- `npm run type-check` - run the TypeScript compiler without emitting files
- `npm run test` - run Jest tests

## Project Structure

- `src/app` - app routes, layouts, API routes, and pages
- `src/components` - reusable UI and admin components
- `src/controllers` - server-side controller logic
- `src/libs` - database and library helpers
- `src/redux` - Redux store and feature slices
- `src/types` - shared TypeScript types
- `src/utils` - utility helpers

## Main Routes

- `/` - storefront home page
- `/products` - product listing
- `/category` - category listing
- `/admin` - admin dashboard
- `/api/products` - product API
- `/api/payment/stkpush` - checkout initiation endpoint

## Deployment

This project can be deployed on any platform that supports Next.js. Make sure the environment variables above are configured in your hosting provider before deploying.
