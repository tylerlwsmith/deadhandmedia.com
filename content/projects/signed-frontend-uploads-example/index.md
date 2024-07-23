---
title: "MinIO Signed Frontend Uploads Example"
date: 2024-02-16T21:30:36-08:00
projectUrl: null
repositoryUrl: https://github.com/tylerlwsmith/signed-frontend-uploads-s3-minio
category: "Full-Stack Development"
services: ["Full-Stack Development"]
technologies:
  - featured: S3
  - featured: MinIO
  - featured: Node.js
  - featured: Docker
  - Express
  - Vite
screenshot: signed-frontend-uploads-example.png
weight: 9
draft: false
hidden: false
---

This example repo shows the end-to-end code to generate signed URLs for frontend S3 uploads using the `@aws-sdk/client-s3` library. I built it because most of the signed frontend uploads examples I found for Node.js used the deprecated `aws-sdk` package.

The repo uses a MinIO container for local object storage so that it can be run end-to-end without creating a cloud bucket, and it comes with an install script to set up the local environment with a single command.
