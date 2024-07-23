---
title: "My Over-Engineered Resume"
date: 2021-11-19T21:27:54-08:00
projectUrl: https://resume.deadhandmedia.com
repositoryUrl: https://github.com/tylerlwsmith/resume
category: "Tinkering"
services: ["Front-End Development", "Image Generation", "PDF Generation"]
technologies:
  - featured: "Puppeteer"
  - featured: "Express.js"
  - featured: "EJS"
  - featured: "Docker"
  - "LiveReload"
  - "Netlify"
screenshot: resume.png
weight: 8
draft: false
hidden: false
---

I rewrote my resume using web technologies in late 2019. The resume started as an HTML and CSS file, and it was exclusively designed for print. It has since evolved into a statically-deployed website with a Puppeteer-driven asset build process that uses Express.js during development.

## Designed for Print First

The original iteration of my resume consisted of an HTML file and a CSS file that made liberal use of `@media print` queries. To generate the PDF that I would send to employers, I'd use `File > Print`, then select "Save as a PDF."

{{< figure src="resume-print-screen.png" width="500" caption="Exporting my resume to PDF with the Chrome print dialogue" >}}

## Retooled into a Mobile-Responsive Website

I was interested to see if I could build a mobile-responsive website using the same codebase while keeping the print styles intact. I made a few tweaks and deployed [the website](https://resume.deadhandmedia.com) to Netlify.

{{< figure src="resume-website-desktop.png" width="500" caption="The website on desktop" >}}

{{< figure src="resume-website-mobile.png" width="250" caption="The website on mobile" >}}

## Build-Time PDF and PNG Generation with Puppeteer

I wanted to add a download button to the site so recruiters could [download a formatted PDF](https://resume.deadhandmedia.com/generated/tyler-smith-resume.pdf) of the resume. I set up Puppeteer to generate a PDF and PNG of the resume, and used Express to serve the HTML and CSS to Puppeteer. Netlify runs this as part of the build on every deploy so that the generated assets are always up-to-date.

{{< figure src="https://resume.deadhandmedia.com/generated/tyler-smith-resume.png" width="400" caption="My current resume, generated at build time, being pulled in from the resume website" >}}

## Social Share Image Generation

I wanted the website's preview link to look nice when I sent it to prospective employers, and I wanted to use the Puppeteer build pipeline to automatically generate a preview of my resume on the social share image. Text scales down poorly, so I dynamically create a low-fidelity image that replaces the resume's text with rectangles.

{{< tweet user="tylerlwsmith" id="1488773655240667136" >}}

## An Embeddable, Resizable iframe

The website can be embedded as an iframe. The page where it is embedded can dynamically resize the iframe to the appropriate height by listening for messages emitted by `postMessage()` on the resume site. You can see the resume embedded as an automatically-resizing iframe [here](/resume).

## Instant Development Feedback with LiveReload

To improve the development experience, any changes to the template and CSS files automatically flush to the browser using LiveReload.
