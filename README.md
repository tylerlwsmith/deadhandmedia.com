# DeadHandMedia.com

This is the Hugo project that powers [deadhandmedia.com](https://deadhandmedia.com). To get started with development, clone the repository and run the following command:

```sh
hugo server -D
```

The `-D` flag will build and display the draft pages when running the development server.

Many pages are hidden using `draft: true` in the front matter. Several pages also include a custom site-specific front matter property called `hidden`, which tells Google not to index the page when it is set to `true`. A custom sitemap was built in `layouts/sitemap.xml` which excludes pages set to `hidden: true` from the sitemap.

To build the site as static files, run the following command:

```sh
hugo
```

Committing to the main branch will trigger a new build & deploy on Netlify.

You can view the [Hugo documentation here](https://gohugo.io/documentation/).

## Create new portfolio items

To create a new portfolio item, run the following:

```sh
hugo new portfolio/my-project/index.md
```

To publish the portfolio item, be sure to set `draft` and `hidden` to true in the front matter.

## State of the site

Most of the pages on this site are hidden when it is deployed. I originally built this site for my freelance business, but I stopped accepting new clients in late 2019, and the portfolio is tragically out of date. I've hidden many pages by using a combination of the `draft` front matter property and conditional checks on the `.Site.IsServer` property in the templates.

## Why the stupid name... what even _is_ a dead hand?

Dead Hand is a Soviet Doomsday device that was built just before the fall of the Soviet Union. It guaranteed second-strike capabilities in the event of an all-out nuclear assault by the United States. To the best of my understanding, it was a near-fully automated system that would be able to detect if the Soviet Union was under attack and could respond with total destruction of the US. However, the system was not _fully_ automated: when the time came, an activation button would light up, and a small handful of soldiers would be tasked with deciding whether or not to press it and kill every man, woman and child in the United States. The system is thought to still be operational to this day.

I was terrified when I first heard about Dead Hand. Would it be possible that Dead Hand could mistake occurrences like the Tunguska event–a meteor air blast that flattened trees in an area of over 830 square miles in 1908–for a US nuclear strike? Probably. If that happened, the fate of over 300 million Americans would be in the hands of a small group that might not know what had happened.

I thought a lot about Dead Hand over the years. Knowing that there was a Doomsday device that could destroy everyone I know and love encouraged me to ask myself, "If I were to die tomorrow, would I be happy with the life that I have lived so far?" In late 2016, I realized the answer was no: I was unhappy with my job as a marketer and I wanted to become a web developer. I quit my job and started freelancing with less than a month of experience in web development.

I registered the Dead Hand Media domain for my freelance business because my knowledge of the doomsday device ultimately prompted me to take the leap into the unknown.
