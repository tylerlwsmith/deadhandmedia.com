---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
projectUrl: https://{{ .Name }}.com
repositoryUrl: null
category: "Front-End Development"
services: ["Front-End Development"]
technologies: ["Next.js"]
screenshot: {{ .Name }}.png
weight: {{ add (len (where .Site.RegularPages "Section" "==" "project")) 1 }}
draft: true
hidden: true
---
