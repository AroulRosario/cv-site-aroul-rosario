"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Press } from "@/components/sections/Press";

export default function PressPage() {
    return (
        <main className="min-h-screen text-white relative">
            <Navbar />
            <div className="pt-20">
                <Press />
            </div>
            <Footer />
        </main>
    );
}
