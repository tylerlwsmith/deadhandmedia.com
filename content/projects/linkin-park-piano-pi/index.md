---
title: "Linkin Park Piano for Raspberry Pi"
date: 2021-11-28T00:17:38-08:00
repositoryUrl: https://github.com/tylerlwsmith/pi-in-the-end
category: "Tinkering"
services: ["Tinkering"]
technologies:
  - featured: "Raspberry Pi"
  - featured: "Spleeter"
  - featured: "systemd"
  - featured: "Midi"
screenshot: /projects/in-the-end-pi.jpg
weight: 20
draft: true
hidden: true
---

During the pandemic, I bought a pile of Raspberry Pis so that I could build interesting non-web projects. I had studied music before I was a programmer, so I wanted to experiment with my digital audio gear. I wrote a Python script that would listen for the intro of Linkin Park's "In The End" on a digital piano, and then play the chorus when the correct sequence of notes was entered.

I wrote a [prototype](https://twitter.com/tylerlwsmith/status/1327802206020464640) that would print the first line of the chorus to the console when the notes were entered correctly, but I wanted it to play the actual chorus through a speaker. I couldn't find a non-awkward splice point in the audio before the chorus, so I used the TensorFlow-powered [Spleeter library](https://github.com/deezer/spleeter) for Python to separate the vocals from audio, then used [Reaper](https://www.reaper.fm/) to splice the audio back together correctly. To top off the project, I wrote a systemd unit file to ensure that the listener script would boot at startup without requiring manual intervention.
