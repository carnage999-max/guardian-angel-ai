'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen pt-20 bg-transparent">

            <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-6">
                {/* Product Image */}
                <div className="mb-8 w-full max-w-[600px] animate-fade-in">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                        <Image
                            src="/guardian-angel-ai-logo-bg-remove.png"
                            alt="Guardian Angel AI Device"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 600px"
                        />
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight mb-4 animate-fade-in">
                    Guardian Angel AI<span className="text-2xl md:text-4xl align-top">®</span>
                </h1>

                <p className="text-xl md:text-3xl text-muted font-medium mb-12 tracking-tight animate-slide-up max-w-2xl">
                    Aware, when you can’t be.<span className="text-sm align-top leading-none">®</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <a
                        href="#how-it-works"
                        className="flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        How It Works
                        <ChevronRight size={20} />
                    </a>
                    <a
                        href="#trust"
                        className="flex items-center justify-center px-10 py-5 rounded-full text-lg font-semibold border border-white/10 glass glass-hover whitespace-nowrap"
                    >
                        Read Our Charter
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                <div className="w-[1px] h-16 bg-gradient-to-b from-foreground to-transparent" />
            </div>
        </section>
    );
}
