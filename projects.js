/*
 * Every project and game on the site lives in this file.
 * The home page, the Work page, the Games page and each project page are all
 * rendered from it, so adding an entry here is the only step needed.
 *
 * ── ADD A PROFESSIONAL PROJECT ── copy this block into `projects` below:
 *
 *   {
 *       id: 'my-project',              // used in the URL: project.html?id=my-project
 *       kind: 'professional',
 *       title: 'My Project',
 *       studio: 'Studio name',         // or 'Independent'
 *       date: '2026-06',               // YYYY-MM (or YYYY). Newest shows first.
 *       summary: 'One line shown on lists.',
 *       tags: ['C#', 'Unity'],         // also become the filters on the Work page
 *       cover: 'Images/cover.jpg',
 *       portrait: true,                // only if the cover is taller than wide
 *       featured: true,                // show it on the home page
 *       about: 'What the project is.',
 *       role: 'What I did on it.',
 *       skills: ['Skill one', 'Skill two'],
 *       links: [{ label: 'Official site', url: 'https://…' }],
 *       gallery: [
 *           { type: 'image', src: 'Images/shot.jpg', alt: 'What it shows' },
 *           { type: 'video', src: 'Videos/clip.mp4', portrait: true },
 *           { type: 'youtube', id: 'VIDEO_ID' },    // from youtube.com/watch?v=VIDEO_ID
 *           { type: 'vimeo', id: '123456', hash: 'abcdef' }
 *       ]
 *   },
 *
 * ── ADD A GAME ── same idea with kind: 'game', plus:
 *
 *       status: 'Prototype',           // or 'Demo'; becomes a filter on the Games page
 *       genre: 'Puzzle',
 *       playable: true,                // only if it runs in the browser
 *       url: 'https://throndev.itch.io/…',
 *       features: ['Feature one'],     // optional
 *
 *       role: 'What I did on it.',     // optional, shows as "My role"
 *
 *   Every game has its own page at project.html?id=<id>. Fields left empty
 *   ('' or []) are simply not shown, so fill them in whenever you like.
 *   Leave `cover` out if there is no image yet.
 */
