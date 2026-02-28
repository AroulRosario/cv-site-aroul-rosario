import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Awards } from "@/components/sections/Awards";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Patents } from "@/components/sections/Patents";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Awards />
      <Certifications />
      <Publications />
      <Patents />
      <Footer />
    </main>
  );
}

