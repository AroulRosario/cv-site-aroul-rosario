import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Contact & Connect | Dr. Aroul Rosario S",
    description: "Get in touch with Dr. Aroul Rosario S for collaborations, keynote speaking engagements, or educational consulting.",
    keywords: ["Contact", "Hire", "Connect", "Consulting", "Dr. Aroul Rosario", "Puducherry"],
};

export default function ContactPage() {
    return (
        <main className="min-h-screen text-white relative">
            <h1 className="sr-only">Contact & Connect with Dr. Aroul Rosario S</h1>
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
