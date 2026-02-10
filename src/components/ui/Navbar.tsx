'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Trust', href: '#trust' },
    { name: 'Company', href: '#company' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
                scrolled ? 'bg-[#06080C]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 md:px-12 md:py-4 transition-all duration-500">
                <div className="flex items-center gap-4 group cursor-pointer shrink-0">
                    <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity">
                        <Image
                            src="/guardian-angel-ai-logo-bg-remove.png"
                            alt="Guardian Angel AI Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-serif text-xl font-medium tracking-tight whitespace-nowrap">
                        Guardian Angel AI<span className="text-[10px] align-top">®</span>
                    </span>
                </div>

                {/* Desktop Nav - Explicitly hidden on mobile (below lg) */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all"
                    >
                        Inquire
                    </a>
                </div>

                {/* Mobile Toggle - Explicitly hidden on desktop (lg+) */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 w-6 items-end shrink-0 group"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <div className="h-[2px] w-full bg-foreground rounded-full transition-all group-hover:bg-accent" />
                    <div className="h-[2px] w-2/3 bg-foreground rounded-full transition-all group-hover:w-full group-hover:bg-accent" />
                </button>
            </div>

            {/* Mobile Nav Menu - Solid background, full screen responsive */}
            <div
                className={cn(
                    'fixed inset-0 bg-[#06080C] z-[110] flex flex-col pt-32 px-12 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden',
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                )}
            >
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center border-b border-white/5 bg-[#06080C]">
                    <div className="flex items-center gap-4">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/guardian-angel-ai-logo-bg-remove.png"
                                alt="Guardian Angel AI Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-serif text-xl font-medium tracking-tight">
                            Guardian Angel AI<span className="text-[10px] align-top">®</span>
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-muted hover:text-foreground transition-colors"
                    >
                        <X size={28} strokeWidth={2} />
                    </button>
                </div>

                <div className="flex flex-col gap-10 mt-12 overflow-y-auto pb-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Navigation</span>
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-4xl font-serif font-medium hover:text-accent transition-all duration-500",
                                isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${i * 75}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted">Direct Contact</span>
                        <a href="mailto:info@guardianangeldevice.com" className="text-lg text-muted hover:text-foreground">info@guardianangeldevice.com</a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-foreground text-background py-6 rounded-full text-center text-xl font-bold block"
                        >
                            Request Information
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
