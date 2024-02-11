---
title: "Vite Flask Backend Integration POC"
date: 2024-02-10T23:17:05-08:00
projectUrl: null
repositoryUrl: https://github.com/tylerlwsmith/vite-with-flask-backend
category: "Full-Stack Development"
services: ["Full-Stack Development"]
technologies:
  - featured: "Vite"
  - featured: "Flask"
  - featured: "TypeScript"
  - featured: "Scss"
  - "Adobe Illustrator"
screenshot: vite-flask-backend-integration.png
weight: 8
draft: false
hidden: false
---

I wanted to use Vite to bundle TypeScript and Sass on a Go project that I was building, but I had trouble understanding the [Vite Backend Integration guide](https://vitejs.dev/guide/backend-integration.html). I searched for an easier-to-understand guide, but instead I found an endless slew of third-party Vite integration packages.

I decided to build a minimal backend integration proof-of-concept to serve as a template for developers who are trying to build their own integrations. My hope is that by using a simple language like Python along with Flask, it will be accessible to developers across multiple ecosystems. The POC compiles Scss & TypeScript, and provides a Jinja template helper to get the hashed URLs of the production assets.

One challenging part of this project was generating a vector image of the Flask logo in Illustrator because I couldn't find one on the Internet. I've included the SVG logo below in hopes that others may find it useful.

{{< rawhtml >}}<div style="max-width: 100px; margin-left: auto; margin-right: auto;">{{< /rawhtml >}}
![An SVG of Flask's logo](./flask.svg?width=200px)
{{< rawhtml >}}</div>{{< /rawhtml >}}
