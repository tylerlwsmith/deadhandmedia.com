---
title: "Raspberry Pi Desktop Background Generator"
date: 2021-12-10T17:18:23-08:00
projectUrl: null
repositoryUrl: https://github.com/tylerlwsmith/pi-background-generator
category: "Tinkering"
services: ["Tinkering"]
technologies:
  - featured: "Puppeteer"
  - featured: "Express.js"
  - featured: "EJS"
  - "Luxon"
  - featured: "Docker"
screenshot: raspberry-pi-desktop-background.png
weight: 11
draft: false
hidden: false
---

This Raspberry Pi OS project automatically generates and updates a background image that displays the number of days remaining until a list of events occur. I built this project [during the pandemic](https://twitter.com/tylerlwsmith/status/1382978880768647171) to track how many days I had left until I received my second vaccination and when I would be considered fully vaccinated. The project enables you to [configure your own countdown events](https://github.com/tylerlwsmith/pi-background-generator#configuring-your-own-countdown-events).

This project uses Docker Compose to build a Node.js container that runs Puppeteer, Express.js, EJS and Luxon to generate the images. Scheduling for the image generation is done on the host Pi using `crontab`. The Node script makes heavy use of async/await with few abstractions to allow the script to be as linear as possible.
