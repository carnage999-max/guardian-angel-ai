import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { UseCases } from '@/components/sections/UseCases';
import { Trust } from '@/components/sections/Trust';
import { Company } from '@/components/sections/Company';
import { Halo } from '@/components/ui/Halo';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Halo />
      <main className="relative z-10 bg-transparent text-foreground selection:bg-accent/30 selection:text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <UseCases />
        <Trust />
        <Company />
      </main>
    </div>
  );
}
