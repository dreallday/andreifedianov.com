# legacy/

Parked, no longer part of the active deploy path. Kept for reference and in case
the infrastructure needs to be torn down later.

## terraform/

The original **AWS S3 static-website hosting** for the site (apex bucket +
`www` redirect bucket, public-read via bucket policy). The site is now served
from an **Unraid + nginx** box (see `pnpm deploy` / `pnpm deploy:local` in the
repo root), so this Terraform is dormant.

> ⚠️ The S3 buckets still exist — parking the code does not remove live
> infrastructure. If you want to decommission them, fill in the real state
> bucket in `backend.tf`, then run `terraform destroy` from `legacy/terraform/`
> (requires valid AWS credentials). Otherwise it just sits idle and costs
> ~nothing.
