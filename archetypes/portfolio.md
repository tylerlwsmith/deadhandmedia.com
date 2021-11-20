---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
projectUrl: https://{{ .Name }}.com
services: ["Front-End Development"]
technologies: ["Next.js"]
screenshot: /projects/{{ .Name }}.jpg
weight: {{ add (len (where .Site.RegularPages "Section" "==" "portfolio")) 1 }}
draft: true
hidden: true
---
