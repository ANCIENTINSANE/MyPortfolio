export const siteConfig = {
    name: "Surendra Kumar M",
    description: "Founder • Systems Engineer • Full-Stack Architect building scalable, AI-powered SaaS platforms.",
    url: "https://surendra.codes",
    links: {
        github: "https://github.com/ANCIENTINSANE",
        linkedin: "https://www.linkedin.com/in/surendra-codes/",
        email: "surendram.dev@gmail.com",
        instagram: "https://www.instagram.com/surendra.codes/",
        twitter: "https://twitter.com/surendra_codes/",

    },
    projectRepos: {
        fairlx: "https://github.com/stemlen/fairlx",
        tapit: "https://github.com/ANCIENTINSANE/TAPIT.git",
        catherine: "https://github.com/ANCIENTINSANE",
        thefloortraders: "https://github.com/ANCIENTINSANE/the-flow-traders.git"
    },
    stemlenLink: "https://stemlen.com"
};

export const heroContent = {
    title: "Scalable Systems. Refined Experiences.",
    subtitle:
        "Founder and full-stack architect focused on building high-performance, AI-powered SaaS products with clean design, strong systems thinking, and production-grade engineering.",
    cta: [
        { name: "Explore Work", href: "#projects", variant: "default" },
        { name: "View Experience", href: "#experience", variant: "outline" }
    ]
};

export const aboutContent = {
    title: "About",
    narrative: [
        "I build products with a systems-first mindset. My work blends engineering precision with thoughtful design to create software that is scalable, reliable, and genuinely useful.",
        "As a founder and full-stack engineer, I focus on long-term architecture rather than short-term hacks. I care deeply about performance, clean code, maintainability, and creating digital experiences that feel seamless and intentional."
    ],
    expertise: [
        {
            title: "Product & Systems Architecture",
            description:
                "Designing scalable SaaS architectures, defining data models, optimizing performance, and building reliable backend systems."
        },
        {
            title: "Full-Stack Engineering",
            description:
                "Developing robust web platforms with modern JavaScript frameworks, RESTful APIs, and production-ready infrastructure."
        },
        {
            title: "Experience & Interface Design",
            description:
                "Crafting intuitive, high-performance interfaces that balance usability, clarity, and aesthetic precision."
        }
    ]
};

