---
title: "Northgate Commercial Real Estate"
date: 2019-01-13T21:45:45-08:00
projectUrl: https://northgatecre.com
services: ["Design Consultation", "Custom Theme Development", "Data Migration", "SEO"]
technologies: ["WordPress", "Twitter Bootstrap", "Scss", "ES6 Modules"]
screenshot: northgate.png
draft: true
---
When Northgate Commercial Real Estate approached me to build their new website, the company's web presence felt stuck in 2005. They had a legacy, non-mobile-responsive site that was split half way a legacy Cold Fusion app for the sites content and a third party property listing service that used the same outdated theme.

Northgate was fortunate enough to have a talented designer on staff, however, he didn't not have experience with websites. I provided design guidance for web and ultimately was presented with a one of the most beautifully simple and intuitive designs I've ever had the pleasure of building.

## Development Challenges 

The design called for three particularly interesting features: 

* A filterable property management system.
* A property report tool that allows users to save properties and compare high level details.
* Printer friendly pages properties, team members, blogs and reports.

### Filterable Property Management System

{{< image "northgate-filters.png" "Another screenshot" >}}

Like most commercial real estate companies, Northgate lists on Loopnet, but the company wanted the ability to offer more in depth information about their listings on their own site.

Before building the new site, there were around 100 properties in the third-party property management solution they were using at the time. Creating and editing properties within the system they were using was a time consuming task, with over half a dozen screens to click through while setting up the page. Worse yet, many of the fields in the system did not match Northgate's needs.

With a brand new site, we were able to build a custom solution that matched the real world needs of Northgate. Discovering what fields we needed was an iterative process based on the property data and a lot of questions. After several rounds of modifying the property fields, we found the data we needed and the best way to display it to the site visitors.

With the properties complete, we build filtering for cities, property type and transaction type into the property listing page to allow visitors to easily find the properties they were looking for.

### Property Report Tool

{{< image "northgate-report.png" "Another screenshot" >}}

Northgate wanted the ability to generate custom reports of their properties that they could print out and hand to their clients or that visitors could generate for themselves.

The biggest challenge was that we wanted to be able to do this without users having to create an account. Using the JavaScript local storage API, we were able to keep the report IDs stored in the browser, allowing users to compare properties and come back to the same report without having to create an account on the side.

### Printer-Friendly Pages

{{< image "northgate-printed.png" "Another screenshot" >}}

In the commercial real estate, paper is still favored over digital by many agents and buyers alike. Because of this, it was important to Northgate key pages look as good printed as they did on the screen.

Northgate is one of only two clients I've ever had that's requested this, so I went to work researching how how other sites have made their pages printer friendly, then emulated the best practices on Northgate's site.

They were thrilled with the results. In particular, the individual property page and the report turned out better than any of us knew was possible from web. 

## Other Notable Features

I was fortunate to work with a talented designer when putting together this site, and I wanted to allow the designer extra flexibility when editing the main pages on the site. 

As this site was launched in the pre-Gutenberg era, I needed to find a powerful and configurable page builder that would allow my client to build custom designed pages, such as the [Northgate's home page](https://northgatecre.com/) or the [services page](https://northgatecre.com/services). 

After extensive research, I found that Beaver Builder offered the power and flexibility. I configured it to only be usable on the "page" content type and created a custom Beaver Builder component for their website's button styles.

I am also actively assisting Northgate with SEO writing and strategy, conducting research on key markets and writing content for those markets to improve ranking on geo and industry specific keywords.
