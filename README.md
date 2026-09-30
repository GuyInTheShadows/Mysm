# Meysam Kiani - personal resume site (mysm.ir)

Single-page resume website built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Development server |
| `pnpm build` | Production build (`output: 'standalone'`) |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` | Prettier write |

## Edit content

All copy lives in [`content/resume.ts`](content/resume.ts). Section components only map over that data.

## Resume download

Place your Word resume at:

```
public/Meysam_Kiani_Resume.docx
```

The Download / Resume buttons already point at `/Meysam_Kiani_Resume.docx`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js**. Build command: `pnpm build`. Output: default (Vercel ignores `standalone` packaging and uses its own runner).
4. Add `public/Meysam_Kiani_Resume.docx` before or after the first deploy.
5. Set the production domain to `mysm.ir` (or your preferred host).

No environment variables are required.

## Docker (Nginx / VPS)

```bash
docker build -t mysm-ir .
docker run --rm -p 3000:3000 mysm-ir
```

Point Nginx at `http://127.0.0.1:3000` (or your container network). The image uses the Next.js standalone output.
