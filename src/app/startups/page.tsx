import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
    title: "Startups & Initiatives | Dr. Aroul Rosario S",
    description: "Explore the innovative EdTech startups and architectural initiatives led by Dr. Aroul Rosario S, including OG Chemistry and Starborn IVY.",
    keywords: ["Aroul Rosario startups", "EdTech innovations India", "Starborn IVY", "OG Chemistry"],
};

export default function StartupsPage() {
    return (
        <main className="min-h-screen bg-[#fbfbfb] text-zinc-950 relative">
            <Spotlight />
            <Navbar />
            <div className="pt-20">
                <Startups />
                <Initiatives />
            </div>
            <Footer />
        </main>
    );
}
