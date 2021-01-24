---
title: "Bottles 3, codename Refresh"
description: "We are working on a full UI remake for Bottles"
published: 2020-01-24
layout: post
published: false
comments: true
---
It's been a long time since v1 and very little since v2. But we are already
here to announce Bottles v3.

## Project Refresh 👗
The year 2021 began with a project called Refresh, this with the aim of
redefining the Bottles user experience.

Thanks to the new members of the Team (Noëlle and Alvar Lagerlöf) who studied
and designed the new Bottles interface.

### Onboard
The new interface is not just a beautiful dress but a real experience. The
user is guided from the first start, to the creation of the bottles, to the
execution of the Windows software.

![Welcome](/uploads/onboard-1.png)

At the first start, the new Onboard showing up and the user is faced with some
basic notions:
- what is wine
- what are bottles and runners

after this, the first runner is downloaded (all automated), finally a success
message is shown inviting the user to create his first bottle.

![First runner download](/uploads/onboard-2.png)

The creation of the bottle is now more beautiful to see, easy to understand 
and immediate. All fields provide a label so it is impossible not to know 
what you are doing.

The whole process is guided and **silent**. In fact, wine or third party dialog
will no longer appear, everything that matters will be shown on the screen,
without the need to leave Bottles.

![Bottle creation UI](/uploads/bottle-creation.png)

### My name is Handy, libhandy 😎
[libhandy](https://gitlab.gnome.org/GNOME/libhandy) is a library that expands
GNOME's GTK widget support and embraces responsive.

Many areas of Bottles have been rewritten using Handy widgets. Eg. the list of
bottles, now more minimal, less spaced:

![List of bottles](/uploads/bottles-list.png)

When there are no bottles, a help message appears prompting the user to create
the first one. There will be no more blank and incomprehensible pages.

The Dashboard is perhaps the screen that has undergone the most changes of all.

The page switcher is now part of the Titlebar and displays a context icon as 
well as the page title.

![List of bottles](/uploads/titlebar-switcher.png)

The "Dashboard" page is now called "Bottle", this shows all the details of
the previous version, in a vertical rather than horizontal layout.

The upper part of the screen gives access to the bottle management functions:
- bottle rename
- runner informations
- current versioning state (if versioning enabled)
- boot management (shutdown, reboot, kill processes)
- button for .exe/.msi file execution

Below is a list with the last programs used, immediately below we find all 
the wine tools, eg. winecfg, control panel, task manager, etc.

![Bottle's details UI](/uploads/dashboard.png)

The bottle preferences screen is now divided into clearer groups:
- Graphics (for all related things)
- System (for runner, dxvk and dll management)
- Audio (for the PulseAudio latency)
- Developers & Debug (for logs, Environment variables, DXVK_HUD and 
debugging things)

![Bottle's preferences UI](/uploads/bottle-preferences.png)

Other screens such as dependency management, installers and programs have 
been refreshed to complement the new UI.

![Other Bottles views](/uploads/other-views.png)

The dark theme switch has been moved to the Preferences screen, which has 
undergone a complete restyle and now has its own dedicated window.

Settings are now splitted into groups:
- Apperance
- General
- Wine runners
- DXVK versions
- Experiments

![Other Bottles views](/uploads/preferences.png)

### Experiments
Speaking of experiments, with v3 all the new features that require a test phase
and are therefore potentially unstable. They can be enabled individually from
the Preferences, for example it is possible to enable Versioning or the
Installers that are disabled by default.

## Under the hood 🛠
Progress has also been made behind the scenes, as mentioned now the bottles 
are created silently. We are also working on a silent and automated 
installation system for programs (nerd stuff
[here](https://github.com/bottlesdevs/tools/blob/main/routines.sh)).

Now the Bottles components (runners and dxvk at the moment) are installed via 
our new repository. Thanks to this repository it is possible to record the 
checksum of the single components to verify the downloads, moreover only the 
builds actually tested are included in the list and therefore made available 
to Bottles users.

The changes are so many and explaining them all in one article is impossible
but we are sure that the most nerdy among you know how to find them 🤓.

## Release date
It is still early to talk about dates but we are proceeding very quickly even
if with great attention to detail.

The new UI is very nice and we are proud of it but we prefer to release it 
only when it is complete, stable and well tested.

Anyone can help us with ideas and tips in the dedicated
[Issue](github.com/bottlesdevs/Bottles/issues/77).

~ Bottle's Developers

*Pssssst.. If you really want to test it, we have set up an Unstable 
[release](https://github.com/bottlesdevs/Bottles/releases/tag/continuous-unstable-gh)
on GitHub.*