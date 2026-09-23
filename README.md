# BB Helping Edge — Professional Static Website

A one-page, responsive website inspired by the supplied BB Helping Edge reference design.

## Included
- Exact supplied BB Helping Edge logo asset (`assets/logo.png`)
- Bhagat Singh hero portrait treatment
- Real BB Helping Edge event photographs supplied for the 23rd March initiative
- Upcoming 27th September blanket-distribution section
- Donate section with QR placeholder
- Contact section with a static mailto form
- Responsive mobile navigation
- No backend required

## Before publishing
1. Open `script.js` and replace `YOUR_EMAIL@example.com`, phone and WhatsApp values.
2. Replace `assets/donation-qr.svg` with the official donation QR code.
3. Replace social `#` links in `index.html` with official accounts.
4. Verify that BB Helping Edge has permission/rights to publish every photograph and artwork used.

## Local test
From this folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## AWS S3 + CloudFront
Upload the whole folder to a private S3 bucket and serve it through CloudFront. For production, use CloudFront Origin Access Control so the S3 bucket is not public. Route your domain through Route 53 to CloudFront.

This site is intentionally static so Phase 1 can launch quickly. A payment gateway, donation records, admin dashboard and volunteer management can be added later without redesigning the front end.
