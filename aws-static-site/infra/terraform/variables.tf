variable "aws_region" {
  description = "AWS region where the static site will be deployed"
  type        = string
  default     = "ap-south-1"
}

variable "domain_name" {
  description = "Primary domain for the website"
  type        = string
  default     = "bbhelpingedge.org"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "prod"
}
