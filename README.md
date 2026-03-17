# AlgeNova Client (Frontend)

Next.js frontend for the AlgeNova math problem solving website.  
This client talks to the backend math API via a Next.js API proxy route.

## Requirements

- Node.js 18+
- Backend server running (default: `http://localhost:9000`)

## Quick start (local)

Install:

```bash
npm install
```

Configure environment:

```bash
cp .env.example .env.local
```

Run:

```bash
npm run dev
```

Open:

- Frontend: `http://localhost:3000`

## How the API connection works

The UI calls:

- `POST /api/math/solve` (Next.js route handler)

That route proxies to your backend:

- `${MATH_API_BASE_URL}/api/math/solve`

This avoids browser CORS issues and keeps a single frontend origin.

### Environment variables

- **`MATH_API_BASE_URL`** (recommended): backend base URL used by the server-side proxy route
  - Example: `http://localhost:9000`
- **`NEXT_PUBLIC_MATH_API_BASE_URL`** (optional): only needed if you decide to call the backend directly from the browser
- **`NEXT_OUTPUT=export`** (optional): enables fully static export **(disables API routes)**

## Scripts

- `npm run dev`: start Next dev server
- `npm run build`: production build (includes lint + typecheck)
- `npm run start`: run production server (`next start`)
- `npm run lint`: run ESLint (`eslint .`)

## Deployment

### Recommended (server deployment)

Deploy as a normal Next.js server app (Vercel, Render, Fly.io, etc).

Set:

- `MATH_API_BASE_URL` to your backend URL (example: `https://your-backend.example.com`)

Build & start:

```bash
npm run build
npm run start
```

### Static export (not recommended for this repo)

This repo includes an API route (`app/api/**`) which requires a running Next server.
If you set `NEXT_OUTPUT=export`, API routes will not run.

## Notes on math rendering

The backend can return LaTeX-rich fields (for example `parsedFormula`, `expressionLatex`, `finalAnswerLatex`, `solutionLatex`).  
The frontend prefers LaTeX when available and falls back to plain text otherwise.

