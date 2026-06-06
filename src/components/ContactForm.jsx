import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(form.current);

        try {
            const response = await fetch("https://formsubmit.co/ajax/m.gandara10@gmail.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Header */}
            <div className="mb-10 text-center">
                <h3 className="text-3xl font-semibold text-white mb-3">Let's build something.</h3>
                <p className="text-secondary">
                    Open for opportunities, consulting, and collaboration.
                </p>
            </div>

            {status === 'success' ? (
                <div className="text-center py-16 animate-fade-in-up">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-3">Message sent</h4>
                    <p className="text-secondary mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="text-white hover:text-gray-300 font-medium text-sm transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                    {/* formsubmit configuration */}
                    <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-surface border border-surfaceBorder rounded-lg p-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-surface border border-surfaceBorder rounded-lg p-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                                placeholder="jane@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full bg-surface border border-surfaceBorder rounded-lg p-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {status === 'error' && (
                        <div className="text-red-400 text-sm flex items-center gap-2 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                            <AlertCircle size={16} /> Failed to send message. Please try again or email directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'submitting' ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <>
                                Send Message <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;

