---
title: "Bottles Next: A New Chapter"
description: "Today is release day!"
published: 2023-10-05
layout: post
thumb: https://raw.githubusercontent.com/bottlesdevs/data/main/backgrounds/Next.png
published: true
comments: true
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
co_user_nick: pietrodicaprio
co_user_name: Pietro di Caprio
co_user_tag: Public Relations Manager
---

If you've been a long-time Bottles user, you've gotten used to frequent releases that brought lots of new features and bug fixes. However, over the past year, this has become less frequent. This is because Bottles, like many other projects before it, has reached a point where implementing new features without making drastic changes to the codebase is no longer possible. This doesn't mean Bottles is stagnant; it's far from it. We're still adding small features and fixing critical bugs that don't require a complete codebase overhaul.

Bottles is now a mature software with six years of experience behind it. Its first release dates back to 2017, which is quite distant from its current vision.

![Bottles 0.0.7, first stable release published in 2017](/uploads/bottles-0.0.7-2017.png)

By "mature application," we don't mean a bug-free project or one that can't be improved further, but rather one that has reached the limit of its current form. We acknowledge Bottles' limitations, but we've always focused on delivering a user-friendly experience, making a complex tool like Wine accessible. User experience doesn't have a destination, it's a constantly evolving field driven by technological growth and changing user needs.

<img tooltip="Bottles Next, a new chapter begins (dark)" class="on-dark" src="/uploads/bottles-next-spot.svg" />
<img tooltip="Bottles Next, a new chapter begins" class="on-light" src="/uploads/bottles-next-spot-dark.svg" />

With this perspective, we've spent the recent months analyzing the entire project, considering its current shortcomings and limitations. This study has led to the design of a new project: Bottles Next.

## What is Bottles Next?

Bottles Next is our response to the needs of users and the market for running Windows software on Linux and Mac OS. We've redesigned Bottles from scratch to address all the issues and shortcomings that are currently unresolvable due to the existing codebase. The Next project is designed for scalability and extensibility over time, with the goal of avoiding the need for another complete rewrite.

### A Next-Gen User Experience

Bottles has gained millions of users on various Linux distributions with different Desktop Environments. Some Mac OS users who currently don't have access to Bottles have expressed their interest in using it, which is currently impossible without big changes to the codebase.

Based on this, we've considered how to provide a consistent user experience across different operating systems. Our decision is that Bottles Next should offer the same user experience everywhere but remain flexible enough for developers to create new Bottles frontends using various graphical toolkits. Bottles Next will provide both options. The new Bottles Next will have a graphical interface based on Electron and VueJS 3 (GTK user? Keep reading.), allowing us to tailor the user experience to Bottles users' needs. At the same time, it will leave room for anyone to develop new frontends using any graphical toolkit and programming language.

> Side note: Bottles has always been a GTK-based tool, and this won't change. We will continue to maintain a second frontend based on GTK (and Adw widgets) to satisfy users who prefer the current graphical interface. This is possible thanks to the new architecture, which allows us to create multiple frontends for the same backend without duplicating code or big efforts.

### Two Usage Modes

After much consideration, we've realized it's impossible to provide a single user experience that satisfies both novice and advanced users. They have different needs and approaches to using Wine, and trying to cater to both parties could introduce unnecessary complexity or remove features that are useful to one group. Therefore, Bottles Next will offer two usage modes: Next and Classic.

![Bottles Mode Choice](/uploads/bottles-next-welcome.png)

The Next mode simplifies Bottles usage significantly. There won't be individual bottle management; Bottles will create and manage a single bottle, leaving users with the task of installing and running the software they need. The Next bottle will use a layering concept to isolate applications, dependencies, and configurations. This means that the underlying wineprefix will be the same, but each application will have its settings (DXVK, VKD3D, FSR, desktop resolution, environment variables, launch options, dependencies, etc.). This minimizes the risk of bottle breakage to just external interferences.

<div class="grid-pics">
    <img tooltip="Bottles Next App Details" src="/uploads/bottles-next-app-details.png" />
    <img tooltip="Bottles Next App Settings" src="/uploads/bottles-next-app-settings.png" />
</div>

