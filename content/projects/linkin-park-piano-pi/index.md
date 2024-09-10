---
title: "Linkin Park Piano for Raspberry Pi"
date: 2021-11-28T00:17:38-08:00
repositoryUrl: https://github.com/tylerlwsmith/pi-in-the-end
category: "Tinkering"
services: ["Tinkering"]
technologies:
  - featured: "Python"
  - featured: "Raspberry Pi"
  - featured: "Spleeter"
  - featured: "Midi"
  - "systemd"
screenshot: chester-pi-shill.jpg
weight: 1
draft: false
hidden: false
---

This project is simple: when you play the intro to Linkin Park's "In The End" on a digital piano that's connected to a Raspberry Pi, the Raspberry Pi plays the song's chorus.

{{< youtube PRO-vQtjnbw >}}

I initially wrote a [prototype script](https://twitter.com/tylerlwsmith/status/1327802206020464640) that printed lyrics to the console when the notes were entered correctly, but I wanted to play the actual recording through a speaker. I couldn't find a clean splice point before the chorus, so I used the TensorFlow-powered [Spleeter library](https://github.com/deezer/spleeter) to separate the vocals from instrumentals. I then used [Reaper](https://www.reaper.fm/) to blend the isolated vocal pickup with the rest of the chorus. Finally, I wrote a systemd unit file to ensure that the program would boot at startup without requiring manual intervention.

In the end, I think it turned out pretty well.
