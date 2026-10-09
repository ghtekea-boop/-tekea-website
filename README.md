# TEKEA Design Studio — Website

Production-ready static website for TEKEA Design Studio.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Responsive RU / EN interface
- WebP-optimized media

## Recommended production architecture

TEKEA CODE → GitHub → Cloudflare Pages → custom domain → HTTPS → Cloudflare CDN

## Cloudflare Pages settings

This is a static site and does not require a build step.

Recommended settings when connecting the GitHub repository:
- Production branch: `main`
- Framework preset: None
- Build command: leave empty
- Root directory: repository root
- Output: repository root / static files

## Before production indexing

Search indexing is intentionally disabled during preview/testing. Before the final domain goes live we will:
1. add the real canonical URL to every page;
2. add `og:url` values;
3. create `sitemap.xml` using the final domain;
4. switch robots/meta from `noindex` to indexable production values;
5. update `robots.txt` with the sitemap URL;
6. verify all pages on the final HTTPS domain.

Do not enable indexing on a temporary `*.pages.dev` or Netlify preview URL.

## Deployment workflow

After GitHub + Cloudflare Pages are connected:
1. update the site in the repository;
2. commit to `main`;
3. Cloudflare Pages deploys automatically;
4. production domain updates without rebuilding the site manually in a visual constructor.

## Important

Keep the repository private unless TEKEA intentionally chooses to publish the source code.
