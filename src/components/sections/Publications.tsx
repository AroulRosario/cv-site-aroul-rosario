"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookOpen } from "lucide-react";

export function Publications() {
    return (
        <section id="publications" className="py-32 relative bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Published Books */}
                <div className="mb-40">
                    <div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-zinc-100 pb-10">
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-zinc-950 tracking-tighter flex items-center gap-6 leading-[0.85]">
                                Published<br />Works
                                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-zinc-100 bg-zinc-50 text-[10px] text-zinc-400 font-mono translate-y-2 uppercase tracking-widest">
                                    Literature
                                </span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                                07 // Books & Series
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cvData.books.map((book, index) => (
                            <div key={index}>
                                <div className="group flex flex-col justify-between h-full p-12 border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 rounded-[2.5rem]">
                                    <div className="flex justify-between items-start mb-16">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500">
                                            <BookOpen className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                                            {book.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-display font-medium text-zinc-950 leading-tight">
                                        {book.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research & Thesis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    {/* Thesis Publications */}
                    <div>
                        <div className="mb-16 border-b border-zinc-100 pb-8">
                            <h2 className="text-4xl font-display font-medium text-zinc-950 tracking-tight mb-4">
                                Thesis<br />
                                <span className="text-zinc-300 italic">Publications.</span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                                08 // Research Background
                            </p>
                        </div>

                        <div className="space-y-6">
                            {cvData.thesisPublications.map((pub, index) => (
                                <div key={index} className="group p-8 border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 rounded-3xl relative overflow-hidden">
                                     <div className="absolute top-8 right-8 grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                                        <BrandLogo name={pub.org} size={32} />
                                    </div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">{pub.org}</p>
                                    <h3 className="text-lg font-display font-medium text-zinc-950 leading-relaxed max-w-[85%]">
                                        &quot;{pub.title}&quot;
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research Articles */}
                    <div>
                        <div className="mb-16 border-b border-zinc-100 pb-8">
                            <h2 className="text-4xl font-display font-medium text-zinc-950 tracking-tight mb-4">
                                Scientific<br />
                                <span className="text-zinc-300 italic">Articles.</span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                                09 // Peer-Reviewed Journals
                            </p>
                        </div>

                        <div className="space-y-6">
                            {cvData.researchArticles.map((article, index) => (
                                <div key={index} className="group p-8 border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 rounded-3xl relative overflow-hidden">
                                     <div className="absolute top-8 right-8 grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                                        <BrandLogo name={article.org} size={32} />
                                    </div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">{article.org}</p>
                                    <h3 className="text-lg font-display font-medium text-zinc-950 leading-relaxed max-w-[85%]">
                                        &quot;{article.title}&quot;
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
