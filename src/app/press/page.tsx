import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Press } from "@/components/sections/Press";

export const metadata: Metadata = {
    title: "Press & Media Coverage | Dr. Aroul Rosario S",
    description: "Featured news, interviews, and media mentions of Dr. Aroul Rosario S and his impact on the EdTech ecosystem in India.",
    keywords: ["Press", "Media", "Interviews", "News", "The Hindu", "EdTech Features", "Academic Recognition"],
};

export default function PressPage() {
    return (
        <main className="min-h-screen text-white relative">
            <h1 className="sr-only">Press, Media & Public Recognition — Dr. Aroul Rosario S</h1>
            <Navbar />
            <div className="pt-20">
                <Press />
            </div>
            <Footer />
        </main>
    );
}
