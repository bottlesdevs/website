---
title: "Bottles 2 stable release is now available"
description: "Bottles 2.0.9.1 is the first stable release of Bottles 2."
published: 2020-01-02
layout: post
published: true
comments: true
---

**Bottles** is a project born in 2017 as a personal need and experiment. I 
needed to manage multiple Wine prefixes quickly and easily. At the time there were already many Wine prefix managers out in the wild, but I wasn't comfortable with any of them.

In 2017, I was using **elementaryOS** as my main distribution, and with the 
arrival of **AppCenter** I wanted to publish an application on the new store. For this reason, I decided to create Bottles, my first `Python + GTK + Granite` application to be published in the elementaryOS's AppCenter. A lot of work has been done since then, with other people that decided to join the project: they started to collaborate to improve Bottles, making it a mature and feature-rich program.
![Bottles from release 0.8 to 2.0.9.1](/uploads/bottles-history.png)
From version 0.8 to version 2.0.9.1, Bottles' code has been rewritten from scratch. In the image above you can see the evolution.

## Features

Bottles 2.0.9.1 has a lot of features. Let's see below the main ones, shall we?

- Create bottles (Wine prefixes) based on pre-configured environments, to 
  achieve greater software compatibility
- Create your own custom environment to experiment and test software
- Run Windows executables in your bottles from the context menu of 
  your File manager
- Bottles remembers the arguments you use to run a program
- Custom runners (Wine and Proton) and on-the-fly switch between versions
- Integrated support for DXVK
- DLL overrides without using winecfg
- Bottle tweaking with support to: esync, fsync, cache, ACO shaders compiler, 
  offload, etc.
- Bottles will check the integrity of the bottles and repair them if they're broken
- Winetricks has been replaced by our integrated dependency manager based on a community-driven repository
- Bottles will find the programs you install in the bottle and will propose them 
  to you on the Programs page
- Integrated Task manager for Wine processes
- Easy access to ProtonDB and WineHQ for support
- Configurations update system across Bottles versions
- Bottles backup (export/import)
- Import Wine prefixes from Bottles v1 and other managers
- Bottle versioning (experimental) allows you to save the state of a bottle to 
  restore it later
- ...and much more that you can find by installing Bottles!
  
## Installation
  
Here comes the big news, Bottles v2 is available in many package formats.
Officially we distribute our software as [AppImage](https://github.com/bottlesdevs/Bottles#appimage-eyes) or Flatpak from [Flathub](https://flathub.org/apps/details/com.usebottles.bottles). However, other users who believe in the project have decided to provide and maintain packages for various distributions:
- **Fedora**
  
  ```bash
  dnf install bottles
  ```
- **Arch Linux**
  - [bottles-git](https://aur.archlinux.org/packages/bottles-git)
  - [bottles](https://aur.archlinux.org/packages/bottles)
- [Open Suse](https://download.opensuse.org/repositories/home:/WhiXard/openSUSE_Tumbleweed/x86_64/)
- [Void Linux](https://github.com/void-linux/void-packages/pull/27066)
- [NixOS](https://github.com/bottlesdevs/Bottles/issues/72)

If you are interested, you can help us to [package](https://github.com/bottlesdevs/Bottles#unofficial-packages) Bottles for your favorite distribution!
  
## Bug & Feature request
  
This is a community-driven project, we want to know your opinion, know what the problems are and what are the features you want to see on Bottles. 
  
See you in the GitHub [Issues](https://github.com/bottlesdevs/Bottles/issues)!