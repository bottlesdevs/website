---
layout: ../../layouts/ArticleLayout.astro
title: "Bottles Next Got Its First Runner for macOS"
description: "Meet McSoda, the first runner built for Bottles Next on macOS, and see where the new client, stores and dependency platform stand today."
pubDate: 2026-08-15
thumb: /uploads/mcsoda/mcsoda-joined-the-family.png
background: /uploads/mcsoda/mcsoda-joined-the-family.png
comments: true
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
---

![McSoda joined the family](/uploads/mcsoda/mcsoda-joined-the-family.png)

Bottles Next has been designed for Linux and macOS since its [first announcement](https://usebottles.com/blog/2023-10-05-bottles-next-a-new-chapter.md), and the first tests on a real Mac have now begun. The missing piece was a runner able to create a prefix and connect Windows applications to macOS windows, audio, input and graphics.

We have that runner now and it is called **McSoda**. The can in the picture is the same one we drew when [Soda became the default Bottles runner in July 2022](https://usebottles.com/blog/2022-07-14-release-2022.7.14.md), more than four years ago, except this time I borrowed the `Mc` from McDonald's because Mac, Mc, it made me laugh and apparently that is still a valid naming process around here; Eduardo Flores from the Bottles Next team then decided that fries and a burger were essential to complete the work, so here we are. Yes, we are serious and competent. Can you honestly say otherwise?

## What is a Soda without a Mc?

[McSoda 11.0-4](https://github.com/bottlesdevs/wine/releases/tag/mcsoda-11.0-4) starts from the same Valve Wine 11 base used by Soda, carries its relevant patches to macOS and adds the open work published by CodeWeavers as part of CrossOver. In practice, it is Soda adapted to speak to macOS instead of Linux.

The runner includes the Wine Mac driver, CoreAudio support, the media stack used by launchers and applications, Wine Mono and Gecko, with support for both 32-bit and 64-bit Windows programs. Bottles Next downloads and manages the complete package through its component catalog.

WineD3D is always available, while people with Apple's Game Porting Toolkit installed can use D3DMetal for modern Direct3D games. The Toolkit remains a separate Apple installation under its own license and McSoda uses its graphics libraries when they are available.

## Building it where it has to run

Building a Wine runner for macOS is less accessible than preparing Soda on Linux. McSoda needs Apple's toolchain and system libraries, while the physical Macs available for Bottles Next testing belong to other members of the team; they are perfect for trying a real prefix or game, but asking someone to rebuild a large runner by hand every time a patch changes would make development painfully slow.

We moved the complete build to GitHub for this reason. An Intel macOS machine compiles McSoda as an x86_64 runner, then an Apple Silicon machine installs Rosetta and tests the exact archive people will download. It creates a fresh prefix, runs Windows programs in both architectures, opens a native Mac window and checks input, CoreAudio, media playback and the optional D3DMetal path before the release receives its checksum, source information, license and SBOM.

Once those automated checks pass, the team can spend its time testing McSoda through Bottles Next on real Macs instead of compiling it again. Those first sessions have been positive and have already found differences that a build alone could not show, which then become checks for the next release.

Oh Apple, if you want to sponsor us, send us a Mac and we will use it to get cool games running on macOS. We certainly will not say no, ahah.

## What you will need to try it on your Mac

The current McSoda package targets **Apple Silicon Macs running macOS 14 or newer**. It is an x86_64 runner, so **Rosetta 2** must be available. You can download the archive from the [McSoda release](https://github.com/bottlesdevs/wine/releases/tag/mcsoda-11.0-4) and try the runner directly with Wine:

```bash
curl -LO https://github.com/bottlesdevs/wine/releases/download/mcsoda-11.0-4/mcsoda-11.0-4-x86_64.tar.xz
tar -xf mcsoda-11.0-4-x86_64.tar.xz
xattr -dr com.apple.quarantine mcsoda-11.0-4-x86_64

export WINEPREFIX="$HOME/Library/Application Support/McSoda/test-prefix"
./mcsoda-11.0-4-x86_64/bin/wine wineboot -u
./mcsoda-11.0-4-x86_64/bin/wine "$HOME/Downloads/application.exe"
```

Game Porting Toolkit remains optional because WineD3D works without it, although D3DMetal will be the better choice for many recent Direct3D games. If the Toolkit is already installed, McSoda can find and use it.

These commands test McSoda itself and do not install Bottles Next. The graphical client is still under development and we will publish a separate article soon explaining how to try Bottles Next through its CLI on macOS.

## Bottles Next is taking shape around it

McSoda arrives while the Bottles Next backend continues to mature. The core already works, the command line client can create and manage bottles through it and the first macOS sessions are helping us improve the same code that will power the graphical client.

We are also working on the integrations for Epic Games Store, Steam and the other stores people expect to use from a gaming client.

The graphical client is moving in parallel. We are building its interface with our Rust toolkit on top of Iced, and `next-ui` already contains the controls needed to turn the [Bottles Next design on Figma](https://www.figma.com/design/iWNlSzDKpTucBNzQymGzyY/Bottles-Next?node-id=0-1&t=Itc8KLgyfKZbweBI-1) into the real client.

## A dependency platform built for Next

We also created a new publication platform for the runners, graphics components and Windows dependencies used by Bottles Next. Each release enters a versioned catalog with its source, checksum, platform and architecture, then becomes available to the client after review.

Large installers and nested archives are downloaded, verified and opened on the server instead of asking every computer to repeat the same extraction. The platform keeps the files it finds tied to their original source and revision, stores identical content once and joins shared requirements into the same download when several dependencies need them.

The original license decides what the platform can distribute. When a bundle permits its files to be redistributed, they remain attached to the source attribution and license that came with them; when only the original installer can be shared, Bottles downloads and verifies that installer instead. A DLL never leaves the platform without its origin and licensing information.

This makes dependencies smaller and faster to prepare whenever their licenses allow it, while preserving the original package everywhere else. McSoda is already published through this platform as its first macOS runner.

## Following Bottles Legacy into cpak

Bottles Next will also be distributed as a [cpak](https://cpak.it/), following the path opened by Bottles Legacy with [Bottles 66](https://usebottles.com/blog/2026-08-10-bottles-66.md). Legacy became the first large desktop application to adopt cpak as an official package beside Flatpak, which gave the format a real application, a real dependency graph and enough desktop integration to prove itself outside a demo.

cpak makes Linux applications easier to distribute by turning an OCI image and its manifest into a portable desktop package, while developers remain free to choose the base, dependencies, permissions and host integrations their software needs. One of the reasons we have relied on Flatpak for so long is that Bottles runs in the same controlled environment on every distribution, making builds reproducible and support far less dependent on the user's system; cpak keeps that quality and adds the flexibility we need, which makes it the perfect format for Bottles Next.

There is still work between this first runner and a Bottles Next release you can use every day, but the backend is running, the client is taking shape, the dependency platform is serving McSoda and Windows applications have started running through Bottles Next on a Mac.

[~ Mirko](https://bromb.in/)