The classic mode, on the other hand, will provide advanced users with the same bottle management capabilities as before. It will introduce many new features for taking full control of their bottles in different environments (Gaming, Software, Custom, and Next). Users can still create Next-type bottles, incorporating the layering and application-specific configuration concepts.

<div class="grid-pics">
    <img tooltip="Bottles Classic Bottle Details" src="/uploads/bottles-next-classic-bottle-details.png" />
    <img tooltip="Bottles Classic Bottle Settings" src="/uploads/bottles-next-classic-bottle-settings.png" />
    <img tooltip="Bottles Classic Bottle Creation" src="/uploads/bottles-next-bottle-creation.png" />
    <img tooltip="Bottles Classic Bottle Creation - Progress" src="/uploads/bottles-next-bottle-creation-progress.png" />
</div>

In short, there's something for everyone and every need.

### A New App View

Bottles is a tool for running Windows software on Linux (and Mac OS starting with Next), with gaming being the primary use case for most of our user base. For this reason, we've decided to provide access to some statistics and useful information for gamers, which can also be appreciated by users running other types of software.

In the application screen, there will be an Insights view that allows users to see the runtime of an application compared to others. By clicking on these values, users can access various features, such as setting alerts and actions when a certain usage time is reached. This feature is useful for those who want to limit their PC time, especially for children or people with specific needs.

### A New Library

The library was a highlight of 2022 for Bottles, allowing users to add their favorite software from all their bottles for easier access. In Bottles Next, the library plays a crucial role, especially on gaming devices like the Steam Deck.

![New Library](/uploads/bottles-next-library.png)

The new library won't just be a collection of favorite software; it will also suggest which software to add without users needing to search through their bottles. Among other things, the new library will support customized covers, direct access to software settings, a quick view of usage time, and more.

In Next mode, the library will also serve as a software installer. Users can search for any software in the search bar, and if it's not installed, Bottles Next will provide access to its automated installer if available or offer manual installation through an executable provided by the user.

![Bottles Next Software Installer](/uploads/bottles-next-software-installer.png)

### Steam Deck Ready

Bottles is widely used on the Steam Deck, providing access to major game stores like Epic Games Store, EA Store, Ubisoft, Battle.net, and many others. Unfortunately, Bottles is not optimized for small screens, but this changes with Bottles Next, thanks to the Large Coverage mode.

![Bottles Next Large Coverage](/uploads/bottles-next-large-coverage.png)

Large Coverage is a feature that will be automatically enabled on the Steam Deck but can be toggled on and off on any device. It adapts the graphical interface by removing unnecessary elements and enhancing accessibility on small screens.

### Accessibility

Among the many goals of Bottles Next is accessibility for users with disabilities. The interface will allow users to select different color adaptations for those with various types of color blindness. It will offer a high-contrast mode for easier reading, ensure compatibility with screen readers, and provide a resizing option for users with visual impairments.

The new interface uses a default color scheme designed to reduce eye strain, but users can choose from other palettes based on their preferences.

### Parental Control

Bottles has matured to the point where it must take responsibility for parental control. Since it allows the installation of Windows software on Linux and Mac OS, it can potentially bypass parental control filters. For this reason, we've introduced an in-house parental control system that allows parents and legal guardians to limit access to certain Bottles features, such as running new executables or restricting access to pre-installed applications.

Sorry, kids, when mom says it's time for homework, it's homework time.

## Under the Hood: A Whole New Engine

Bottles Next represents a revolution not only in user experience but also in its internal architecture. While Bottles currently relies heavily on Python and shell commands for the backend and wineprefix management, Bottles Next has embraced a new language and methodology to improve performance and prefix management.

### Embracing Go: Performance and Efficiency

One of the major changes under the hood is the adoption of Go as the primary language for Bottles Next's backend development. Go is known for its exceptional performance, resource efficiency, and concurrency management, along with its straightforward learning curve, which is crucial for attracting new contributors to the project. This choice enables us to offer greater responsiveness and speed in executing operations, significantly improving the user experience.

Moreover, Go greatly simplifies the distribution process, allowing the creation of standalone executables for various platforms without external dependencies, making Bottles Next highly portable and compatible.