window.PORTFOLIO = {
    projects: [
        {
            id: 'almas-perdidas',
            kind: 'professional',
            title: 'Almas Perdidas',
            studio: 'Lucid Dreams',
            date: '2026-06',
            summary: 'Suspense-horror, free roam & local multiplayer VR Experience.',
            tags: ['C#', 'Unity', 'XR', 'Meta SDK', 'Public Event', 'Multiplayer'],
            cover: 'Images/AP_BosquePostal.jpeg',
            featured: true,
            about: 'A Suspense-horror, two-player coop, full body tracking & free roam VR Experience presented at Metropolitan Santiago.',
            role: "I developed the full experience using Unity and Meta's SDKs. This experience was designed to be played by two players, with the goal of finding the missing pieces of the story, allowing them to explore physically and interact with various objects to solve puzzles and challenges. The player's progress is tracked by an admin app for windows that allows the operator to control the game scenes and acts as a server for the multiplayer experience. The estimated duration of the game is 25 minutes, including a 5-minute induction explanation.",
            skills: [
                'Integration of Meta Movement SDK',
                'Integration of Interaction SDK',
                'Local Multiplayer using NGO',
                'Spatial anchors for world alignment',
                'VR standalone application optimization',
                'Hand tracking rigging and setup',
                'Audio implementation and sound design'
            ],
            links: [
                { label: 'Lucid Dreams event page', url: 'https://luciddreams.cl/especiales/almas-perdidas-metropolitan/' }
            ],
            gallery: [
                { type: 'video', src: 'Videos/AP_SneakPeek.mp4' },
                { type: 'image', src: 'Images/AP_portadaMetropolitan.jpeg', alt: 'Almas Perdidas poster for Metropolitan Santiago' },
                { type: 'image', src: 'Images/AP_pasilloPadre.jpg', alt: "Almas Perdidas: Father's Hallway" },
                { type: 'image', src: 'Images/AP_piezaHija.jpeg', alt: "Almas Perdidas: Daughter's Bedroom" }
            ]
        },
        {
            id: 'xpedition-festigame',
            kind: 'professional',
            title: 'XPEDITION: Cerro Castillo at Festigame',
            studio: 'Lucid Dreams',
            date: '2025-10',
            summary: 'XPEDITION VR Experience presented at Festigame Chile 2025.',
            tags: ['C#', 'Unity', 'XR', 'Meta SDK', 'Public Event'],
            cover: 'Images/1.JPG',
            portrait: true,
            featured: true,
            about: 'Full body tracking & free roam VR experience in collaboration with Caja los Andes, presented at Festigame Chile 2025.',
            role: 'I adapted the "XPEDITION: Cerro Castillo" project for a public showcase at Festigame, redesigning parts of the scene layout, game duration and integrating sponsor branding to meet the event’s requirements.',
            skills: [
                'Integration of Meta Movement SDK',
                'Spatial anchors for world alignment',
                'VR standalone application optimization',
                'Spline-based animation systems',
                'Hand tracking rigging and setup',
                'Audio implementation and sound design'
            ],
            gallery: [
                { type: 'image', src: 'Images/xped festigame 1.JPG', alt: 'XPEDITION: Cerro Castillo at Festigame' },
                { type: 'video', src: 'Videos/festigameXped.mp4', portrait: true },
                { type: 'image', src: 'Images/2.JPG', alt: 'XPEDITION: Cerro Castillo at Festigame' }
            ]
        },
        {
            id: 'xpedition-mision-espacial',
            kind: 'professional',
            title: 'XPEDITIONVR: Misión Espacial',
            studio: 'Lucid Dreams',
            date: '2025-03',
            summary: 'Full body tracking & free roam VR experience at Lollapalooza.',
            tags: ['C#', 'Unity', 'XR', 'Meta SDK', 'Public Event'],
            cover: 'Images/Dia2_Lolla.jpg',
            featured: true,
            about: 'Full body tracking & free roam VR experience in collaboration with Banco de Chile, presented at the VIP Zone at Lollapalooza Chile 2025.',
            role: 'Using Unity, I implemented full-body tracking systems based on hand tracking while integrating Meta’s Movement SDK. I also worked with spatial anchors for world alignment and connected vibration motors through a local network.',
            skills: [
                'Integration of Meta Movement SDK',
                'Spatial anchors for world alignment',
                'VR standalone application optimization',
                'Spline-based animation systems',
                'Hand tracking rigging and setup',
                'Audio implementation and sound design'
            ],
            gallery: [
                { type: 'image', src: 'Images/LollaXPED.jpg', alt: 'The Banco de Chile VR stand at Lollapalooza Chile 2025' },
                { type: 'vimeo', id: '1076230232', hash: '202d7baee8' },
                { type: 'image', src: 'Images/In-Editor_SpaceXped.jpg', alt: 'XPEDITION: Misión Espacial in the Unity editor' }
            ]
        },
        {
            id: 'asesor-financiero-scotiabank',
            kind: 'professional',
            title: 'Asesor Financiero Scotiabank',
            studio: 'Independent',
            date: '2025-01',
            summary: "Educational app for Scotiabank's branch in KidZania.",
            tags: ['C#', 'Unity', '2D', 'Educational'],
            cover: 'Images/totemPpl.jpeg',
            portrait: true,
            featured: true,
            about: 'An educational application for KidZania designed to teach children the basics of financial literacy through interactive experiences.',
            role: "Full development of an application for an interactive kiosk installed at the Scotiabank branch in KidZania. Developed in Unity, including animation, UI design and implementation, a virtual keyboard system, and email delivery of the player's profile.",
            skills: [
                'UI/UX design and interface systems',
                'Interactive Kiosk development',
                'Virtual input systems',
                'Player data management'
            ],
            gallery: [
                { type: 'image', src: 'Images/inside app.jpg', alt: 'Asesor Financiero app screen' },
                { type: 'image', src: 'Images/totemApp.jpg', alt: 'The Asesor Financiero kiosk at KidZania' },
                { type: 'image', src: 'Images/inside app2.jpg', alt: 'Asesor Financiero app screen' }
            ]
        },
        {
            id: 'xpedition-cerro-castillo',
            kind: 'professional',
            title: 'XPEDITIONVR: Cerro Castillo',
            studio: 'Lucid Dreams',
            date: '2024-11',
            summary: 'Full body tracking & free roam VR experience.',
            tags: ['C#', 'Unity', 'XR', 'Meta SDK'],
            cover: 'Images/xped 1.jpeg',
            featured: true,
            about: 'Full body tracking & free roam VR experience aimed to work in a real, physical location, aligning real world with a virtual environment to generate maximum immersion.',
            role: 'Using Unity, I implemented full-body tracking systems based on hand tracking and Pro Touch controllers, which were later deprecated after integrating Meta’s Movement SDK. I also worked with spatial anchors for world alignment and initial setup, as well as 3D scanning of climbing holds.',
            skills: [
                'Integration of Meta Movement SDK',
                'Spatial anchors for world alignment',
                '3D scanning',
                'VR standalone application optimization',
                'Spline-based animation systems',
                'Hand tracking rigging and setup',
                'Audio implementation and sound design'
            ],
            gallery: [
                { type: 'image', src: 'Images/xped 3.jpeg', alt: 'XPEDITION: Cerro Castillo' },
                { type: 'youtube', id: 'D61b4_pcZlA' },
                { type: 'image', src: 'Images/xped 2.jpg', alt: 'XPEDITION: Cerro Castillo' }
            ]
        },

        /* ───────────── Games & prototypes ───────────── */

        {
            id: 'quantum-solve',
            kind: 'game',
            title: 'Quantum Solve',
            studio: 'Personal Project',
            date: '2024',
            summary: 'Exploration and restoration while time is ticking.',
            status: 'Prototype',
            genre: 'Puzzle',
            tags: ['Puzzle', 'Exploration', 'Time-based', 'Prototype', 'GameJam'],
            cover: 'Images/quantumSolve_icon.png',
            featured: true,
            url: 'https://throndev.itch.io/quantum-solve',
            role: 'Programmer and team lead. I also model the cat, animated different object, implemented shaders and designed puzzles.' +
                ' I programmed all the movement, interaction, dialogue, sfx, camera and everything overall. This was a gamejam project that was made in 2-3 weeks by 4 people, communication with the art team was key.',
            about: 'An exploration and restoration puzzle game where time is your greatest challenge. Navigate through mysterious environments while managing the ticking clock to solve intricate puzzles and restore order.',
            features: [
                'Time-based puzzle mechanics',
                'Exploration-focused gameplay',
                'Restoration and reconstruction systems',
                'Atmospheric environments'
            ],
            gallery: [
                { type: 'image', src: 'Images/quantumSolve_featured.png', alt: 'Quantum Solve' },
                { type: 'image', src: 'Images/quantumSolve_2.png', alt: 'Quantum Solve screenshot' },
                { type: 'image', src: 'Images/quantumSolve_3.png', alt: 'Quantum Solve screenshot' }
            ]
        },
        {
            id: 'infracto',
            kind: 'game',
            title: 'inFracto',
            summary: 'Dark Fantasy Skill-based Bullet Hell.',
            status: 'Prototype',
            genre: 'Action',
            cover: 'Images/inFracto_icon.png',
            url: 'https://throndev.itch.io/infracto',
            about: 'Dark magic rises from lacking-will creatures, threatening to break the world\'s balance.\n' +
                '\n' +
                'Equip yourself, survive arenas filled with bullets and step into your next challenge!',
            role: '',
            features: [],
            gallery: [
                { type: 'image', src: 'Images/infracto_1.png', alt: 'inFracto screenshot' },
                { type: 'image', src: 'Images/infracto_2.png', alt: 'inFracto screenshot' },
                { type: 'image', src: 'Images/infracto_3.png', alt: 'inFracto screenshot' }
            ]
        },
        {
            id: 'la-iglesia-de-la-noche',
            kind: 'game',
            title: 'La Iglesia de la Noche',
            summary: 'Mock-up of a more obscure type game based on a real story.',
            status: 'Prototype',
            genre: 'Horror',
            cover: 'Images/laIglesia_icon.png',
            url: 'https://throndev.itch.io/la-iglesia-de-la-noche',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'press-pective',
            kind: 'game',
            title: 'Press-Pective',
            summary: 'Superliminal-like demo in UE5.',
            status: 'Demo',
            genre: 'Puzzle',
            cover: 'Images/pressPective_icon.png',
            url: 'https://throndev.itch.io/press-pective',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'untitled-hard-platform',
            kind: 'game',
            title: 'Untitled Hard Platform',
            summary: 'Do u think you can beat all levels? In less than an hour? Ha!',
            status: 'Demo',
            genre: 'Platformer',
            playable: true,
            cover: 'Images/uhp_icon.png',
            url: 'https://throndev.itch.io/untitled-hard-platform-uhp',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'dis-kitchen',
            kind: 'game',
            title: 'Dis Kitchen',
            summary: "It's just a cooking game, but if you don't serve your customers, there will be bullet hell.",
            status: 'Prototype',
            genre: 'Action',
            playable: true,
            cover: 'Images/disKitchen_icon.png',
            url: 'https://throndev.itch.io/dis-kitchen',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'below-the-smoke',
            kind: 'game',
            title: 'Below the Smoke',
            summary: 'Very short prototype to test the main menu load and environment shading in an eerie setting.',
            status: 'Prototype',
            genre: 'Horror',
            cover: 'Images/belowTheSmoke_icon.png',
            url: 'https://throndev.itch.io/terror-project',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'whisker-wars',
            kind: 'game',
            title: 'Whisker Wars',
            summary: 'Cats + TD + Minigames... Cool.',
            status: 'Prototype',
            genre: 'Strategy',
            playable: true,
            cover: 'Images/whiskerWars_icon.png',
            url: 'https://throndev.itch.io/whisker-wars',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'afterlife',
            kind: 'game',
            title: 'Afterlife',
            summary: 'NO HOPE.',
            status: 'Prototype',
            genre: 'Shooter',
            url: 'https://throndev.itch.io/afterlife',
            about: '',
            role: '',
            features: [],
            gallery: []
        },
        {
            id: 'fantasy-murder',
            kind: 'game',
            title: 'Fantasy Murder',
            summary: 'Top-Down Hotline Miami-Fantasy Styled prototype.',
            status: 'Prototype',
            genre: 'Action',
            url: 'https://throndev.itch.io/fantasy-murder',
            about: '',
            role: '',
            features: [],
            gallery: []
        }
    ]
};
