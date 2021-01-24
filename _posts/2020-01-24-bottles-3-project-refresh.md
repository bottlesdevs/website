---
title: "Bottles 3, codename Refresh"
description: "We are working on a full UI remake for Bottles."
published: 2020-01-24
layout: post
published: false
comments: true
---

It's been a while since Bottles v1 was released, but not too much since Bottles v2 came out. However, now we want to reveal something new: Bottles v3.

## Project Refresh 👗

2021 began with a special project called Refresh, created with the purpose of redefining the Bottles' UX.

First thing first, we want to thank the new members of the team (Noëlle and Alvar Lagerlöf), who studied and designed the new Bottles' interface.

### Onboard

The new interface isn't just a beautiful dress for Bottles, but a real new experience. The user is guided from the first application launch to the creation of the bottles and the execution of software initially made for Windows.

![Welcome](/uploads/onboard-1.png)

The first time you'll launch Bottles v3, a new Welcome page will show up, and you will be able to learn some basic notions:

- What is Wine
- What are bottles and runners

After leaving the page, the first runner will be automatically installed on your system, and if everything went as it should, a message will invite you to create your first bottle.

![First runner download](/uploads/onboard-2.png)

The bottle creation process is now (really!) beautiful and easier to understand than before. Since a label is provided to every field, it will be impossibile to not know what you are doing. But wait! You have to know that the entire process is completely guided and, most importantly, totally **silent**.

Unlike Bottles v2, the Wine and third party dialogs will no longer appear on the screen, whilst you will see only messages that need to be displayed. And, obviously, everything works without the need to exit from Bottles.

![Bottle creation UI](/uploads/bottle-creation.png)

### My name is Handy, libhandy 😎

[libhandy](https://gitlab.gnome.org/GNOME/libhandy) is a library that expands GNOME's GTK widget support and embraces that thing called responsive. Many areas of Bottles have been rewritten using Handy widgets. For example, the bottles page is now pretty much minimal and with fewer spaces.

![List of bottles](/uploads/bottles-list.png)

When there are no bottles, a help message will appear, prompting the user to create their first bottle. No more blank and incomprehensible pages, we promise. The Dashboard is perhaps the screen that has undergone the most changes of any other page on Bottles.

The page switcher is now part of the Titlebar, and it displays a context icon as well as the page title.

![List of bottles](/uploads/titlebar-switcher.png)

The "Dashboard" page is now called "Bottle", and it shows all the Bottle details of the previous version, but in a vertical layout rather than an horizontal one. At the top of the screen you will get access to the bottle's management functions. They are the following:

- Bottle renaming
- Informations about the runner
- Current versioning state (If versioning has been enabled)
- Boot management (shutdown, reboot and kill processes)
- Button for .exe/.msi files execution

Below that, you can find a list showing the most recently used programs. After that, there is a section dedicated to the Wine tools, eg. winecfg, control panel, task manager, etc.

![Bottle's details UI](/uploads/dashboard.png)

The bottle preferences screen is now divided into clearer groups:

- Graphics (and everything related)
- System (for runner, dxvk and dll management)
- Audio (for the PulseAudio latency)
- Developers & Debug (for logs, Environment variables, DXVK_HUD and 
  debugging things)

![Bottle's preferences UI](/uploads/bottle-preferences.png)

Other screens, such as dependency management, installers and programs have been refreshed to match the new UI.

![Other Bottles views](/uploads/other-views.png)

The dark theme switch has been moved to the Preferences screen, which got a complete restyling and has its own dedicated window. Settings are now splitted into different groups:

- Appearance
- General
- Wine runners
- DXVK versions
- Experiments

![Other Bottles views](/uploads/preferences.png)

### Experiments

Speaking of experiments, with Bottles v3 the new features that require a test phase are potentially unstable. They can be enabled separately from the Preferences menu.

## Under the hood 🛠

Behind the scenes, the team did many things. As mentioned before, now the bottles are created silently, but that's not all! We are also working on a silent and automated installation system for programs (nerd stuff [here](https://github.com/bottlesdevs/tools/blob/main/routines.sh)).

Now the Bottles components (runners and DXVK at the moment) are installed via our new repository. Thanks to this repo it is possible to record the checksum of the single components to verify the downloads. Only the builds that got tested are included in the list and made available to Bottles users.

We did so many changes, and explaining them all in one article is impossible: however, we are confident that the most nerdy among you know how to find them 🤓.

## Release date

It is still early to talk about dates, but we are proceeding very quickly with great attention to detail. The new UI is very nice and we are proud of it. Despite this, we'd like to release Bottles v3 only when it is complete, stable and well tested.

Anyone can help us with ideas and tips in the dedicated [Issue](github.com/bottlesdevs/Bottles/issues/77) page on GitHub.

~ Bottle's Developers

*Pssssst.. If you really want to test it, we created an unstable [release](https://github.com/bottlesdevs/Bottles/releases/tag/continuous-unstable-gh) on GitHub.*
