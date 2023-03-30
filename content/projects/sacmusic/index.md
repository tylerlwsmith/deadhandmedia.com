---
title: "SacMusic.com"
date: 2019-01-14T00:36:29-08:00
projectUrl: https://sacmusic.com
category: "Full-Stack Development"
services:
  [
    "Full-Stack Development",
    "Design",
    "Content Writing",
    "Systems Administration",
    "Continuous Deployment",
  ]
technologies:
  - featured: "Ruby on Rails"
  - featured: "Turbo"
  - featured: "Alpine.js"
  - featured: "Tailwind CSS"
  - "ViewComponents"
  - "Devise"
  - "RSpec"
  - "RuboCop"
  - "Parcel"
  - "PostgreSQL"
  - featured: "Caddy"
  - featured: "Docker"
  - "Docker Compose"
  - featured: "Jenkins"
screenshot: sacmusic.png
weight: 1
draft: false
hidden: false
---

I've been performing at open mics and jams for over a decade, but finding information about these events has always been troublesome. I wanted to build a web site that could help the Sacramento music community find all the open mics and jams in the region.

## The Challenge

There are countless open mic listing sites on the Internet, but many have serious issues.

The biggest entity in the space is [OpenMic.US](https://www.openmic.us/), which is an international network of open mic sites for major cities across the globe. To maintain such an extensive network, they depend on user-submitted events. This has led to some event information being low quality. Sometimes, the hosting venue has gone out of business entirely. The site also prompts the user with a non-dismissable dialog to get the user's email, which feels hostile towards the users. The site's design feels dated.

There are also hundreds of local open mic websites across the country. These are usually created by non-developers, and as a result often have issues with mobile responsiveness and slow load times. Locally operated sites also often omit important details like signup times or age restrictions. Sometimes, these sites even charge to list events.

To build a site that would be truly useful to the Sacramento music community, I would need to source the event data myself and design a site that displays important event details upfront.

## Design

I decided I would use [mobile-first](https://www.lukew.com/ff/entry.asp?933) design on this site. I wanted the site to look and feel like an app, as many of the users would be coming from mobile devices. The desktop site has the same general feel, but uses [responsive design](https://alistapart.com/article/responsive-web-design) techniques to fit larger screens.

I displayed the most important information about each event on the homepage, so users could find events they were interested in without having to click into each event individually.

For a better user experience, I also opted to list open mics by day-of-the-week instead of using a calendar. Calendars are difficult to make usable on mobile devices, and most open mics and jams are weekly events.

{{< figure src="mobile.png" alt="An app-like design on mobile browsers." width="250" >}}

## Detailed Event Information

The site lists sign-up time, start time and end time for every event. The current day's open mics are always displayed at the very top, so a musician who is free tonight can quickly find an event. Visitors can also see if there is alcohol available at an event.

Age restrictions are displayed prominently so that young musicians can participate in the music scene. House instruments are explicitly listed to show instrumentalists where they can perform without having to go through the ordeal of moving heavy gear.

The Sacramento region is comprised of many cities spanning multiple counties, so cities are displayed at the top of the event to quickly let users assess if the event is worth the drive.

Finally, the venue's address is on every listing's full page, along with an interactive map and a button to get directions.

{{< image "event-details.png" "Each event has details summarized before you ever click in." >}}

## Technical Approach

I built SacMusic using Ruby on Rails because it is optomized for single-developer productivity. I had built a previous iteration of the site using WordPress but found the CMS too slow and rigid. I then built another iteration with Django + Next.js but found development velocity too slow because of how tedious it was to set up forms and data-loading.

Rails allowed me to scaffold nearly all of the back-end and markup in a matter of days, even though I was new to both Rails and Ruby.

I used a combination of Turbo, Alpine and ViewComponents in an attempt to leverage the best qualities of React's user experience and developer productivity. While Turbo enabled the smooth page transitions of a single-page application, it relied on an imperative coding style that did not work well with Alpine. ViewComponents were less-than-ergonomic. Automatic reloads and cache-busting were problematic. Despite major productivity gains from the Rails scaffolding, I lost development velocity on the front-end.

To keep the web server simple, I used Caddy. Caddy's config file format is much simpler than that of nginx, and it's trivial to run inside of a container in production.

## Performance Optimizations

Opting for traditional server rendering instead of a heavyweight UI library like React makes SacMusic fast by default&ndash;especially on lower-end Android devices. Tailwind also automatically eliminates unused classes, resulting in lean, easy-to-maintain CSS.

The most interesting challenge was the embedded map on the individual open mic page. I originally intended to implement this as a simple iframe, however, the iframe added 2.6 megabytes to the page load and slowed the page load speed down by over a second. To increase performance, I opted to use the [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/intro), which loads a map of the location as a static image. The user is prompted to tap the map to load a full interactive view, which replaces the static image with an iframe version of the map. As a result, only the minority of users who intend to interact with the map have to incur the full load time of the iframe.

{{< image "full-page.png" "Full individual open mic page." >}}
