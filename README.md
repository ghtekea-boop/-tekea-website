# TEKEA Design Studio — Website

Production static website for TEKEA Design Studio.

## Production
- Primary domain: `https://tekeadesign.ru`
- `www.tekeadesign.ru` → 301 redirect to the primary domain
- Hosting/CDN: Cloudflare Pages
- Source/deploy: GitHub `main` branch
- HTTPS: Cloudflare SSL

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Responsive RU / EN interface
- WebP-optimized media

## Deployment workflow
TEKEA CODE → GitHub → Cloudflare Pages → `tekeadesign.ru`

For normal site edits there is no need to reconfigure DNS, nameservers, SSL or the domain. Replace/update the required files in the local repository, commit and push to `main`; Cloudflare Pages deploys automatically.

## Cloudflare Pages build settings
- Production branch: `main`
- Framework preset: None
- Build command: `exit 0` (or no build command)
- Static files live in repository root

## SEO — V3.25
- Production indexing enabled on public pages
- Canonical URLs use `https://tekeadesign.ru`
- Absolute Open Graph/Twitter image URL
- `sitemap.xml` published at `/sitemap.xml`
- `robots.txt` allows crawling and points to the sitemap
- Homepage includes Organization + WebSite structured data
- 404 remains non-indexable

## Important
The site is bilingual on the same URLs via the RU/EN client-side switch. If TEKEA later targets organic search aggressively in both Russian and English, the next SEO architecture step should be separate language URLs (for example `/ru/` and `/en/`) with `hreflang`. This is not required for the current launch.
