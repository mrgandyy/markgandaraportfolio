import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/portfolioData';
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Target, Code, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const WorldDetails = () => {
    const { slug } = useParams();
    const study = caseStudies.find(w => w.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Case Study Not Found</h2>
                    <Link to="/" className="text-gold-400 hover:text-white transition-colors underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-background min-h-screen">
            {/* Hero Header */}
            <div className="h-[60vh] relative overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster={study.image}
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src={study.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="absolute inset-0 bg-gold-900/10 mix-blend-color" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <Link to="/#work" className="inline-flex items-center text-secondary hover:text-white mb-8 transition-colors font-medium">
                            <ArrowLeft size={18} className="mr-2" /> Back to Portfolio
                        </Link>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white"
                        >
                            {study.title}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gold-400 font-bold tracking-wide uppercase"
                        >
                            {study.role}
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                            <Activity className="text-gold-500" size={24} /> Overview
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed">{study.description}</p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="glass-card p-8 rounded-2xl border-t-4 border-t-red-500/50">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                                <Target className="text-red-400" size={20} /> The Problem
                            </h2>
                            <p className="text-secondary leading-relaxed">{study.problem}</p>
                        </section>

                        <section className="glass-card p-8 rounded-2xl border-t-4 border-t-green-500/50">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                                <CheckCircle className="text-green-400" size={20} /> The Solution
                            </h2>
                            <p className="text-secondary leading-relaxed">{study.solution}</p>
                        </section>
                    </div>

                    <section>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                            <AlertTriangle className="text-amber-500" size={24} /> Technical Challenges
                        </h2>
                        <div className="space-y-4">
                            {study.challenges.map((challenge, idx) => (
                                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-gray-300">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                            <Activity className="text-gold-400" size={24} /> Outcomes & Results
                        </h2>
                        <div className="grid gap-4">
                            {study.results.map((item, idx) => (
                                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold-400/50 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="glass-card p-8 rounded-2xl border-l-4 border-l-gold-500">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 text-white">
                            <Lightbulb className="text-gold-400" size={24} /> Lessons Learned
                        </h2>
                        <p className="text-gray-300 italic text-lg leading-relaxed">
                            "{study.lessonsLearned}"
                        </p>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="p-8 glass-card rounded-2xl sticky top-24 border border-gold-500/10">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                            <Code className="text-gold-500" size={20} /> Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {study.technologies.map(tech => (
                                <span key={tech} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium text-white border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <h3 className="text-lg font-semibold mb-4 text-white">Project Details</h3>
                            <dl className="space-y-4 text-sm">
                                <div>
                                    <dt className="text-secondary mb-1">Role</dt>
                                    <dd className="font-medium text-gold-400">{study.role}</dd>
                                </div>
                                <div>
                                    <dt className="text-secondary mb-1">Scope</dt>
                                    <dd className="font-medium text-white">Enterprise / Production System</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldDetails;

