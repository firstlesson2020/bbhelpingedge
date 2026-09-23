# BB Helping Edge — Phase 1

Static production-ready starter for the BB Helping Edge website.

## Structure

- `index.html` — single-page website
- `styles.css` — responsive visual system
- `script.js` — mobile navigation + year
- `assets/` — supplied BB Helping Edge event photographs + placeholders

## Before production

1. Replace `assets/donation-qr.svg` with the official donation QR.
2. Replace phone/email/location placeholders in `index.html`.
3. Add real social media URLs.
4. Confirm the organisation has permission to publish every supplied photograph and any third-party artwork.
5. Replace the visible photo-credit note with the correct photographer/rights-holder credit.
6. Connect the contact form to an approved email/API workflow. The current form is intentionally static.

## Local test

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## AWS target

GitHub -> GitHub Actions (OIDC) -> private S3 -> CloudFront (OAC) -> Route 53.

Keep the S3 bucket private. Do not enable public S3 website hosting for the production setup.
