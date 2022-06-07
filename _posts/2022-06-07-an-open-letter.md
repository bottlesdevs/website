---
title: "Please don't unofficially ship Bottles in distribution repositories"
description: "An open letter to distributions publishing Bottles unofficially"
published: 2022-06-07
layout: post
published: true
comments: true
user_nick: theevilskeleton
user_name: TheEvilSkeleton
user_tag: Helper
---

We are developers and contributors of Bottles who want to provide the best support to our users.

As of now, we officially support Bottles from the AUR and Flathub. Many distributions unofficially ship Bottles in their respective distribution repositories. We completely appreciate the support!

Unfortunately, many of these unofficial packages behave abnormally due to the nature of distribution models. We've even been discussing dropping the official AUR package due to this.

Bottles is a complex software that receives frequent updates and requires several dependencies at a minimum specific version to properly work. For a long time, we have included workarounds in the codebase to disable features or change their behavior when dependencies are missing or incorrect. This requires extra work on our end that we cannot sustain and maintain forever, which as a side effect slows down the development of Bottles. An example is the GTK 4 and libadwaita port, which has been postponed for months due to the needed packages being absent in distribution repositories.

For more than a year, Bottles has been supplied mainly as a Flatpak, giving us the flexibility and freedom to proceed with development. This, unfortunately, does not translate with distribution packages. As a result, users may get a subpar experience with Bottles when provided unofficially, and may also get a bad impression. Furthermore, this increases open issues in our issue tracker and support channels on chat services we use. This also duplicates our work in the support aspect. Typically, our solution is to ask users to use Flatpak instead, because the switch usually fixes many of those problems, but this has become more and more tiring for us. We actively test the Bottles Flatpak to provide a complete and excellent experience to the user. This makes troubleshooting a lot easier because Flatpak gives the luxury of having a separation between the application and the host, with very little dependencies needed on the host's side. With that in mind, we can abstract almost any distribution specific problems.

**We respectfully ask packagers to not package Bottles anymore.** One of our priorities is to provide an excellent experience to the user. We do not want to resort to an approach that notifies the user that they are using an unofficial package. This would create distractions to users and will likely give them a horrible experience with Bottles.

**If you are a packager who packages Bottles unofficially, please reconsider this decision.** We spend a lot of our time with quality assurance (QA) with Flatpak, as well as supporting people who have problems with Bottles in issue trackers or in chat channels. The difficulty of maintaining workarounds and troubleshooting for distribution specific problems is time consuming and hinders our development.

We understand the need of providing a trusted source where users can obtain packages. However, we vastly prefer to provide no support than poor support, just so the user needn't deal with a bad experience with Bottles directly. We also prefer to avoid telling users that the packagers who unofficially packaged Bottles did so incorrectly and/or didn't test enough.

## Addendum – Jun 7 2022
Our invitation is addressed to all those who are packaging Bottles incorrectly and/or do not provide adequate tests, thus invalidating the user experience. We are happy to help anyone who would like to keep their package, adapting to our quality standards (i.e. making the application work as it intended).
