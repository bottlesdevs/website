---
layout: ../../layouts/ArticleLayout.astro
title: "Bottles 61 with Eagle"
description: "Introducing Eagle, the new analysis tool for Windows executables. Integrated into Bottles 61, it helps you understand what you're running and how to make it work better."
pubDate: 2026-01-25
---

Today is a special day for Bottles; we realized that 8 years have passed (this year will be Bottles' 9th birthday) since the birth of the project, and we didn't blow out the candles. Bottles took offense, started complaining, stopped working... you know how it goes, right?

But like every project, Bottles evolves, grows, learns new things, and matures. This is what happened in the past few weeks. Bottles now doesn't just launch Windows executables; now it stops, observes them, takes them apart... just like a child with a desire to discover how things work.

Today we present to you..

## Eagle Analysis

The new Eagle feature allows you to choose an executable and run a detailed scan on it, analyzing every single bit in search of clues.

![Eagle](/uploads/eagle/eagle-1.png)

But it's not the usual scan that limits itself to telling you "it's a 64-bit file, so don't use Wine32". Eagle goes much deeper, using established open-source technologies like [YARA](https://github.com/VirusTotal/yara) and [pefile](https://github.com/erocarrera/pefile). Eagle opens the binary and studies its internal structure, such as imported libraries, readable code sections, hidden patterns, and more.

Often the .exe file we launch is just a box, an installer or a launcher that contains a lot of valuable data that can tell us a lot about how it works; for this reason, Eagle, if it detects one of these (MSI, Inno Setup, compressed files, etc.), doesn't stop at the surface and performs a Deep Scan: it extracts the content into a temporary sandbox and scans the actual files that will be installed, trying to understand what's inside the box even before you open it.

![Eagle](/uploads/eagle/eagle-2.png)
![Eagle](/uploads/eagle/eagle-3.png)

But what happens if some of these files are outside this box? Almost always an executable is accompanied by its libraries (.dll). Eagle is smart enough to "look around": it analyzes nearby files in the same folder to find dependencies or technologies shipped together with the executable. And don't worry, we educated it well: it recognizes if it is in "chaotic" folders (like Downloads) and in that case works with surgical isolation to avoid false positives.

![Eagle](/uploads/eagle/eagle-4.png)

What does it detect? Spoiler: almost everything. We have written dozens and dozens of rules to teach Eagle to recognize the most disparate technologies, such as:

- Frameworks and Runtimes: It understands if an app is written in .NET (and tells you if it needs Framework 4.8 or Core!), if it uses WPF (which on Wine is tricky, we know), if it's an Electron app, Java, or if it uses Qt. Oh, and for Electron apps, it goes even deeper, analyzing the ASAR file to identify possible system calls that might not be supported or, much worse and much more likely, badly hardcoded.. ah, what a beautiful Windows world.
- Gaming Technologies: It detects if the game supports Ray Tracing, DLSS, FSR, or XeSS, or if it uses modern APIs like Vulkan or DirectX 12.
- Protections and Anti-Cheat: The sore point. Eagle warns you immediately if it finds Denuvo, EasyAntiCheat, BattlEye, or complex packers like Themida. If it finds kernel-level drivers that are an impassable wall on Linux, it tells you before you waste time configuring the prefix.
- ..and not only that, it detects the type of audio and video support and much more.

Eagle is transparent; it doesn't just give you a generic tip, it explains the reason behind every decision. It doesn't just tell you "Use GE-Proton". It tells you: "Recommendation: Use GE-Proton because I detected the use of WPF which needs patches for ChildWindows". Every single insight shows you the Source (which file triggered the rule?) and the Context (which technical string was found?).

It is a huge step to make Bottles not just a launcher, but a true traveling companion that helps you understand what you are running and how to make it run at its best.

Happy birthday Bottles, and welcome Eagle. 🦅