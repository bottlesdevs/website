---
layout: ../../layouts/ArticleLayout.astro
title: "Bottles 67: Your Bottle Remembers What It Needs to Start"
description: "Bottles 67 lets Soda and ProtoSoda remember how each bottle starts, and opens host OpenXR beyond SteamVR."
pubDate: 2026-09-02
comments: true
is_release_day: true
is_release_day_color: '#7c19b8'
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
---

With **Bottles 67.1 and Soda 11.0-7**, Adaptive Launch learns which files return during a program's first few starts. Enable it once and later launches can prepare those files before Wine asks for them, so a cold start has less work to do.

That memory now follows separate launches and works with ProtoSoda games installed through UMU. It stays inside the bottle. This release also keeps the bottle's Windows identity in place and makes the first UMU start reliable. Soda now has its first ARM64 Linux package too.

## Adaptive Launch remembers what comes back

The first Adaptive Launch profile was one growing list. A strange one-off start could matter as much as a file loaded every time. Soda 11.0-7 now remembers the five most recent completed launches and gives priority to files that return early and often. Existing profiles are upgraded automatically.

This matters most when a program has many libraries to open before its first window appears. The bottle can prepare the familiar files sooner and leave the unusual ones alone. Adaptive Launch is not an FPS switch; it only helps with startup, and the result will vary with the program, storage and current system state.

To use it, update to Bottles 67.1 and select Soda 11.0-7 or newer for the bottle. Open **Bottle Preferences**, go to **Performance** and enable **Adaptive Launch**. Then launch the program normally. The first launches teach the bottle and the following ones can use what it learned.

I kept that memory local. Bottles records file paths used during startup, never their contents. Nothing is uploaded.

## ProtoSoda remembers UMU games too

An UMU game running with ProtoSoda 11.0-2 now gets the same launch memory automatically. You keep UMU's game-specific fixes and Steam Runtime environment while the Wine side comes from Soda.

New UMU installations receive a compatible ProtoSoda through Bottles. For an existing game, update ProtoSoda in the runner manager and select `protosoda-11.0-2` in its settings. Older Proton-style runners continue to launch as before.

The first launch can download Steam Runtime 4 when the cache is empty. Bottles now completes that setup before placing the game in its dedicated sandbox, so you should no longer need another launcher to prepare the runtime first.

## OpenXR can use your Linux runtime

Soda can now connect a 64-bit Windows OpenXR application to the runtime already configured on Linux, such as WiVRn or Monado. SteamVR does not need to be running in the middle.

If you already have a working host OpenXR runtime, select Soda 11.0-7 and launch the application from Bottles. The bottle prepares the Windows side automatically. There is no extra Bottles switch to enable.

The current path covers 64-bit Windows OpenXR applications. Game support still depends on the title and the runtime installed on the host.

## Your Windows user stays in the bottle

Changing or updating a runner could make an existing bottle start as `steamuser`. Saves and settings remained on disk, but the program opened a different Windows profile and looked as if everything had disappeared.

Soda 11.0-7 preserves the Windows username already configured in the bottle when Wine updates the prefix. You do not need to change a setting. Update the runner and keep using the same bottle.

I also included a fix for Heroes of Might and Magic VII on high-core-count systems. It now sees eight processors by default, while an existing `WINE_CPU_TOPOLOGY` override still takes priority. Fullscreen child windows at non-default DPI and very long HTTP or HTTPS links receive fixes from the updated Valve base as well. All of these changes apply automatically.

## Soda reaches ARM64, Bottles comes next

Soda 11.0-7 now has its own ARM64 Linux archive. Windows ARM64 and ARM64EC programs run through the native side of the package, while bundled FEX support handles x86 and x86_64 Windows programs.

The archive is available today for anyone integrating Soda directly. Bottles itself is still distributed only for x86_64, so you cannot install the official Bottles 67.1 package on an ARM64 machine yet.

We are now working on the Bottles ARM64 package. The runner selection is already prepared to choose the matching Soda archive; the remaining work is to build and publish the application and its full dependency set for ARM64. We will announce it separately when it is ready to install.

The x86_64 package continues to use profile-guided optimization. There is nothing to enable for that either; selecting Soda 11.0-7 gives you the released package for your machine.

## The Library behaves like the rest of Bottles

Programs already in the Library now show **Remove from Library** and disappear immediately when removed. Entries stay sorted by name across bottles. Opening the settings of a running program also leaves its Wine synchronization mode alone when you did not change it, which prevents the program from closing unexpectedly.

The global **+** button now opens a choice: create a bottle or install a game with UMU. The UMU card remains in the Library, but the same two actions are available whichever main view you use. Cpak also remembers whether you selected Bottles or Library instead of sending you back to Library.

You do not need to migrate anything. Update Bottles and use the Library normally.

## UMU network access is your choice

A sandboxed UMU game starts with network access disabled. If the game needs online services, open its settings and enable **Share Network**. Leave it off for games that work locally.

The **Command arguments** switch can now be enabled again after it was turned off, so an existing shortcut no longer has to be recreated. MangoHud also receives the normal custom configuration path inside Flatpak. If you used a Flatpak override only to make `MangoHud.conf` visible, update Bottles and remove that workaround after confirming your configuration loads.

## How we verified this

Adaptive Launch was measured on the final Bottles 67.1 Cpak image with twelve alternating cold-cache pairs. The time spent preparing the learned profile was included. Control launches had a median of 1.559 seconds and Adaptive launches 1.504 seconds. The paired median improved by 3.38 percent, with Adaptive winning eight of twelve pairs. Median major page faults fell from 16 to 1. Seven separate cold-cache runs on CI-built packages were positive, with paired medians between 1.14 and 7.03 percent.

For ProtoSoda, we started three games with an empty Steam Runtime cache. Each run downloaded and verified SteamRT4 before starting ProtoSoda 11.0-2. It then executed a Windows command. The matching no-network test stopped the setup and left no false installed state.

The OpenXR check ran a Windows application through Soda against a simulated Monado headset while Steam and SteamVR were absent. The application loaded the Khronos OpenXR loader, created an instance and found the Monado system.

The x86_64 Soda package consumed its training profiles and beat the ordinary build by 1.15 percent on the release workload. The ARM64 package created a native Windows ARM64 prefix and also ran x86 and x86_64 Windows commands through its bundled FEX paths.

All runner binaries were built in GitHub Actions. We tested the released Bottles package through Cpak first, then repeated the MangoHud and clean UMU setup paths on the final Flatpak bundle before publishing 67.1 to Flathub.

The [Bottles 67.1 source release](https://github.com/bottlesdevs/Bottles/releases/tag/67.1) is published, with x86_64 packages on [Cpak](https://cpak.it/store/Utilities/github.com/bottlesdevs/bottles) and [Flathub](https://flathub.org/apps/com.usebottles.bottles). [Soda 11.0-7](https://github.com/bottlesdevs/wine/releases/tag/soda-11.0-7) contains the x86_64 and ARM64 archives, while [ProtoSoda 11.0-2](https://github.com/bottlesdevs/wine/releases/tag/protosoda-11.0-2) is ready for UMU games.

Bottles 67.1 is out. Your bottles already know who they are; now they can remember how they start too.

[~ Mirko](https://bromb.in/)
