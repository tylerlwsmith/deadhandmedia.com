---
title: "Bakersfield Technology"
date: 2021-11-19T21:27:41-08:00
projectUrl: https://bakersfieldtechnology.com
category: "Full-Stack Development"
repositoryUrl: https://github.com/tylerlwsmith/go-bakersfieldtechnology
services: ["Full-Stack Development", "Design", "Content Writing"]
technologies:
  - featured: "Go"
  - featured: "Templ"
  - featured: "Echo"
  - featured: "Tailwind CSS"
  - "TypeScript"
screenshot: bakersfield-technology.png
weight: 6
draft: false
hidden: false
---

I originally built the 2-page [bakersfieldtechnology.com](https://bakersfieldtechnology.com) website in 2021 using Next.js. Years later when I wanted to learn [Templ](https://templ.guide/) and the [Echo framework](https://echo.labstack.com/), rebuilding the website in Go seemed like a great learning opportunity.

On the frontend, the site uses Tailwind & Scss for styles, TypeScript for interactivity, and Vite for bundling. When running a production build, the assets are compiled into the binary using `//go:embed` tags. The work I did building the Vite integration on this app also spun out into its own [blog post](https://dev.to/tylerlwsmith/build-a-vite-5-backend-integration-with-flask-jch).

You can view the repo for the original Next.js-powered site [here](https://github.com/tylerlwsmith/bakersfieldtechnology.com).
