---
layout: ../../layouts/ArticleLayout.astro
title: "Bottles Next, A Matter of Technology"
description: "Learn about the technologies we're exploring for Bottles Next and how you can contribute to the project."
pubDate: 2024-12-22
comments: true
user_nick: mirkobrombin
user_name: Mirko Brombin
user_tag: Founder
---

More than a year ago, we [announced](https://usebottles.com/posts/2023-10-05-bottles-next-a-new-chapter/) the beginning of the development of Bottles Next, a project aimed at solving a large number of architectural problems in Bottles' source code—issues that to date have prevented the implementation of new features without significant complications.

![Bottles Next](https://usebottles.com/uploads/bottles-next-classic-bottle-details.png)

Without going into too much detail, since everything was already covered in the initial announcement, we would like to remind you that Next, unlike Legacy (the current version of Bottles), is not a single monolith but is instead divided into three main components:

- Client
- Server
- Agent

This revolutionary structure, never before seen in a Wine prefix management software, ensures that the management of the Windows environment (commonly referred to as a wineprefix) occurs internally within the prefix itself using the same native Windows APIs reimplemented and supported by Wine. This means that it will no longer be necessary to manipulate long Linux commands with environment variables and workarounds to configure the prefix. Instead, the user makes a choice through the client, which is sent to the server as a well-defined instruction in a language that Bottles recognizes without complex interpretations (for example, without having to obtain strange outputs from commands or parse their structure). Subsequently, the server sends one or more instructions to the agent (an instance of WineBridge running within the relevant prefix) to execute them natively and waits for and handles the outcome.

This structure allows for more robust communication among all actors involved in the process of managing and configuring the prefix.

## Electron. The Pain in the Neck?

Although we received a good response to the Bottles Next announcement, it is undeniable that the announcement of using Electron left a sour taste. Among the most common phrases were:

- "another web-based software"
- "my RAM can't handle it anymore"
- "it was better native"

and many others, all duly noted and evaluated. Yes, we try to read all your comments, even when they are lost in the depths of Reddit :D.

So... we had left off with Electron being the technology to be used for developing the Bottles Next client. How has this evolved? Is it still the decision? Have the works begun?

Well... something has changed. The decision is no longer exactly that, and yes, the work has started and has been public for months.

Before starting to talk about the technologies we have identified, it is important to make, once again, a premise: Next is a project for which we are taking the necessary time; there is no deadline, and we do not want to set one. The idea is to do things in the best possible way with two clear fundamental points in mind:

- **Reusability**: Everything we develop in Next must be usable by third-party projects; it should not be an effort reduced to itself. This is not only to benefit the entire community but also to ensure future contributions. This applies to all the technologies we develop internally but also to the project itself. In fact, it will be possible to implement the Bottles server in third-party applications to have all the advantages of our native prefix management, anywhere.
- **Scalability**: Everything must be scalable. Next should not fear receiving updates, just as contributors should not fear working on the code.

So... back to the client. What have we decided?

### rfw, vnt, and Flutter

Over the past few months, I (Mirko) together with Luca di Maio, creator of Distrobox (not involved in Bottles development), have tested numerous technologies among libraries, toolkits, and web engines. To summarize in a decidedly non-exhaustive list:

- Electron
- Tauri
- Wails
- ReactJS
- VueJS
- Flutter
- GTK
- Qt
- iced
- fyne
- fltk
- Ebitengine
- SDL, Skia, and other low-level libraries

In all of these, we identified challenges and limitations that over time would pose a risk to the project. Among the lack of support for Wayland, hostility in the use of APIs, projects in constant change, lack of features like [CSD](https://en.wikipedia.org/wiki/Client-side_decoration), etc., we decided to narrow the circle down to two possible groups and identified two possible paths:

- **Web** (Tauri or Wails with vnt or rfw)
- **Native** (Flutter or rfw)

Here we see two terms we haven't yet discussed, but the most attentive have heard mentioned for months on other channels: vnt and rfw. What are they? Well, they are two experimental technologies developed by me.

[vnt](https://github.com/mirkobrombin/vnt) is a graphical toolkit developed in VueJS 3, so it requires a browser to function. The focus is on native feedback of elements; therefore, a developer coming from GTK should feel comfortable both in managing graphical components and in design. Below are two videos:

<video class="media-gallery__item-gifv-thumbnail" lang="en" role="application" src="https://files.mastodon.social/media_attachments/files/112/258/220/998/975/451/original/fc112e2b3692e412.mp4" autoplay="" playsinline="" loop=""></video>

<video class="media-gallery__item-gifv-thumbnail" lang="en" role="application" src="https://files.mastodon.social/media_attachments/files/112/260/359/864/385/014/original/061041cf2e6fb4d1.mp4" autoplay="" playsinline="" loop=""></video>

More demos [here](https://mastodon.social/@mirkobrombin/112252080737173945) and [here](https://mastodon.social/@mirkobrombin/112246238320239278).

The structure of the templates is very simple thanks to VueJS, but everything is further simplified by a series of ready-made layout components similar to those seen in GTK and libadwaita:

```vue
<template>
    <Window>
        <template #top>
            <TitleBar>
                <template #area>
                    <Button @click="goBack" icon="chevron_left" type="flat" />
                    <Button @click="toggleAddTaskPopOver" ref="addTaskButton" icon="add" type="flat" />
                </template>
            </TitleBar>
        </template>
        <template #content>
            <PopOver v-if="showAddTaskPopOver" :attachTo="$refs.addTaskButton" @close="toggleAddTaskPopOver"
                class="TaskManager-popover">
                <HBox :spacing="8" :margin="10" align="fill">
                    <TextField v-model="newTask" placeholder="Enter a new task" label="Task Name" />
                    <Button type="suggested" @click="addTask" icon="check" />
                </HBox>
            </PopOver>
            <Dialog v-if="showEditDialog" :title="'Edit Task'" @close="toggleEditDialog" :confirm="updateTask"
                confirmText="Save" :cancel="toggleEditDialog" cancelText="Cancel">
                <TextField v-model="editTaskContent" label="Task Name" />
            </Dialog>
            <VBox class="TaskManager-list" :spacing="8" :margin="10" align="fill">
                <Card v-for="(task, index) in tasks" :key="task.id" class="TaskManager-task">
                    <HBox align="center" :spacing="8" :margin="5">
                        <h2>{{ task.content }}</h2>
                        <Button @click="prepareEditTask(index)" icon="edit" />
                        <Button @click="deleteTask(index)" icon="delete" type="destructive" />
                    </HBox>
                </Card>
            </VBox>
        </template>
    </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TaskManager",
    data() {
        return {
            newTask: '',
            tasks: [] as { id: number; content: string }[],
            nextId: 1,
            showAddTaskPopOver: false,
            showEditDialog: false,
            editTaskIndex: null as number | null,
            editTaskContent: '',
        };
    },
    methods: {
        toggleAddTaskPopOver() {
            this.showAddTaskPopOver = !this.showAddTaskPopOver;
        },
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ id: this.nextId++, content: this.newTask });
                this.newTask = '';
                this.toggleAddTaskPopOver();
            }
        },
        prepareEditTask(index: number) {
            this.editTaskIndex = index;
            this.editTaskContent = this.tasks[index].content;
            this.toggleEditDialog();
        },
        updateTask() {
            if (this.editTaskContent.trim() !== '' && this.editTaskIndex !== null) {
                this.tasks[this.editTaskIndex].content = this.editTaskContent;
                this.toggleEditDialog();
            }
        },
        deleteTask(index: number) {
            this.tasks.splice(index, 1);
        },
        toggleEditDialog() {
            this.showEditDialog = !this.showEditDialog;
        },
        goBack() {
            this.$router.back();
        },
    },
});
</script>
```

More examples and an interactive demo are available [here](https://github.com/mirkobrombin/vnt/tree/main/example/src/views/samples).

vnt works on Electron, Tauri, Wails, and essentially any modern browser, making it an ideal and versatile candidate if we opt to remain with a web-based approach.

[rfw](https://github.com/rfwlab/rfw) is another experimental project at a lower level. It is a reactive framework developed in Go. The purpose of rfw is to allow the creation of both native and web-based apps (currently only web-based). Let's look at both.

rfw for web apps uses HTMLComponents to define and manage the user interface, leveraging RTML (Reactive Templating Markup Language), a markup language specifically designed for rfw. RTML allows the creation of dynamic structures with a simple and intuitive syntax, where each element is closely tied to rfw's native reactivity system.

### RTML

RTML is a language that combines the simplicity of HTML with reactive and dynamic data management. Through constructs like `@include`, `@if`, and `@foreach`, RTML allows embedding reactive logic directly into templates, as well as quickly accessing store values, both for reading and writing, through an facilitated syntax:

```html
<root>
    @include:header
    <div>
        <p>Current state: @store:default.sharedState</p>
        <input type="text" value="@store:default.sharedState:w" />
        
        @if:store:default.sharedState == "123"
        <div>State is set to 123</div>
        @else
        <div>State is not 123</div>
        @endif

        @foreach:items as item
        <p>Name: @prop:item.name</p>
        @endforeach
    </div>
</root>
```

This example shows how RTML can bind the page content to the state and variables, automatically updating the DOM only where necessary.

### Reactivity

rfw's reactivity is based on a system of direct binding between state variables and the DOM. Each variable, defined as a `ReactiveVar`, is observed and bound to specific DOM nodes via listeners. When a variable's value changes, only the portions of the DOM that depend on it are updated. This eliminates the need for diffing or using proxy/virtual DOM, as seen in other frameworks.

For example:
- When a store variable changes (`@store:default.sharedState`), the framework updates only the nodes that depend on that variable.
- In a loop defined by `@foreach`, adding or removing an element from the list results in updating only the related nodes.

### The Path to GLComponents

One of rfw's main goals is to create a unified approach for developing both web and native applications, leveraging the same reactive logic and structure. **GLComponents** represent the key to this bridge, allowing native rendering through graphics libraries like **Skia**, **SDL**, or **Ebitengine**, eliminating the need to depend on the browser or web technologies.

With GLComponents, the entire window is rendered natively, offering flexibility and high performance. This approach allows building advanced graphical applications, interactive tools, or games without the limitations imposed by web-based toolkits. The goal is to leverage low-level graphics libraries to gain complete control over rendering while ensuring reactive and modular management of interface elements.

Each component will be directly tied to rfw's reactive binding system, allowing granular updates only for elements affected by state changes. This approach maintains consistency and simplicity in both development and code maintenance, regardless of the interface's complexity.

### And Flutter?

Among native alternatives, **Flutter** is undoubtedly a powerful and versatile toolkit. It offers a declarative approach to building interfaces, supporting rendering across a wide range of platforms. However, it presents some limitations that make it less suitable for Bottles Next's specific needs.

One of the main issues concerns **code maintainability**. Its syntax, although elegant for small projects, tends to become complex and difficult to manage in larger, more modular applications like Bottles. Additionally, **some fundamental packages**, such as **xterm**, are not well-implemented or mature enough, creating further obstacles in developing advanced features (see [issue](https://github.com/canonical/workshops/issues/354)).

Nonetheless, it remains on our radar based on how developments evolve.

## Contribute

Bottles Next is an ambitious project that aims to redefine Wine prefix management, offering a modern, scalable, and highly performant experience. However, developing such a complex platform requires time, resources, and the contribution of an active community.

If you believe in our work and want to help us carry forward this vision, you can support us in various ways:

- **Donate** to support the ongoing development of Bottles Next and accelerate the implementation of new technologies. Every contribution, big or small, makes a difference. You can make a donation [here](https://usebottles.com/funding/).
- **Contribute** directly to the project through code, bug reports, or improvements by visiting the repositories of [vnt](https://github.com/mirkobrombin/vnt) and [rfw](https://github.com/rfwlab/rfw).
- **Share Your Thoughts**: Participate in the discussion on this [issue](https://github.com/bottlesdevs/Bottles/issues/3602). We are always open to community feedback and ideas to make Bottles Next even better.

Thank you for your support and for being part of Bottles' growth ❤️!