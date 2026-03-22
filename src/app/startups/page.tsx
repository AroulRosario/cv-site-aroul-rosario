"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";

export default function StartupsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <Navbar />
            <div className="pt-20">
                <Startups />
                <Initiatives />
            </div>
            <Footer />
        </main>
    );
}
