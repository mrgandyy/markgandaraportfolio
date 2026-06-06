export const impactMetrics = [
  { value: "12+", label: "Years Enterprise Engineering" },
  { value: "Multiple", label: "Full Stack Ecosystems" },
  { value: "Dozens", label: "Of Products Shipped" },
  { value: "Full Lifecycle", label: "Technical Leadership" }
];

export const experience = [
  {
    company: "Raytheon",
    role: "Senior Software Engineer / Technical Lead",
    period: "2012 - Present",
    description: "Spearheaded the architecture and development of mission-critical simulation systems, enterprise learning management platforms (LMS), and scalable internal tools across multiple defense programs. Championed process automation and data standardization initiatives that significantly reduced operational overhead.",
    highlights: [
      "Designed and deployed high-fidelity XR/VR simulation environments, directly improving training efficacy for complex operations.",
      "Architected secure, database-driven Learning Management Systems (LMS) to track compliance and deliver technical content at enterprise scale.",
      "Engineered automated data pipelines and internal developer tools, drastically reducing manual redundancies and accelerating cross-functional workflows.",
      "Authored and standardized critical system documentation utilizing Simplified Technical English (STE), bridging the gap between deep engineering and end-user adoption.",
      "Provided multi-program technical support, actively collaborating with cross-functional teams to align software architecture with stringent business and compliance requirements."
    ]
  }
];

export const creativeTech = [
  {
    id: "tacofx-ultimate",
    title: "TacoFX Ultimate v2.2",
    role: "Principal Architecture & Technical Art",
    description: "Engineered a highly optimized, modular shader framework for real-time 3D environments. Built to handle complex audio-reactive logic, world-scale effects, and mesh distortions while adhering strictly to standalone hardware performance budgets. Designed custom Unity Inspector tools to streamline the developer experience (DX) and accelerate deployment pipelines.",
    technologies: ["HLSL", "Unity", "ShaderGraph", "Custom Tooling", "Performance Optimization"],
    videoUrl: "https://www.youtube.com/embed/UKw1aGO-88A",
    link: "https://www.youtube.com/watch?v=UKw1aGO-88A"
  }
];

export const fullStackProjects = [
  {
    title: "TACOS Nightlife Ecosystem",
    description: "Architected a comprehensive digital platform serving 2,000+ active users. Developed a scalable Next.js and Prisma/PostgreSQL backend to manage real-time event synchronization, tiered user authentication, and administrative dashboards, demonstrating end-to-end product ownership.",
    url: "https://www.tacosvr.chat/",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
  },
  {
    title: "TwerkTaco Studio",
    description: "Developed a high-performance studio landing page focused on advanced framer-motion animations and premium visual identity. Optimized component architecture to ensure perfect Lighthouse performance scores without sacrificing cinematic fidelity.",
    url: "https://twerktaco.xyz/",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "React"],
  },
  {
    title: "ChucoFlow",
    description: "Engineered a real-time data ingestion pipeline processing border crossing wait times. Implemented robust third-party API parsers, intelligent fallback logic, and a PostgreSQL database layer to guarantee high availability.",
    url: "https://chucoflow.com/",
    technologies: ["Next.js", "Data Ingestion", "PostgreSQL", "APIs"],
  },
  {
    title: "TACOS Event Management (SaaS)",
    description: "Built a real-time, collaborative virtual event management dashboard. Designed a TypeScript ecosystem managing multi-role authorizations (RBAC), automated template builders generating timezone-relative Unix layouts for Discord syndication, and live log telemetry. Engineered zero-trust database security models securing Firestore against unauthorized writes while managing ultra-low-latency synchronization.",
    url: "https://tacos-event-management-297321758058.us-central1.run.app",
    technologies: ["React 19", "Firebase Firestore", "OAuth 2.0", "Zod", "Tailwind v4"],
  },
  {
    title: "Zoila The Zebra",
    description: "Led the end-to-end technical product lifecycle for an independent author's digital platform. Integrated e-commerce solutions and designed an intuitive content management architecture to drive direct sales.",
    url: "https://www.zoilathezebra.com/",
    technologies: ["React", "UI/UX Design", "E-commerce Integration"],
  }
];

export const customSoftware = [
  {
    title: "Event Management Bot Infrastructure",
    description: "Designed and deployed a production-ready Node.js/TypeScript bot architecture. Replaced manual moderation with automated leveling systems, anti-abuse logic, and event cron-jobs, reducing administrative overhead by over 90%.",
    technologies: ["TypeScript", "Discord.js", "Prisma", "BullMQ"],
    features: ["Automated Event Generation", "Role-Based Access Control", "Data-Driven Dashboards"]
  },
  {
    title: "Enterprise Internal Tools",
    description: "Identified workflow bottlenecks within cross-functional engineering teams and developed bespoke automation scripts. Standardized data ingestion protocols and automated technical reporting processes.",
    technologies: ["Process Automation", "Databases", "STE", "Scripting"],
    features: ["Pipeline Automation", "Data Standardization"]
  }
];

