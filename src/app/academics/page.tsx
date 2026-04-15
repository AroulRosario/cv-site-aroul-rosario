import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Patents } from "@/components/sections/Patents";
import { Publications } from "@/components/sections/Publications";

export const metadata: Metadata = {
    title: "Academic Background & Research | Dr. Aroul Rosario S",
    description: "Academic journey, certifications, patents, and scientific publications of Dr. Aroul Rosario S, featuring work from CERN, Cambridge, and Harvard Dataverse.",
    keywords: ["Aroul Rosario PhD", "Aroul Rosario Research", "OG Chemistry patents", "chemistry research publications"],
};

export default function AcademicsPage() {
    return (
        <main className="min-h-screen bg-[#fbfbfb] text-zinc-950 relative">
            <Navbar />
            <div className="pt-24 space-y-0">
                <Education />
                <Certifications />
                <Patents />
                <Publications />
            </div>
            <Footer />
        </main>
    );
}
