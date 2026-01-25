export const es = {
    header: {
        features: 'Características',
        gaming: 'Gaming',
        appStore: 'App Store',
        database: 'Database',
        funding: 'Financiación',
        blog: 'Blog',
        docs: 'Documentación',
        download: 'Descargar',
    },
    hero: {
        badge: 'Última versión: ',
        badgeLoading: 'Cargando...',
        title: 'Bottles 61',
        titleHighlight: 'está llegando.',
        titleHighlight: 'está llegando.',
        subtitle: '¡Ejecuta fácilmente software de Windows en Linux con Bottles! En solo unos clics.',
        simpleSubtitle: 'Ejecuta software de Windows en Linux con facilidad.',
        getNotified: 'Recibir notificaciones',
        getNotified: 'Recibir notificaciones',
        readPreview: 'Leer vista previa',
        newsletter: {
            dontMiss: 'No te pierdas el lanzamiento',
            subscribed: '¡Estás en la lista!',
            description: 'Suscríbete a nuestro boletín para recibir una notificación en el momento en que se lance Bottles 61.',
            subscribedDescription: 'Te notificaremos tan pronto como Bottles 61 esté disponible para descargar.',
            placeholder: 'Introduce tu email',
            notifyMe: 'Notificarme',
            privacy: 'Respetamos tu privacidad. Cancela la suscripción en cualquier momento.',
            close: 'Cerrar',
        },
    },
    heroReleased: {
        release: 'Versión ',
        release: 'Versión ',
        newRelease: 'Nueva versión',
        subtitle: '¡Tu software de Windows favorito en Linux! En solo unos clics.',
        downloadButton: 'Descargar',
        releaseNotes: 'Leer notas de la versión',
        modal: {
            whatsNew: 'Novedades',
            version: 'Versión ',
            fetching: 'Cargando notas de la versión...',
            releasedOn: 'Lanzado en GitHub',
            viewFull: 'Ver versión completa',
        },
    },
    eagleBanner: {
        title: 'Conoce a Eagle',
        badge: 'Nuevo en 61',
        description: 'Análisis binario inteligente para ejecutables de Windows',
        button: 'Descubre',
    },
    grantBanner: {
        title: 'Bottles financiado por NLnet',
        badge: 'Subvención otorgada',
        description: 'Estamos emocionados de unirnos al Commons Fund 2025 de NLnet. Esta subvención acelerará el desarrollo de Bottles Next.',
        learnMore: 'Descubre qué permite la subvención',
    },
    features: {
        title: 'Todo lo que necesitas.',
        titleHighlight: 'Nada que no necesites.',
        subtitle: 'Bottles abstrae la complejidad de las configuraciones de Wine en una interfaz limpia y elegante. Concéntrate en tus aplicaciones, no en la configuración.',
        gaming: {
            title: 'Listo para jugar',
            description: 'Entornos preconfigurados para gaming. Soporte para Steam, Epic y más tiendas desde el principio.',
        },
        sandboxed: {
            title: 'Aislado',
            description: 'Construido sobre Flatpak, Bottles mantiene tu sistema limpio y seguro aislando las aplicaciones de Windows.',
        },
        versionManager: {
            title: 'Administrador de versiones',
            description: 'Administra y cambia fácilmente entre diferentes versiones de Wine, Proton y DXVK por botella.',
        },
        dependencies: {
            title: 'Dependencias',
            description: 'Instala dependencias críticas como .NET, Visual C++ y fuentes con un solo clic.',
        },
        versioned: {
            title: 'Con versiones',
            description: 'Crea instantáneas de tus botellas en cualquier momento. Experimenta libremente y restaura cualquier estado anterior si algo falla.',
        },
        highPerformance: {
            title: 'Alto rendimiento',
            description: 'Funciones como FSR, DLSS y Esync/Fsync son fáciles de activar para máximo rendimiento.',
        },
        wineBridge: {
            title: 'WineBridge',
            description: 'Un puente .NET para ejecutar instrucciones de Windows directamente desde Wine, usando las APIs de Windows.',
        },
        installers: {
            title: 'Instaladores integrados',
            description: 'Accede a una biblioteca impulsada por la comunidad de instaladores para aplicaciones populares de Windows. Instala Epic Games, Battle.net, software de Adobe y cientos más con solo un clic.',
            button: 'Explorar instaladores',
        },
        eagle: {
            title: 'Eagle',
            badge: 'Beta',
            description: 'Análisis automatizado avanzado para ejecutables de Windows. Eagle detecta patrones, dependencias y motores para sugerir la mejor configuración para tu software.',
            button: 'Descubre Eagle',
        },
        gamingCard: {
            badge: 'Experiencia de siguiente nivel',
            title: '¿Eres Gamer?',
            description: 'Descubre cómo Bottles transforma el gaming en Linux con soporte Proton, tiendas integradas y detección automática de juegos.',
            button: 'Explorar gaming',
        },
        runnersCard: {
            badge: 'Tecnología central',
            title: 'Conoce los Runners',
            description: 'Aprende sobre Soda y Caffe, nuestros runners personalizados diseñados para proporcionar la mejor compatibilidad y rendimiento.',
            button: 'Más información',
        },
        bottlesNext: {
            badge: 'El próximo capítulo',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'Una reescritura completa en Rust. Redefiniendo la gestión de prefijos Wine con una arquitectura Cliente-Servidor revolucionaria.',
            explore: 'Explora el futuro',
            viewSource: 'Ver código fuente',
        },
    },
    runners: {
        badge: 'Tecnología central',
        title: 'Conoce los',
        titleHighlight: 'Runners',
        subtitle: 'Los runners son el corazón de Bottles. Son las capas de compatibilidad que permiten que el software de Windows funcione en Linux. Mantenemos nuestros propios runners optimizados para garantizar la mejor experiencia posible.',
        soda: {
            badge: 'Runner predeterminado',
            title: 'Soda',
            upgrading: '¡Estamos trabajando para actualizarlo a Wine 10.0!',
            description1: 'Soda es nuestro runner principal, diseñado para resolver problemas de compatibilidad y reducir el riesgo de regresiones encontradas en Wine upstream.',
            description2: 'Basado en Wine de Valve (usado en Proton), Soda incluye parches de Proton, TKG y GE. Está optimizado específicamente para Bottles, ofreciendo una experiencia "chispeante" tanto para gaming como para aplicaciones.',
            valveWine: 'Base Wine de Valve',
            valveWineDesc: 'Construido sobre la base robusta usada por Steam Deck.',
            patches: 'Parches curados',
            patchesDesc: 'Incluye las mejores correcciones de TKG, GE y Proton.',
        },
        caffe: {
            badge: 'Legacy y estabilidad',
            title: 'Caffe',
            upgrading: '¡Estamos trabajando para actualizarlo a Wine 10.0!',
            description1: 'Caffe está basado en Wine upstream y sigue estrictamente sus actualizaciones. Está diseñado para usuarios que necesitan las características más recientes de WineHQ, o para aplicaciones legacy que podrían comportarse de manera diferente en la base Wine de Valve.',
            description2: 'Aunque Soda es el predeterminado, Caffe sigue siendo una parte crucial de nuestro ecosistema, asegurando que tengamos un runner que sigue de cerca el desarrollo upstream mientras aplica nuestros parches esenciales.',
            upstream: 'Enfoque upstream',
            upstreamDesc: 'Sigue de cerca los lanzamientos de WineHQ para características de vanguardia.',
            alternative: 'Elección alternativa',
            alternativeDesc: 'Perfecto cuando una app no funciona bien con runners basados en Proton.',
        },
        comparison: {
            title: 'Comparación de runners',
            feature: 'Característica',
            sodaRecommended: 'Soda (Recomendado)',
            caffe: 'Caffe',
            vaniglia: 'Vaniglia',
            base: 'Base',
            bestFor: 'Mejor para',
            patches: 'Parches',
            releaseCycle: 'Ciclo de lanzamiento',
            valveWine: 'Wine de Valve (Proton)',
            wineHQ: 'WineHQ (Upstream)',
            wineHQStaging: 'WineHQ (Staging)',
            gamingModern: 'Gaming y apps modernas',
            generalPurpose: 'Propósito general',
            testingVanilla: 'Pruebas / Vanilla',
            protonTKG: 'Proton + TKG + GE',
            bottlesSpecific: 'Específico de Bottles',
            minimalNone: 'Mínimo / Ninguno',
            independent: 'Independiente',
            followsWineHQ: 'Sigue WineHQ',
        },
        contribute: {
            badge: 'Para desarrolladores',
            title: 'Contribuye al núcleo',
            description: 'Nuestros runners son de código abierto y construidos con transparencia. ¿Quieres ayudar a mejorar la compatibilidad? Mira nuestras herramientas de compilación o monitorea las últimas compilaciones CI.',
            viewSource: 'Ver código fuente',
            checkCI: 'Verificar compilaciones CI',
            buildStatus: 'Estado de las últimas compilaciones',
            passing: 'Pasada',
            building: 'Compilando...',
            autoGenerated: 'Las compilaciones se generan y prueban automáticamente.',
            viewWorkflows: 'Ver todos los flujos de trabajo',
        },
    },
    gaming: {
        badge: 'Gaming en Linux',
        title: 'Lleva tu experiencia de gaming al siguiente nivel',
        subtitle: 'Bottles hace increíblemente fácil ejecutar juegos de Windows en Linux. Desde títulos AAA hasta joyas indie, juega tus juegos favoritos con rendimiento optimizado.',
        easySetup: {
            title: 'Configuración fácil',
            description: 'Crea botellas para gaming con configuraciones preestablecidas para rendimiento óptimo.',
        },
        stores: {
            title: 'Múltiples tiendas',
            description: 'Instala y administra juegos de Steam, Epic Games, GOG y más.',
        },
        performance: {
            title: 'Máximo rendimiento',
            description: 'FSR, DLSS, Esync, Fsync - todas las características de rendimiento al alcance de tu mano.',
        },
        compatibility: {
            title: 'Amplia compatibilidad',
            description: 'Impulsado por Proton y nuestro runner Soda para excelente compatibilidad con juegos.',
        },
        discover: 'Descubre las características de gaming',
    },
    gamingPage: {
        hero: {
            title: 'Bottles es también',
            titleHighlight: 'para Gaming.',
            subtitle: 'Juega en Linux igual que en Windows. No requiere terminal.',
            download: 'Descargar Ahora',
        },
        platformHub: {
            title: 'Todas tus plataformas',
            titleHighlight: 'en un solo lugar.',
            description1: 'Personaliza tu entorno Windows con facilidad. Las plataformas de juego más populares ya están disponibles como instaladores integrados en Bottles.',
            description2: 'Epic Games Store, GOG Galaxy, EA App, Battle.net, no tienes que hacer más que elegir lo que quieres. Bottles maneja las dependencias, la instalación de fuentes y la configuración automáticamente.',
            description3: 'Crea una botella de gaming, instala tu tienda favorita y empieza a jugar de inmediato. Igual que Windows, pero mejor.',
            documentation: 'Consulta la documentación',
        },
        integration: {
            title: 'Integración Perfecta',
            description: 'Bottles va más allá de la simple instalación. Detecta automáticamente los juegos instalados desde estos lanzadores y puebla tu biblioteca, brindándote una experiencia de lanzador de juegos unificada. Sin configuración manual.',
            epic: 'Epic Games Store',
            ubisoft: 'Ubisoft Connect',
            steam: 'Steam',
        },
        proton: {
            title: 'Integración Steam y Proton',
            prefix: {
                title: 'Gestión de Prefijos Proton',
                description: 'Crea y administra botellas usando los runners Proton de Valve o GE-Proton. Bottles aprovecha el entorno oficial Steam Runtime para asegurar que tus juegos de Windows funcionen con la misma capa de compatibilidad usada por Steam Deck.',
            },
            bridge: {
                title: 'Puente de Biblioteca Steam',
                description: '¿Ya tienes juegos instalados vía Steam Native? Bottles detecta automáticamente tu biblioteca de Steam y lista tus juegos Proton como botellas. Esto te permite administrar sus configuraciones, dependencias y variables de entorno directamente desde la interfaz de Bottles.',
            },
            protondb: {
                title: 'Soporte Completo ProtonDB',
                description: 'Bottles está diseñado para funcionar perfectamente con el vasto ecosistema de juegos compatibles con Proton. Si un juego está calificado como jugable en ProtonDB, funciona en Bottles. Verifica calificaciones de compatibilidad, reportes de usuarios y opciones de lanzamiento al instante.',
                button: 'Verificar Compatibilidad',
            },
        },
    },
    eaglePage: {
        hero: {
            beta: 'BETA',
            title: 'Conoce a',
            titleHighlight: 'Eagle',
            description: 'No más ejecuciones a ciegas. Eagle escanea binarios, detecta patrones, mapea dependencias y sugiere la configuración perfecta, en segundos.',
            download: 'Descargar Bottles',
        },
        howItWorks: {
            title: 'Cómo funciona Eagle',
            description: 'En segundos, Eagle realiza un análisis exhaustivo de múltiples etapas para comprender exactamente qué necesita tu ejecutable.',
            steps: {
                peParsing: {
                    title: 'Análisis PE',
                    description: 'Lee la estructura del ejecutable, importaciones, secciones y metadatos.',
                },
                yaraScanning: {
                    title: 'Escaneo YARA',
                    description: 'Más de 50 reglas de patrones detectan motores, frameworks, instaladores y amenazas.',
                },
                contextAnalysis: {
                    title: 'Análisis de Contexto',
                    description: 'Escanea archivos vecinos, carpetas Unity Data y configuraciones .NET.',
                },
                suggestions: {
                    title: 'Sugerencias',
                    description: 'Genera configuraciones optimizadas y recomendaciones de dependencias.',
                },
            },
        },
        detection: {
            title: 'Detecta Todo',
            description: "Desde APIs gráficas hasta motores de juego, desde sistemas DRM hasta formatos de instalación. Las reglas YARA de Eagle y el mapeo de DLL lo cubren todo.",
            categories: {
                graphics: { title: 'Gráficos', description: 'DirectX 8-12, Vulkan, OpenGL, DXGI, NVAPI, AMD AGS, PhysX' },
                audio: { title: 'Audio', description: 'XAudio, FMOD, Wwise, OpenAL, DirectSound, Miles, Bink' },
                runtimes: { title: 'Runtimes', description: '.NET Framework/Core/5+, Mono, VC++ 2008-2022, Java, Python, Lua' },
                engines: { title: 'Motores', description: "Unity, Unreal, Godot, CryEngine, Source, Ren'Py, RPG Maker" },
                protection: { title: 'Protección', description: 'EasyAntiCheat, BattlEye, Denuvo, VMProtect, Themida' },
                installers: { title: 'Instaladores', description: 'NSIS, Inno Setup, MSI, InstallShield, WiX, WISE, Squirrel' },
            },
        },
        intelligence: {
            title: 'No solo un Escáner',
            description: "Eagle no solo lee archivos, entiende el contexto, las relaciones y la compatibilidad.",
            features: {
                deepScan: { title: 'Escaneo Profundo', description: 'Extrae y analiza archivos de instaladores. Escanea ejecutables incrustados, DLLs y archivos de configuración para construir una imagen completa.' },
                neighborAnalysis: { title: 'Análisis Vecinal', description: 'Escanea archivos relacionados en el mismo directorio: carpetas Unity Data, DLLs conocidas, archivos de configuración .NET y paquetes .pck de Godot.' },
                smartSuggestions: { title: 'Sugerencias Inteligentes', description: 'Recomienda automáticamente DXVK, VKD3D, GameMode y otras optimizaciones basadas en las tecnologías detectadas.' },
                compatibilityWarnings: { title: 'Advertencias de Compatibilidad', description: 'Detecta anti-cheat, binarios ARM64, protectores problemáticos y componentes faltantes antes de ejecutar.' },
            },
        },
        report: {
            title: 'Transparencia Total',
            description: 'Eagle genera informes Markdown completos que puedes guardar y compartir. Cada detección incluye su fuente, contexto y razonamiento.',
            items: [
                'Metadatos binarios: arquitectura, fecha de compilación, editor',
                'Tecnologías detectadas con atribución de archivo fuente',
                'Advertencias de compatibilidad y explicaciones',
                'Dependencias recomendadas y optimizaciones',
                'Lista completa de archivos analizados',
            ],
        },
        cta: {
            title: "¿Listo para ver qué hay dentro?",
            description: 'Eagle está integrado en Bottles. Descarga ahora y deja que Eagle analice tus programas de Windows antes de ejecutarlos.',
            button: 'Obtener Bottles',
        },
    },
    nextPage: {
        hero: {
            badge: 'El Futuro de Bottles',
            title: 'Bottles',
            titleHighlight: 'Next',
            description: 'Una reescritura completa de Bottles para resolver desafíos arquitectónicos y habilitar una nueva generación de gestión de prefijos Wine. Construido con Rust, libcosmic y una arquitectura Cliente-Servidor revolucionaria.',
            github: 'Ver en GitHub',
            prototype: 'Ver Prototipo',
        },
        architecture: {
            title: 'Una Nueva Arquitectura',
            description: 'Bottles Next introduce una arquitectura modular dividida en tres componentes principales. Esta separación permite una flexibilidad, escalabilidad e integración de terceros sin precedentes.',
            client: {
                title: 'Cliente',
                description: 'La interfaz de usuario. Mientras que nuestro cliente oficial está construido con Rust y libcosmic, la arquitectura permite múltiples clientes en cualquier lenguaje (GTK, Qt, Web, etc.).',
                items: [
                    'Rust + libcosmic',
                    'Múltiples implementaciones',
                    'Envía instrucciones al Servidor',
                ],
            },
            server: {
                title: 'Servidor',
                description: 'El cerebro de las operaciones. Construido en Rust, recibe instrucciones del cliente y orquesta la gestión de los prefijos.',
                items: [
                    'Escrito en Rust',
                    'Puede ser usado por apps de terceros',
                    'Orquesta los Agentes',
                ],
            },
            agent: {
                title: 'Agente',
                description: 'Se ejecuta dentro del prefijo Wine. Construido con C# y .NET, ejecuta comandos nativos de Windows y reporta al servidor.',
                items: [
                    'C# / .NET (WineBridge)',
                    'Ejecución nativa de Windows',
                    'Se ejecuta dentro del prefijo',
                ],
            },
        },
        valueProp: {
            title: 'Más que una simple GUI',
            description1: "Bottles Next no es solo una actualización gráfica; es un cambio de paradigma. Al separar la lógica (Servidor) de la interfaz (Cliente), abrimos la puerta a un nuevo ecosistema.",
            description2: 'Los desarrolladores de terceros pueden usar el Servidor de Bottles como backend para sus propias aplicaciones, aprovechando nuestra robusta gestión de prefijos sin reinventar la rueda.',
            universal: {
                title: 'Backend Universal',
                description: 'Cualquier app puede convertirse en un cliente Bottles, independientemente del lenguaje de programación.',
            },
            scalable: {
                title: 'Escalable y Mantenible',
                description: 'Rust asegura seguridad de memoria y rendimiento, mientras que el diseño modular hace que el mantenimiento sea más fácil.',
            },
        },
        prototype: {
            preview: 'Vista Previa',
            title: 'Una Experiencia Moderna y Nativa',
            description: 'Construida con libcosmic, la nueva interfaz es rápida, receptiva y se integra perfectamente con tu entorno de escritorio.',
        },
        donations: {
            title: 'Apoyado por NLnet',
            description: 'Estamos orgullosos de anunciar que Bottles Next es apoyado por la Fundación NLnet a través del Fondo NGI Commons. Esta subvención acelera nuestro desarrollo, pero aún necesitamos tu ayuda para sostener el proyecto a largo plazo.',
            supportButton: 'Apóyanos',
            readButton: 'Leer Anuncio',
        },
        devActivity: {
            title: 'Actividad de Desarrollo',
            description: 'Sigue el progreso en todos nuestros repositorios.',
            latestCommits: 'Últimos Commits',
            activePrs: 'Pull Requests Activos',
            noPrs: 'No hay pull requests abiertos en este momento.',
        },
        readMore: {
            title: 'Leer Más',
            article1: {
                title: 'Bottles Next, Una cuestión de tecnología',
                description: "Aprende sobre las tecnologías que estamos explorando y el cambio a una arquitectura modular.",
            },
            article2: {
                title: 'Rust y libcosmic en Bottles Next',
                description: 'Por qué elegimos Rust, libcosmic y C# para el futuro de Bottles.',
            },
        },
    },
    wineBridgePage: {
        hero: {
            title: 'Wine',
            titleHighlight: 'Bridge',
            description: "Una aplicación .NET ligera que se ejecuta dentro de tu prefijo Wine, proporcionando acceso directo a las APIs de Windows. Más rápido que winedbg, más simple de lo que esperas.",
            github: 'Ver en GitHub',
            try: 'Probar en Bottles',
        },
        why: {
            title: '¿Por qué WineBridge?',
            description: 'winedbg es potente pero lento, es un depurador, no una herramienta de utilidad. WineBridge te da las mismas capacidades con ejecución casi instantánea.',
            benefits: {
                fast: { title: 'Ultrarrápido', description: 'A diferencia de winedbg, WineBridge ejecuta comandos al instante. Sin sobrecarga de depurador, sin tiempos de inicio lentos.' },
                native: { title: 'APIs Nativas de Windows', description: 'Se ejecuta dentro del prefijo y llama a las APIs de Windows directamente. Los resultados son precisos e inmediatos.' },
                simple: { title: 'Interfaz Simple', description: 'Herramienta de línea de comandos con salida predecible. Fácil de analizar, programar e integrar.' },
                openSource: { title: 'Código Abierto', description: 'Licencia MIT. Bifórcalo, extiéndelo, contribuye. El puente es tuyo.' },
            },
        },
        commands: {
            title: 'Comandos Disponibles',
            description: 'WineBridge expone una interfaz CLI simple. Ejecuta WineBridge.exe help dentro de tu prefijo para ver todas las opciones.',
            list: {
                runExe: { description: 'Lanza ejecutables directamente o vía ShellExecute con control total sobre el directorio de trabajo y los argumentos.' },
                getRunningProcs: { description: 'Lista todos los procesos que se están ejecutando actualmente dentro del prefijo Wine.' },
                killProc: { description: 'Termina procesos por PID o por nombre, usando APIs nativas de Windows.' },
                registryKeys: { description: 'Lee, lista y modifica claves del Registro de Windows en todas las colmenas (HKCU, HKLM, HU, etc.).' },
            },
        },
        usage: {
            title: 'Uso Simple',
            description: 'WineBridge está diseñado para ser.. simple, por supuesto. Copia el ejecutable en tu prefijo, ejecútalo con el comando que necesitas y analiza la salida.',
            items: [
                'Sin dependencias, ejecutable único',
                'Formato de salida compatible con tuberías',
                'Los mensajes de error incluyen contexto',
                'Funciona en cualquier prefijo Wine, no importa el runner',
            ],
        },
        cta: {
            title: '¿Listo para cerrar la brecha?',
            description: 'WineBridge es de código abierto y está listo para usar. Consulta el repositorio para documentación y lanzamientos.',
            button: 'Ver Repositorio',
        },
    },
    download: {
        title: 'Descargar Bottles',
        flathub: {
            title: 'Flathub',
            description: 'Recomendado para la mayoría de usuarios. Obtén actualizaciones automáticas y seguridad aislada.',
            button: 'Instalar desde Flathub',
        },
        appImage: {
            title: 'AppImage',
            description: 'Versión portable. No requiere instalación, solo descarga y ejecuta.',
            button: 'Descargar AppImage',
        },
        donation: {
            title: 'Apoya el desarrollo',
            description: 'Bottles es gratuito y de código abierto. Tu donación nos ayuda a continuar el desarrollo.',
            customAmount: 'Cantidad personalizada (0 para gratis)',
            download: 'Descargar',
        },
    },
    footer: {
        tagline: 'Ejecuta software de Windows en Linux con facilidad',
        product: 'Producto',
        features: 'Características',
        gaming: 'Gaming',
        appStore: 'App Store',
        download: 'Descargar',
        resources: 'Recursos',
        documentation: 'Documentación',
        github: 'GitHub',
        community: 'Comunidad',
        blog: 'Blog',
        developers: 'Desarrolladores',
        database: 'Database',
        contribute: 'Contribuir',
        funding: 'Financiación',
        legal: 'Legal',
        license: 'Licencia',
        privacy: 'Privacidad',
        terms: 'Términos',
        made: 'Hecho con ❤️ por la comunidad Bottles',
    },
    community: {
        title: 'Únete a la',
        titleHighlight: 'Comunidad',
        subtitle: 'Conéctate con miles de usuarios de Bottles en todo el mundo. Obtén ayuda, comparte tu experiencia y contribuye al proyecto.',
        discord: {
            title: 'Discord',
            description: 'Únete a nuestro servidor de Discord para chat y soporte en tiempo real.',
            button: 'Únete a Discord',
        },
        github: {
            title: 'GitHub',
            description: 'Contribuye al proyecto, reporta errores y solicita características.',
            button: 'Ver en GitHub',
        },
        matrix: {
            title: 'Matrix',
            description: '¿Prefieres Matrix? Únete a nuestro espacio comunitario para discusiones.',
            button: 'Únete a Matrix',
        },
    },
    sponsors: {
        title: 'Apoyado por',
        titleHighlight: 'patrocinadores increíbles',
        subtitle: 'Bottles es posible gracias al generoso apoyo de nuestros patrocinadores y colaboradores.',
        becomeButton: 'Conviértete en patrocinador',
    },
    funding: {
        title: 'Financiación',
        description: 'Bottles es un proyecto de software libre. Apoya su desarrollo para asegurar el futuro de la ejecución de software de Windows en Linux.',
        channels: {
            title: 'Canales de Donación',
            preferred: 'Preferido',
            github: { desc: 'Recurrente mensual' },
            paypal: { desc: 'Pago único o recurrente' },
            liberapay: { desc: 'Recurrente flexible' },
            patreon: { desc: 'Membresía' },
            crypto: { desc: 'BTC, ETH, y más' },
            polar: { desc: 'Paga lo que quieras' }
        },
        roadmap: {
            title: 'Hoja de Ruta de Desarrollo',
            description: 'Sigue el progreso de las características financiadas por la comunidad.',
            searchPlaceholder: 'Filtrar tareas...',
        },
        tasks: {
            status: {
                wip: 'EN PROGRESO',
                done: 'HECHO',
                alpha: 'ALPHA',
                next: 'PRÓXIMO',
                rejected: 'RECHAZADO'
            },
            viewDetails: 'Ver Detalles',
        },
        supporters: {
            title: 'Nuestros Colaboradores',
            patrons: 'Mecenas de Liberapay',
            weekly: 'Apoyo Semanal',
            anonymous: 'y muchos donantes anónimos',
        },
        modals: {
            cryptoTitle: 'Direcciones Crypto',
            close: 'Cerrar',
        }
    },
    blog: {
        title: 'Blog',
        description: 'Noticias, actualizaciones e ideas del equipo de Bottles.',
        back: 'Volver a todas las publicaciones',
        readArticle: 'Leer Artículo',
        readNext: 'Leer Siguiente',
        publishedOn: 'Publicado el',
        minRead: 'min lectura',
    },
    download: {
        title: 'Obtener Bottles',
        description1: 'La forma moderna de ejecutar software de Windows en Linux.',
        description2: 'Seguro, en sandbox y potente.',
        steps: {
            step1: 'Paso 1',
            installFlatpak: 'Instalar Flatpak',
            selectDistro: 'Seleccionar Distro:',
            step2: 'Paso 2',
            addFlathub: 'Añadir Repositorio Flathub',
            addFlathubDesc: 'Añade el repositorio de Flathub para acceder a Bottles y otras apps.',
            step3: 'Paso 3',
            installBottles: 'Instalar Bottles',
            installBottlesDesc: 'Finalmente, instala Bottles.'
        },
        distro: {
            descriptionWithDistro: 'Ejecuta este comando para instalar el gestor de paquetes Flatpak para {distro}.',
            vanillaOs: 'Flatpak está preinstalado y configurado con Flathub. Puedes instalar Bottles directamente durante el Primer Inicio. Si por alguna razón no está presente, puedes usar el comando de abajo:'
        },
        otherVersions: {
            title: 'Otras Versiones',
            v1: { title: 'Bottles v1 (Legacy)', desc: 'Versión clásica. Buena para necesidades simples, pero carece de características modernas.' },
            source: { title: 'Código Fuente', desc: 'Licencia GPLv3. Compílalo tú mismo o contribuye en GitHub.' },
            manual: { title: 'Compilación manual', desc: 'Compila Bottles desde cero.' }
        },
        recommended: 'RECOMENDADO',
        flatpak: {
            title: 'Flatpak (Flathub)',
            desc: 'La forma oficial y recomendada de instalar Bottles. Soportado en todas las distribuciones principales incluyendo Steam Deck.'
        },
        startInstall: 'Iniciar Instalación',
        comingSoon: {
            title: 'cpak',
            desc: 'Próximamente. Actualmente en desarrollo.'
        },
        thankYou: {
            title: '¡Gracias por descargar!',
            desc: 'Sigue estos pasos para hacer funcionar Bottles en tu sistema.',
            back: 'Volver a la selección'
        },
        modal: {
            support: 'Apoyar el Desarrollo',
            desc: 'Bottles es software libre construido por voluntarios. Tu donación nos ayuda a mantener servidores y desarrollar nuevas características.',
            custom: 'Cantidad personalizada (0 para gratis)',
            free: 'Descargar Gratis',
            donate: 'Donar y Descargar',
            secure: 'Pagos seguros por',
            noPayment: "No se requiere pago. ¡Pero nos encantaría un café! ☕",
            confirm: {
                title: '¿Estás seguro?',
                desc: 'Estamos constantemente desarrollando nuevas características e investigación para hacer Bottles lo mejor posible. Tu apoyo nos ayuda a continuar este trabajo:',
                goBack: 'Volver',
                continueFree: 'Continuar Gratis'
            }
        }
    },
    database: {
        title: 'Bottles Database',
        description: 'Dependencias, recursos e instaladores de software de Windows para Bottles.',
        dependencies: {
            title: 'Dependencias',
            description: 'Estos paquetes aumentan la compatibilidad de los entornos WINE con el software de Windows.',
            loading: 'Cargando dependencias...',
        },
        components: {
            title: 'Componentes',
            description: 'Estos son elementos esenciales para crear entornos y extenderlos con nuevas características e implementaciones.',
            loading: 'Cargando componentes...',
        },
        installers: {
            title: 'Instaladores',
            description: 'Estos son instaladores mantenidos por nuestra comunidad que automatizan la instalación de un programa de Windows.',
        },
        table: {
            name: 'Nombre',
            type: 'Tipo',
            category: 'Categoría',
            channel: 'Canal',
            description: 'Descripción',
            actions: 'Acciones',
            learnMore: 'Saber Más',
            details: 'Detalles',
            report: 'Reportar',
        }
    },
    docs: {
        title: 'Documentación',
        notFound: '# 404 - Página No Encontrada\nLa página de documentación solicitada no se pudo encontrar.',
        mistake: '¿Encontraste un error?',
        edit: 'Edita esta página en GitHub',
        lastUpdated: 'Última actualización:',
        poweredBy: 'Impulsado por'
    }
};
