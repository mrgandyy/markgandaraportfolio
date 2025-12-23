import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { worlds } from '../data/worlds';
import { ArrowLeft, CheckCircle, AlertTriangle, Layers, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const WorldDetails = () => {
    const { slug } = useParams();
    const world = worlds.find(w => w.slug === slug);

    if (!world) {
        return <div className="min-h-screen flex items-center justify-center">World not found</div>;
    }

    return (
        <div className="pt-20">
            {/* Hero Header */}
            <div className="h-[50vh] relative">
                <img src={world.image} alt={world.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to Work
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">{world.title}</h1>
                        <p className="text-xl text-primary font-mono">{world.role}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Activity className="text-primary" /> Overview
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">{world.description}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <AlertTriangle className="text-yellow-500" /> Key Challenges
                        </h2>
                        <div className="space-y-4">
                            {world.challenges.map((challenge, idx) => (
                                <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <p className="text-gray-300">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle className="text-green-500" /> Solutions & Results
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-surface p-8 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold mb-4">Technical Solutions</h3>
                                <ul className="space-y-3">
                                    {world.solutions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                                <h3 className="text-lg font-bold mb-4 text-primary">Outcomes</h3>
                                <ul className="space-y-3">
                                    {world.results.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">What I'd Do Next</h2>
                        <p className="text-gray-400 italic">
                            "If revisiting this project, I would implement further automated LOD generation pipelines to reduce manual optimization time..."
                        </p>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="p-6 bg-surface rounded-xl border border-white/5 sticky top-24">
                        <h3 className="text-lg font-bold mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {world.techStack.map(tech => (
                                <span key={tech} className="bg-background border border-white/10 px-3 py-1.5 rounded text-sm text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-lg font-bold mb-4">Project Details</h3>
                            <dl className="space-y-4 text-sm">
                                <div>
                                    <dt className="text-gray-500 mb-1">Year</dt>
                                    <dd className="font-medium">2023</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500 mb-1">Platform</dt>
                                    <dd className="font-medium">VRChat (PC + Quest)</dd>
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
