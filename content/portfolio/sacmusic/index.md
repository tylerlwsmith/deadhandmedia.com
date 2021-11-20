---
title: "SacMusic.com"
date: 2019-01-14T00:36:29-08:00
projectUrl: https://sacmusic.com
services:
  [
    "Full-Stack Development",
    "Design",
    "Content Writing",
    "Data Aggregation",
    "Systems Administration",
    "Continuous Deployment",
  ]
technologies:
  [
    "Django REST Framework",
    "Next.js",
    "React.js",
    "Express.js",
    "TypeScript",
    "Chokidar",
    "Tailwind CSS",
    "PostgreSQL",
    "NGINX",
    "Certbot",
    "Docker",
    "Docker Compose",
    "Jenkins",
  ]
screenshot: sacmusic.png
draft: false
hidden: true
weight: 2
---

I've been performing at open mics and jams for over a decade, but finding information about these events has always been troublesome. I wanted to build a web site that could help the Sacramento music community find all the open mics and jams in the region.

## The Challenge

There are countless open mic listing sites on the Internet, but many have serious issues.

The biggest entity in the space is [OpenMic.US](https://www.openmic.us/), which is an international network of open mic sites for major cities across the globe. To maintain such an extensive network, they depend on user-submitted events. This has led to some event information being low quality. Sometimes, the hosting venue has gone out of business entirely. The site also prompts the user with a non-dismissable dialog to get the user's email, which feels hostile towards the users. The site's design feels dated.

There are also hundreds of local open mic websites across the country. These are usually created by non-developers, and as a result often have issues with mobile responsiveness and slow load times. Locally operated sites also often omit important details like signup times or age restrictions. Sometimes, these sites even charge to list events.

To build a site that would be truly useful to the Sacramento music community, I would need to source the event data myself and design a site that displays important event details upfront.

## Branding Considerations

Though dozens of new top level domains (TLDs) like **.photography** and **.co** have joined the classics like **.net** and **.org**, the **.com** TLD still carries the most perceived credibility among users. [An academic study on domain names](https://poseidon01.ssrn.com/delivery.php?ID=223117004126126088065070123080015018056013034051087067098002112113091067068013003006012058017121015012035003004082100112122120039069054051084095092125113098111067024041095124103069126127092093114077119095104081010080015072110115113004105086019003070&EXT=pdf) tells us that every character after seven characters in a domain (excluding the TLD) leads to a two percent reduction in site traffic.

The industry best practices suggest that successful domains are short, memorable and non-hyphenated.

I purchased the SacMusic.com domain because it was short, descriptive, memorable and non-hyphenated.

## Design

I decided I would use [mobile-first](https://www.lukew.com/ff/entry.asp?933) design on this site. I wanted the site to look and feel like an app, as many of the users would be coming from mobile devices. The desktop site has the same general feel, but uses [responsive design](https://alistapart.com/article/responsive-web-design) techniques to fit larger screens.

I displayed the most important information about each event on the homepage, so users could find events they were interested in without having to click into each event individually.

For a better user experience, I also opted to list open mics by day-of-the-week instead of using a calendar. Calendars are difficult to make usable on mobile devices, and most open mics and jams are weekly events.

{{< figure src="mobile.png" alt="An app like design on mobile browsers." width="250" >}}

## Technical Approach

The site uses Django REST Framework for the back-end, Express.js + Next.js + Tailwind CSS for the front-end, PostgreSQL as the database, and Nginx as the webserver. Because there are so many services in the app, each runs its own Docker container, then all the containers are orchestrated using Docker Compose.

Express was used in conjunction with Next.js on the front-end to enable the site to effortlessly generate XML sitemaps on the fly. To enable hot-reloading of the Express server, Express hooks directly into Next's Webpack config for TypeScript compilation, then Chokidar is used in a server boot script for module cache invalidation.

The back-end is a near-Vanilla install of Django with REST Framework used for endpoint serialization. For local development, the Django app has a command for pulling all of the event data from the production API to the local development environment to ensure the that development and production are always in sync.

Nginx is run in a container, and handles reverse proxying for both the front-end and back-end. In production, the server runs its own copy of Nginx that proxys to the container. While the setup is redundant, it allows easy configuration of Certbot on the host machine for automatic SSL certificate renewals.

To keep the feedback cycle fast, every commit to the main branch is run through Jenkins. Jenkins builds development containers then runs its tests. If the tests pass, it build production containers, puts them in a private Docker Hub registry, then restarts the services on the production server using the new images. Jenkins also has another task that backs up the database once a day and places the backup on S3 compatable object stoarge.

### Previous iterations

SacMusic.com has been through several iterations. I originally built SacMusic.com with WordPress because my familiarity with the platform allowed me to develop the site quickly. After building the site with the Sage starter theme to use Blade templates then migrating to Timber for the Twig templating engine, I wanted to leverage the power of a modern JavaScript framework for a more app-like experience.

I rebuilt the front-end using Next.js and Emotion for styles, while continuing to use to use WordPress as its data source. WordPress's REST API is famously slow, so when the data is updated, WordPress synced its data to the Node.js server where it could be delivered to the user in milliseconds.

## Detailed Event Information

The site lists sign-up time, start time and end time for every event. The current days open mics are always displayed at the very top, so a musician who is free tonight can quickly find an event. Visitors can also see if there is alcohol available at an event.

Age restrictions are displayed prominently so that young musicians can participate in the music scene. House instruments are explicitly listed to show instrumentalists where they can perform without having to go through the ordeal of moving heavy gear.

The Sacramento region is comprised of many cities spanning multiple counties, so cities are displayed at the top of the event to quickly let users assess if the event is worth the drive.

Finally, the venue's address is on every listing's full page, along with an interactive map and a button to get directions.

{{< image "event-details.png" "Each event has details summarized before you ever click in." >}}

## Performance Optimizations

Node.js is known for its speed, and this site reaps the benefits of its performance. Next.js's server-side rendering allows users on slower devices to get content before the JavaScript has finished parsing. Because Tailwind uses Purge CSS, production the CSS bundle is very small.

The most interesting challenge was the embedded map on the individual open mic page. I originally intended to implement this as a simple iframe, however, the iframe added 2.6 megabytes to the page load and slowed the page load speed down by over a second. To increase performance, I opted to use the [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/intro), which loads a map of the location as a static image. The user is prompted to tap the map to load a full interactive view, which replaces the static image with an iframe version of the map. As a result, only the minority of users who intend to interact with the map have to incur the full load time of the iframe.

{{< image "full-page.png" "Full individual open mic page." >}}
