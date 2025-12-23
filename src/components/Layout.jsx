import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, Github, Mail, Terminal } from 'lucide-react';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', path: '/#work' },
        { name: 'Systems', path: '/#systems' },
        { name: 'About', path: '/#about' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <div className="min-h-screen font-sans selection:bg-primary selection:text-black">
            {/* Scanlines Overlay - Globally applied via Layout */}
            <div className="scanlines" />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-background/90 backdrop-blur-md border-primary/20 py-3'
                    : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity font-[Rajdhani] uppercase flex items-center gap-2">
                        <Terminal size={24} className="text-primary" />
                        <span className="text-white">MARK</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">GANDARA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="mailto:contact@markgandara.com"
                            className="px-6 py-2 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black font-mono text-sm font-bold transition-all skew-x-[-10deg]"
                        >
                            <span className="block skew-x-[10deg]">INIT_TALK</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/20 p-6 flex flex-col gap-6 backdrop-blur-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-mono font-bold text-gray-400 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-4"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            <main className="relative z-10">
                {children}
            </main>

            <footer className="bg-surface py-12 border-t border-primary/20 mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold tracking-widest font-mono text-white">MARK_GANDARA</h3>
                        <p className="text-primary text-sm mt-1 font-mono tracking-widest">SYSTEMS READY</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110"><Github size={20} /></a>
                        <a href="mailto:example@email.com" className="text-gray-400 hover:text-primary transition-colors hover:scale-110"><Mail size={20} /></a>
                    </div>
                    <p className="text-gray-600 text-xs font-mono">
                        © {new Date().getFullYear()} MG_CORP. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
