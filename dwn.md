---
layout: blocks
title: Bottles
date: 2020-07-12T20:00:00.000+00:00
page_sections:
  - template: navigation-header-w-button
    block: header-2
    logo: "/uploads/2020/logo.png"
    navigation:
      - link: "/"
        link_text: Home
      - link: "https://github.com/bottlesdevs/Bottles/issues/new/choose"
        link_text: Report a Bug
      - link: "https://github.com/bottlesdevs/Bottles/tree/master/po#help-translating-bottles-rocket"
        link_text: Help Translating
      - link: "https://github.com/bottlesdevs"
        link_text: 🚀 GitHub
    cta:
      url: "/download"
      button_text: Get bottles
  - template: hero-banner-w-image
    block: hero-3
    slug: features
    slug: swap
    headline:
      <strong>Bottles<span class="light">&nbsp;</span></strong><span class="light">2</span>
    content:
      Try the next release of Bottles! (AppImage)
    cta:
      enabled: true
      url: https://github.com/bottlesdevs/Bottles/releases/tag/continuous
      button_text: "Download v2"
    image:
      image: "/uploads/2020/screenshot-0.png"
      alt_text: Bottles v2
    background_image: "/uploads/2018/06/21/hero-2-bg.png"
  - template: hero-banner-w-image
    block: hero-2
    slug: features
    headline:
      <strong>Bottles<span class="light">&nbsp;</span></strong><span class="light">1</span>
    content:
      Download the first version of bottles (.deb)
    cta:
      enabled: true
      url: https://github.com/bottlesdevs/Bottles/releases/download/0.2.6/com.github.mirkobrombin.bottles_0.2.6_amd64.deb
      button_text: "Download v1"
    image:
      image: "/uploads/2020/screenshot-4.png"
      alt_text: Bottles v1
    background_image: "/uploads/2018/06/21/hero-2-bg.png"
  - template: simple-footer
    block: footer-1
    content: Made with ❤️ by Bottles Developers. Theme powered by ublocks.
---