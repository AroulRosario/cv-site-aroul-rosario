"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience } from "@/components/sections/Experience";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative noise-bg">
            <div className="scanline" />
            <MolecularLattice />
            <ScrollProgress />
            <Navbar />
            <div className="pt-20">
                <Experience />
            </div>
            <Footer />
        </main>
    );
}
