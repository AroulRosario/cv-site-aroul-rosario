"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";
import { ExternalLink, Newspaper } from "lucide-react";

const OUTLETS = [
    "The Hindustan Express", "Daily Gossip Online", "Popular Reads", "Know Thatsall",
    "News Eagle India", "Rabale", "India Times News", "Punjab News Update", "India State News",
    "Indian Press Wire", "Manipur News World", "Indian Pulse Media", "News Wave India",
    "India Story Line", "Latest News Karnataka", "Nagaland News 24x7", "News Pulse India",
    "Mizoram News Buzz", "Mizoram News Voice", "Bihar News Watch", "Rajasthan News Time",
    "Rajasthan Headlines", "Indian Press Connect", "Indian News Views", "Odisha News Voice",
    "Indian Press Coverage", "Latest News Himachal", "Jharkhand News Hub", "Telangana News Spot",
    "Tamilnadu News Update", "Sikkim News Update", "Maharashtra Portal", "Punjab News Network",
    "Jammu and Kashmir News Report", "Meghalaya News Daily", "Jharkhand India News Agency",
    "Karnataka News Network", "Nagaland News Watch", "Odisha News Hour", "Kerala News Journal",
    "Karnataka News Room", "Sandwich", "Mizoram News Pulse", "Maharashtra NewsFlash",
    "Madhya Pradesh News Tribune", "New India 24x7", "India Press Buzz", "India Press Coverage",
    "India Bulletin Live", "India Today Daily", "India Buzz News", "Times Of India Daily",
    "The India Watch", "The News India Now", "India Times Online", "News India Live",
    "India Wire Channel", "Himachal Pradesh News Flash", "India Today Newsflash",
    "India Brief Update", "Go Read It Right", "India Global Live", "Indian For Media",
    "News Indian Link", "Topics ToKnow", "Buzz Center", "Indian Daily Press", "News India Network",
    "India Today Times", "India Watch Live", "The Expertfinds", "Indian Focus News",
    "Indian Former", "Daily Indiane", "The India Talks", "India 24x7 News", "India News Connect",
    "The Daily Discover", "India Post Daily", "Haryana News Time", "Discover Weekly",
    "India Live New Update", "Topics Daily", "India Vibes Media", "India News Wire",
    "Indian Headline News", "India Buzz Feednews", "District Daily News", "Indian Headline Buzz",
    "The Indian Post", "Himachal News Report", "State Newz", "India Latest News Feed",
    "Delhi News Daily", "Daily India Updates", "Indian News Channel", "India Buzz Channel",
    "News Indian Bulletin", "News Indian Update", "India Breaking News Line", "Buzzing Info",
    "Media Minds", "India News Junction", "Finance Goa Head", "News India Connect",
    "India Latest News Update", "The Readers Digest", "India Viral News Now", "India Mirror News",
    "Hoist", "Indian Express Newsfeed", "India News Portal", "Patrolling Wire News", "The India Brief",
    "India Globe Today", "India Live News Today", "India Briefings", "Goa New Time", "India Pulse Update",
    "News India Web", "News Wires", "Indian Express Update", "Standard News Wire", "My News Today",
    "Gossip Today", "Expert Arenas", "Indian News Daily Update", "News India Times", "India Buzz Times",
    "India News Nation", "News Mirror", "India Wire News", "News India Talks", "Indian Express Daily",
    "Goa News Online", "Indian Express News", "India Breaking Buzz", "Chhattisgarh NewsLine",
    "News Today99", "Tech Times News", "India Bulletin News", "India Today Live Update",
    "India Current Affairs", "India Flash Bulletin", "News Indian Line", "Indian News Beat",
    "News India Point", "India Today Updates", "The Indian Post Online", "India Press Dispatch",
    "India Flash News", "India Today Headline", "News Indian Pulse", "Top Icsarena",
    "India Global News", "News India Connectivity", "The India Times Online", "India Flashnewsfeed",
    "India Watch Daily", "India News Break", "Village Voice News", "India Live News",
    "Daily Street Journal", "Gujarat Watch", "India Tribune Times", "Daily News India Online",
    "India Wire Media", "India Current Update", "India Press Journal", "Indian News Update",
    "News India Headline", "India Live News Feed", "India Latest News", "India Reporter Live",
    "Haryana News Line", "Topics EveryDay", "India World News", "Indsider India Times",
    "Report Today", "Report India", "The Report World", "Nagpur Project News", "The Quick Update",
    "Weekly News Report", "Business Line Print", "Traveller News India", "Now Report", "Quick News Now",
    "Latest News Today", "India Globalnews", "Chronicle Today News", "News India", "Report World",
    "India Forbes News", "Brief Buzz", "The Report Net", "News Today Pro", "Report News",
    "Andhra News Digest", "Indian World News", "The News Net", "The Daily Glimpse", "Rapid Report",
    "Story India", "Reach News", "Newz Today 24", "Scroll India News", "Standard Today News",
    "Insightful News", "Top Reads", "Express Times News", "State News Today", "Tripura News Point",
    "Enrich Daily", "India Career Week", "Post Times News", "Trend Stellers", "News Economic India",
    "Tripura News Central", "ConsumeTrue", "Uttarakhand News Wire",
];

export function Press() {
    return (
        <section id="press" className="py-32 relative border-y border-white/5 overflow-hidden">
            {/* Ambient gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,242,255,0.03),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass">
                        <Newspaper className="w-3 h-3" />
                        Press &amp; Media
                    </p>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter leading-none mt-6 mb-12">
                        Featured<br />
                        <span className="text-white/20">Nationwide.</span>
                    </h2>
                    {/* Stats row — separate so they don't overlap title */}
                    <div className="flex flex-wrap gap-12 md:gap-20 border-t border-white/5 pt-8">
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-black text-white leading-none">{cvData.press.totalOutlets}</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-3">Media Outlets</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-black text-white leading-none">{cvData.press.totalReach}</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-3">Combined Reach</p>
                        </div>
                    </div>
                </div>

                {/* Featured press cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                    {cvData.press.featured.map((p, i) => (
                        <motion.a
                            key={i}
                            href={p.url}
                            target={p.url !== "#" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group glass-card p-8 flex flex-col gap-6 hover:border-white/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />

                            <div className="flex items-start justify-between">
                                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-white/30 transition-colors">
                                    <Newspaper size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                                </div>
                                <ExternalLink size={14} className="text-zinc-700 group-hover:text-white transition-colors" />
                            </div>

                            <div>
                                <h3 className="text-xl font-display font-black text-white mb-2">{p.outlet}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                            </div>

                            <div className="mt-auto">
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest border border-white/5 rounded-full px-3 py-1 group-hover:text-white group-hover:border-white/20 transition-colors">
                                    {p.audience}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Outlet scrolling ticker — top row */}
                <div className="relative overflow-hidden py-5 border-t border-white/5 mb-2">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {[...OUTLETS.slice(0, 110), ...OUTLETS.slice(0, 110)].map((o, i) => (
                            <span key={i} className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] shrink-0">
                                {o}
                                <span className="mx-6 text-white/10">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Outlet scrolling ticker — bottom row (reverse) */}
                <div className="relative overflow-hidden py-5 border-b border-white/5">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap items-center"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    >
                        {[...OUTLETS.slice(110), ...OUTLETS.slice(110)].map((o, i) => (
                            <span key={i} className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] shrink-0">
                                {o}
                                <span className="mx-6 text-white/10">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
