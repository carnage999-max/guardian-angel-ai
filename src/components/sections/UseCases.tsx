'use client';

import { useRef } from 'react';
import { Home, School, Hospital, Shield, Bath, Warehouse, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
    {
        title: 'Private Residences',
        icon: <Home size={24} />,
        problem: 'Families want pool safety without indoor cameras.',
        solution: 'Detect falls/distress with 100% video privacy.',
        flow: 'Alert to mobile notification + external siren.',
        image: '/images/guardian-angel-ai_home_pool-safety.png',
    },
    {
        title: 'Healthcare & Aging',
        icon: <Hospital size={24} />,
        problem: 'Patient dignity vs. fall risk in bathrooms.',
        solution: 'Detect posture shifts without recording identity.',
        flow: 'Direct alert to nurse station DASH system.',
    },
    {
        title: 'Correctional Facilities',
        icon: <Shield size={24} />,
        problem: 'Blind spots in cells create high liability.',
        solution: 'Constant awareness where cameras have legal limits.',
        flow: 'Internal safety protocol trigger for response teams.',
        image: '/images/guardian-angel-ai_corrections_prison-cell-portrait.png',
    },
    {
        title: 'Educational Campuses',
        icon: <School size={24} />,
        problem: 'Student privacy in locker rooms and dorms.',
        solution: 'Identify weapon-brandishing or violence markers.',
        flow: 'Instant local security dispatch + lockdown trigger.',
        image: '/images/guardian-angel-ai_schools_locker-room-portrait.png',
    },
    {
        title: 'Public Restrooms',
        icon: <Bath size={24} />,
        problem: 'High-risk areas for drug use or medical events.',
        solution: 'Non-visual detection of prolonged occupancy or distress.',
        flow: 'Maintenance or EMS notification based on severity.',
        image: '/images/guardian-angel-ai_public-safety_alley-mounted.png',
    },
    {
        title: 'Industrial Safety',
        icon: <Warehouse size={24} />,
        problem: 'Hazardous zones where sensors are better than eyes.',
        solution: 'Real-time hazard pattern matching.',
        flow: 'Plant-wide emergency shutdown + safety alert.',
    },
];

export function UseCases() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;

        // Dynamic calculation: scroll by the visible width of the container
        // minus one card's worth of overlap for context
        const scrollAmount = container.offsetWidth * 0.8;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section id="use-cases" className="bg-white/2 py-24 relative overflow-hidden group/section">
            {/* Header Content - Centered */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="max-w-2xl">
                    <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Vertical Narrative</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6 heading-gradient">Designed for Trust</h2>
                    <p className="text-lg text-muted max-w-xl leading-relaxed">
                        Guardian Angel AI® is designed for environments where both safety and privacy are non-negotiable.
                    </p>
                </div>
            </div>

            {/* Carousel Area */}
            <div className="relative">
                {/* Floating Navigation Controls - Always Visible on Tablet/Desktop */}
                <div className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 items-center justify-center">
                    <button
                        onClick={() => scroll('left')}
                        className="p-4 md:p-5 rounded-full border border-white/10 bg-[#06080C]/90 backdrop-blur-xl hover:border-accent/50 text-foreground shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all active:scale-90 hover:bg-accent/15 group"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                </div>

                <div className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 items-center justify-center">
                    <button
                        onClick={() => scroll('right')}
                        className="p-4 md:p-5 rounded-full border border-white/10 bg-[#06080C]/90 backdrop-blur-xl hover:border-accent/50 text-foreground shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all active:scale-90 hover:bg-accent/15 group"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* The Scrollable Track */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 px-6 md:px-[max(24px,calc((100vw-1280px)/2))]"
                    style={{
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {cases.map((useCase, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start rounded-[32px] glass border border-white/5 overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20"
                        >
                            <div className="relative h-56 bg-white/5 flex items-center justify-center overflow-hidden">
                                {useCase.image ? (
                                    <>
                                        <img
                                            src={useCase.image}
                                            alt={useCase.title}
                                            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C]/80 via-transparent to-transparent" />
                                    </>
                                ) : (
                                    <div className="text-accent/20">
                                        {useCase.icon}
                                    </div>
                                )}
                                <div className="absolute top-6 left-6 p-2 rounded-xl bg-[#06080C]/80 backdrop-blur-md border border-white/10 text-accent">
                                    {useCase.icon}
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-medium mb-6">{useCase.title}</h3>

                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-bold block">Environment</span>
                                        <p className="text-base font-medium leading-relaxed">{useCase.problem}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-bold block">Solution</span>
                                        <p className="text-sm text-muted leading-relaxed">{useCase.solution}</p>
                                    </div>
                                    <div className="pt-6 mt-4 border-t border-white/5">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-bold block mb-2">Protocol</span>
                                        <p className="text-xs italic font-medium text-foreground/80">{useCase.flow}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Massive Spacer for centering items */}
                    <div className="flex-shrink-0 w-[40vw] h-px invisible" />
                </div>
            </div>
        </section>
    );
}
