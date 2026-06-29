export const en = {
    header: {
        features: 'Features',
        gaming: 'Gaming',
        appStore: 'App Store',
        database: 'Database',
        funding: 'Funding',
        blog: 'Blog',
        docs: 'Docs',
        download: 'Download',
    },
    appStore: {
        title: 'App Store',
        description: 'Browse and install community-maintained installers for your favorite Windows applications.',
        searchPlaceholder: 'Search installers...',
        publish: 'Publish your installer',
        loading: 'Fetching installers from the database...',
        filters: {
            all: 'All',
            platinum: 'Platinum',
            gold: 'Gold',
            silver: 'Silver',
            bronze: 'Bronze'
        },
        card: {
            details: 'Details',
            install: 'Install'
        },
        details: {
            loading: 'Loading app details...',
            notFound: 'App not found',
            back: 'Back to App Store',
            aboutGrade: 'About this {grade} app',
            grades: {
                bronze: 'This application works but not in the best way. The installer has configured your bottle to give you the best possible experience but you have to expect glitches, inaccessible features (e.g. multiplayer if it\'s a game) and other problems. In the future, this installer may receive updates to improve the result.',
                silver: 'This application works fine. There are some glitches, but they do not affect the application\'s functionality. All features are accessible and work as expected.',
                gold: 'This application works in the best way. There may be rare glitches but they do not affect the application\'s functionality. All features are accessible and work as expected.',
                platinum: 'This application works in the best way. There are no glitches. All features are accessible and work as expected, and the overall experience is smooth.',
            },
            dependencies: {
                title: 'Dependencies',
                description: 'The following dependencies will be automatically installed with this app:',
                noDescription: 'No description available.',
            },
            configuration: {
                title: 'Configuration',
                description: 'The following configuration will be applied to your bottle:',
                enabled: 'enabled',
                disabled: 'disabled',
            },
            install: 'How to Install',
            readReview: 'Read review',
            review: 'Review for',
            disclaimer: 'Bottles does not re-distribute or host the files but only downloads them from the vendor\'s official sources. These files are checked by our maintainers and do not contain viruses. However, they may be subject to copyright or licenses of different types, including proprietary ones.',
            wineDb: 'More info on WineDB',
            protonDb: 'More info on ProtonDB',
        }
    },
    hero: {
        badge: 'Latest Release: ',
        badgeLoading: 'Loading Release...',
        title: 'Bottles 61',
        titleHighlight: 'is coming.',
        titleHighlight: 'is coming.',
        subtitle: 'Easily run Windows software on Linux with Bottles! In just a few clicks.',
        simpleSubtitle: 'Run Windows software on Linux with ease.',
        getNotified: 'Get Notified',
        getNotified: 'Get Notified',
        readPreview: 'Read Preview',
        newsletter: {
            dontMiss: "Don't miss the launch",
            subscribed: "You're on the list!",
            description: 'Subscribe to our newsletter to get notified the moment Bottles 61 is released.',
            subscribedDescription: "We'll notify you as soon as Bottles 61 is available for download.",
            placeholder: 'Enter your email',
            notifyMe: 'Notify Me',
            privacy: 'We respect your privacy. Unsubscribe at any time.',
            close: 'Close',
        },
    },
    heroReleased: {
        release: 'Release ',
        release: 'Release ',
        newRelease: 'New Release',
        subtitle: 'Your favorite Windows software on Linux! With just a few clicks.',
        downloadButton: 'Download',
        releaseNotes: 'Read Release Notes',
        modal: {
            whatsNew: "What's New",
            version: 'Version ',
            fetching: 'Fetching release notes...',
            releasedOn: 'Released on GitHub',
            viewFull: 'View Full Release',
        },
    },
    eagleBanner: {
        title: 'Meet Eagle',
        badge: 'New in 61',
        description: 'Intelligent binary analysis for Windows executables',
        button: 'Discover',
    },
    grantBanner: {
        title: 'Bottles funded by NLnet',
        badge: 'Grant Awarded',
        description: "We're thrilled to join NLnet's 2025 Commons Fund. This grant will accelerate the development of Bottles Next.",
        learnMore: 'See what the grant enables',
    },
    features: {
        title: 'Everything you need.',
        titleHighlight: "Nothing you don't.",
        subtitle: 'Bottles abstracts the complexity of Wine configurations into a clean, elegant interface. Focus on your applications, not the configuration.',
        gaming: {
            title: 'Gaming Ready',
            description: 'Pre-configured environments tailored for gaming. Support for Steam, Epic, and more stores out of the box.',
        },
        sandboxed: {
            title: 'Sandboxed',
            description: 'Built on Flatpak, Bottles keeps your system clean and secure by isolating Windows applications.',
        },
        versionManager: {
            title: 'Version Manager',
            description: 'Easily manage and switch between different Wine, Proton, and DXVK versions per bottle.',
        },
        dependencies: {
            title: 'Dependencies',
            description: 'Install critical dependencies like .NET, Visual C++, and fonts with a single click.',
        },
        versioned: {
            title: 'Versioned',
            description: 'Create snapshots of your bottles at any time. Experiment freely and restore to any previous state if something breaks.',
        },
        highPerformance: {
            title: 'High Performance',
            description: 'Features like FSR, DLSS, and Esync/Fsync are easy to toggle for maximum performance.',
        },
        wineBridge: {
            title: 'WineBridge',
            description: 'A .NET bridge to execute Windows instructions directly from within Wine, using Windows APIs.',
        },
        installers: {
            title: 'Integrated Installers',
            description: 'Access a community-driven library of installers for popular Windows applications. Install Epic Games, Battle.net, Adobe software, and hundreds more with just one click.',
            button: 'Browse Installers',
        },
        eagle: {
            title: 'Eagle',
            badge: 'Beta',
            description: 'Advanced automated analysis for Windows executables. Eagle detects patterns, dependencies, and engines to suggest the best configuration for your software.',
            button: 'Discover Eagle',
        },
        gamingCard: {
            badge: 'Next Level Experience',
            title: 'Are you a Gamer?',
            description: 'Discover how Bottles transforms Linux gaming with Proton support, integrated stores, and automatic game detection.',
            button: 'Explore Gaming',
        },
        runnersCard: {
            badge: 'Core Technology',
            title: 'Meet the Runners',
            description: 'Learn about Soda and Caffe, our custom-built runners designed to provide the best compatibility and performance.',
            button: 'Learn More',
        },
        bottlesNext: {
            badge: 'The Next Chapter',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'A complete rewrite in Rust. Redefining Wine prefix management with a revolutionary Client-Server architecture.',
            explore: 'Explore the Future',
            viewSource: 'View Source',
        },
    },
    runners: {
        badge: 'Core Technology',
        title: 'Meet the',
        titleHighlight: 'Runners',
        subtitle: 'Runners are the heart of Bottles. They are the compatibility layers that allow Windows software to run on Linux. We maintain our own optimized runners to ensure the best possible experience.',
        soda: {
            badge: 'Default Runner',
            title: 'Soda',
            upgrading: 'We are working to upgrade it to Wine 10.0!',
            description1: 'Soda is our flagship runner, designed to solve compatibility issues and decrease the risk of regressions found in upstream Wine.',
            description2: "Based on Valve's Wine (used in Proton), Soda includes patches from Proton, TKG, and GE. It is optimized specifically for Bottles, offering a \"sparkling\" experience for both gaming and applications.",
            valveWine: "Valve's Wine Base",
            valveWineDesc: 'Built on the robust foundation used by the Steam Deck.',
            patches: 'Curated Patches',
            patchesDesc: 'Includes the best fixes from TKG, GE, and Proton.',
        },
        caffe: {
            badge: 'Legacy & Stability',
            title: 'Caffe',
            upgrading: 'We are working to upgrade it to Wine 10.0!',
            description1: "Caffe is based on upstream Wine and strictly follows its updates. It's designed for users who need the absolute latest features from WineHQ, or for legacy applications that might behave differently on Valve's Wine base.",
            description2: 'While Soda is the default, Caffe remains a crucial part of our ecosystem, ensuring we have a runner that tracks upstream development closely while still applying our essential patches.',
            upstream: 'Upstream Focus',
            upstreamDesc: 'Closely tracks WineHQ releases for bleeding-edge features.',
            alternative: 'Alternative Choice',
            alternativeDesc: "Perfect when an app doesn't play nice with Proton-based runners.",
        },
        comparison: {
            title: 'Runner Comparison',
            feature: 'Feature',
            sodaRecommended: 'Soda (Recommended)',
            caffe: 'Caffe',
            vaniglia: 'Vaniglia',
            base: 'Base',
            bestFor: 'Best For',
            patches: 'Patches',
            releaseCycle: 'Release Cycle',
            valveWine: "Valve's Wine (Proton)",
            wineHQ: 'WineHQ (Upstream)',
            wineHQStaging: 'WineHQ (Staging)',
            gamingModern: 'Gaming & Modern Apps',
            generalPurpose: 'General Purpose',
            testingVanilla: 'Testing / Vanilla',
            protonTKG: 'Proton + TKG + GE',
            bottlesSpecific: 'Bottles Specific',
            minimalNone: 'Minimal / None',
            independent: 'Independent',
            followsWineHQ: 'Follows WineHQ',
        },
        contribute: {
            badge: 'For Developers',
            title: 'Contribute to the Core',
            description: 'Our runners are open source and built with transparency. Want to help improve compatibility? Check out our build tools or monitor the latest CI builds.',
            viewSource: 'View Source Code',
            checkCI: 'Check CI Builds',
            buildStatus: 'Latest Build Status',
            passing: 'Passing',
            building: 'Building...',
            autoGenerated: 'Builds are automatically generated and tested.',
            viewWorkflows: 'View all workflows',
        },
    },
    gaming: {
        badge: 'Gaming on Linux',
        title: 'Level Up Your Gaming Experience',
        subtitle: 'Bottles makes it incredibly easy to run Windows games on Linux. From AAA titles to indie gems, play your favorite games with optimized performance.',
        easySetup: {
            title: 'Easy Setup',
            description: 'Create gaming bottles with pre-configured settings for optimal performance.',
        },
        stores: {
            title: 'Multiple Stores',
            description: 'Install and manage games from Steam, Epic Games, GOG, and more.',
        },
        performance: {
            title: 'Maximum Performance',
            description: 'FSR, DLSS, Esync, Fsync - all the performance features at your fingertips.',
        },
        compatibility: {
            title: 'Wide Compatibility',
            description: 'Powered by Proton and our Soda runner for excellent game compatibility.',
        },
        discover: 'Discover Gaming Features',
    },
    gamingPage: {
        hero: {
            title: 'Bottles is also',
            titleHighlight: 'for Gaming.',
            subtitle: 'Play on Linux just like you do on Windows. No terminal required.',
            download: 'Download Now',
        },
        platformHub: {
            title: 'All your platforms',
            titleHighlight: 'in one place.',
            description1: 'Customize your Windows environment with ease. The most popular gaming platforms are already available as integrated installers in Bottles.',
            description2: 'Epic Games Store, GOG Galaxy, EA App, Battle.net, you don\'t have to do more than choose what you want. Bottles handles the dependencies, font installation, and configuration automatically.',
            description3: 'Create a gaming bottle, install your favorite store, and start playing right away. Just like Windows, but better.',
            documentation: 'Check the documentation',
        },
        integration: {
            title: 'Seamless Integration',
            description: 'Bottles goes beyond simple installation. It automatically detects installed games from these launchers and populates your library, giving you a unified game launcher experience. No manual configuration needed.',
            epic: 'Epic Games Store',
            ubisoft: 'Ubisoft Connect',
            steam: 'Steam',
        },
        proton: {
            title: 'Steam & Proton Integration',
            prefix: {
                title: 'Proton Prefix Management',
                description: 'Create and manage bottles using Valve\'s Proton or GE-Proton runners. Bottles leverages the official Steam Runtime environment to ensure your Windows games run with the exact same compatibility layer used by the Steam Deck.',
            },
            bridge: {
                title: 'Steam Library Bridge',
                description: 'Already have games installed via Steam Native? Bottles automatically detects your Steam Library and lists your Proton games as bottles. This allows you to manage their settings, dependencies, and environment variables directly from the Bottles interface.',
            },
            protondb: {
                title: 'Complete ProtonDB Support',
                description: 'Bottles is designed to work seamlessly with the vast ecosystem of Proton-compatible games. If a game is rated playable on ProtonDB, it works in Bottles. Check compatibility ratings, user reports, and launch options instantly.',
                button: 'Check Compatibility',
            },
        },
    },
    eaglePage: {
        hero: {
            beta: 'BETA',
            title: 'Meet',
            titleHighlight: 'Eagle',
            description: 'No more blind runs. Eagle scans binaries, detects patterns, maps dependencies, and suggests the perfect configuration, in seconds.',
            download: 'Download Bottles',
        },
        howItWorks: {
            title: 'How Eagle Works',
            description: 'In seconds, Eagle performs a comprehensive multi-stage analysis to understand exactly what your executable needs.',
            steps: {
                peParsing: {
                    title: 'PE Parsing',
                    description: 'Reads the executable structure, imports, sections, and metadata.',
                },
                yaraScanning: {
                    title: 'YARA Scanning',
                    description: '50+ pattern rules detect engines, frameworks, installers, and threats.',
                },
                contextAnalysis: {
                    title: 'Context Analysis',
                    description: 'Scans neighbor files, Unity Data folders, and .NET configs.',
                },
                suggestions: {
                    title: 'Suggestions',
                    description: 'Generates optimized configuration and dependency recommendations.',
                },
            },
        },
        detection: {
            title: 'Detects Everything',
            description: "From graphics APIs to game engines, from DRM systems to installer formats. Eagle's YARA rules and DLL mapping cover it all.",
            categories: {
                graphics: { title: 'Graphics', description: 'DirectX 8-12, Vulkan, OpenGL, DXGI, NVAPI, AMD AGS, PhysX' },
                audio: { title: 'Audio', description: 'XAudio, FMOD, Wwise, OpenAL, DirectSound, Miles, Bink' },
                runtimes: { title: 'Runtimes', description: '.NET Framework/Core/5+, Mono, VC++ 2008-2022, Java, Python, Lua' },
                engines: { title: 'Engines', description: "Unity, Unreal, Godot, CryEngine, Source, Ren'Py, RPG Maker" },
                protection: { title: 'Protection', description: 'EasyAntiCheat, BattlEye, Denuvo, VMProtect, Themida' },
                installers: { title: 'Installers', description: 'NSIS, Inno Setup, MSI, InstallShield, WiX, WISE, Squirrel' },
            },
        },
        intelligence: {
            title: 'Not Just a Scanner',
            description: "Eagle doesn't just read files, it understands context, relationships, and compatibility.",
            features: {
                deepScan: { title: 'Deep Scan', description: 'Extracts and analyzes files from installers. Scans embedded executables, DLLs, and configuration files to build a complete picture.' },
                neighborAnalysis: { title: 'Neighbor Analysis', description: 'Scans related files in the same directory: Unity Data folders, known DLLs, .NET config files, and Godot .pck packages.' },
                smartSuggestions: { title: 'Smart Suggestions', description: 'Automatically recommends DXVK, VKD3D, GameMode, and other optimizations based on detected technologies.' },
                compatibilityWarnings: { title: 'Compatibility Warnings', description: 'Detects anti-cheat, ARM64 binaries, problematic protectors, and missing components before you run.' },
            },
        },
        report: {
            title: 'Full Transparency',
            description: 'Eagle generates comprehensive Markdown reports you can save and share. Every detection includes its source, context, and reasoning.',
            items: [
                'Binary metadata: architecture, build date, publisher',
                'Detected technologies with source file attribution',
                'Compatibility warnings and explanations',
                'Recommended dependencies and optimizations',
                'Complete list of analyzed files',
            ],
        },
        cta: {
            title: "Ready to See What's Inside?",
            description: 'Eagle is built into Bottles. Download now and let Eagle analyze your Windows programs before you run them.',
            button: 'Get Bottles',
        },
    },
    nextPage: {
        hero: {
            badge: 'The Future of Bottles',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'A complete rewrite of Bottles to solve architectural challenges and enable a new generation of Wine prefix management. Built with Rust, libcosmic, and a revolutionary Client-Server architecture.',
            github: 'View on GitHub',
            prototype: 'View Prototype',
        },
        architecture: {
            title: 'A New Architecture',
            description: 'Bottles Next introduces a modular architecture divided into three main components. This separation allows for unprecedented flexibility, scalability, and third-party integration.',
            client: {
                title: 'Client',
                description: 'The user interface. While our official client is built with Rust and libcosmic, the architecture allows for multiple clients in any language (GTK, Qt, Web, etc.).',
                items: [
                    'Rust + libcosmic',
                    'Multiple implementations',
                    'Sends instructions to Server',
                ],
            },
            server: {
                title: 'Server',
                description: 'The brain of operations. Built in Rust, it receives instructions from the client and orchestrates the management of prefixes.',
                items: [
                    'Written in Rust',
                    'Can be used by 3rd party apps',
                    'Orchestrates Agents',
                ],
            },
            agent: {
                title: 'Agent',
                description: 'Runs inside the Wine prefix. Built with C# and .NET, it executes native Windows commands and reports back to the server.',
                items: [
                    'C# / .NET (WineBridge)',
                    'Native Windows execution',
                    'Runs inside the prefix',
                ],
            },
        },
        valueProp: {
            title: 'More Than Just a GUI',
            description1: "Bottles Next is not just a graphical update; it's a paradigm shift. By separating the logic (Server) from the interface (Client), we open the door to a new ecosystem.",
            description2: 'Third-party developers can use the Bottles Server as a backend for their own applications, leveraging our robust prefix management without reinventing the wheel.',
            universal: {
                title: 'Universal Backend',
                description: 'Any app can become a Bottles client, regardless of the programming language.',
            },
            scalable: {
                title: 'Scalable & Maintainable',
                description: 'Rust ensures memory safety and performance, while the modular design makes maintenance easier.',
            },
        },
        prototype: {
            preview: 'Preview',
            title: 'A Modern, Native Experience',
            description: 'Built with libcosmic, the new interface is fast, responsive, and integrates perfectly with your desktop environment.',
        },
        donations: {
            title: 'Supported by NLnet',
            description: 'We are proud to announce that Bottles Next is supported by the NLnet Foundation through the NGI Commons Fund. This grant accelerates our development, but we still need your help to sustain the project long-term.',
            supportButton: 'Support Us',
            readButton: 'Read Announcement',
        },
        devActivity: {
            title: 'Development Activity',
            description: 'Follow the progress across all our repositories.',
            latestCommits: 'Latest Commits',
            activePrs: 'Active Pull Requests',
            noPrs: 'No open pull requests at the moment.',
        },
        readMore: {
            title: 'Read More',
            article1: {
                title: 'Bottles Next, A Matter of Technology',
                description: "Learn about the technologies we're exploring and the shift to a modular architecture.",
            },
            article2: {
                title: 'Rust and libcosmic in Bottles Next',
                description: 'Why we chose Rust, libcosmic, and C# for the future of Bottles.',
            },
        },
    },
    wineBridgePage: {
        hero: {
            title: 'Wine',
            titleHighlight: 'Bridge',
            description: "A lightweight .NET application that runs inside your Wine prefix, providing direct access to Windows APIs. Faster than winedbg, simpler than you'd expect.",
            github: 'View on GitHub',
            try: 'Try in Bottles',
        },
        why: {
            title: 'Why WineBridge?',
            description: 'winedbg is powerful but slow, it\'s a debugger, not a utility tool. WineBridge gives you the same capabilities with near-instant execution.',
            benefits: {
                fast: { title: 'Blazing Fast', description: 'Unlike winedbg, WineBridge executes commands instantly. No debugger overhead, no slow startup times.' },
                native: { title: 'Native Windows APIs', description: 'Runs inside the prefix and calls Windows APIs directly. Results are accurate and immediate.' },
                simple: { title: 'Simple Interface', description: 'Command-line tool with predictable output. Easy to parse, script, and integrate.' },
                openSource: { title: 'Open Source', description: 'MIT licensed. Fork it, extend it, contribute back. The bridge is yours.' },
            },
        },
        commands: {
            title: 'Available Commands',
            description: 'WineBridge exposes a simple CLI interface. Run WineBridge.exe help inside your prefix to see all options.',
            list: {
                runExe: { description: 'Launch executables directly or via ShellExecute with full control over working directory and arguments.' },
                getRunningProcs: { description: 'List all processes currently running inside the Wine prefix.' },
                killProc: { description: 'Terminate processes by PID or by name, using native Windows APIs.' },
                registryKeys: { description: 'Read, list, and modify Windows Registry keys across all hives (HKCU, HKLM, HU, etc.).' },
            },
        },
        usage: {
            title: 'Simple Usage',
            description: 'WineBridge is designed to be.. simple, of course. Copy the executable into your prefix, run it with the command you need, and parse the output.',
            items: [
                'No dependencies, single executable',
                'Pipe-friendly output format',
                'Error messages include context',
                'Works in any Wine prefix, does not matter the runner',
            ],
        },
        cta: {
            title: 'Ready to Bridge the Gap?',
            description: 'WineBridge is open source and ready to use. Check out the repository for documentation and releases.',
            button: 'View Repository',
        },
    },
    download: {
        title: 'Download Bottles',
        flathub: {
            title: 'Flathub',
            description: 'Recommended for most users. Get automatic updates and sandboxed security.',
            button: 'Install from Flathub',
        },
        appImage: {
            title: 'AppImage',
            description: 'Portable version. No installation required, just download and run.',
            button: 'Download AppImage',
        },
        donation: {
            title: 'Support Development',
            description: 'Bottles is free and open source. Your donation helps us continue development.',
            customAmount: 'Custom amount (0 for free)',
            download: 'Download',
        },
    },
    footer: {
        tagline: 'Run Windows software on Linux with ease',
        product: 'Product',
        features: 'Features',
        gaming: 'Gaming',
        appStore: 'App Store',
        download: 'Download',
        resources: 'Resources',
        documentation: 'Documentation',
        github: 'GitHub',
        community: 'Community',
        blog: 'Blog',
        developers: 'Developers',
        database: 'Database',
        contribute: 'Contribute',
        funding: 'Funding',
        legal: 'Legal',
        license: 'License',
        privacy: 'Privacy',
        terms: 'Terms',
        made: 'Made with ❤️ by the Bottles community',
    },
    community: {
        title: 'Join the',
        titleHighlight: 'Community',
        subtitle: 'Connect with thousands of Bottles users worldwide. Get help, share your experience, and contribute to the project.',
        discord: {
            title: 'Discord',
            description: 'Join our Discord server for real-time chat and support.',
            button: 'Join Discord',
        },
        github: {
            title: 'GitHub',
            description: 'Contribute to the project, report bugs, and request features.',
            button: 'View on GitHub',
        },
        matrix: {
            title: 'Matrix',
            description: 'Prefer Matrix? Join our community space for discussions.',
            button: 'Join Matrix',
        },
    },
    sponsors: {
        title: 'Supported by',
        titleHighlight: 'Amazing Sponsors',
        subtitle: 'Bottles is made possible by the generous support of our sponsors and backers.',
        becomeButton: 'Become a Sponsor',
    },
    funding: {
        title: 'Funding',
        description: 'Bottles is a free software project. Support its development to ensure the future of running Windows software on Linux.',
        channels: {
            title: 'Donation Channels',
            preferred: 'Preferred',
            github: { desc: 'Monthly recurring' },
            paypal: { desc: 'One-time or recurring' },
            liberapay: { desc: 'Flexible recurring' },
            patreon: { desc: 'Membership' },
            crypto: { desc: 'BTC, ETH, and more' },
            polar: { desc: 'Pay what you want' },
        },
        roadmap: {
            title: 'Development Roadmap',
            description: 'Track progress on features funded by the community.',
            searchPlaceholder: 'Filter tasks...',
        },
        tasks: {
            status: {
                wip: 'WIP',
                done: 'DONE',
                alpha: 'ALPHA',
                next: 'NEXT',
                rejected: 'REJECTED'
            },
            viewDetails: 'View Details',
        },
        supporters: {
            title: 'Our Supporters',
            patrons: 'Liberapay Patrons',
            weekly: 'Weekly Support',
            anonymous: 'and many anonymous donors',
        },
        modals: {
            cryptoTitle: 'Crypto Addresses',
            close: 'Close',
        }
    },
    blog: {
        title: 'Blog',
        description: 'News, updates, and insights from the Bottles team.',
        back: 'Back to all posts',
        readArticle: 'Read Article',
        readNext: 'Read Next',
        publishedOn: 'Published on',
        minRead: 'min read',
    },
    download: {
        title: 'Get Bottles',
        description1: 'The modern way to run Windows software on Linux.',
        description2: 'Secure, sandboxed, and powerful.',
        steps: {
            step1: 'Step 1',
            installFlatpak: 'Install Flatpak',
            selectDistro: 'Select Distro:',
            step2: 'Step 2',
            addFlathub: 'Add Flathub Repository',
            addFlathubDesc: 'Add the Flathub repository to access Bottles and other apps.',
            step3: 'Step 3',
            installBottles: 'Install Bottles',
            installBottlesDesc: 'Finally, install Bottles.'
        },
        distro: {
            descriptionWithDistro: 'Run this command to install the Flatpak package manager for {distro}.',
            vanillaOs: 'Flatpak is pre-installed and configured with Flathub. You can install Bottles directly during the First Setup process. If for any reason it is not present, you can use the command below:'
        },
        otherVersions: {
            title: 'Other Versions',
            v1: { title: 'Bottles v1 (Legacy)', desc: 'Classic version. Good for simple needs, but lacks modern features.' },
            source: { title: 'Source Code', desc: 'GPLv3 licensed. Build it yourself or contribute on GitHub.' },
            manual: { title: 'Manual build', desc: 'Build Bottles from scratch.' }
        },
        recommended: 'RECOMMENDED',
        flatpak: {
            title: 'Flatpak (Flathub)',
            desc: 'The official and recommended way to install Bottles. Supported on all major distributions including Steam Deck.'
        },
        startInstall: 'Start Installation',
        comingSoon: {
            title: 'cpak',
            desc: 'Coming soon. Currently under development.'
        },
        thankYou: {
            title: 'Thank you for downloading!',
            desc: 'Follow these steps to get Bottles running on your system.',
            back: 'Go back to selection'
        },
        modal: {
            support: 'Support Development',
            desc: 'Bottles is free software built by volunteers. Your donation helps us maintain servers and develop new features.',
            custom: 'Custom amount (0 for free)',
            free: 'Download for Free',
            donate: 'Donate & Download',
            secure: 'Secure payments powered by',
            noPayment: "No payment required. But we'd love a coffee! ☕",
            confirm: {
                title: 'Are you sure?',
                desc: 'We\'re constantly developing new features and research to make Bottles the best it can be. Your support helps us continue this work:',
                goBack: 'Go Back',
                continueFree: 'Continue Free'
            }
        }
    },
    database: {
        title: 'Bottles Database',
        description: 'Dependencies, resources, and Windows software installers for Bottles.',
        dependencies: {
            title: 'Dependencies',
            description: 'These packages increase the compatibility of WINE environments with Windows software.',
            loading: 'Loading dependencies...',
        },
        components: {
            title: 'Components',
            description: 'These are essential elements for creating environments and extending them with new features and implementations.',
            loading: 'Loading components...',
        },
        installers: {
            title: 'Installers',
            description: 'These are installers maintained by our community that automate the installation of a Windows program.',
        },
        table: {
            name: 'Name',
            type: 'Type',
            category: 'Category',
            channel: 'Channel',
            description: 'Description',
            actions: 'Actions',
            learnMore: 'Learn More',
            details: 'Details',
            report: 'Report',
        }
    },
    docs: {
        title: 'Documentation',
        notFound: '# 404 - Page Not Found\nThe requested documentation page could not be found.',
        mistake: 'Caught a mistake?',
        edit: 'Edit this page on GitHub',
        lastUpdated: 'Last updated:',
        poweredBy: 'Powered by'
    }
};
