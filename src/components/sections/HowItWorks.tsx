'use client';

import { useState } from 'react';
import { Cpu, ShieldCheck, Database, Bell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        title: 'Edge Sensing',
        desc: 'Environmental sensors abstract data into mathematical signals.',
        icon: <Database size={24} />,
    },
    {
        title: 'On-device AI',
        desc: 'Neural networks identify safety-critical patterns locally.',
        icon: <Cpu size={24} />,
    },
    {
        title: 'Policy Evaluation',
        desc: 'Detection is checked against site-specific safety protocols.',
        icon: <ShieldCheck size={24} />,
    },
    {
        title: 'Alert',
        desc: 'Instant notification to responders without identity data.',
        icon: <Bell size={24} />,
    },
];

const technicalPanels = [
    {
        title: 'Sensor Abstraction',
        content: 'We use high-resolution sensors that are physically incapable of capturing human-identifiable features. Data is converted into temporal-spatial embeddings before reaching the AI model.'
    },
    {
        title: 'Model Boundaries',
        content: 'Our models are trained on specific safety events—falls, distress signals, or unauthorized presence. They are blind to identity, gait, and other biometric markers.'
    },
    {
        title: 'Fail-safe Behavior',
        content: 'In the event of hardware failure or network loss, the system defaults to a localized alarm state, ensuring safety continuity without external dependency.'
    }
];

export function HowItWorks() {
    const [openPanel, setOpenPanel] = useState<number | null>(null);

    return (
        <section id="how-it-works" className="relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">How It Works</h2>
                    <p className="text-xl text-muted leading-relaxed">
                        A new class of safety infrastructure built on the principle that processing should happen at the point of sensing.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
                    {steps.map((step, i) => (
                        <div key={i} className="p-8 rounded-3xl glass border border-white/5 relative group">
                            <div className="mb-6 p-4 bg-accent/10 rounded-2xl w-fit text-accent transition-transform group-hover:scale-110">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 opacity-20">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Technical Accordion */}
                <div className="max-w-3xl">
                    <h3 className="text-2xl font-serif mb-8 text-muted">Technical Framework</h3>
                    <div className="space-y-4">
                        {technicalPanels.map((panel, i) => (
                            <div key={i} className="rounded-2xl border border-white/5 glass overflow-hidden">
                                <button
                                    onClick={() => setOpenPanel(openPanel === i ? null : i)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-medium">{panel.title}</span>
                                    <ChevronDown className={cn("transition-transform", openPanel === i && "rotate-180")} />
                                </button>
                                <div className={cn(
                                    "px-6 transition-all duration-300 ease-in-out",
                                    openPanel === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}>
                                    <p className="text-muted leading-relaxed">
                                        {panel.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
