terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  profile = var.profile
  region  = var.region
}

# --- Primary site bucket: andreifedianov.com --------------------------------
resource "aws_s3_bucket" "a" {
  bucket = "andreifedianov.com"
}

resource "aws_s3_bucket_website_configuration" "a" {
  bucket = aws_s3_bucket.a.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# Explicit object ownership. BucketOwnerPreferred (not Enforced) coexists with
# the bucket's pre-existing public-read ACL; public read is served by the bucket
# policy below regardless.
resource "aws_s3_bucket_ownership_controls" "a" {
  bucket = aws_s3_bucket.a.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "a" {
  bucket = aws_s3_bucket.a.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "policy" {
  bucket = aws_s3_bucket.a.id

  # Attach the public policy only after the public-access block is relaxed.
  depends_on = [aws_s3_bucket_public_access_block.a]

  policy = jsonencode({
    Id      = "PolicyAndreiFedianov"
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicRead"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = "${aws_s3_bucket.a.arn}/*"
      }
    ]
  })
}

# --- Redirect bucket: www.andreifedianov.com -> apex ------------------------
resource "aws_s3_bucket" "redirect" {
  bucket = "www.andreifedianov.com"
}

resource "aws_s3_bucket_website_configuration" "redirect" {
  bucket = aws_s3_bucket.redirect.id

  redirect_all_requests_to {
    host_name = "andreifedianov.com"
    protocol  = "https"
  }
}
