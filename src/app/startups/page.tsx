"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";

export default function StartupsPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative noise-bg">
            <div className="scanline" />
            <MolecularLattice />
            <ScrollProgress />
            <Navbar />
            <div className="pt-20"> {/* Offset for navbar */}
                <Startups />
                <Initiatives />
            </div>
            <Footer />
        </main>
    );
}
