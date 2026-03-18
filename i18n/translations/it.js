export const it = {
    header: {
        features: 'Caratteristiche',
        gaming: 'Gaming',
        appStore: 'App Store',
        database: 'Database',
        funding: 'Finanziamenti',
        blog: 'Blog',
        docs: 'Documentazione',
        download: 'Scarica',
    },
    appStore: {
        title: 'App Store',
        description: 'Sfoglia e installa i pacchetti gestiti dalla comunità per le tue applicazioni Windows preferite.',
        searchPlaceholder: 'Cerca installatori...',
        publish: 'Pubblica il tuo pacchetto',
        loading: 'Caricamento degli installatori dal database...',
        filters: {
            all: 'Tutti',
            platinum: 'Platino',
            gold: 'Oro',
            silver: 'Argento',
            bronze: 'Bronzo'
        },
        card: {
            details: 'Dettagli',
            install: 'Installa'
        }
    },
    hero: {
        badge: 'Ultima versione: ',
        badgeLoading: 'Caricamento...',
        title: 'Bottles 61',
        titleHighlight: 'sta arrivando.',
        titleHighlight: 'sta arrivando.',
        subtitle: 'Esegui facilmente software Windows su Linux con Bottles! In pochi clic.',
        simpleSubtitle: 'Esegui software Windows su Linux con facilità.',
        getNotified: 'Ricevi notifiche',
        getNotified: 'Ricevi notifiche',
        readPreview: 'Leggi anteprima',
        newsletter: {
            dontMiss: 'Non perdere il lancio',
            subscribed: 'Sei nella lista!',
            description: 'Iscriviti alla nostra newsletter per essere notificato nel momento in cui Bottles 61 sarà rilasciato.',
            subscribedDescription: 'Ti avviseremo non appena Bottles 61 sarà disponibile per il download.',
            placeholder: 'Inserisci la tua email',
            notifyMe: 'Avvisami',
            privacy: 'Rispettiamo la tua privacy. Annulla iscrizione in qualsiasi momento.',
            close: 'Chiudi',
        },
    },
    heroReleased: {
        release: 'Versione ',
        release: 'Versione ',
        newRelease: 'Nuova versione',
        subtitle: 'Il tuo software Windows preferito su Linux! In pochi clic.',
        downloadButton: 'Scarica',
        releaseNotes: 'Leggi note di rilascio',
        modal: {
            whatsNew: 'Novità',
            version: 'Versione ',
            fetching: 'Caricamento note di rilascio...',
            releasedOn: 'Rilasciato su GitHub',
            viewFull: 'Visualizza versione completa',
        },
    },
    eagleBanner: {
        title: 'Scopri Eagle',
        badge: 'Novità in 61',
        description: 'Analisi binaria intelligente per eseguibili Windows',
        button: 'Scopri',
    },
    grantBanner: {
        title: 'Bottles finanziato da NLnet',
        badge: 'Grant assegnato',
        description: 'Siamo entusiasti di far parte del Commons Fund 2025 di NLnet. Questo grant accelererà lo sviluppo di Bottles Next.',
        learnMore: 'Scopri cosa permette il grant',
    },
    features: {
        title: 'Tutto ciò di cui hai bisogno.',
        titleHighlight: 'Niente di superfluo.',
        subtitle: 'Bottles astrae la complessità delle configurazioni Wine in un\'interfaccia pulita ed elegante. Concentrati sulle tue applicazioni, non sulla configurazione.',
        gaming: {
            title: 'Pronto per il Gaming',
            description: 'Ambienti preconfigurati per il gaming. Supporto per Steam, Epic e altri store out of the box.',
        },
        sandboxed: {
            title: 'Sandboxed',
            description: 'Basato su Flatpak, Bottles mantiene il tuo sistema pulito e sicuro isolando le applicazioni Windows.',
        },
        versionManager: {
            title: 'Gestione versioni',
            description: 'Gestisci facilmente e passa tra diverse versioni di Wine, Proton e DXVK per ogni bottle.',
        },
        dependencies: {
            title: 'Dipendenze',
            description: 'Installa dipendenze critiche come .NET, Visual C++ e font con un solo clic.',
        },
        versioned: {
            title: 'Versionato',
            description: 'Crea snapshot dei tuoi bottle in qualsiasi momento. Sperimenta liberamente e ripristina qualsiasi stato precedente se qualcosa si rompe.',
        },
        highPerformance: {
            title: 'Alte prestazioni',
            description: 'Funzionalità come FSR, DLSS ed Esync/Fsync sono facili da attivare per massime prestazioni.',
        },
        wineBridge: {
            title: 'WineBridge',
            description: 'Un bridge .NET per eseguire istruzioni Windows direttamente da Wine, utilizzando le API Windows.',
        },
        installers: {
            title: 'Installer integrati',
            description: 'Accedi a una libreria guidata dalla community di installer per applicazioni Windows popolari. Installa Epic Games, Battle.net, software Adobe e centinaia di altri con un solo clic.',
            button: 'Sfoglia installer',
        },
        eagle: {
            title: 'Eagle',
            badge: 'Beta',
            description: 'Analisi automatizzata avanzata per eseguibili Windows. Eagle rileva pattern, dipendenze e engine per suggerire la migliore configurazione per il tuo software.',
            button: 'Scopri Eagle',
        },
        gamingCard: {
            badge: 'Esperienza di livello superiore',
            title: 'Sei un Gamer?',
            description: 'Scopri come Bottles trasforma il gaming su Linux con supporto Proton, store integrati e rilevamento automatico dei giochi.',
            button: 'Esplora Gaming',
        },
        runnersCard: {
            badge: 'Tecnologia principale',
            title: 'Conosci i Runner',
            description: 'Scopri Soda e Caffe, i nostri runner personalizzati progettati per fornire la migliore compatibilità e prestazioni.',
            button: 'Scopri di più',
        },
        bottlesNext: {
            badge: 'Il prossimo capitolo',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'Una riscrittura completa in Rust. Ridefinendo la gestione dei prefix Wine con un\'architettura Client-Server rivoluzionaria.',
            explore: 'Esplora il futuro',
            viewSource: 'Visualizza sorgente',
        },
    },
    runners: {
        badge: 'Tecnologia principale',
        title: 'Conosci i',
        titleHighlight: 'Runner',
        subtitle: 'I runner sono il cuore di Bottles. Sono i livelli di compatibilità che permettono al software Windows di funzionare su Linux. Manteniamo i nostri runner ottimizzati per garantire la migliore esperienza possibile.',
        soda: {
            badge: 'Runner predefinito',
            title: 'Soda',
            upgrading: 'Stiamo lavorando per aggiornarlo a Wine 10.0!',
            description1: 'Soda è il nostro runner principale, progettato per risolvere problemi di compatibilità e ridurre il rischio di regressioni presenti in Wine upstream.',
            description2: 'Basato su Wine di Valve (usato in Proton), Soda include patch da Proton, TKG e GE. È ottimizzato specificamente per Bottles, offrendo un\'esperienza "frizzante" sia per gaming che applicazioni.',
            valveWine: 'Base Wine di Valve',
            valveWineDesc: 'Costruito sulla robusta fondazione usata da Steam Deck.',
            patches: 'Patch curate',
            patchesDesc: 'Include le migliori correzioni da TKG, GE e Proton.',
        },
        caffe: {
            badge: 'Legacy e stabilità',
            title: 'Caffe',
            upgrading: 'Stiamo lavorando per aggiornarlo a Wine 10.0!',
            description1: 'Caffe è basato su Wine upstream e ne segue rigorosamente gli aggiornamenti. È progettato per utenti che necessitano delle funzionalità più recenti da WineHQ, o per applicazioni legacy che potrebbero comportarsi diversamente sulla base Wine di Valve.',
            description2: 'Sebbene Soda sia il predefinito, Caffe rimane una parte cruciale del nostro ecosistema, assicurando di avere un runner che segue da vicino lo sviluppo upstream pur applicando le nostre patch essenziali.',
            upstream: 'Focus upstream',
            upstreamDesc: 'Segue da vicino i rilasci WineHQ per funzionalità all\'avanguardia.',
            alternative: 'Scelta alternativa',
            alternativeDesc: 'Perfetto quando un\'app non funziona bene con runner basati su Proton.',
        },
        comparison: {
            title: 'Confronto runner',
            feature: 'Caratteristica',
            sodaRecommended: 'Soda (Consigliato)',
            caffe: 'Caffe',
            vaniglia: 'Vaniglia',
            base: 'Base',
            bestFor: 'Migliore per',
            patches: 'Patch',
            releaseCycle: 'Ciclo di rilascio',
            valveWine: 'Wine di Valve (Proton)',
            wineHQ: 'WineHQ (Upstream)',
            wineHQStaging: 'WineHQ (Staging)',
            gamingModern: 'Gaming e app moderne',
            generalPurpose: 'Uso generale',
            testingVanilla: 'Test / Vanilla',
            protonTKG: 'Proton + TKG + GE',
            bottlesSpecific: 'Specifiche Bottles',
            minimalNone: 'Minime / Nessuna',
            independent: 'Indipendente',
            followsWineHQ: 'Segue WineHQ',
        },
        contribute: {
            badge: 'Per sviluppatori',
            title: 'Contribuisci al core',
            description: 'I nostri runner sono open source e costruiti con trasparenza. Vuoi aiutare a migliorare la compatibilità? Dai un\'occhiata ai nostri build tools o monitora le ultime build CI.',
            viewSource: 'Visualizza codice sorgente',
            checkCI: 'Controlla build CI',
            buildStatus: 'Stato build più recenti',
            passing: 'Passata',
            building: 'In build...',
            autoGenerated: 'Le build sono generate e testate automaticamente.',
            viewWorkflows: 'Visualizza tutti i workflow',
        },
    },
    gaming: {
        badge: 'Gaming su Linux',
        title: 'Porta al livello successivo la tua esperienza di gaming',
        subtitle: 'Bottles rende incredibilmente facile eseguire giochi Windows su Linux. Dai titoli AAA alle gemme indie, gioca ai tuoi giochi preferiti con prestazioni ottimizzate.',
        easySetup: {
            title: 'Configurazione facile',
            description: 'Crea bottle per gaming con impostazioni preconfigurate per prestazioni ottimali.',
        },
        stores: {
            title: 'Store multipli',
            description: 'Installa e gestisci giochi da Steam, Epic Games, GOG e altro.',
        },
        performance: {
            title: 'Prestazioni massime',
            description: 'FSR, DLSS, Esync, Fsync - tutte le funzionalità di prestazioni a portata di mano.',
        },
        compatibility: {
            title: 'Ampia compatibilità',
            description: 'Alimentato da Proton e dal nostro runner Soda per eccellente compatibilità con i giochi.',
        },
        discover: 'Scopri le funzionalità gaming',
    },
    gamingPage: {
        hero: {
            title: 'Bottles è anche',
            titleHighlight: 'per il Gaming.',
            subtitle: 'Gioca su Linux esattamente come su Windows. Nessun terminale richiesto.',
            download: 'Scarica Ora',
        },
        platformHub: {
            title: 'Tutte le tue piattaforme',
            titleHighlight: 'in un unico posto.',
            description1: 'Personalizza il tuo ambiente Windows con facilità. Le piattaforme di gioco più popolari sono già disponibili come installer integrati in Bottles.',
            description2: 'Epic Games Store, GOG Galaxy, EA App, Battle.net, non devi far altro che scegliere ciò che vuoi. Bottles gestisce le dipendenze, l\'installazione dei font e la configurazione automaticamente.',
            description3: 'Crea una bottle gaming, installa il tuo store preferito e inizia a giocare subito. Proprio come Windows, ma meglio.',
            documentation: 'Controlla la documentazione',
        },
        integration: {
            title: 'Integrazione Senza Sforzo',
            description: 'Bottles va oltre la semplice installazione. Rileva automaticamente i giochi installati da questi launcher e popola la tua libreria, offrendoti un\'esperienza di game launcher unificata. Nessuna configurazione manuale necessaria.',
            epic: 'Epic Games Store',
            ubisoft: 'Ubisoft Connect',
            steam: 'Steam',
        },
        proton: {
            title: 'Integrazione Steam & Proton',
            prefix: {
                title: 'Gestione Prefix Proton',
                description: 'Crea e gestisci bottle usando i runner Proton di Valve o GE-Proton. Bottles sfrutta l\'ambiente ufficiale Steam Runtime per garantire che i tuoi giochi Windows funzionino con lo stesso identico livello di compatibilità usato da Steam Deck.',
            },
            bridge: {
                title: 'Bridge Libreria Steam',
                description: 'Hai già giochi installati via Steam Native? Bottles rileva automaticamente la tua libreria Steam ed elenca i tuoi giochi Proton come bottle. Questo ti permette di gestire le loro impostazioni, dipendenze e variabili d\'ambiente direttamente dall\'interfaccia di Bottles.',
            },
            protondb: {
                title: 'Supporto Completo ProtonDB',
                description: 'Bottles è progettato per lavorare senza problemi con il vasto ecosistema di giochi compatibili con Proton. Se un gioco è valutato giocabile su ProtonDB, funziona in Bottles. Controlla valutazioni di compatibilità, report utenti e opzioni di avvio istantaneamente.',
                button: 'Controlla Compatibilità',
            },
        },
    },
    eaglePage: {
        hero: {
            beta: 'BETA',
            title: 'Scopri',
            titleHighlight: 'Eagle',
            description: 'Niente più esecuzioni alla cieca. Eagle scansiona i binari, rileva i pattern, mappa le dipendenze e suggerisce la configurazione perfetta, in pochi secondi.',
            download: 'Scarica Bottles',
        },
        howItWorks: {
            title: 'Come funziona Eagle',
            description: 'In pochi secondi, Eagle esegue un\'analisi completa e multistadio per capire esattamente di cosa ha bisogno il tuo eseguibile.',
            steps: {
                peParsing: {
                    title: 'Parsing PE',
                    description: 'Legge la struttura dell\'eseguibile, le importazioni, le sezioni e i metadati.',
                },
                yaraScanning: {
                    title: 'Scansione YARA',
                    description: 'Oltre 50 regole di pattern rilevano engine, framework, installer e minacce.',
                },
                contextAnalysis: {
                    title: 'Analisi del Contesto',
                    description: 'Scansiona i file vicini, le cartelle Unity Data e i config .NET.',
                },
                suggestions: {
                    title: 'Suggerimenti',
                    description: 'Genera configurazioni ottimizzate e raccomandazioni sulle dipendenze.',
                },
            },
        },
        detection: {
            title: 'Rileva Tutto',
            description: "Dalle API grafiche ai motori di gioco, dai sistemi DRM ai formati di installazione. Le regole YARA di Eagle e la mappatura DLL coprono tutto.",
            categories: {
                graphics: { title: 'Grafica', description: 'DirectX 8-12, Vulkan, OpenGL, DXGI, NVAPI, AMD AGS, PhysX' },
                audio: { title: 'Audio', description: 'XAudio, FMOD, Wwise, OpenAL, DirectSound, Miles, Bink' },
                runtimes: { title: 'Runtime', description: '.NET Framework/Core/5+, Mono, VC++ 2008-2022, Java, Python, Lua' },
                engines: { title: 'Motori', description: "Unity, Unreal, Godot, CryEngine, Source, Ren'Py, RPG Maker" },
                protection: { title: 'Protezione', description: 'EasyAntiCheat, BattlEye, Denuvo, VMProtect, Themida' },
                installers: { title: 'Installer', description: 'NSIS, Inno Setup, MSI, InstallShield, WiX, WISE, Squirrel' },
            },
        },
        intelligence: {
            title: 'Non solo uno Scanner',
            description: "Eagle non legge solo i file, comprende il contesto, le relazioni e la compatibilità.",
            features: {
                deepScan: { title: 'Scansione Profonda', description: 'Estrae e analizza i file dagli installer. Scansiona eseguibili incorporati, DLL e file di configurazione per costruire un quadro completo.' },
                neighborAnalysis: { title: 'Analisi dei Vicini', description: 'Scansiona i file correlati nella stessa directory: cartelle Unity Data, DLL note, file di configurazione .NET e pacchetti .pck Godot.' },
                smartSuggestions: { title: 'Suggerimenti Intelligenti', description: 'Raccomanda automaticamente DXVK, VKD3D, GameMode e altre ottimizzazioni basate sulle tecnologie rilevate.' },
                compatibilityWarnings: { title: 'Avvisi di Compatibilità', description: 'Rileva anti-cheat, binari ARM64, protezioni problematiche e componenti mancanti prima dell\'esecuzione.' },
            },
        },
        report: {
            title: 'Trasparenza Totale',
            description: 'Eagle genera report Markdown completi che puoi salvare e condividere. Ogni rilevamento include la fonte, il contesto e la motivazione.',
            items: [
                'Metadati binari: architettura, data di build, editore',
                'Tecnologie rilevate con attribuzione del file sorgente',
                'Avvisi di compatibilità e spiegazioni',
                'Dipendenze raccomandate e ottimizzazioni',
                'Elenco completo dei file analizzati',
            ],
        },
        cta: {
            title: "Pronto a vedere cosa c'è dentro?",
            description: 'Eagle è integrato in Bottles. Scarica ora e lascia che Eagle analizzi i tuoi programmi Windows prima di eseguirli.',
            button: 'Ottieni Bottles',
        },
    },
    nextPage: {
        hero: {
            badge: 'Il Futuro di Bottles',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'Una riscrittura completa di Bottles per risolvere le sfide architetturali e abilitare una nuova generazione di gestione dei prefix Wine. Costruito con Rust, libcosmic e una rivoluzionaria architettura Client-Server.',
            github: 'Vedi su GitHub',
            prototype: 'Vedi Prototipo',
        },
        architecture: {
            title: 'Una Nuova Architettura',
            description: 'Bottles Next introduce un\'architettura modulare divisa in tre componenti principali. Questa separazione consente flessibilità, scalabilità e integrazione di terze parti senza precedenti.',
            client: {
                title: 'Client',
                description: 'L\'interfaccia utente. Mentre il nostro client ufficiale è costruito con Rust e libcosmic, l\'architettura consente client multipli in qualsiasi linguaggio (GTK, Qt, Web, ecc.).',
                items: [
                    'Rust + libcosmic',
                    'Implementazioni multiple',
                    'Invia istruzioni al Server',
                ],
            },
            server: {
                title: 'Server',
                description: 'Il cervello delle operazioni. Costruito in Rust, riceve istruzioni dal client e orchestra la gestione dei prefix.',
                items: [
                    'Scritto in Rust',
                    'Può essere usato da app di terze parti',
                    'Orchestra gli Agenti',
                ],
            },
            agent: {
                title: 'Agente',
                description: 'Gira all\'interno del prefix Wine. Costruito con C# e .NET, esegue comandi nativi di Windows e riporta al server.',
                items: [
                    'C# / .NET (WineBridge)',
                    'Esecuzione nativa Windows',
                    'Gira all\'interno del prefix',
                ],
            },
        },
        valueProp: {
            title: 'Più di una semplice GUI',
            description1: "Bottles Next non è solo un aggiornamento grafico; è un cambio di paradigma. Separando la logica (Server) dall'interfaccia (Client), apriamo le porte a un nuovo ecosistema.",
            description2: 'Gli sviluppatori di terze parti possono usare il Server di Bottles come backend per le loro applicazioni, sfruttando la nostra robusta gestione dei prefix senza reinventare la ruota.',
            universal: {
                title: 'Backend Universale',
                description: 'Qualsiasi app può diventare un client Bottles, indipendentemente dal linguaggio di programmazione.',
            },
            scalable: {
                title: 'Scalabile & Manutenibile',
                description: 'Rust garantisce sicurezza della memoria e prestazioni, mentre il design modulare rende la manutenzione più facile.',
            },
        },
        prototype: {
            preview: 'Anteprima',
            title: 'Un\'Esperienza Moderna e Nativa',
            description: 'Costruita con libcosmic, la nuova interfaccia è veloce, reattiva e si integra perfettamente con il tuo ambiente desktop.',
        },
        donations: {
            title: 'Supportato da NLnet',
            description: 'Siamo orgogliosi di annunciare che Bottles Next è supportato dalla NLnet Foundation attraverso l\'NGI Commons Fund. Questo grant accelera il nostro sviluppo, ma abbiamo ancora bisogno del tuo aiuto per sostenere il progetto a lungo termine.',
            supportButton: 'Supportaci',
            readButton: 'Leggi Annuncio',
        },
        devActivity: {
            title: 'Attività di Sviluppo',
            description: 'Segui i progressi su tutti i nostri repository.',
            latestCommits: 'Ultimi Commit',
            activePrs: 'Pull Request Attive',
            noPrs: 'Nessuna pull request aperta al momento.',
        },
        readMore: {
            title: 'Leggi di più',
            article1: {
                title: 'Bottles Next, Una questione di tecnologia',
                description: "Scopri le tecnologie che stiamo esplorando e il passaggio a un'architettura modulare.",
            },
            article2: {
                title: 'Rust e libcosmic in Bottles Next',
                description: 'Perché abbiamo scelto Rust, libcosmic e C# per il futuro di Bottles.',
            },
        },
    },
    wineBridgePage: {
        hero: {
            title: 'Wine',
            titleHighlight: 'Bridge',
            description: "Una leggera applicazione .NET che gira all'interno del tuo prefix Wine, fornendo accesso diretto alle API di Windows. Più veloce di winedbg, più semplice di quanto ti aspetti.",
            github: 'Vedi su GitHub',
            try: 'Prova in Bottles',
        },
        why: {
            title: 'Perché WineBridge?',
            description: 'winedbg è potente ma lento, è un debugger, non uno strumento di utilità. WineBridge ti offre le stesse capacità con un\'esecuzione quasi istantanea.',
            benefits: {
                fast: { title: 'Velocissimo', description: 'A differenza di winedbg, WineBridge esegue i comandi istantaneamente. Nessun overhead del debugger, nessun tempo di avvio lento.' },
                native: { title: 'API Windows Native', description: 'Gira all\'interno del prefix e chiama direttamente le API di Windows. I risultati sono accurati e immediati.' },
                simple: { title: 'Interfaccia Semplice', description: 'Strumento da riga di comando con output prevedibile. Facile da analizzare, scriptare e integrare.' },
                openSource: { title: 'Open Source', description: 'Licenza MIT. Forkalo, estendilo, contribuisci. Il bridge è tuo.' },
            },
        },
        commands: {
            title: 'Comandi Disponibili',
            description: 'WineBridge espone una semplice interfaccia CLI. Esegui WineBridge.exe help all\'interno del tuo prefix per vedere tutte le opzioni.',
            list: {
                runExe: { description: 'Lancia eseguibili direttamente o tramite ShellExecute con pieno controllo sulla directory di lavoro e sugli argomenti.' },
                getRunningProcs: { description: 'Elenca tutti i processi attualmente in esecuzione all\'interno del prefix Wine.' },
                killProc: { description: 'Termina processi per PID o per nome, usando API native di Windows.' },
                registryKeys: { description: 'Leggi, elenca e modifica le chiavi del Registro di Windows su tutti gli hive (HKCU, HKLM, HU, ecc.).' },
            },
        },
        usage: {
            title: 'Utilizzo Semplice',
            description: 'WineBridge è progettato per essere.. semplice, ovviamente. Copia l\'eseguibile nel tuo prefix, eseguilo con il comando di cui hai bisogno e analizza l\'output.',
            items: [
                'Nessuna dipendenza, singolo eseguibile',
                'Formato di output pipe-friendly',
                'I messaggi di errore includono il contesto',
                'Funziona in qualsiasi prefix Wine, non importa il runner',
            ],
        },
        cta: {
            title: 'Pronto a colmare il divario?',
            description: 'WineBridge è open source e pronto all\'uso. Controlla il repository per documentazione e release.',
            button: 'Vedi Repository',
        },
    },
    download: {
        title: 'Scarica Bottles',
        flathub: {
            title: 'Flathub',
            description: 'Consigliato per la maggior parte degli utenti. Ottieni aggiornamenti automatici e sicurezza sandboxed.',
            button: 'Installa da Flathub',
        },
        appImage: {
            title: 'AppImage',
            description: 'Versione portatile. Nessuna installazione richiesta, scarica ed esegui.',
            button: 'Scarica AppImage',
        },
        donation: {
            title: 'Supporta lo sviluppo',
            description: 'Bottles è gratuito e open source. La tua donazione ci aiuta a continuare lo sviluppo.',
            customAmount: 'Importo personalizzato (0 per gratis)',
            download: 'Scarica',
        },
    },
    footer: {
        tagline: 'Esegui software Windows su Linux con facilità',
        product: 'Prodotto',
        features: 'Caratteristiche',
        gaming: 'Gaming',
        appStore: 'App Store',
        download: 'Scarica',
        resources: 'Risorse',
        documentation: 'Documentazione',
        github: 'GitHub',
        community: 'Community',
        blog: 'Blog',
        developers: 'Sviluppatori',
        database: 'Database',
        contribute: 'Contribuisci',
        funding: 'Finanziamenti',
        legal: 'Legale',
        license: 'Licenza',
        privacy: 'Privacy',
        terms: 'Termini',
        made: 'Fatto con ❤️ dalla community Bottles',
    },
    community: {
        title: 'Unisciti alla',
        titleHighlight: 'Community',
        subtitle: 'Connettiti con migliaia di utenti Bottles in tutto il mondo. Ottieni aiuto, condividi la tua esperienza e contribuisci al progetto.',
        discord: {
            title: 'Discord',
            description: 'Unisciti al nostro server Discord per chat e supporto in tempo reale.',
            button: 'Unisciti a Discord',
        },
        github: {
            title: 'GitHub',
            description: 'Contribuisci al progetto, segnala bug e richiedi funzionalità.',
            button: 'Visualizza su GitHub',
        },
        matrix: {
            title: 'Matrix',
            description: 'Preferisci Matrix? Unisciti al nostro spazio community per le discussioni.',
            button: 'Unisciti a Matrix',
        },
    },
    sponsors: {
        title: 'Supportato da',
        titleHighlight: 'sponsor straordinari',
        subtitle: 'Bottles è reso possibile dal generoso supporto dei nostri sponsor e sostenitori.',
        becomeButton: 'Diventa sponsor',
    },
    funding: {
        title: 'Finanziamento',
        description: 'Bottles è un progetto software libero. Sostieni il suo sviluppo per garantire il futuro dell\'esecuzione di software Windows su Linux.',
        channels: {
            title: 'Canali di Donazione',
            preferred: 'Preferito',
            github: { desc: 'Ricorrente mensile' },
            paypal: { desc: 'Una tantum o ricorrente' },
            liberapay: { desc: 'Ricorrente flessibile' },
            patreon: { desc: 'Abbonamento' },
            crypto: { desc: 'BTC, ETH, e altro' },
            polar: { desc: 'Paga quanto vuoi' },
        },
        roadmap: {
            title: 'Roadmap di Sviluppo',
            description: 'Segui i progressi sulle funzionalità finanziate dalla community.',
            searchPlaceholder: 'Filtra attività...',
        },
        tasks: {
            status: {
                wip: 'WIP',
                done: 'FATTO',
                alpha: 'ALPHA',
                next: 'PROSSIMO',
                rejected: 'RIFIUTATO'
            },
            viewDetails: 'Vedi Dettagli',
        },
        supporters: {
            title: 'I Nostri Sostenitori',
            patrons: 'Mecenati Liberapay',
            weekly: 'Supporto Settimanale',
            anonymous: 'e molti donatori anonimi',
        },
        modals: {
            cryptoTitle: 'Indirizzi Crypto',
            close: 'Chiudi',
        }
    },
    blog: {
        title: 'Blog',
        description: 'Notizie, aggiornamenti e approfondimenti dal team di Bottles.',
        back: 'Torna a tutti i post',
        readArticle: 'Leggi Articolo',
        readNext: 'Leggi Dopo',
        publishedOn: 'Pubblicato il',
        minRead: 'min lettura',
    },
    download: {
        title: 'Scarica Bottles',
        description1: 'Il modo moderno per eseguire software Windows su Linux.',
        description2: 'Sicuro, sandboxed e potente.',
        steps: {
            step1: 'Passo 1',
            installFlatpak: 'Installa Flatpak',
            selectDistro: 'Seleziona Distro:',
            step2: 'Passo 2',
            addFlathub: 'Aggiungi Repository Flathub',
            addFlathubDesc: 'Aggiungi il repository Flathub per accedere a Bottles e altre app.',
            step3: 'Passo 3',
            installBottles: 'Installa Bottles',
            installBottlesDesc: 'Infine, installa Bottles.'
        },
        distro: {
            descriptionWithDistro: 'Esegui questo comando per installare il gestore pacchetti Flatpak per {distro}.',
            vanillaOs: 'Flatpak è preinstallato e configurato con Flathub. Puoi installare Bottles direttamente durante il Primo Setup. Se per qualsiasi motivo non è presente, puoi usare il comando qui sotto:'
        },
        otherVersions: {
            title: 'Altre Versioni',
            v1: { title: 'Bottles v1 (Legacy)', desc: 'Versione classica. Buona per esigenze semplici, ma manca di funzionalità moderne.' },
            source: { title: 'Codice Sorgente', desc: 'Licenza GPLv3. Compilalo tu stesso o contribuisci su GitHub.' },
            manual: { title: 'Compilazione manuale', desc: 'Compila Bottles da zero.' }
        },
        recommended: 'RACCOMANDATO',
        flatpak: {
            title: 'Flatpak (Flathub)',
            desc: 'Il modo ufficiale e raccomandato per installare Bottles. Supportato su tutte le principali distribuzioni incluso Steam Deck.'
        },
        startInstall: 'Avvia Installazione',
        comingSoon: {
            title: 'cpak',
            desc: 'Prossimamente. Attualmente in sviluppo.'
        },
        thankYou: {
            title: 'Grazie per aver scaricato!',
            desc: 'Segui questi passaggi per far funzionare Bottles sul tuo sistema.',
            back: 'Torna alla selezione'
        },
        modal: {
            support: 'Sostieni lo Sviluppo',
            desc: 'Bottles è software libero costruito da volontari. La tua donazione ci aiuta a mantenere i server e sviluppare nuove funzionalità.',
            custom: 'Importo personalizzato (0 per gratis)',
            free: 'Scarica Gratis',
            donate: 'Dona & Scarica',
            secure: 'Pagamenti sicuri offerti da',
            noPayment: "Nessun pagamento richiesto. Ma ci piacerebbe un caffè! ☕",
            confirm: {
                title: 'Sei sicuro?',
                desc: 'Stiamo costantemente sviluppando nuove funzionalità e ricerche per rendere Bottles il migliore possibile. Il tuo supporto ci aiuta a continuare questo lavoro:',
                goBack: 'Torna Indietro',
                continueFree: 'Continua Gratis'
            }
        }
    },
    database: {
        title: 'Bottles Database',
        description: 'Dipendenze, risorse e installer di software Windows per Bottles.',
        dependencies: {
            title: 'Dipendenze',
            description: 'Questi pacchetti aumentano la compatibilità degli ambienti WINE con il software Windows.',
            loading: 'Caricamento dipendenze...',
        },
        components: {
            title: 'Componenti',
            description: 'Questi sono elementi essenziali per creare ambienti ed estenderli con nuove funzionalità e implementazioni.',
            loading: 'Caricamento componenti...',
        },
        installers: {
            title: 'Installer',
            description: 'Questi sono installer mantenuti dalla nostra community che automatizzano l\'installazione di un programma Windows.',
        },
        table: {
            name: 'Nome',
            type: 'Tipo',
            category: 'Categoria',
            channel: 'Canale',
            description: 'Descrizione',
            actions: 'Azioni',
            learnMore: 'Scopri di più',
            details: 'Dettagli',
            report: 'Segnala',
        }
    },
    docs: {
        title: 'Documentazione',
        notFound: '# 404 - Pagina Non Trovata\nLa pagina di documentazione richiesta non è stata trovata.',
        mistake: 'Trovato un errore?',
        edit: 'Modifica questa pagina su GitHub',
        lastUpdated: 'Ultimo aggiornamento:',
        poweredBy: 'Basato su'
    }
};
