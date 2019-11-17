---
title: "SacMusic.com"
date: 2019-01-14T00:36:29-08:00
projectUrl: https://sacmusic.com
services:
  ["Design", "Custom Theme Development", "Data Aggregation", "Content Writing"]
technologies:
  ["WordPress", "Timber", "Twig", "Scss", "Vanilla JavaScript", "Laravel Mix"]
screenshot: sacmusic.png
draft: false
hidden: false
weight: 2
---

I've been performing at open mics and jams for over a decade, but finding information about these events has always been troublesome. I wanted to build a web site that could help the Sacramento music community find all the open mics and jams in the region.

## The Challenge

There are countless open mic listing sites on the Internet, but many have serious issues.

The biggest entity in the space is [OpenMic.US](https://www.openmic.us/), which is an international network of open mic sites for major cities across the globe. To maintain such an extensive network, they depend on user-submitted events. This has led to some event information being low quality. Sometimes, the hosting venue has gone out of business entirely. The site also prompts the user with a non-dismissable dialog to get the user's email, which feels hostile towards the users. The site's design feels dated.

There are also hundreds of local open mic websites across the country. These are usually created by non-developers, and as a result often have issues with mobile responsiveness. Locally operated sites also often omit important details like signup times or age restrictions. Sometimes, these sites even charge to list events.

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

I chose to build SacMusic.com with WordPress because my familiarity with the platform would allow me to develop the site quickly as a single developer.

I used a WordPress add on called [Timber](https://www.upstatement.com/timber/), which allowed me to use [Symphony's Twig templating engine](https://twig.symfony.com/) on the site. Twig let me develop the site using DRYer, less repetitive code. Twig is also similar to the Django templating engine, which will be helpful if I decide to migrate the site to Django in the future.

On the front end, I compiled Scss to CSS, and I opted out of all libraries except Font Awesome to increase performance. All theme JavaScript was implemented without frameworks or libraries.

## Detailed Event Information

The site lists sign-up time, start time and end time for every event. The current days open mics are always displayed at the very top, so a musician who is free tonight can quickly find an event. Visitors can also see if there is alcohol available at an event.

Age restrictions are displayed prominently so that young musicians can participate in the music scene. House instruments are explicitly listed to show instrumentalists where they can perform without having to go through the ordeal of moving heavy gear.

The Sacramento region is comprised of many cities spanning multiple counties, so cities are displayed at the top of the event to quickly let users assess if the event is worth the drive.

Finally, the venue's address is on every listing's full page, along with an interactive map and a button to get directions.

{{< image "event-details.png" "Each event has details summarized before you ever click in." >}}

## Performance Optimizations

To keep load times fast, the only library used in the site's theme was Font Awesome.

I built custom Scss mixins based loosely on Twitter Bootstrap's grid for positioning elements. This avoided the bloat of unused classes while taking advantage of gzip efficient compression of repetitive code. As a result, the theme's minified CSS weighed in at only 13.1 kilobytes, and 4.4 kilobytes gzipped.

[SVG symbols](https://css-tricks.com/svg-symbol-good-choice-icons/) were used to display instrument icons. SVG offers major performance benefits over raster graphics as the data is stored as a shape rather than pixels.

The most interesting challenge was the embedded map on the individual open mic page. I originally intended to implement this as a simple iframe, however, the iframe added 2.6 megabytes to the page load and slowed the page load speed down by over a second. To increase performance, I opted to use the [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/intro), which loads a map of the location as a static image. The user is prompted to tap the map to load a full interactive view, which replaces the static image with an iframe version of the map. As a result, only the minority of users who intend to interact with the map have to incur the full load time of the iframe.

{{< image "full-page.png" "Full individual open mic page." >}}
