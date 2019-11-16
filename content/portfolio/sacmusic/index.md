---
title: "SacMusic.com"
date: 2019-01-14T00:36:29-08:00
projectUrl: https://sacmusic.com
services:
  ["Design", "Custom Theme Development", "Data Aggregation", "Content Writing"]
technologies:
  ["WordPress", "Timber", "Twig", "Scss", "Vanilla JavaScript", "Laravel Mix"]
screenshot: sacmusic.png
draft: true
hidden: true
---

I've been performing at open mics and jams for a decade, but finding information about these events has always been troublesome. I wanted to build a web site that could help the Sacramento music community find all the open mics and jams in the region.

## The Challenge

There are countless open mic listing sites around the Internet, but most have serious issues.

The biggest entity in the space is [OpenMic.US](https://www.openmic.us/). They've built an international network of open mic sites for major cities across the world, and through their work have benefitted the global music community. However, to maintain such an extensive network, they depend on user-submitted events, meaning the event information may be low quality, and sometimes the hosting venue has gone out of business entirely. The site also prompts the user with a non-dismissible dialog to get the user's email, which feels hostile towards the users. The site's design feels dated.

In addition to OpenMic.US's sites, there are hundreds of local open mic websites across the country. These are generally created by musicians rather than developers, and as a result often have issues with mobile responsiveness and quality control. Locally operated sites also often omit important details like signup times or age restrictions. Sometimes, these sites even charge to list events.

To build a site that would be truly useful to the Sacramento music community, I would need to source the event data myself and design a site that displays important event details upfront.

## Branding Considerations

When building a website, crafting a brand that considers the landscape of the web is critical.

Though dozens of new top level domains (TLDs) like **.photography** and **.co** have joined the classics like **.net** and **.org**, the **.com** TLD still carries the most perceived credibility among users. [An academic study on domain names](https://poseidon01.ssrn.com/delivery.php?ID=223117004126126088065070123080015018056013034051087067098002112113091067068013003006012058017121015012035003004082100112122120039069054051084095092125113098111067024041095124103069126127092093114077119095104081010080015072110115113004105086019003070&EXT=pdf) tells us that every character after seven characters in a domain (excluding the TLD) leads to a two percent reduction in site traffic.

The trends and industry best practices suggest that successful domains are short, memorable and non-hyphenated. Keywords in domains can help too, but aren't the ranking factor that they once were.

The site needed a domain and brand that could immediately give those who saw it some idea of what it was; I don't have the resources to build awareness around a non-descriptive brand name like Amazon or Submerge.

I purchased the SacMusic.com domain from a foreign domain squatter for a significant cost because it was short, descriptive, memorable and non-hyphenated.

## Design

I decided I would employ mobile-first design on this site. [Mobile-first](https://www.lukew.com/ff/entry.asp?933) design methodology has been around since 2009, shortly followed by [responsive design](https://alistapart.com/article/responsive-web-design), which the site also uses. Overall, I wanted the site to look and feel like an app, as many of the users would be coming from mobile devices. The desktop site has the same general feel, with sizing slightly adjusted to fit larger screens. By having few differences between the mobile and desktop versions of the site, this would allow me to spend less time on responsive considerations and more time building features.

For a better user experience, I also opted to list open mics by day-of-the-week instead of using a calendar. Calendars are incredibly difficult to make usable on mobile devices, and most open mics are weekly events.

## Technical Approach

As a one-person team building a profitless passion project, I chose to build SacMusic.com with WordPress because my familiarity with the platform would allow me to develop the site quickly.

I used a WordPress add on called [Timber](https://www.upstatement.com/timber/), which allowed me to use [Symphony's Twig templating engine](https://twig.symfony.com/) on the site. Twig allowed me to develop the site using DRYer, less repetitive code. Twig is also similar to the Django templating engine, which will help if I decide to migrate the site to Django in the future.

On the frontend of the site I used more conservative tooling, opting to use Font Awesome as the only front end library for the sake of increased performance. I created a mixin library to build a layout grid, and I opted towards BEM methodology for CSS. All JavaScript was implemented without frameworks or libraries.

## Detailed Event Information

The biggest issue I saw on existing open mic sites was information that was important to musicians was missing, so it was important to get this right.

The site lists sign up time, start time and end time for every event. The current days open mics are always displayed at the very top so a musician who is free tonight can quickly find an event. Musicians will also be able to see if there is alcohol available at that event, either to calm nerves or tolerate bad performances.

Age restrictions are listed prominently so young musicians can participate in the music scene as well. The site also lists any house instruments to show instrumentalists where they can perform without having to go through the ordeal of moving heavy gear.

The Sacramento region is massive and comprised of many cities, so cities are displayed at the top of the event to quickly let users assess if the event is worth the drive.

Finally, the venues address is on every listing, with an interactive map, a button to get directions and another button to copy the address to the user's clipboard.

## Performance Optimizations

To keep load times fast, front end frameworks and libraries were excluded from the project, aside from Font Awesome for icons. I built custom Scss mixins based loosely on Twitter Bootstrap's grid for positioning elements. This avoid the bloat of unused classes (I have never used Bootstrap's .col-sm-7) while taking advantage of gzip efficient compression of repetitive code.

By using only grid mixins and following BEM css conventions, my minified CSS bundle for the site weighed in at 13.1 kilobytes, and 4.4 kilobytes gzipped.

[SVG symbols](https://css-tricks.com/svg-symbol-good-choice-icons/) were used to display the instrument icons. SVG offers major performance benefits over raster graphics as the data is stored as a shape rather than symbols.

The most interesting challenge was the embedded map on the individual open mic page. I originally intended to implement this as a simple iFrame, however, the iFrame added 2.6 megabytes to the page load, which slowed the page load down by over a second and was inconsiderate to users' data plans.

To have a smaller page load, I opted to use the [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/intro), which loads a map of the location as a static image, significantly reducing the page size. To allow the maps to remain interactive, the user is prompted to touch the map to load a full interactive view, which will load the full iFrame version of the map. This means that only the minority of users who intend to interact with the map have to incur the full load time of the iFrame.
