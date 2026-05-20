# Vela Admin Template

Modern Next.js admin dashboard template built with App Router, TypeScript, Tailwind CSS, reusable shared UI, and feature-based architecture.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- Recharts
- React Hook Form
- Zod
- Zustand

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` dashboard
- `/customers`
- `/messages`
- `/users`
- `/orders`
- `/invoices`
- `/tickets`
- `/notifications`
- `/profile`
- `/settings`
- `/login`

## Project Structure

```text
src/
  app/
    (auth)/
    (dashboard)/
  components/
    forms/
    layout/
    navigation/
    shared/
  features/
    auth/
    customers/
    dashboard/
    invoices/
    messages/
    notifications/
    orders/
    profile/
    settings/
    tickets/
    users/
  repositories/
  services/
  stores/
  constants/
  lib/
  types/
```

## Architecture Notes

- Route files in `src/app` stay thin.
- Domain UI lives under `src/features/<domain>/components`.
- Domain page data lives close to the feature.
- Repository and service layers are feature-specific when the domain is established.
- Shared visual primitives live in `src/components/shared`.
- Shared form primitives live in `src/components/forms`.
- Shared UI state lives in `src/stores`.

## Shared UI

Current reusable building blocks include:

- `PanelCard`
- `MetricCard`
- `DataTable`
- `DataTableToolbar`
- `DataTableSummary`
- `PageHeader`
- `StatusBadge`
- `PlaceholderPage`
- `EntityOverviewPage`
- `OperationsTablePage`

## Form System

Login uses:

- `react-hook-form`
- `zod`
- reusable fields:
  - `FormTextField`
  - `FormCheckboxField`

Use the same pattern for future auth/settings/billing forms.

## UI Store

`zustand` is set up for reusable interface state.

Current store:

- `src/stores/ui-store.ts`

Used for:

- message contact detail panel open/close state

## Conventions

- Keep server data access outside UI components.
- Use feature repositories/services for established domains.
- Prefer shared UI primitives before creating page-specific markup.
- Keep new routes inside `src/app` and new feature code inside `src/features/<domain>`.
- Add `loading.tsx`, `error.tsx`, and `not-found.tsx` when a route needs them.

## Verification

```bash
npm run lint
npm run build
npm run test
```

## Testing

Testing is configured with Vitest following the Next.js App Router guidance.

- config: `vitest.config.mts`
- setup: `vitest.setup.ts`
- scripts:
  - `npm run test`
  - `npm run test:watch`

Current example coverage includes:

- utility tests
- domain service tests
- zod validation tests
- synchronous component tests

## Recommended Next Steps

- Upgrade remaining placeholder domains to feature `data/repository/service` modules
- Add auth/session guards when backend integration starts
- Introduce TanStack Table if column-level sorting/filtering becomes more advanced
- Add unit/integration tests for repositories, services, and important UI flows
