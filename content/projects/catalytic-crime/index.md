---
title: "Catalytic Crime"
date: 2021-11-19T20:27:02-08:00
projectUrl: null
category: "Full-Stack Development"
repositoryUrl: https://github.com/tylerlwsmith/catalyticcrime.com
services: ["Full-Stack Development", "Data Aggregation", "Continous Delivery"]
technologies:
  - featured: "Laravel"
  - featured: "Livewire"
  - featured: "Alpine.js"
  - featured: "Tailwind CSS"
  - featured: "Jenkins"
  - "DigitalOcean Spaces"
  - "Mailgun"
  - "MailHog"
  - "Nginx"
  - "Certbot"
  - featured: "Docker"
  - "Docker Compose"
screenshot: catalytic-crime.png
weight: 7
draft: false
hidden: false
---

Catalytic Crime was built in two weeks as a proof-of-concept for tracking catalytic converter thefts in Bakersfield, CA. I built it after my brother's catalytic converter was stolen while parked on the street, which left him without a usable car for over a month.

I frequently see posts about local catalytic converter thefts on my Facebook feed that include pictures or videos of the crimes. The idea behind Catalytic Crime was creating a centralized platform where users could submit public reports about the crimes and attach pictures & videos they may have of the incident. Data from user-submitted reports would be combined with police department data so the site could show various insights about catalytic converter thefts in Bakersfield.

## Development

During the two weeks that I worked on this project, I completed the following:

- **I containerized the app** with separate containers for the PHP web app, the nginx web server, the Node.js dev server, the PostgreSQL database, a testing PostgreSQL database, and MailHog for checking emails in development.
- **I set up auth and account creation** with Laravel Breeze.
- **I set up a form for users to create and edit reports** using Laravel Livewire that provides server-powered reactivity on the front-end.
- **I set up an admin-approval process for new reports**, where admins are notified of new reports via email then can approve them using the web app.
- **I created a paginated reports index page** for reports and a single report page.
- **I created a sparce-but-functional UI** using Tailwind CSS, along with its form and typography plugins.
- **I set up S3-compatible object storage** using DigitalOcean Spaces and configured it for storing user uploads.
- **I wrote integration tests** that must pass before the site can deploy.
- **I set up CI/CD with Jenkins** deploying to a $5/mo DigitalOcean droplet.

## Outcome

Ultimately, I abandoned this project shortly after launching it because I was unable to acquire comprehensive public crime data.

CrimeMapping.com has [Bakersfield catalytic converter theft data](https://www.crimemapping.com/map/agency/19) readily available on its website, but there's no export feature. Scraping the ["print" page](https://www.crimemapping.com/Print?dteFrom=10-1-2021&dteTo=10-31-2021&attr=[%2214%22]&ext={%22type%22:%22extent%22,%22xmin%22:-13307636.710159209,%22ymin%22:4189123.318966664,%22xmax%22:-13190993.804996189,%22ymax%22:4240183.253861093,%22spatialReference%22:{%22wkid%22:102100},%22cache%22:{%22_parts%22:[{%22extent%22:{%22type%22:%22extent%22,%22xmin%22:-13307636.710159209,%22ymin%22:4189123.318966664,%22xmax%22:-13190993.804996189,%22ymax%22:4240183.253861093,%22spatialReference%22:{%22wkid%22:102100}},%22frameIds%22:[0]}]}}&tmpfilt={%22PreviousID%22:%224%22,%22PreviousNumDays%22:28,%22PreviousName%22:%22Previous%204%20Weeks%22,%22FilterType%22:%22Previous%22,%22ExplicitStartDate%22:%2220211004%22,%22ExplicitEndDate%22:%2220211031%22}&agfilt=[]&bmpid=1&disacpt=false) using a tool like Puppeteer or Selenium looks like it's possible, but [the site's terms of service](https://www.crimemapping.com/Home/TermsAndConditions) explicitly prohibit scraping.

I opened a Freedom of Information Act (FOIA) request with the city to get the Catalytic Converter theft data that was available from Crime Mapping. Weeks later, I was provided an Excel file that was missing important data fields that Crime Mapping provided.

With this data being slow-to-acquire and incomplete, I decided that it would be prohibitively difficult to provide value on the site without dedicating a significant amount of energy into building a userbase, so I stopped development of the project.
