terraform {
  backend "s3" {
    # Fill in your real state bucket to use this parked config.
    bucket  = "REDACTED_STATE_BUCKET"
    key     = "andreifedianov-state/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    # dynamodb_table = "terraform-lock"
  }
}
