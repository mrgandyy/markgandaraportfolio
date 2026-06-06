import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Experience', path: '/#experience' },
        { name: 'Case Studies', path: '/#case-studies' },
        { name: 'Process', path: '/#process' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <div className="min-h-screen font-sans bg-background text-primary flex flex-col">
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'glass border-white/5 py-4'
                    : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2">
                        <span className="text-white">Mark Gandara</span>
                        <span className="text-muted hidden sm:inline">|</span>
                        <span className="text-muted hidden sm:inline font-medium text-sm">Product Engineer</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm font-medium text-secondary hover:text-white transition-colors relative group"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-gray-200 transition-all"
                        >
                            Get in touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-lg font-medium text-secondary hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="w-full text-center px-4 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all mt-4"
                        >
                            Get in touch
                        </a>
                    </div>
                )}
            </nav>

            <main className="relative z-10 flex-grow">
                {children}
            </main>

            <footer className="border-t border-surfaceBorder bg-surface/50 py-12 mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white tracking-tight">Mark Gandara</h3>
                        <p className="text-secondary text-sm mt-1">Senior Product Engineer</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/markgandara" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:m.gandara10@gmail.com" className="text-secondary hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-muted text-sm">
                        © {new Date().getFullYear()} Mark Gandara. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
