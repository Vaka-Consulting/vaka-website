# Vaka Consulting website

The public Vaka Consulting website, built with Next.js and exported as a static site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

The static site is generated in `out/`. Merging to `main` deploys it through GitHub Actions.
