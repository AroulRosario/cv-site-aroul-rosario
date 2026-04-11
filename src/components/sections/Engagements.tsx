"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { Play, Camera, Trophy } from "lucide-react";

const ENGAGEMENTS = [
    {
        type: "video",
        title: "Keynote at BITS Pilani",
        description: "Discussing the architectural shift in STEM education towards immersive, simulation-driven learning models.",
        url: "https://video.wixstatic.com/video/f7ab94_5395ebaeffde4d41ba9167e2067df282/480p/mp4/file.mp4"
    },
    {
        type: "video",
        title: "Future of Pedagogy",
        description: "Insights on AI-augmented adaptive assessments and learner-driven discovery.",
        url: "https://video.wixstatic.com/video/f7ab94_080f769ae28f4efda4bfff7e84a0fbfc/480p/mp4/file.mp4"
    }
];

const PHOTOS = [
    "https://static.wixstatic.com/media/f7ab94_a08bde1371e4442b8f7b3fc43b3b6b97~mv2.jpeg",
    "https://static.wixstatic.com/media/f7ab94_1e7ffe0d897a4b25bd5b94452cd92312~mv2.jpeg",
    "https://static.wixstatic.com/media/f7ab94_bb44267a3f0045008f58e6f3440fea8c~mv2.jpeg",
    "https://static.wixstatic.com/media/f7ab94_76b4c4a5af1548c99c38efd8d24eec8b~mv2.jpeg"
];

export function Engagements() {
    return (
        <section id="engagements" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24">
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">04 // Public Engagements</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter leading-[0.85]">
                        Speaking &<br />
                        <span className="text-zinc-200 italic">Judging.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {ENGAGEMENTS.map((ev, i) => (
                        <div key={i} className="group flex flex-col gap-6">
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-100 bg-zinc-50 shadow-sm group-hover:shadow-2xl group-hover:shadow-zinc-200 transition-all duration-700">
                                <video 
                                    src={ev.url} 
                                    className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                                    muted
                                    loop
                                    onMouseOver={e => e.currentTarget.play()}
                                    onMouseOut={e => e.currentTarget.pause()}
                                />
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all duration-700" />
                                <div className="absolute bottom-8 left-8">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                        <Play className="w-5 h-5 text-zinc-950 fill-zinc-950" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-medium text-zinc-950 mb-2">{ev.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-light">{ev.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Photo Wall */}
                <div className="space-y-12">
                   <div className="flex items-center gap-4">
                       <Trophy className="w-5 h-5 text-zinc-400" />
                       <h3 className="text-xl font-display font-medium text-zinc-950">Judging at Launchpad 2026 · BITS Pilani</h3>
                   </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {PHOTOS.map((src, i) => (
                            <div key={i} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-100 group">
                                <img 
                                    src={src} 
                                    alt={`Launchpad 2026 - BITS Pilani - Role: Judge`} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