export const caseStudies = [
  {
    id: "the-hood",
    title: "The Hood",
    slug: "the-hood",
    role: "Lead Systems Architect",
    description: "Architected a high-density, real-time social platform designed to support sustained concurrent user loads within strict hardware constraints.",
    problem: "Public digital events frequently suffered from severe frame drops and state desynchronization when scaling beyond initial user thresholds, degrading the user experience on standalone mobile processors.",
    solution: "Engineered an aggressive batch-reduction pipeline and modular UdonSharp zoning logic to aggressively cull unseen geometry and pause inactive scripts, ensuring an uncompromised 110 FPS on target hardware.",
    technologies: ["Unity", "C# / UdonSharp", "Performance Optimization", "Real-Time 3D Engineering"],
    challenges: ["Navigating extreme draw-call limitations on mobile processors", "Maintaining synchronized game state across dozens of late-joining clients without network saturation"],
    results: ["Achieved a stable 110 FPS (an 83% performance increase over baseline)", "Established a scalable infrastructure utilized for dozens of high-traffic digital events", "Shipped a seamless cross-platform experience"],
    lessonsLearned: "Rigorous system-level performance budgets must dictate architectural decisions from day one; treating digital spaces as enterprise infrastructure ensures long-term viability.",
    image: "/thehood.webp",
    video: "/thehood.mp4"
  },
  {
    id: "the-cabinet",
    title: "The Cabinet",
    slug: "the-cabinet",
    role: "Product Owner & UX Architect",
    description: "Developed a curated interactive environment focusing on controlled access gating and synchronized user experience pacing.",
    problem: "Unstructured virtual environments often result in chaotic user flow, diluting the intended narrative and frustrating event coordinators attempting to guide large groups.",
    solution: "Designed a state-machine driven backend to manage synchronized zone gating and post-processing transitions, creating an intuitive, friction-free user journey through the environment.",
    technologies: ["Unity", "Udon", "UX Architecture", "State Machines"],
    challenges: ["Communicating complex system states to users intuitively without breaking immersion", "Balancing interactive density with strict performance budgets"],
    results: ["Delivered a highly predictable and structured event flow", "Significantly improved user retention metrics during scheduled events due to clear UX signaling"],
    lessonsLearned: "Spatial layout is fundamentally a user experience (UX) design challenge; effective system architecture silently guides user behavior.",
    image: "/thecabinet.webp",
    video: "/thecabinet.mp4"
  },
  {
    id: "cave-in",
    title: "Cave-In",
    slug: "cave-in",
    role: "Technical Director",
    description: "Directed the technical implementation of an atmospheric, high-fidelity environment engineered to run on heavily constrained mobile processors.",
    problem: "Client specifications demanded complex, heavy lighting models and dense atmospheric effects that traditionally exceed the rendering capabilities of standalone VR hardware.",
    solution: "Developed a hybrid lighting architecture, utilizing optimized light baking pipelines combined with highly constrained real-time point lights, managed by custom occlusion culling scripts.",
    technologies: ["Unity", "Lighting Architecture", "Performance Optimization"],
    challenges: ["Reconciling ambitious visual targets with hard technical constraints", "Developing an intuitive navigation mesh within a complex vertical layout"],
    results: ["Successfully shipped the project under performance budget across all target platforms", "Exceeded client visual expectations, proving the viability of high-fidelity mobile XR"],
    lessonsLearned: "Technical constraints should drive creative problem solving, not hinder it. Technical Art is the discipline of making the impossible performant.",
    image: "/tacoscavein.webp",
    video: "/tacoscavein.mp4"
  },
  {
    id: "obelisk",
    title: "Obelisk",
    slug: "obelisk",
    role: "Lead Engineer",
    description: "Engineered a symbolically driven environment prioritizing visual spectacle without sacrificing navigational clarity or system performance.",
    problem: "Effect-heavy environments frequently disorient users and cause severe performance degradation due to unoptimized shader overdraw.",
    solution: "Implemented a modular visual effect framework with aggressive LOD (Level of Detail) scaling and engineered focused lighting anchors to naturally guide user telemetry.",
    technologies: ["Unity", "Visual Effects Frameworks", "Interactive Systems"],
    challenges: ["Balancing intense visual symbolism with fundamental user comfort and accessibility requirements"],
    results: ["Integrated complex custom shader frameworks with zero frame drops", "Achieved high praise for navigational clarity within a visually complex space"],
    lessonsLearned: "Visual intensity is only effective when anchored by robust underlying systems and clear, deliberate user flow.",
    image: "/OBELISK.webp",
    video: "/Obelisk.mp4"
  }
];

export const skills = {
  "Software Engineering": ["C#", "TypeScript", "React", "Next.js", "Node.js", "UdonSharp"],
  "Creative Technology": ["HLSL / Shaders", "Unity / XR", "Real-Time 3D", "Audio Reactive Systems", "Motion Graphics"],
  "Full Stack & Infra": ["PostgreSQL", "Prisma", "Supabase", "Vercel", "Discord.js", "BullMQ"],
  "Product & UX": ["System Architecture", "Human Centered Design", "Product Ownership", "Cross Functional Development"],
  "Technical Communication": ["Technical Writing", "Simplified Technical English (STE)", "Technical Documentation", "Agile"],
  "Leadership": ["Staff Management", "Infrastructure Architecture", "Live Event Operations", "Process Automation"]
};

