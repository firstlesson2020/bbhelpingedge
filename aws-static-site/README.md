# AWS Static Website Deployment for BB Helping Edge

This folder contains a simple static site setup for AWS using:

- S3 for hosting the website files
- CloudFront for CDN and HTTPS
- Route 53 for DNS
- GitHub Actions for deployment

## Folder structure

- `site/` — static website files
- `infra/terraform/` — Terraform for AWS infrastructure
- `.github/workflows/` — deployment pipelines

## Required GitHub secrets

Add these in the repository settings under GitHub Actions secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Two pipelines

### 1) Infrastructure pipeline
File: `.github/workflows/terraform-infra.yml`

- Triggered on push to `main` when Terraform files change
- Runs `terraform init`, `validate`, `plan`, and `apply`
- Creates the S3 bucket and CloudFront distribution

### 2) Website deployment pipeline
File: `.github/workflows/deploy-site.yml`

- Triggered on push to `main` when files inside `site/` change
- Syncs the website folder to the S3 bucket
- Invalidates the CloudFront cache

## Important notes

- Use your real AWS credentials with least-privilege permissions.
- The domain is set to `bbhelpingedge.org` in the Terraform configuration.
- CloudFront custom domain requires an ACM certificate in `us-east-1` for production use.
- You will still need to configure Route 53 and DNS records in the AWS console or Terraform after the initial setup.

## Next steps

1. Push this folder to your GitHub repo.
2. Add the required GitHub secrets.
3. Run the infrastructure workflow once.
4. Update the site files under `site/` and push to `main`.
5. Confirm the site loads via the CloudFront URL or your custom domain.
