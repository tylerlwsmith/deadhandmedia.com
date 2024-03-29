# deadhandmedia.com

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

## Create new project items

To create a new project item, run the following:

```sh
hugo new projects/{project-name}/index.md
```

To publish the project item, be sure to set `draft` and `hidden` to true in the front matter.

## Hugo page reload cache issues

Sometimes Hugo clears changes to the CSS when reloaded. When this happens, run the server with the `--noHTTPCache` flag.

## Accessing from another network device while developing

To test the site from a phone while developing, you'll need to pass in some additional parameters while starting the development server.

```sh
hugo server --bind "0.0.0.0" --baseUrl "http://${DEVICE_IP}"
```

To get the device IP on a Mac, you can run the following:

```sh
ifconfig | egrep "\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
```

Conversely, you could use the following command on Mac to do it all in one pass:

```sh
hugo server --bind "0.0.0.0" --baseUrl "http://$(ipconfig getifaddr en0)"
```

## Running the production build locally

To test the production build locally, run the following command from the main project directory:

```sh
hugo && python3 -m http.server 1314 -d public
```

## Manually clearing the getJSON for blog posts on DEV

**The following recommendations may not always work: DEV uses aggressive caching on their API server at the time of writing (December 2021) which returns cached results for hours. Confusingly, the cache may work on a per-client basis. This means it's possible that a local development environment might show current data while Netlify's build servers receive a stale cache.**

**To make matters even more confusing, Hugo also keeps a local cache.**

To delete the locally cached posts from DEV, stop the server then delete the `resources/cache` directory. The data will be refetched the next time you start the server. You can also run Hugo with the `--ignoreCache` or `--gc` flags, which will clear the local cache. However, this will not clear DEV's aggressive server-side caching.

Sometimes, changing the number of articles requested from the DEV API will cause it to return more recent data. By default, Hugo requests 1000 articles (the max which DEV's API will return), but you can override this by setting the `HUGO_POSTS_PER_PAGE` environment variable to another value (like `999`).

## Skipping builds on Netlify

On commits that don't require a new build (like when making edits to the README), you can add `[skip ci]` or `[skip netlify]` to anywhere in the commit message. Netlify won't build that commit until a newer commit without that string in the commit message arrives, which conserves the monthly build minutes. You can read more about this in the [Netlify docs](https://docs.netlify.com/site-deploys/manage-deploys/#skip-a-deploy).

## Daily rebuilds

A GitHub action rebuilds the site daily to make sure the site has the latest blog posts and comment counts. The action was based off of [a blog post by Eric Jinks](https://ericjinks.com/blog/2019/netlify-scheduled-build/).

## Changing the location of the resume embed for development

You can change where the site looks for the resume embed by setting the `RESUME_LOCATION` environment variable. If you were running a development copy of the resume locally and wanted to load that instead of the live site, you could start the Hugo server with the following command:

```sh
HUGO_RESUME_ORIGIN="http://localhost:3000" hugo server
```

## Rough edges

This site has a couple of rough edges that I'd like to fix when I get time. I'm listing them here so I remember them the next time I resume active development on this site.

- The homepage should use `baseof.html` and currently doesn't.

## Why the stupid name... what even _is_ a dead hand?

Dead Hand is a Soviet Doomsday device that was built just before the fall of the Soviet Union. It guaranteed second-strike capabilities in the event of an all-out nuclear assault by the United States. To the best of my understanding, it was a near-fully automated system that would be able to detect if the Soviet Union was under attack and could respond with total destruction of the US. However, the system was not _fully_ automated: when the time came, an activation button would light up, and a small handful of soldiers would be tasked with deciding whether or not to press it and kill every man, woman and child in the United States. The system is thought to still be operational to this day.

I was terrified when I first heard about Dead Hand. Would it be possible that Dead Hand could mistake occurrences like the Tunguska event–a meteor air blast that flattened trees in an area of over 830 square miles in 1908–for a US nuclear strike? Probably. If that happened, the fate of over 300 million Americans would be in the hands of a small group that might not know what had happened.

I thought a lot about Dead Hand over the years. Knowing that there was a Doomsday device that could destroy everyone I know and love encouraged me to ask myself, "If I were to die tomorrow, would I be happy with the life that I have lived so far?" In late 2016, I realized the answer was no: I was unhappy with my job as a marketer and I wanted to become a web developer. I quit my job and started freelancing with less than a month of experience in web development.

I registered the Dead Hand Media domain for my freelance business because my knowledge of the doomsday device ultimately prompted me to take the leap into the unknown.
