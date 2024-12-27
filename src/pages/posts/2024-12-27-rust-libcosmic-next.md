---
layout: ../../layouts/ArticleLayout.astro
title: "Rust and libcosmic in Bottles Next"
description: "We've made some important decisions regarding the Bottles Next stack. Read on to learn more about the technologies we've chosen and why."
pubDate: 2024-12-27
comments: true
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
---

Over a year ago, we [announced Bottles Next](https://usebottles.com/posts/2023-10-05-bottles-next-a-new-chapter/), a complete rewrite of the Bottles project. Initially, the idea was to leverage web technologies to achieve the experience we envisioned for our users. However, as is often the case, extensive research, discussions, experiments, and continuous re-evaluations followed.

Why go through all this trouble? Well, to ensure we make the right choices.

After the announcement, we started experimenting with many technologies but, above all, listened to the community's feedback, particularly regarding concerns about Electron. This prompted us to explore other paths, leading us to prototype frameworks tailored to Bottles Next's specific needs.

And here we are today—the title already says a lot.

## Rust and libcosmic

We explored many frameworks and languages, from web-based to native ones. We even prototyped a reactive framework (rfw) in WebAssembly, with plans to extend its use to native apps.

We developed vnt, a web toolkit largely inspired by what libadwaita offers today.

While rfw and vnt will continue their journeys (because I had fun working on them), Bottles Next has a different future.

Bottles is a native app—arguably the most complex wineprefix manager out there—and it has proven its quality in fulfilling its role. After many deliberations and thanks to a new voice in the Next team, who helped us see new possibilities, we’ve decided that Bottles Next will have the following stack:

- Rust as the programming language for both client and server
- libcosmic as the client toolkit
- C# and .NET for the agent

For clarity, here’s the architecture diagram shared during the Next announcement:

![](https://usebottles.com/uploads/bottles-next-architecture.png)

Now let’s delve into these choices.

**Rust** is a highly performant and robust language with a growing community. To be honest, it wasn’t my first choice. I would have been more comfortable sticking with Go, but unfortunately, there are no quality GUI toolkits for Go that align with our goals:

![](https://usebottles.com/uploads/bottles-next-app-details.png)

This fidelity is made possible thanks to **libcosmic**, a modern graphical toolkit based on iced, developed by System76—the company behind Cosmic Desktop and Pop! OS. Their well-known commitment and quality give us confidence in using libcosmic.

> Special thanks to edfloreshz for creating an early and purely illustrative demo showcasing how libcosmic could achieve the desired results. You can find the original mockup [here](https://www.figma.com/design/iWNlSzDKpTucBNzQymGzyY/Bottles-Next?node-id=0-1&t=Itc8KLgyfKZbweBI-1) and the demo [here](https://github.com/edfloreshz/bottles-next-demo).

Finally, **C# and .NET** are almost a necessity since WineBridge is a service application that must run inside the Wine prefix and interact with Windows APIs as seamlessly as possible. What better way than using Microsoft’s own language and framework?

## Development Kickoff

In the coming days, the Bottles Next development team will be finalized, and the first task list will be drafted to achieve a basic version of all three components:

- Client
- Server
- Agent

We’ll also announce the public repositories where you can follow the ongoing work and contribute.

### Help Us

We kindly ask you to **consider making a donation**, even a small one, to help support development timelines and cover any necessary resources. For those interested, [visit our dedicated page](https://usebottles.com/funding/).

We deeply appreciate your support for the [future of Bottles](https://usebottles.com/posts/2024-12-02-future-of-bottles/).

## GTK?

Yes yes, a GTK client will be available for those who prefer it. We are aware that many users appreciate the current Bottles interface and would like to keep it. Don’t worry; we won’t leave you behind.

## One More Announcement

This update concerns both Bottles Legacy (the current maintained version of Bottles) and Bottles Next. In the coming weeks, the first version of [cpak](https://github.com/Containerpak/cpak) will be completed. This is a deduplicated, portable software distribution format entirely based on OCI images.

As you know, Bottles is officially distributed only as a Flatpak on [Flathub](https://flathub.org/apps/com.usebottles.bottles), but we want to experiment with this new format, confident it might appeal to some users. Initially, it will be considered alpha and offer limited support compared to the Flatpak version. However, we will explain everything in a separate article, along with the reasons why we see cpak as a good alternative for those who cannot or do not want to use Flatpak.

Thank you all for your attention,  
_Mirko B._