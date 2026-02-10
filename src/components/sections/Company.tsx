'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

export function Company() {
    const [email, setEmail] = useState('');
    const [useCase, setUseCase] = useState('Healthcare facility');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, useCase }),
            });

            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <>
            {/* Company Section */}
            <section id="company" className="relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="text-accent font-semibold tracking-widest uppercase text-sm block">The Mission</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                                Engineering a safer, <br />private world.
                            </h2>
                            <div className="space-y-6 text-xl text-muted leading-relaxed max-w-xl">
                                <p>
                                    Guardian Angel AI® was founded as a public benefit corporation to solve the fundamental conflict between safety and privacy.
                                </p>
                                <p>
                                    We are a group of safety engineers, privacy advocates, and AI researchers headquartered in Palo Alto, dedicated to creating zero-surveillance infrastructure.
                                </p>
                            </div>
                            <div className="flex gap-12 pt-8">
                                <div>
                                    <div className="text-3xl font-medium mb-1">PBC</div>
                                    <div className="text-xs uppercase tracking-widest text-muted">Structure</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-medium mb-1">0%</div>
                                    <div className="text-xs uppercase tracking-widest text-muted">Data Storage</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-medium mb-1">100%</div>
                                    <div className="text-xs uppercase tracking-widest text-muted">Awareness</div>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA / Contact */}
                        <div id="contact" className="p-10 lg:p-16 rounded-[3rem] glass border border-white/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-medium mb-8">Inquire for Pilot</h3>
                                {status === 'success' ? (
                                    <div className="p-8 text-center glass border border-accent/20 rounded-3xl animate-fade-in">
                                        <h4 className="text-2xl font-serif mb-4 text-accent">Inquiry Received</h4>
                                        <p className="text-muted">Our ethics council will review your request and reach out within 48 hours.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-accent text-sm font-bold uppercase tracking-widest"
                                        >
                                            Send another inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@institution.org"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-lg focus:outline-none focus:border-accent transition-all ring-0 focus:ring-1 focus:ring-accent/50"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted ml-1">Use Case</label>
                                            <select
                                                value={useCase}
                                                onChange={(e) => setUseCase(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-lg focus:outline-none focus:border-accent transition-all text-muted/60"
                                            >
                                                <option>Healthcare facility</option>
                                                <option>Educational campus</option>
                                                <option>Correctional institution</option>
                                                <option>Residential / Residential pool</option>
                                                <option>Other institutional</option>
                                            </select>
                                        </div>
                                        <button
                                            disabled={status === 'loading'}
                                            className="w-full py-6 rounded-full bg-foreground text-background text-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all group/btn disabled:opacity-50 disabled:scale-100"
                                        >
                                            {status === 'loading' ? 'Processing...' : 'Request Information'}
                                            <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-400 text-sm text-center font-medium mt-4">There was an error sending your inquiry. Please try again.</p>
                                        )}
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-white/5 bg-background pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-20 mb-24">
                        <div className="space-y-8 max-w-sm">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <Image
                                        src="/guardian-angel-ai-logo-bg-remove.png"
                                        alt="Guardian Angel AI Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-serif text-2xl font-medium tracking-tight">Guardian Angel AI<span className="text-xs align-top">®</span></span>
                            </div>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1"><MapPin size={18} className="text-accent" /></div>
                                    <div>
                                        PO Box 52,<br />
                                        Detroit, ME 04929
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Globe size={18} className="text-accent" />
                                    <div>207-947-1999</div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail size={18} className="text-accent" />
                                    <a href="mailto:info@guardianangeldevice.com" className="hover:text-accent transition-colors">info@guardianangeldevice.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-24 gap-y-12">
                            <div className="space-y-6">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Platform</h4>
                                <ul className="space-y-4">
                                    <li><a href="#how-it-works" className="hover:text-accent transition-colors">Technology</a></li>
                                    <li><a href="#use-cases" className="hover:text-accent transition-colors">Applications</a></li>
                                    <li><a href="#trust" className="hover:text-accent transition-colors">Ethics Charter</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Company</h4>
                                <ul className="space-y-4">
                                    <li><a href="#" className="hover:text-accent transition-colors">Mission</a></li>
                                    <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
                                    <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6 hidden md:block">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Compliance</h4>
                                <ul className="space-y-4 text-xs text-muted/60">
                                    <li>GDPR Compliant</li>
                                    <li>HIPAA Ready</li>
                                    <li>CCPA Protected</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6 text-xs text-muted/50 tracking-widest uppercase font-bold text-center">
                        <div>© 2026 Guardian Angel AI PBC. All Rights Reserved.</div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
