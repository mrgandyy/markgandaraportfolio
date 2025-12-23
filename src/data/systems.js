export const systems = [
    {
        id: "poster-pipeline",
        title: "Poster Pipeline",
        description: "Automated pipeline for scalable poster distribution in-world.",
        details: "Integrates Discord uploads -> GitHub JSON -> In-world keypad access. Enables tier-based permissions and remote content updates.",
        icon: "FileJson", // Lucide icon name
    },
    {
        id: "permission-system",
        title: "Role & Permission Enforcement",
        description: "Instance-safe admin assignment and collider enforcement.",
        details: "Handles late-joiner synchronization reliability without introducing network lag.",
        icon: "ShieldAlert",
    },
    {
        id: "post-processing",
        title: "Theme & Post-Processing Control",
        description: "Button-driven visual systems respecting hardware constraints.",
        details: "Optimized for both PC and Quest rendering pipelines.",
        icon: "Sliders",
    },
    {
        id: "udon-compat",
        title: "UdonChips Compatibility Layer",
        description: "Interoperability layer for legacy game currency.",
        details: "Allows modern world systems to interface with legacy shared currency values.",
        icon: "Coins",
    },
    {
        id: "optimization-workflow",
        title: "Performance Optimization Workflows",
        description: "Standardized processes for batch reduction and mesh merging.",
        details: "Enables live iteration in production worlds without breaking performance budgets.",
        icon: "Zap",
    },
];

export const webProjects = [
    {
        id: "zoila-the-zebra",
        title: "ZoilaTheZebra.com",
        url: "https://www.zoilathezebra.com/",
        role: "End-to-end Designer & Developer",
        description: "Web platform built from scratch to support an independent author.",
        stack: ["Web", "Design", "UX"],
    },
    {
        id: "taco-bowl",
        title: "TacoBowl.app",
        url: "https://www.tacobowl.app/",
        role: "Developer",
        description: "Web application project.",
        stack: ["Web", "App"],
    },
    {
        id: "100-vr-club",
        title: "100vr.club",
        url: "https://www.100vr.club/",
        role: "Collaborative Build (AI-assisted)",
        description: "Rapidly built project leveraging AI tools.",
        stack: ["Web", "AI", "ChatGPT"],
    },
    {
        id: "tacos-vr-chat",
        title: "tacosvr.chat",
        url: "https://www.tacosvr.chat/",
        role: "Collaborative Build",
        description: "Built with Antigravity assistance.",
        stack: ["Web", "Antigravity"],
    },
];
