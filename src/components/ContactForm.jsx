import React, { useState, useRef } from 'react';
import { Send, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    // Credentials provided by user
    const SERVICE_ID = "m.gandara10";
    const TEMPLATE_ID = "template_ji962dc";
    const PUBLIC_KEY = "I-v6RhFJIIkyW-OGc";

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="bg-surface/30 border border-primary/20 p-8 backdrop-blur-md relative overflow-hidden group">
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

            {/* Header */}
            <div className="mb-8 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-[Rajdhani] uppercase font-bold text-white flex items-center gap-2">
                    <Send size={20} className="text-primary" /> Initiate Transmisison
                </h3>
                <p className="text-primary/70 font-mono text-xs tracking-widest mt-1">
                    SECURE_CHANNEL // TARGET: m.gandara10@gmail.com
                </p>
            </div>

            {status === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                >
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">TRANSMISSION RECEIVED</h4>
                    <p className="text-gray-400 font-mono text-sm">Stand by for response sequence.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-primary hover:text-white underline text-sm font-mono tracking-widest uppercase"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-primary uppercase tracking-widest block">User_Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-primary focus:outline-none focus:bg-primary/5 transition-all font-mono text-sm"
                                placeholder="ENTER_ID"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-primary uppercase tracking-widest block">Comms_Link</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-primary focus:outline-none focus:bg-primary/5 transition-all font-mono text-sm"
                                placeholder="EMAIL_ADDRESS"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary uppercase tracking-widest block">Data_Packet</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-primary focus:outline-none focus:bg-primary/5 transition-all font-mono text-sm resize-none"
                            placeholder="ENTER_MESSAGE_CONTENTS..."
                        />
                    </div>

                    {status === 'error' && (
                        <div className="text-red-500 text-sm font-mono flex items-center gap-2">
                            <AlertTriangle size={14} /> TRANSMISSION FAILED. CHECK NETWORK OR CONFIG.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-4 bg-primary/20 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        {status === 'submitting' ? (
                            <span className="animate-pulse">UPLOADING...</span>
                        ) : (
                            <span className="relative z-10">TRANSMIT DATA</span>
                        )}
                        <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
