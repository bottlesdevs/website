---
layout: ../../layouts/ArticleLayout.astro
title: "Bottles 67.1: Adaptive Launch Gets Smarter"
description: "Bottles 67.1 improves Adaptive Launch, brings it to UMU games and fixes everyday problems in the Library."
pubDate: 2026-09-02
comments: true
is_release_day: true
is_release_day_color: '#7c19b8'
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
---

With **Bottles 67.1**, Adaptive Launch remembers what a program needs between launches. After the first few starts, it can prepare those files before Wine asks for them.

Update to Soda 11.0-7, open **Bottle Preferences**, go to **Performance** and enable **Adaptive Launch**. The first few launches build the profile. Existing profiles update automatically.

In release measurements, the median cold start was 3.38 percent faster and median major page faults fell from 16 to 1. The gain varies by program and machine.

The profile stays inside the bottle and contains file paths, never file contents. Nothing is uploaded.

## Adaptive Launch for UMU games

ProtoSoda 11.0-2 adds the same Adaptive Launch profile to UMU games. New installations receive it automatically. For an existing game, update ProtoSoda and select `protosoda-11.0-2` in its settings.

The first launch can also download Steam Runtime 4 when it is missing. You no longer need another launcher to prepare it.

## OpenXR without SteamVR

Soda 11.0-7 can connect a 64-bit Windows OpenXR application to the Linux runtime you already use, such as WiVRn or Monado. Select Soda and launch the application. There is no extra Bottles switch.

Compatibility still depends on the application and the runtime installed on the host.

## Runner updates keep your Windows profile

Updating Soda no longer resets an existing bottle's Windows user to `steamuser`. The same profile remains active, so saves and settings stay where you expect them.

Update the runner normally. No migration is required.

## ARM64

Soda 11.0-7 now has an ARM64 Linux archive for manual integrations. Official Bottles packages remain x86_64 while we finish the ARM64 build; we will announce it when it is ready.

## Library and settings fixes

The global **+** button now asks whether to create a bottle or install a game with UMU. Library entries stay sorted and disappear immediately when removed.

Opening the settings of a running program no longer changes its synchronization mode unless you change it yourself. This prevents the program from closing unexpectedly.

MangoHud now reads its custom Flatpak configuration. If you added an override only for `MangoHud.conf`, update Bottles and remove it after confirming your configuration loads. **Command arguments** can also be enabled again without recreating the shortcut.

A sandboxed UMU game starts without network access. Enable **Share Network** in its settings when the game needs online services.

The [Bottles 67.1 source release](https://github.com/bottlesdevs/Bottles/releases/tag/67.1) is published, with x86_64 packages on [cpak](https://cpak.it/store/Utilities/github.com/bottlesdevs/bottles) and [Flathub](https://flathub.org/apps/com.usebottles.bottles). [Soda 11.0-7](https://github.com/bottlesdevs/wine/releases/tag/soda-11.0-7) provides x86_64 and ARM64 archives. [ProtoSoda 11.0-2](https://github.com/bottlesdevs/wine/releases/tag/protosoda-11.0-2) is available for UMU games.

[~ Mirko](https://bromb.in/)
