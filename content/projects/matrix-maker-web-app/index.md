---
title: "Matrix Maker Web App"
date: 2023-03-05T16:46:17-08:00
projectUrl: https://12tone.app
repositoryUrl: https://github.com/tylerlwsmith/12tone.app
category: "Front-End Development"
services: ["Front-End Development"]
technologies:
  - featured: "HTML"
  - featured: "CSS"
  - featured: "Vanilla JS"
  - "Emmet"
screenshot: matrix-maker-web-app.png
weight: 4
draft: false
hidden: false
---

Over a year after releasing the [Matrix Maker Android App](/projects/matrix-maker/) that I built using React Native, I wanted to build a web application to make it more accessible to musicians who don't use Android phones.

I decided to build the web app using only what the browser provides: static HTML, unprocessed CSS, and vanilla JS. I was able to reuse a lot of styling from the React Native app, but hand-generating the markup for the 12x12 grid would be overwhelming. I used the gnarliest [Emmet abbreviations](https://docs.emmet.io/abbreviations/syntax/) I've ever seen to generate the Matrix and tweaked it until it was just right.

Here's what the final Emmet abbreviations that generated the matrix markup looked like:

{{< rawhtml >}}

<pre style="white-space: pre-wrap; background: white; padding: 0 20px; border: 1px solid #ccc; font-size: 12px;">
<code>
.matrix-container__row.matrix-container__row--top>.axis-corner+.axis.axis--x[data-axis="I"]>.axis-cell[data-axis-cell="$@0"]*12^.axis-corner

.matrix-container**row.matrix-container**row--middle>.axis.axis--y[data-axis="P"]>.axis-cell[data-axis-cell="$@0"]*12^.matrix-rows#matrix-rows>(.matrix-row[data-matrix-row="$@0"]*12>.matrix-cell[data-matrix-cell-column="$@0"]*12)^.axis.axis--y[data-axis="R"]>.axis-cell[data-axis-cell="$@0"]*12

.matrix-container**row.matrix-container**row--bottom>.axis-corner+.axis.axis--x[data-axis="RI"]>.axis-cell[data-axis-cell="$@0"]\*12^.axis-corner
</code>
</pre>

{{< /rawhtml >}}

You can visit the web app or view the source code using the links below.
