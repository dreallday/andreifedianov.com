terraform {
  backend "s3" {
    bucket  = "REDACTED_STATE_BUCKET"
    key     = "andreifedianov-state/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    # dynamodb_table = "terraform-lock"
  }
}
