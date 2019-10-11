---
title: "SacMusic.com"
date: 2019-01-14T00:36:29-08:00
projectUrl: https://sacmusic.com
services: ["Design", "Custom Theme Development", "Data Aggregation", "Content Writing"]
technologies: ["WordPress", "Timber", "Twig", "Scss", "Vanilla JavaScript", "Laravel Mix"]
screenshot: sacmusic.png
draft: true
hidden: true
---
I've been playing at open mics and jams for a decade, but I've always thought that finding information about these events was troublesome. I wanted to build a web site that could help the Sacramento music community find open mics and jams in the Sacramento area. 

## The Challenge
Open Mic listing sites are actually a pretty active space around the Internet, but I wasn't satisfied with any of them.

The biggest player in the space is the [OpenMic.US](https://www.openmic.us/). They've build an international network of open mic sites for major cities across the globe, and through this work have benefitted the global music community. However, to maintain such an extensive network, they depend on user submitted events, meaning the event information may be low quality, or sometimes the venue hosting has gone out of business entirely. The site also prompts the user with a non-dismissable dialog to get the user's email, which feels hostile towards the users. The design also feels dated.

In addition to OpenMic.US's sites, there are local hundreds of locally-focused options across the country. These are generally created by musicians opposed to web developers, and as a result often have issues with mobile responsiveness, quality control and sometimes even charging to list. These also often omitted important details like signup times or age restrictions.

To have the quality site I needed, I would need to provide important data upfront and source the data myself.

## Branding Considerations
With a digital-first project, building a brand that considers the web landscape is critial towards a project's success.

Though dozens of new top level domains (TLDs) like **.co** and **.photography** have joined the classics like **.net** and **.org**, the **.com** TLD still carries the most perceived credibility among users. [An academic study on domain names](https://poseidon01.ssrn.com/delivery.php?ID=223117004126126088065070123080015018056013034051087067098002112113091067068013003006012058017121015012035003004082100112122120039069054051084095092125113098111067024041095124103069126127092093114077119095104081010080015072110115113004105086019003070&EXT=pdf) tells us that every character after seven characters in a domain, exlcuding the TLD, leads to a two percent reduction in site traffic.

The trends and industry best practices suggest that successful domains are short, memorable and non-hyphenated. Keywords in domains can help too, but aren't the ranking factor that they once were. 

The site needed a domain and brand that could immediately give those who see it some idea what it is, as it is unlikely I'd have the resources to build awareness around a non-descriptive brand name like Amazon or Submerge.

The SacMusic.com domain was purchased from a domain squater because it was short, descriptive, memorable and non-hypenated.

## Design

I decided I would use mobile-first design on this site. [Mobile-first](https://www.lukew.com/ff/entry.asp?933) design methodology has been around since 2009, shortly followed by [responsive design](https://alistapart.com/article/responsive-web-design), which the site also employs. Overall, I wanted the site to look and feel like an app, as many of the users would be mobile-first. The desktop has the same general feel, with sizing slightly adjusted. By having very few changes between the mobile and desktop versions, this would allow me to spend less time on responsive considerations and more time iterating through features.

For a better user experience, I also opted for a list of open mics broken down by day opposed to a calendar. Calendars are incredibly difficult to make usable on mobile, and most Open Mics repeat week-after-week.

## Technical Approach

As a one-person team building a profitless passion project, I chose to build SacMusic.com in WordPress because my familiarity with the platform would allow to build the site quickly.

I used WordPress's Timber add on to use the Twig templating engine. Twig will allow me to develop the site using DRYer, less repetitive code. Twig is also similar to the Django templating engine, which will help me if I decide to migrate the site off of WordPress.

On the frontend of the site, I used more conservative tooling, opting out of any frontend libraries or frameworks for the sake of increased performance. I created a mixin library to build the grid and I opted towards BEM methodology for CSS. All JavaScript was implemented as vanilla and inlined.

## Information

* Alcohol and age limits
* Sign up times
* Tonight's events first
* House instruments
* Listing geography upfront because Sacramento area is huge

## Performance Optimizations
* No frontend framework, using a custom mixin library instead and taking advantage of gzip compression
* SVG sprites for instruments. sprites probably not right word
* Static map to iframe. Click to load map to optimize load time and reduce request size by seconds/megabytes