export const experience = [
    {
        role: "Founder & Director",
        company: "Stemlen Pvt Ltd.",
        duration: "Aug 2025 — Present",
        impact: [
            "Founded and leading the development of Fairlx, an AI-powered SaaS portfolio management platform.",
            "Architected a usage-based billing system with automation-first workflows.",
            "Designed scalable backend systems focused on performance, security, and extensibility.",
            "Directed product strategy from infrastructure design to user experience.",
            "Established long-term technical vision and engineering standards."
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "Vyva Consulting Inc.",
        duration: "Mar 2025 — May 2025",
        impact: [
            "Led development of a unified data platform integrating Xactly, SalesVista, Salesforce, and Spiff.",
            "Built scalable applications delivering consolidated analytics and operational insights.",
            "Designed optimized PostgreSQL schemas and deployed infrastructure on AWS.",
            "Implemented CI/CD pipelines using GitHub Actions to streamline production releases.",
            "Improved reporting efficiency and cross-system data visibility."
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "GVR Infosystems Pvt Ltd.",
        duration: "Feb 2024 — Mar 2025",
        impact: [
            "Engineered a comprehensive Legal Management System with modern frontend and backend architecture.",
            "Developed secure, scalable modules for case workflows, document handling, and client operations.",
            "Optimized database performance and improved system responsiveness.",
            "Delivered production-ready solutions enhancing operational productivity."
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "Konkorde.org",
        duration: "Oct 2022 — Nov 2023",
        impact: [
            "Developed full-stack applications using modern JavaScript frameworks and Flutter.",
            "Reduced load times by 25% through API optimization and database performance tuning.",
            "Led migration of legacy systems to scalable, modern architectures.",
            "Collaborated closely with design teams to deliver refined, user-centric interfaces.",
            "Improved user engagement through feature optimization and performance enhancements."
        ]
    }
];

export const projects = [
    {
        title: "Fairlx",
        description:
            "An open-source, AI-powered Project Management Tool built on a usage-based SaaS model to help teams plan, execute, and scale projects with automation-first workflows.",
        tags: ["Open Source", "AI-Powered", "Project Management", "Usage-Based SaaS"],
        image: "/fairlx.webp",
        github: siteConfig.projectRepos.fairlx,
        live: "https://fairlx.com",
        featured: true
    },
    {
        title: "Catherine Group CBSE Platform",
        description:
            "A premium educational platform built to streamline academic workflows and deliver a structured digital experience aligned with the CBSE curriculum.",
        tags: ["Svelte", "Tailwind CSS", "Platform Engineering"],
        image: "/platform_educational_premium_1772087392241.png",
        github: siteConfig.projectRepos.catherine,
        live: "https://catherine-group-cbse-main.vercel.app/"
    },
    {
        title: "Project TAPIT",
        description:
            "A cross-platform application focused on frictionless interaction and utility-driven design, built for real-world performance.",
        tags: ["Flutter", "Cross-Platform", "Product Development"],
        image: "/mobile_app_tapit_mockup_1772086928850.png",
        github: siteConfig.projectRepos.tapit,
        live: "https://github.com/ANCIENTINSANE/TAPIT.git"
    },
    {
        title: "The Floor Traders",
        description:
            "A finance-oriented web platform delivering clean interface design, performance optimization, and reliable data presentation.",
        tags: ["React", "Finance", "Web Application"],
        image: "/finance_dashboard_clean_1772087158625.png",
        github: siteConfig.projectRepos.thefloortraders,
        live: "https://thefloortraders.io/"
    }
];

export const fairlxContent = {
    title: "Fairlx",
    subtitle:
        "An open-source, AI-powered Project Management Tool built on a usage-based SaaS model.",

    badge: "Flagship Product",
    previewLabel: "Platform Overview",

    features: [
        {
            iconName: "Github",
            title: "Open Source",
            desc: "Transparent, extensible, and community-driven."
        },
        {
            iconName: "Sparkles",
            title: "AI Automation",
            desc: "Intelligent workflows that reduce manual effort."
        },
        {
            iconName: "Activity",
            title: "Usage-Based Model",
            desc: "Scales pricing and infrastructure with real usage."
        }
    ],

    links: {
        visit: "https://fairlx.com",
        caseStudy: "https://fairlx.com/about"
    }
};

export const skills = {
    frontend: [
        { name: "Next.js", icon: "Rocket" },
        { name: "Svelte", icon: "Zap" },
        { name: "React", icon: "Component" },
        { name: "Tailwind CSS", icon: "Wind" },
        { name: "Modern CSS", icon: "Palette" },
        { name: "UX systems", icon: "UserCheck" }
    ],
    backend: [
        { name: "Node.js", icon: "Terminal" },
        { name: "Supabase", icon: "Database" },
        { name: "Appwrite", icon: "Cloud" },
        { name: "Redis", icon: "Zap" },
        { name: "REST APIs", icon: "Globe" },
        { name: "System Architecture", icon: "Network" }
    ],
    mobile: [
        { name: "Flutter", icon: "Smartphone" },
        { name: "React Native", icon: "Smartphone" },
        { name: "Cross-Platform", icon: "Layers" }
    ],
    database: [
        { name: "PostgreSQL", icon: "Database" },
        { name: "MongoDB", icon: "Database" },
        { name: "Data Modeling", icon: "Table" }
    ],
    infrastructure: [
        { name: "Kubernetes", icon: "Ship" },
        { name: "AWS", icon: "Cloud" },
        { name: "GCP", icon: "Cloud" },
        { name: "DigitalOcean", icon: "Waves" },
        { name: "Nginx", icon: "Activity" },
        { name: "Docker", icon: "Box" }
    ],
    strategy: [
        { name: "Performance Optimization", icon: "Gauge" },
        { name: "Product Research", icon: "Search" },
        { name: "Market Analysis", icon: "TrendingUp" },
        { name: "Systems Thinking", icon: "Brain" }
    ]
};




export const navItems = [
    { name: "About", href: "#about" },
    { name: "Fairlx", href: "#fairlx" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
];

export const footerContent = {
    cta: {
        headline: "Feel free to reach out—our doors are open for creative minds and collaborations!",
        buttonLabel: "Get in touch",
        buttonHref: "#contact"
    },
    brand: {
        name: siteConfig.name.split(" ")[0],
        suffix: "studio"
    },
    socials: [
        { label: "GitHub", href: siteConfig.links.github, icon: "Github" },
        { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "Linkedin" },
        { label: "Instagram", href: siteConfig.links.instagram, icon: "Instagram" },
        { label: "Twitter", href: siteConfig.links.twitter, icon: "Twitter" }
    ],
    bottom: {
        copyrightText: "Made with",
        tagline: "for better web.",
        links: [
            { label: "Stemlen Pvt Ltd.", href: siteConfig.stemlenLink }
        ]
    }
};