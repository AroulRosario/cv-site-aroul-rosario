import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Press } from "@/components/sections/Press";

export const metadata: Metadata = {
    title: "Press & Media Coverage | Dr. Aroul Rosario S",
    description: "National media coverage and press features highlighting the work of Dr. Aroul Rosario S in chemistry education and EdTech strategy.",
    keywords: ["Aroul Rosario news", "Aroul Rosario press", "OG Chemistry media coverage"],
};

export default function PressPage() {
    return (
        <main className="min-h-screen bg-[#fbfbfb] text-zinc-950 relative">
            <Navbar />
            <div className="pt-20">
                <Press />
            </div>
            <Footer />
        </main>
    );
}
