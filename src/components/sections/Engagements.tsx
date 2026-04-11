"use client";

import { motion } from "framer-motion";
import { Play, Trophy, Video } from "lucide-react";

const ENGAGEMENTS = [
    {
        title: "Keynote at BITS Pilani",
        description: "Discussing the architectural shift in STEM education towards immersive, simulation-driven learning models.",
        url: "https://video.wixstatic.com/video/f7ab94_5395ebaeffde4d41ba9167e2067df282/480p/mp4/file.mp4"
    },
    {
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
        <section id="engagements" className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/40 via-transparent to-blue-50/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-violet-600 font-mono text-xs tracking-widest uppercase mb-6 bg-violet-50 px-4 py-2 rounded-full border border-violet-100">
                        <Video className="w-3.5 h-3.5" />
                        Public Engagements
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                        Speaking &<br />
                        <span className="gradient-text">Judging.</span>
                    </h2>
                </div>

                {/* Video Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {ENGAGEMENTS.map((ev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group flex flex-col gap-5"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-lg group-hover:shadow-2xl group-hover:shadow-indigo-200/40 transition-all duration-700">
                                <video 
                                    src={ev.url} 
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl font-display font-bold text-white mb-1">{ev.title}</h3>
                                    <p className="text-white/70 text-sm">{ev.description}</p>
                                </div>
                                {/* Play indicator */}
                                <div className="absolute top-6 right-6">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                        <Play className="w-4 h-4 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Photo Gallery */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                            <Trophy className="w-5 h-5 text-amber-500" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-slate-900">Judging at Launchpad 2026 · BITS Pilani</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {PHOTOS.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
                            >
                                <img 
                                    src={src} 
                                    alt={`Launchpad 2026 - BITS Pilani - Role: Judge`} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
