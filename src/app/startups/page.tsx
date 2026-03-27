import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";

export const metadata: Metadata = {
    title: "EdTech Startups & Initiatives | Dr. Aroul Rosario S",
    description: "Discover building the future of learning. Dr. Aroul Rosario S: Founder of OG Chemistry, Starborn IVY, and Neural Review. Transforming STEM pedagogy through technology.",
    keywords: ["Startups", "EdTech", "OG Chemistry", "Starborn IVY", "Neural Review", "STEM Pedagogy", "Educational Innovation"],
};

export default function StartupsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <h1 className="sr-only">EdTech Startups & Global Initiatives — Dr. Aroul Rosario S</h1>
            <Navbar />
            <div className="pt-20">
                <Startups />
                <Initiatives />
            </div>
            <Footer />
        </main>
    );
}
