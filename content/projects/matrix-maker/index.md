---
title: "Matrix Maker"
date: 2021-11-19T21:24:30-08:00
projectUrl: https://matrix-maker.com
category: "Mobile Development"
services: ["Mobile Development", "UI Design"]
technologies:
  - featured: "React Native"
  - "Expo"
  - featured: "TypeScript"
screenshot: /projects/matrix-maker.jpg
weight: 4
draft: true
hidden: true
---

Long before I started coding professionally, I studied music in community college. I learned about writing music using a 12-tone Matrix in my atonal music class, which was a tedious process that required 134 tiny math problems to fill out a 12x12 grid. It's the perfect kind of problem for a computer to solve, so I learned to code and built a QBasic app to do my homework for me. It was the first application I ever wrote.

QBasic was already an antiquated language when I wrote the app in 2009, and the code I wrote was terrible. Once I became a professional programmer years later, I always wanted to rewrite it. When I decided to dig into mobile development, it seemed like an ideal application to build.

## The Challenge

I looked at several websites and apps for building 12-tone matricies and found most of them difficult to use. On some of them, deleting notes was difficult. On others, it was difficult to tell what row you were looking at.

My challenge was building an easy-to-use app that could fit almost all of the features a user would reasonably need on a mobile screen.

## Technical Approach

I built the project in React Native using Expo so I could leverage my skills with React Web and let Expo manage the parts I was less familiar with like compiling React Native applications.

## Design

The app is split between two screens: the matrix screen and a settings screen.

The matrix screen accepts user input via an on-screen piano and displays the generated matrix. When a user taps a key, it is added to the matrix. If the user taps a key that is already on the Matrix, it is removed and the notes after it move up to fill its space.

As I used the app, I found deleting all of the notes to reset the matrix was tedious, so I added a hidden menu that slides down when you tap the matrix and reveals a "reset" button.

The settings screen contains only one setting: a toggle that switches between sharps and flats on the notes. When I originally started building the app I had this setting on the matrix screen, but I found it took away too much space from the matrix itself on small devices, so I moved it to its own screen.

For the app icon, I went to Fiverr and worked with an incredible designer.

## Results

At the time of writing, the app is published on the Google Play Store and has a 5-star rating.
