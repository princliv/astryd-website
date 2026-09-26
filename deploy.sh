#!/usr/bin/env bash
set -euo pipefail

AWS_PROFILE="${AWS_PROFILE:-astryd}"
S3_BUCKET="astryd-website"
DISTRIBUTION_ID="E22YMG0F36D18H"

echo "→ Building project..."
npm run build

echo "→ Uploading to S3..."
aws s3 sync dist/ "s3://${S3_BUCKET}/" --delete --profile "$AWS_PROFILE"

echo "→ Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --profile "$AWS_PROFILE" \
  --query "Invalidation.Id" \
  --output text

echo "✓ Deployed successfully. Changes will be live within 1-2 minutes."
