# MINIPRIX MARKET static storefront

This is a static product website for GitHub and Cloudflare Pages.
The storefront is intended for local customers in Cote d'Ivoire only.

## Files

- `index.html`: page structure
- `styles.css`: visual design and responsive layout
- `script.js`: product catalogue, filters, search, WhatsApp links
- `2026-06/`: product images

## Update WhatsApp number

Open `script.js` and replace:

```js
const WHATSAPP_NUMBER = "000000000000";
```

Use international format only, without `+`, spaces, brackets, or dashes.

Example:

```js
const WHATSAPP_NUMBER = "15551234567";
```

## Deploy to Cloudflare Pages

For a pure static site:

- Build command: leave empty
- Output directory: `/`
- Root directory: project root

After connecting the GitHub repository, Cloudflare Pages will redeploy when you push updates.
