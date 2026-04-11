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
        <section id="press" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-rose-600 font-mono text-xs tracking-widest uppercase mb-6 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                        <Newspaper className="w-3.5 h-3.5" />
                        Press & Media
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9] mt-4 mb-14">
                        Featured<br />
                        <span className="gradient-text-warm">Nationwide.</span>
                    </h2>
                    {/* Stats row */}
                    <div className="flex flex-wrap gap-12 md:gap-20 border-t border-slate-100 pt-10">
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-bold text-rose-500 leading-none">{cvData.press.totalOutlets}</p>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">Media Outlets</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-bold text-violet-500 leading-none">{cvData.press.totalReach}</p>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">Combined Reach</p>
                        </div>
                    </div>
                </div>

                {/* Featured press cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {cvData.press.featured.map((p, i) => (
                        <a
                            key={i}
                            href={p.url}
                            target={p.url !== "#" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group bg-white border border-slate-100 p-10 flex flex-col gap-8 rounded-2xl hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-500 transition-all duration-500">
                                    <Newspaper size={20} className="text-rose-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <ExternalLink size={16} className="text-slate-300 group-hover:text-rose-500 transition-colors duration-500" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{p.outlet}</h3>
                                <p className="text-slate-500 leading-relaxed">{p.desc}</p>
                            </div>

                            <div className="mt-auto">
                                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] border border-zinc-100 rounded-full px-4 py-2 group-hover:text-zinc-950 group-hover:border-zinc-950 transition-all duration-500">
                                    {p.audience}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Outlet scrolling ticker — top row */}
                <div className="relative overflow-hidden py-6 border-t border-zinc-100 mb-2">
                    <motion.div
                        className="flex gap-16 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    >
                        {[...OUTLETS.slice(0, 110), ...OUTLETS.slice(0, 110)].map((o, i) => (
                            <span key={i} className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.2em] shrink-0 hover:text-zinc-950 transition-colors cursor-default">
                                {o}
                                <span className="mx-8 text-zinc-200">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Outlet scrolling ticker — bottom row (reverse) */}
                <div className="relative overflow-hidden py-6 border-b border-zinc-100">
                    <motion.div
                        className="flex gap-16 whitespace-nowrap items-center"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    >
                        {[...OUTLETS.slice(110), ...OUTLETS.slice(110)].map((o, i) => (
                            <span key={i} className="text-[11px] font-mono text-zinc-300 uppercase tracking-[0.2em] shrink-0 hover:text-zinc-950 transition-colors cursor-default">
                                {o}
                                <span className="mx-8 text-zinc-200">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
