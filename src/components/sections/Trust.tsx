'use client';

import { ShieldCheck, Scale, Lock, EyeOff } from 'lucide-react';

const principles = [
    {
        title: 'Zero Surveillance',
        content: 'Privacy by physical design. Our systems are engineered to detect events without the capability of recording human identity or facial features.',
        icon: <EyeOff className="text-accent" />,
    },
    {
        title: 'Local Sovereignty',
        content: 'Processing never leaves the room. Every AI inference happens on-device, within the physical boundaries of your institution.',
        icon: <Lock className="text-accent" />,
    },
    {
        title: 'Auditable Integrity',
        content: 'Open safety protocols. The logic governing alerts is transparent and auditable by third-party ethics boards.',
        icon: <Scale className="text-accent" />,
    },
    {
        title: 'Radical Transparency',
        content: 'No hidden sensors. We provide full disclosure of every sensing modality and every data boundary.',
        icon: <ShieldCheck className="text-accent" />,
    },
];

const complianceAreas = [
    'GDPR - Right to Privacy',
    'HIPAA - Compliant Monitoring',
    'PREA - Correctional Standards',
    'CCPA - Privacy by Design',
    'ADA - Accessible Safety alerts',
];

export function Trust() {
    return (
        <section id="trust" className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Our Charter</span>
                    <h2 className="text-4xl md:text-7xl font-serif font-medium mb-8">Built on Trust.</h2>
                    <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                        Privacy is not a setting. It is the architectural foundation of everything we build.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {principles.map((principle, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-3xl glass border border-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                {principle.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">{principle.title}</h3>
                                <p className="text-foreground/75 leading-relaxed text-lg">
                                    {principle.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance List - No Badges */}
                <div className="mt-32 pt-16 border-t border-white/5">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <h3 className="text-2xl font-serif mb-4 text-foreground">Institutional Compliance</h3>
                            <p className="text-foreground/90 leading-relaxed text-lg">
                                Guardian Angel AI® is engineered to align with the world’s most stringent privacy and safety standards.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4 max-w-2xl">
                            {complianceAreas.map((item) => (
                                <span key={item} className="text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.1em]">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-32 p-12 lg:p-20 rounded-[3rem] glass border border-white/5 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="font-serif text-3xl md:text-5xl italic leading-tight mb-12">
                            "If a safety solution requires the sacrifice of privacy, it is not a solution. It is a trade-off we refuse to make."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-0.5 bg-accent mb-6" />
                            <div className="text-sm font-semibold tracking-[0.3em] uppercase opacity-60">
                                Guardian Angel AI Ethics Council
                            </div>
                        </div>
                    </div>
                    {/* Subtle decoration */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
