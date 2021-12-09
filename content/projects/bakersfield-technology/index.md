---
title: "Bakersfield Technology"
date: 2021-11-19T21:27:41-08:00
projectUrl: https://bakersfieldtechnology.com
category: "Front-End Development"
repositoryUrl: https://github.com/tylerlwsmith/bakersfieldtechnology.com
services: ["Front-End Development", "Design", "Content Writing"]
technologies:
  - featured: "Next.js"
  - featured: "React.js"
  - featured: "TypeScript"
  - featured: "Tailwind CSS"
  - "Heroicons"
  - "Netlify"
screenshot: bakersfield-technology.png
weight: 4
draft: false
hidden: false
---

Bakersfield has largely not participated in California's tech boom. Most software engineers that are from this city move to regions where tech jobs are more abundant. As far as I can tell, there isn't even a single full-stack software development consultancy in the city.

I built BakersfieldTechnology.com to discover if there was demand for custom software development in the Bakersfield region.

## The Challenge

Because Bakersfield might not have demand for custom software development, investing time in building a website offering development services in the city could be a wasted effort. My challenge was to build a website that assessed the interest while using minimal time & effort.

I gave myself three days to build & deploy a single-page website that focused on generating leads, and I would use these leads as the indicator of demand. I could continue to iterate on the site once it was live.

## Technical Approach

My main consideration for choosing my stack was picking technologies that would allow me to develop and deploy the site quickly. Using Next.js and Tailwind CSS empowered me to do just that. While these tools could be considered overkill for a simple static site, React's component model combined with Tailwind's styles-in-markup approach enabled me to develop much quicker than I would be able to if I had used a more traditional toolset.

<!--
Next.js allows me to leverage React's component model, gives me TypeScript compilation for free, has a Taildwind starter project, and can render down to static HTML files for easy hosting.

Tailwind allowed me to build the whole app without writing nearly any custom CSS or quibbling over pixel values. It enabled me to move fast by defining styles on the components themselves rather than in a separate CSS file.
 -->

## Design

I designed the whole site in the browser by applying Tailwind's utility classes to semantic markup. To add visual interest to the page, I used an IntersectionObserver to trigger animations on scroll.

## SEO Considerations

SEO for lead generation was the crux of the whole website, so I wanted to do my due diligence. I built the site using semantic markup, filled out the page meta, added open graph tags, and submitted the site to Google Search console. The services section was comprised of keywords that I suspected people might search for, such as "web development" and "mobile development."

## Results

The site is not currently ranking on the first page of search results for any relevant queries, so the site is yet to generate any leads. It's possible that increasing the number of backlinks or adding pages to the site could help increase the rankings.

I'm going to see if the site rank increases over the next few months before I put in that effort. If the site appears on page one and I still generate no leads, I'll have been able to invalidate the idea without the time and expense of setting up a full business.
