"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience } from "@/components/sections/Experience";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen text-white relative">
            <Navbar />
            <div className="pt-20">
                <Experience />
            </div>
            <Footer />
        </main>
    );
}
