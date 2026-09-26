# Deploying astryd.ai

This is a Vite + React SPA. Production hosting is **S3 + CloudFront** on the AWS `astryd` profile. The public domain is **astryd.ai** (GoDaddy DNS).

## Prerequisites

- Node 18+ (this repo is typically built with `nvm use 23.7.0`)
- AWS CLI configured with the `astryd` profile
- Permission to write `s3://astryd-website` and invalidate the CloudFront distribution

```bash
nvm use 23.7.0
npm install
aws sts get-caller-identity --profile astryd
```

## Deploy

From the repo root:

```bash
./deploy.sh
```

Or:

```bash
npm run deploy
```

The script:

1. Builds the site (`npm run build` → `dist/`)
2. Syncs `dist/` to `s3://astryd-website` (`--delete` removes stale objects)
3. Invalidates CloudFront so visitors get the new files within 1–2 minutes

Override the AWS profile if needed:

```bash
AWS_PROFILE=astryd ./deploy.sh
```

## AWS resources

| Resource | Value |
|---|---|
| AWS profile | `astryd` |
| Account | `808834314012` |
| Region | `us-east-1` (ACM must stay here for CloudFront) |
| S3 bucket | `astryd-website` |
| CloudFront distribution | `E22YMG0F36D18H` |
| CloudFront domain | `d1c701te2bf1yx.cloudfront.net` |
| ACM certificate | `arn:aws:acm:us-east-1:808834314012:certificate/26367108-0149-4386-95b9-fc2ea2c8a6a3` |
| Origins | S3 via Origin Access Control (`E210RT81WFGZ0J`) |

The bucket is **not** public. CloudFront is the only reader, via a bucket policy scoped to this distribution.

SPA routes (`/privacy`, `/terms`) work because CloudFront maps 403/404 to `/index.html`.

## DNS (GoDaddy)

Keep these records. Do **not** commit or change them during a normal redeploy.

| Type | Name | Value | Purpose |
|---|---|---|---|
| CNAME | `www` | `d1c701te2bf1yx.cloudfront.net` | Serves the site |
| Domain forwarding | `@` | `https://www.astryd.ai` (301) | Apex → www |
| CNAME | `_d2beda62cc8b67d45b4d8b1701adb846` | `_15aca2f7f681846413669e769a95479c.jkddzztszm.acm-validations.aws.` | ACM validation |
| CNAME | `_0dd0303cf98fc0bc830ba1d85c398d09.www` | `_7aa78ed58d9318ce7a01090cc153dfbf.jkddzztszm.acm-validations.aws.` | ACM validation |

Live URLs:

- https://www.astryd.ai
- https://astryd.ai (redirects to www)
- https://d1c701te2bf1yx.cloudfront.net (direct CloudFront check)

## What to commit for deploy

Commit these when changing how the site is published:

- `deploy.sh` — build + S3 sync + CloudFront invalidation
- `DEPLOY.md` — this guide
- `package.json` — `deploy` script
- Source changes that should go live (`src/…`)

Do **not** commit:

- `dist/` — generated on every build (already in `.gitignore`)
- `node_modules/` — install locally (`npm install`)
- `.env*` — may contain `VITE_GOOGLE_SHEET_WEBHOOK_URL`
- AWS keys or credentials

`dist/` and `node_modules/` were historically tracked in this repo. Leave local modifications to those paths unstaged.

## After a pull from main

```bash
git pull origin main
nvm use 23.7.0
npm install
./deploy.sh
```

Then hard-refresh the site (or wait 1–2 minutes for the invalidation).
