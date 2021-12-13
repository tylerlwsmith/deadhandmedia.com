---
title: "Matrix Maker App"
date: 2021-11-19T21:24:30-08:00
projectUrl: https://play.google.com/store/apps/details?id=com.deadhandmedia.matrixmaker
category: "Mobile Development"
services: ["Mobile Development", "UI Design"]
technologies:
  - featured: "React Native"
  - "Expo"
  - featured: "TypeScript"
screenshot: matrix-maker.png
weight: 4
draft: false
hidden: false
---

I studied music in community college, where I learned about writing atonal music using a [12-tone matrix](https://www.youtube.com/watch?v=tLkYu2iNsRs). Building a 12-tone matrix is a tedious process that requires 134 tiny math problems to fill out a 12x12 grid. It's the perfect kind of problem for a computer to solve, so it seemed like an ideal application to build when I wanted to learn mobile development.

## UI Challenges

I explored several websites and apps for building 12-tone matrices and found most of them difficult to use. On some of them, deleting notes was tedious. On others, it was hard to tell what row you were looking at. And nearly all of the applications I tried required large screens to work well.

My challenge was building an easy-to-use app that could fit most of the features a user would need on a single tiny mobile screen.

## Leveraging Expo

I built the project with React Native using Expo so that I could leverage my skills with React Web and let Expo manage the parts I was less familiar with (like compiling React Native applications).

## The Completed App

The app's **matrix screen** accepts user input via an on-screen piano and displays the generated matrix. When a user taps a key, it is added to the matrix. If the user taps a key that is already on the Matrix, it is removed and the notes after it move up to fill its space.

{{< figure src="incomplete-grid.png" width="250" caption="The app's matrix screen" >}}

As I used the app, I found deleting all of the notes to reset the matrix was tedious, so I added a **hidden menu** that slides down when you tap the matrix and reveals a "Clear Matrix" button.

{{< figure src="hidden-menu.png" alt="The app's hidden menu" width="250" caption="Tapping the matrix will reveal a hidden menu that allows you to clear all notes" >}}

The **settings screen** contains only one setting: a toggle that switches the notes between sharps, flats and note numbers. When I originally started building the app I had this setting on the matrix screen, but I found it took away too much space from the matrix itself on small devices.

{{< figure src="settings.png" width="250"  caption="The app's settings screen" >}}

I knew I needed help designing an app icon, so I worked with
[a designer on Fiverr](https://www.fiverr.com/bima28). I'm incredibly happy with the result.

{{< figure src="app-icon.png" width="150" caption="The app icon" >}}

## Available on the Play Store

You can download Matrix Maker on the Google Play store using the link below.
