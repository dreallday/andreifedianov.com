data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "REDACTED_STATE_BUCKET"
    key    = "andreifedianov-state/terraform.tfstate"
    region = "us-east-1"
  }
}