### Farewell to Shell Commands

Another significant change is how wineprefixes are managed. Currently, Bottles modifies wineprefixes using shell commands, but Bottles Next introduces a completely new approach: efficiency and scalability. In Next, prefix management happens directly from within the prefix itself, eliminating the need for external shell commands. This approach provides greater flexibility and control over the Windows application runtime environments. Users can configure application-specific settings within the wineprefix, including DirectX settings, environment variables, and more, and Bottles will instruct the prefix to apply these changes, without using shell commands.

### A New Architecture

Bottles Next has been designed with a three-component architecture: Server, Client, and Agent. These three components work together to provide a smooth, efficient, and consistent user experience.

![Bottles Next Architecture](/uploads/bottles-next-architecture.png)

#### The Server - The Heart of Bottles Next

The Server (local) is the core of the system, handling all wineprefix and Windows application management operations. One of the main innovations is the adoption of a communication protocol (we're evaluating gRPC) instead of traditional commands. This makes communication between the Server and other components more efficient and clear, eliminating any possibility of command interpretation errors.

The Server exposes the protocol that allows the Client and Agent to interact with the Bottles Next system. It manages the creation, launch, and maintenance of wine prefixes, providing statistics and usage information.

#### The Client - Versatile User Interface

The Client is the point of communication with the Bottles server, serving as a graphical frontend for Bottles and can be used by other applications requiring access to wineprefix management through Bottles. Its flexibility allows developers to create new frontends using various graphical toolkits and programming languages of their choice.

The primary client for Bottles Next will be the new Electron-based user interface (with TypeScript and VueJS 3), offering a modern and customizable user experience, as described earlier.

#### The Agent (WineBridge) - Your Inside Contact

The Agent, also known as WineBridge, is a key component inside the wineprefix. Developed in C# and .NET, it manages all operations within the prefix itself, including software execution, registry key management, process management, and more.

Using the Agent allows cleaner and direct communication between the Server and the wineprefix, eliminating the need for complex wine commands. This architecture significantly simplifies wineprefix management and provides more flexibility for developers dealing with wine prefixes.

Thanks to C# and .NET, WineBridge can make native calls using the WinAPI directly. This allows access to and exposure of many features that are currently only accessible throught the command line or integrated tools like the task manager, debugger, uninstaller, etc. These tools are nearly all implemented and accessible in Bottles today, but they don't provide a consistent and smooth user experience.

## Bottles reaches the Clouds

Bottles Next will have an **optional** cloud feature, which allows you to backup and restore your bottles and applications in just one click, or share your environments with friends and colleagues over the internet.

> This feature is still in the design phase, so we can't provide more details at this time. Keep an eye on this blog for updates.

## Environments become Installers

One of the most famous features of Bottles is its installers, we developed a structure which allows the community to write their own installers and publish them on our repository. This is something already seen in other utilities like Lutris, but our approach was different, Bottles has its own dependencies system which does not rely on winetricks or other tools, this allows us to provide a more solid experience to the user, as well as more control over the installation process.

Unfortunately, however, creating installers currently requires a certain level of knowledge of the Bottles structure and several hours, if not days, of analysis and testing.

In Bottles Next this changes, the user can use the development tools integrated into Bottles to debug applications, experiment with different configurations and transform entire bottles into Bottles-compatible installers. Sci-fi right?

## When?

Soon, we hope, but there is much work to be done. Bottles Next is an exciting project, but it will take months of hard work. We will release updates when possible, so keep an eye on this blog.

## What Will Happen to Bottles Now?

Nothing. Bottles will continue to receive bug fixes and possibly small, low-impact features. However, the main effort of the team will be focused on the Bottles Next project.

## How can I help?

We're always looking for new contributors to the project. If you're interested in helping us, please join our [Discord server](https://discord.gg/wF4JAdYrTR) and contact us via the `#dev` channel.

You can also help us by donating. Please take a look at our [funding page](/funding) for more information.

## So, Are You Abandoning GTK?

No. Did you read the article?

We'd like to thank all team members, sponsors, and users who have brought Bottles to this point and started this new journey.

_ The Bottles Team
