import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, Terminal, Shield } from 'lucide-react';
import { worlds } from '../data/worlds';
import { systems, webProjects } from '../data/systems';
import { Link } from 'react-router-dom';
import CyberpunkBackground from '../components/CyberpunkBackground';
import GlitchText from '../components/GlitchText';
import ContactForm from '../components/ContactForm';
import profileImg from '../assets/profile.jpg';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';
import '@fontsource/share-tech-mono';

const Home = () => {
    return (
        <div className="pb-20 relative overflow-hidden">
            <CyberpunkBackground />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl z-10"
                >
                    <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm tracking-[0.2em]">
                        <span className="w-2 h-2 bg-primary animate-pulse" />
                        SYSTEM_ONLINE
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 font-[Rajdhani] uppercase tracking-tighter">
                        <GlitchText text="Immersive" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Simulations
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light border-l-2 border-primary/30 pl-6">
                        Unity & XR Engineer designing performance-critical <span className="text-primary">social VR worlds</span> and scalable systems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#work"
                            className="px-8 py-4 bg-primary text-black font-bold text-lg hover:bg-white hover:scale-105 transition-all flex items-center gap-2 skew-x-[-10deg]"
                        >
                            <span className="skew-x-[10deg] flex items-center gap-2">View Work <ArrowRight size={20} /></span>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-primary/50 text-primary font-bold text-lg hover:bg-primary/10 transition-all skew-x-[-10deg]"
                        >
                            <span className="skew-x-[10deg]">Initiate Contact</span>
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Selected Work */}
            <section id="work" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
                <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4">
                    <div>
                        <h2 className="text-4xl font-bold mb-2 font-[Rajdhani] uppercase">Selected Worlds</h2>
                        <p className="text-primary font-mono text-sm">/// CASE_STUDIES</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {worlds.slice(0, 6).map((world, index) => (
                        <motion.div
                            key={world.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-surface/50 backdrop-blur-sm rounded-none border border-white/10 hover:border-primary transition-all duration-300"
                        >
                            {/* Corner Accents */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="aspect-video bg-black/50 relative overflow-hidden">
                                <img
                                    src={world.image}
                                    alt={world.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold text-white mb-1 font-[Rajdhani] uppercase">{world.title}</h3>
                                    <span className="text-xs font-mono text-primary uppercase tracking-wider bg-primary/10 px-2 py-1">{world.role}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-mono h-[3em]">{world.description}</p>
                                <Link
                                    to={`/world/${world.slug}`}
                                    className="block w-full py-2 text-center border border-white/20 hover:bg-primary hover:text-black hover:border-primary transition-all font-bold uppercase tracking-widest text-sm"
                                >
                                    Access Data
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Systems Engineering */}
            <section id="systems" className="py-20 border-y border-white/5 bg-black/30 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-4 font-[Rajdhani] uppercase flex items-center gap-3">
                            <Database className="text-primary" /> Systems Engineering
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">
                            Architecting scalable systems involved in complex synchronization and performance challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {systems.map((system) => (
                            <div
                                key={system.id}
                                className="p-8 bg-surface/40 border border-white/5 hover:border-secondary/50 transition-all hover:bg-surface/60 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-secondary/10 p-3 rounded-none text-secondary">
                                        <Terminal size={24} />
                                    </div>
                                    <span className="font-mono text-xs text-secondary/50 group-hover:text-secondary transition-colors">SYS_ID: {system.id}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-[Rajdhani]">{system.title}</h3>
                                <p className="text-gray-300 mb-4 font-mono text-sm">{system.description}</p>
                                <div className="h-px w-full bg-gradient-to-r from-secondary/50 to-transparent my-4" />
                                <p className="text-sm text-gray-500">{system.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Web & Platforms */}
            <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold mb-12 font-[Rajdhani] uppercase">Web & Platforms</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {webProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 bg-surface/30 border border-white/10 hover:border-primary transition-all hover:translate-x-2"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors font-[Rajdhani]">{project.title}</h3>
                                <ArrowRight className="text-gray-500 group-hover:text-primary group-hover:rotate-[-45deg] transition-all" />
                            </div>
                            <p className="text-gray-400 mb-6 font-mono text-sm">{project.description}</p>
                            <div className="flex gap-4 text-xs font-mono text-primary/70">
                                <span>[{project.role}]</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-block p-1 border border-primary/30 rounded-full mb-8">
                    <div className="px-6 py-2 bg-primary/10 rounded-full text-primary font-mono text-sm">
                        USER_PROFILE
                    </div>
                </div>

                {/* Profile Image with Cyberpunk Frame */}
                <div className="relative w-48 h-48 mx-auto mb-8 group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden p-1">
                        <img
                            src={profileImg}
                            alt="Mark Gandara"
                            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    {/* HUD Rings */}
                    <div className="absolute -inset-2 border border-primary/30 rounded-full border-dashed animate-spin-slow pointer-events-none" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[Rajdhani] uppercase">About Me</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-12 font-light">
                    I approach development with a product-first mindset, focusing on systems that scale, perform reliably under constraint, and remain maintainable over time. Whether working in Unity or on the web, my goal is to ship solutions that solve real problems and support real users.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Unity', 'C#', 'UdonSharp', 'React', 'Performance Profiling', 'Technical Art', 'Team Leadership'].map(skill => (
                        <span key={skill} className="px-6 py-3 border border-white/10 hover:border-primary/50 bg-surface/50 text-sm font-bold text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 max-w-3xl mx-auto relative z-10">
                <ContactForm />
            </section>
        </div>
    );
};

export default Home;
