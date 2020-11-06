terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  profile = var.profile
  region  = var.region
}

resource "aws_s3_bucket" "a" {
  bucket = "andreifedianov.com"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket_policy" "policy" {
  bucket = aws_s3_bucket.a.id
  policy = <<POLICY
{
  "Id": "PolicyAndreiFedianov",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Action": ["s3:GetObject"],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::andreifedianov.com/*",
      "Principal": "*"
    }
  ]
}
POLICY
}


resource "aws_s3_bucket" "redirect" {
  bucket = "www.andreifedianov.com"
  acl    = "private"

  website {
    redirect_all_requests_to = "https://andreifedianov.com"
  }
}
