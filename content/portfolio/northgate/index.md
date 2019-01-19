---
title: "Northgate Commercial Real Estate"
date: 2019-01-13T21:45:45-08:00
projectUrl: https://northgatecre.com
services: ["Design Consultation", "Custom Theme Development", "Data Migration", "SEO"]
technologies: ["WordPress", "jQuery", "Bootstrap 4", "GSAP", "Flickity", "Isotope", "Fancybox", "Scss", "ES6 Modules", "Laravel Mix"]
screenshot: northgate.png
draft: false
hidden: true
---
When Northgate Commercial Real Estate approached me to build their new website, the company's web presence felt stuck in the previous decade. They had a non-mobile-responsive site that was half legacy ColdFusion web application and half third-party property listing service on a different server, which was styled to look like it was a part of the same site.

## The Challenge

Northgate needed to integrate all of their content into a single easy-to-use platform, and Northgate's new website needed to offer a streamlined way for potential clients to consume the site's information.

Northgate was fortunate to have a talented designer on staff who was eager to design the new website. I provided basic website design guidance and ultimately was presented with a one of the most clean and intuitive designs I've built to date.

## Technical Approach

Given Northgate's needs, WordPress was the obvious platform of choice. WordPress has a 15-year history and powers almost a third of the Internet, so it's unlikely to lose popularity the way that ColdFusion did.

The new site needed several content types with structured data. Some content types needed relationships with other types of content, such as relating property listings to their agents. I used the Advanced Custom Fields Pro plugin to implement the necessary fields and relationships to each post type.

Because Northgate had a talented designer on staff, I wanted to give extra flexibility when editing the site's main pages. I installed the Beaver Builder page builder plugin to allow Northgate to build custom-designed pages, such as the [Northgate's homepage](https://northgatecre.com/) or the [services page](https://northgatecre.com/services). 

{{< image "northgate-listing-backend.png" "WordPress backend editing property listing on Northgate's site." >}}

## Listing Management System

Like most commercial real estate companies, Northgate lists on LoopNet, but they also wanted offer more in-depth information about their listings on their own site.

Before building the new site, there were around 100 properties in the third-party listing service that Northgate was using. Creating and editing listings with this system was a time-consuming task, with over half a dozen screens to click through. Worse yet, the system still didn't meet Northgate's needs.

With a brand-new site, we were able to build a custom solution that matched the real world needs of Northgate. We went through an iterative process based on Northgate's listing data and a lot of questions, creating a tailor-suited listing experience. Once the new system was in place, we migrated the data from their old provider to the new site. 

The new individual listing page included all the listing's information, a touch-responsive carousel for property images and a lightbox pop-up to display larger versions of the listing's images.

{{< image "northgate-property-listing.png" "Individual property listing page on Northgate's website." >}}

## Filterable Property Listings Page

To help visitors find their ideal commercial property, we built multiple filters into the property listings page. This allowed visitors to easily find the property they were looking for based on sale type, location, property type or agent.

{{< image "northgate-filters.png" "Northgate's properties page with filter list expanded." >}}

## Property Report Tool

Northgate wanted the ability to generate custom reports about their properties that they could provide their clients. They also wanted to give their clients the ability to generate reports for themselves.

The challenge was building this functionality without forcing users to create an account. Using the JavaScript local storage API, we were able to keep the report IDs stored in the browser, allowing users to compare properties and come back to the same report without needing to log in.

{{< image "northgate-report.png" "A property report on the Northgate website." >}}

## Printer-Friendly Property Pages

In commercial real estate, paper is preferred by many agents and buyers alike. It was important that the individual property pages and property reports looked as good printed as they did on the screen. After researching how other similar sites have made their pages printer friendly, we emulated the best practices on Northgate's site.

Northgate was pleased with the results. In particular, the individual property page and the report looked like they were designed specifically for print. 

{{< image "northgate-printed.png" "A property listing and property report printed side-by-side." >}}

## Performance Optimizations

To keep the size of images down, the WP Smush plugin was added to compress photos as they are loaded into the site.

To keep the load time of the site as fast as possible, I compiled and minified all theme JavaScript and CSS into one script and one stylesheet file. I also only included parts of the Bootstrap 4 framework that were actually used on the site, which substantially reduced the size of the files. 

The site's frontend dependencies are managed by NPM and compiled with Laravel Mix.
