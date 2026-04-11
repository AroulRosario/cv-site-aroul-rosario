import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience } from "@/components/sections/Experience";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
    title: "Professional Experience | Dr. Aroul Rosario S",
    description: "Detailed professional timeline of Dr. Aroul Rosario S, covering leadership roles at OG Chemistry, Starborn IVY, and various educational institutions.",
    keywords: ["Aroul Rosario experience", "OG Chemistry leadership", "educational strategist timeline"],
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[#fbfbfb] text-zinc-950 relative">
            <Spotlight />
            <Navbar />
            <div className="pt-20">
                <Experience />
            </div>
            <Footer />
        </main>
    );
}
