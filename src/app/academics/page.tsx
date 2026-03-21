"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Books } from "@/components/sections/Books";
import { Patents } from "@/components/sections/Patents";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";

export default function AcademicsPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative noise-bg">
            <div className="scanline" />
            <MolecularLattice />
            <ScrollProgress />
            <Navbar />
            <div className="pt-20">
                <Education />
                <Certifications />
                <Publications />
                <Books />
                <Patents />
            </div>
            <Footer />
        </main>
    );
}
