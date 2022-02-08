---
title: "My Personal Website"
date: 2021-12-22T12:05:21-08:00
projectUrl: https://deadhandmedia.com
repositoryUrl: https://github.com/tylerlwsmith/deadhandmedia.com
category: "Front-End Development"
services: ["Front-End Development"]
technologies:
  - featured: "Hugo"
  - featured: "Alpine.js"
  - featured: "Turbolinks"
  - "Scss"
  - featured: "GitHub Actions"
  - "Netlify"
screenshot: homepage.png
weight: 9
draft: false
hidden: false
---

I built this site using Hugo to take advantage of its fast build times. Hugo has a steep learning curve, but it's also incredibly powerful: it includes built-in image optimization, Sass compilation, JavaScript bundling, and remote data-fetching out of the box.

The site uses Hugo's data-fetching to generate the blog page, which pulls data from the [DEV.to API](https://developers.forem.com/api) to get a list of my published articles. To keep the blog page up-to-date, a GitHub action runs once-a-day that triggers Netlify to rebuild the site.
