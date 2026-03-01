"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookOpen } from "lucide-react";

export function Publications() {
    return (
        <section id="publications" className="py-32 relative bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Published Books */}
                <div className="mb-32">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight flex items-center gap-4">
                                Published<br />Works
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-mono translate-y-2">
                                    Books
                                </span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                                07 // Literature
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cvData.books.map((book, index) => (
                            <StaggerItem key={index}>
                                <div className="group flex flex-col justify-between h-full p-8 border border-white/5 bg-black hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-12">
                                        <BookOpen className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 border border-white/5 px-2 py-1">
                                            {book.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-medium text-white transition-colors leading-tight">
                                        {book.title}
                                    </h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Thesis Publications */}
                <div className="mb-32">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight flex items-center gap-4">
                                Thesis<br />Publications
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                                08 // Research
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-500 hover:text-white transition-colors">
                        {cvData.thesisPublications.map((pub, index) => (
                            <StaggerItem key={index}>
                                <div className="group flex flex-col justify-between h-full p-8 border border-white/5 bg-black hover:bg-white/5 hover:border-white/20 transition-all duration-500 text-zinc-500 relative">
                                    <div className="absolute top-8 right-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                        <BrandLogo name={pub.org} size={40} />
                                    </div>
                                    <div className="mb-12">
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                            {pub.org}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                        &quot;{pub.title}&quot;
                                    </h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Research Articles */}
                <div>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight flex items-center gap-4">
                                Scientific<br />Articles
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                                09 // Journals
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cvData.researchArticles.map((article, index) => (
                            <StaggerItem key={index}>
                                <div className="group flex flex-col justify-between h-full p-8 border border-white/5 bg-black hover:bg-white/5 hover:border-white/20 transition-all duration-500 relative">
                                    <div className="absolute top-8 right-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                        <BrandLogo name={article.org} size={40} />
                                    </div>
                                    <div className="mb-12">
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                            {article.org}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                        &quot;{article.title}&quot;
                                    </h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>
        </section>
    );
}
