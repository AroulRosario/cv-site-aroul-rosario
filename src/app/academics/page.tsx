import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Books } from "@/components/sections/Books";
import { Patents } from "@/components/sections/Patents";

export const metadata: Metadata = {
    title: "Academics & Research | Dr. Aroul Rosario S",
    description: "Explore the academic background, research publications, and fellowships of Dr. Aroul Rosario S. Featuring work published at CERN, Cambridge, and Harvard Dataverse.",
    keywords: ["Academic", "Research", "PhD Chemistry", "STEM Education", "Publications", "CERN Zenodo", "University of Manchester", "Fellowship Royal Society"],
};

export default function AcademicsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <h1 className="sr-only">Academics, Research & Fellowships — Dr. Aroul Rosario S</h1>
            <Navbar />
            <div className="pt-20">
                <Education />
                <Certifications />
                <Publications />
                <Books />
                <Patents />
            </div>
            <Footer />
        </main>
    );
}
