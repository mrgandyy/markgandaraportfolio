import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Briefcase, Code, Shield, Users, Layers, Activity, PlayCircle, ExternalLink, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { impactMetrics, experience, creativeTech, fullStackProjects, customSoftware, caseStudies, skills } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';
import profilePic from '../assets/profile.jpg';

const Particles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold-500/30 rounded-full"
                    initial={{
                        x: Math.random() * 2000 - 500,
                        y: Math.random() * 2000 - 500,
                        scale: Math.random() * 2 + 0.5
                    }}
                    animate={{
                        y: [null, Math.random() * -500 - 200],
                        opacity: [0, 0.8, 0],
                        scale: [null, Math.random() * 2 + 1]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const Home = () => {
    return (
        <div className="pb-20 relative overflow-hidden bg-background">
            <Particles />
            {/* Cinematic Background Elements with Motion */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gold-500/20 blur-[100px] md:blur-[150px] pointer-events-none -z-10" 
            />
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-amber-500/20 blur-[100px] md:blur-[120px] pointer-events-none -z-10" 
            />
            
            {/* Hero Section */}
            <section className="min-h-[95vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative pt-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="lg:w-3/5"
                    >
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold-500/30 bg-gradient-to-r from-gold-500/10 to-transparent text-sm font-bold text-gold-400 uppercase tracking-widest backdrop-blur-md shadow-[0_0_30px_rgba(234,179,8,0.1)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                            Multidisciplinary Engineering
                        </motion.div>

                        <motion.h1 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tighter text-white"
                        >
                            Senior Engineer <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-500 to-amber-600">
                                & Creative Tech
                            </span>
                        </motion.h1>

                        <motion.p 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light"
                        >
                            12 years architecting enterprise systems, full-stack ecosystems, creative technology, and immersive products.
                        </motion.p>

                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#creative-tech"
                                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 text-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                        
                        {/* Premium Callouts */}
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mt-16 flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/10"
                        >
                            <div className="flex flex-col group cursor-default">
                                <span className="text-white font-bold text-xl group-hover:text-gold-400 transition-colors">12+ Years Experience</span>
                                <span className="text-secondary text-sm tracking-wide uppercase mt-1">Enterprise Engineering</span>
                            </div>
                            <div className="flex flex-col group cursor-default">
                                <span className="text-white font-bold text-xl group-hover:text-gold-400 transition-colors">Full Stack Ecosystems</span>
                                <span className="text-secondary text-sm tracking-wide uppercase mt-1">Next.js / Prisma / SaaS</span>
                            </div>
                            <div className="flex flex-col group cursor-default">
                                <span className="text-white font-bold text-xl group-hover:text-gold-400 transition-colors">Real-Time 3D & XR</span>
                                <span className="text-secondary text-sm tracking-wide uppercase mt-1">Unity / HLSL / Infra</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Premium Photo Display */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
                        whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                        className="hidden lg:block lg:w-2/5 relative"
                        style={{ perspective: "1000px" }}
                    >
                        <div className="glass-card p-2 rounded-3xl relative z-10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img 
                                src={profilePic} 
                                alt="Mark Gandara" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Glow Behind Photo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/20 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Creative Technology Flagship */}
            <section id="creative-tech" className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Cpu size={16} /> Creative Technology</h2>
                    <h3 className="text-4xl font-bold tracking-tight text-white mb-4">Flagship Frameworks</h3>
                    <p className="text-secondary text-lg max-w-2xl">Bridging the gap between engineering and art with complex, real-time shader frameworks.</p>
                </div>

                {creativeTech.map((tech) => (
                    <motion.div 
                        key={tech.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-all duration-500 group"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="p-10 md:p-16 flex flex-col justify-center">
                                <h4 className="text-3xl font-bold text-white mb-4">{tech.title}</h4>
                                <p className="text-gold-400 font-medium mb-6">{tech.role}</p>
                                <p className="text-secondary text-lg leading-relaxed mb-8">{tech.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {tech.technologies.map(t => (
                                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                <a 
                                    href={tech.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-gold-400 transition-colors"
                                >
                                    <PlayCircle size={24} className="text-gold-500" /> Watch the Showcase
                                </a>
                            </div>
                            <div className="relative aspect-video lg:aspect-auto">
                                <iframe 
                                    src={tech.videoUrl} 
                                    title={tech.title}
                                    className="absolute inset-0 w-full h-full border-l border-white/5"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Immersive Products & UX */}
            <section id="case-studies" className="py-32 bg-surface/30 border-y border-white/5 relative z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Layers size={16} /> Product Development</h2>
                        <h3 className="text-4xl font-bold tracking-tight text-white mb-4">Immersive Systems & Infrastructure</h3>
                        <p className="text-secondary text-lg max-w-2xl">
                            Real-time 3D environments engineered not as hobby worlds, but as high-performance products and community infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative rounded-2xl overflow-hidden bg-background border border-white/5 hover:border-gold-500/20 transition-all duration-500"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden bg-black">
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        poster={study.image}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                                    >
                                        <source src={study.video} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                </div>
                                <div className="p-8 -mt-10 relative z-10">
                                    <div className="bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-2xl font-bold text-white tracking-tight">{study.title}</h4>
                                        </div>
                                        <p className="text-gold-400 text-sm font-medium mb-4">{study.role}</p>
                                        <p className="text-secondary text-sm mb-6 line-clamp-3">{study.description}</p>
                                        
                                        <Link
                                            to={`/project/${study.slug}`}
                                            className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-gold-400 transition-colors uppercase tracking-widest"
                                        >
                                            Access Case Study <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Stack & Custom Software Dual Section */}
            <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Full Stack */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Code size={16} /> Web Engineering</h2>
                            <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Full Stack Ecosystems</h3>
                            <p className="text-secondary">Production websites and web applications built for scale.</p>
                        </div>
                        <div className="space-y-6">
                            {fullStackProjects.map((project, idx) => (
                                <a 
                                    key={idx}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 glass-card rounded-xl border border-white/5 hover:border-gold-500/20 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">{project.title}</h4>
                                        {project.url && <ExternalLink size={18} className="text-secondary group-hover:text-gold-400" />}
                                    </div>
                                    <p className="text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">{tech}</span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Custom Software */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Database size={16} /> Systems Architecture</h2>
                            <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Custom Software & Bots</h3>
                            <p className="text-secondary">Automated pipelines, Discord bots, and internal tools.</p>
                        </div>
                        <div className="space-y-6">
                            {customSoftware.map((software, idx) => (
                                <div key={idx} className="p-6 glass-card rounded-xl border border-white/5">
                                    <h4 className="text-xl font-bold text-white mb-3">{software.title}</h4>
                                    <p className="text-secondary text-sm leading-relaxed mb-4">{software.description}</p>
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block mb-2">Key Features</span>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {software.features.map(f => (
                                                <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-gold-500 rounded-full" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {software.technologies.map(tech => (
                                            <span key={tech} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2"><Briefcase className="inline mr-2" size={16} /> Professional Background</h2>
                    <h3 className="text-4xl font-bold tracking-tight text-white mb-4">12 Years of Defense Engineering</h3>
                    <p className="text-secondary text-lg">
                        Over a decade of delivering mission-critical enterprise systems, driving process automation, and leading cross-functional engineering initiatives.
                    </p>
                </div>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
                            
                            <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                <div className="md:w-1/3 shrink-0">
                                    <h3 className="text-3xl font-bold text-white mb-2">{job.company}</h3>
                                    <p className="text-gold-400 font-medium">{job.period}</p>
                                </div>
                                <div className="md:w-2/3">
                                    <h4 className="text-xl font-bold text-white mb-4">{job.role}</h4>
                                    <p className="text-secondary text-lg mb-8 leading-relaxed">{job.description}</p>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {job.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                                <ChevronRight size={16} className="text-gold-500 mt-0.5 shrink-0" />
                                                <span className="leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="py-32 bg-surface/30 border-y border-white/5 relative z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Multidisciplinary Arsenal</h2>
                        <p className="text-secondary text-lg max-w-2xl mx-auto">
                            A comprehensive engineering toolkit spanning full-stack development, scalable database architecture, and technical product leadership.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={category} className="p-8 glass-card rounded-2xl hover:border-gold-500/20 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">{category}</h3>
                                <ul className="space-y-3">
                                    {skillList.map(skill => (
                                        <li key={skill} className="text-secondary flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thought Process */}
            <section id="process" className="py-32 px-6 max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-6 text-white">Engineering Philosophy</h2>
                    <p className="text-xl text-secondary leading-relaxed font-light">
                        My approach to delivering business value through scalable architecture, rigorous performance optimization, and intuitive product design.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="flex gap-6">
                        <div className="mt-1 bg-white/10 p-3 rounded-xl h-fit text-white border border-white/5">
                            <Activity size={24} className="text-gold-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Systems Level Thinking</h3>
                            <p className="text-secondary leading-relaxed">I don't just write code; I architect systems. Whether it's managing complex database schemas for enterprise tools, designing high-availability APIs, or optimizing draw calls in real-time 3D applications, I analyze the entire product lifecycle to guarantee performance, scalability, and maintainability.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="mt-1 bg-white/10 p-3 rounded-xl h-fit text-white border border-white/5">
                            <Users size={24} className="text-gold-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Human-Centered Design</h3>
                            <p className="text-secondary leading-relaxed">Software only delivers business value if it is adopted by users. I bridge the gap between deep technical implementation and intuitive UI/UX. Drawing on my extensive experience with Technical Writing and Simplified Technical English (STE), I ensure complex systems are accessible and friction-free.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="mt-1 bg-white/10 p-3 rounded-xl h-fit text-white border border-white/5">
                            <Shield size={24} className="text-gold-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Robust Reliability</h3>
                            <p className="text-secondary leading-relaxed">Over a decade of engineering in defense and enterprise environments has instilled a profound prioritization of security, compliance, and zero-downtime architecture. I build platforms—whether web applications, internal automation tools, or community infrastructure—that are designed to scale and remain secure under pressure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 max-w-3xl mx-auto relative z-10">
                <ContactForm />
            </section>
        </div>
    );
};

export default Home;

