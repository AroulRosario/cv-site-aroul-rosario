import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
    title: "Professional Experience | Dr. Aroul Rosario S",
    description: "Dr. Aroul Rosario S: Educationalist, EdTech Founder, and Institutional Strategist. Detailed career trajectory, leadership roles, and organizational growth impact.",
    keywords: ["Professional Experience", "Leadership", "Institutional Governance", "EdTech Founder", "Digital Strategist", "Educational Consultant"],
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen text-white relative">
            <h1 className="sr-only">Professional Experience & Leadership — Dr. Aroul Rosario S</h1>
            <Navbar />
            <div className="pt-20">
                <Experience />
            </div>
            <Footer />
        </main>
    );
}
