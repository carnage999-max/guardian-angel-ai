'use client';

import { Home, School, Hospital, Shield, Bath, Warehouse, ArrowRight } from 'lucide-react';

const cases = [
    {
        title: 'Private Residences',
        icon: <Home size={32} />,
        problem: 'Families want pool safety without indoor cameras.',
        solution: 'Detect falls/distress with 100% video privacy.',
        flow: 'Alert to mobile notification + external siren.',
    },
    {
        title: 'Healthcare & Aging',
        icon: <Hospital size={32} />,
        problem: 'Patient dignity vs. fall risk in bathrooms.',
        solution: 'Detect posture shifts without recording identity.',
        flow: 'Direct alert to nurse station DASH system.',
    },
    {
        title: 'Correctional Facilities',
        icon: <Shield size={32} />,
        problem: 'Blind spots in cells create high liability.',
        solution: 'Constant awareness where cameras have legal limits.',
        flow: 'Internal safety protocol trigger for response teams.',
    },
    {
        title: 'Educational Campuses',
        icon: <School size={32} />,
        problem: 'Student privacy in locker rooms and dorms.',
        solution: 'Identify weapon-brandishing or violence markers.',
        flow: 'Instant local security dispatch + lockdown trigger.',
    },
    {
        title: 'Public Restrooms',
        icon: <Bath size={32} />,
        problem: 'High-risk areas for drug use or medical events.',
        solution: 'Non-visual detection of prolonged occupancy or distress.',
        flow: 'Maintenance or EMS notification based on severity.',
    },
    {
        title: 'Industrial Safety',
        icon: <Warehouse size={32} />,
        problem: 'Hazardous zones where sensors are better than eyes.',
        solution: 'Real-time hazard pattern matching.',
        flow: 'Plant-wide emergency shutdown + safety alert.',
    },
];

export function UseCases() {
    return (
        <section id="use-cases" className="bg-white/2 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Vertical Narrative</h2>
                        <p className="text-xl text-muted">
                            Guardian Angel AI® is designed for environments where both safety and privacy are non-negotiable.
                        </p>
                    </div>

                    {/* Mobile Scroll Hint - Bright, no pulse, compact */}
                    <div className="lg:hidden flex items-center gap-3 text-foreground/90">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Swipe to explore</span>
                        <ArrowRight size={16} className="animate-bounce-x text-accent" />
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                    {cases.map((useCase, i) => (
                        <div
                            key={i}
                            className="flex flex-col p-10 rounded-3xl glass border border-white/5 glass-hover min-h-[400px]"
                        >
                            <div className="mb-8 text-accent">
                                {useCase.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-medium mb-6">{useCase.title}</h3>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Environment</span>
                                    <p className="text-sm font-medium">{useCase.problem}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Solution</span>
                                    <p className="text-sm">{useCase.solution}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Alert Flow</span>
                                    <p className="text-sm italic text-accent">{useCase.flow}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Snap Carousel */}
                <div className="lg:hidden snap-carousel pb-10">
                    {cases.map((useCase, i) => (
                        <div
                            key={i}
                            className="snap-item p-8 rounded-3xl glass border border-white/5 flex flex-col"
                        >
                            <div className="mb-6 text-accent">
                                {useCase.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-medium mb-6">{useCase.title}</h3>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Environment</span>
                                    <p className="text-sm font-medium">{useCase.problem}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Solution</span>
                                    <p className="text-sm">{useCase.solution}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Response</span>
                                    <p className="text-sm font-semibold text-accent">{useCase.flow}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
