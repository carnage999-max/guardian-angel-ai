'use client';

export function ProblemSolution() {
    return (
        <>
            {/* Problem Section */}
            <section id="problem" className="relative border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-serif font-medium mb-12 heading-gradient">
                        Safety Blind Spots
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                        <div>
                            <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">
                                Many environments require safety awareness, but cameras are illegal, unethical, or inappropriate.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['Bathrooms', 'Locker rooms', 'Homes', 'Correctional facilities', 'Healthcare settings'].map((place) => (
                                <div key={place} className="px-6 py-3 rounded-full border border-white/10 glass text-lg font-medium">
                                    {place}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-16 text-xl md:text-2xl text-muted max-w-3xl mx-auto">
                        Traditional surveillance cannot be used here. Blind spots remain, leaving people vulnerable when they are most at risk.
                    </p>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="bg-white/2">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">The Solution</span>
                    <h2 className="text-4xl md:text-7xl font-serif font-medium mb-8">Awareness without surveillance.</h2>
                    <p className="text-xl md:text-3xl text-muted max-w-4xl mx-auto leading-relaxed mb-16">
                        Guardian Angel AI® performs on-device detection without recording audio, video, or identity.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { title: 'No Footage', desc: 'No images are ever captured or transmitted.' },
                            { title: 'No Storage', desc: 'Data is processed in real-time and immediately discarded.' },
                            { title: 'No Monitoring', desc: 'Alerts are autonomous. No humans are watching.' }
                        ].map((item) => (
                            <div key={item.title} className="p-10 rounded-3xl glass border border-white/5 text-left">
                                <h3 className="text-2xl font-serif font-medium mb-4">{item.title}</h3>
                                <p className="text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
