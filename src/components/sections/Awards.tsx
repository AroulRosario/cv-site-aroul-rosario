import { cvData } from "@/data/cv";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Trophy } from "lucide-react";

export function Awards() {
    return (
        <section id="awards" className="py-32 relative overflow-hidden bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div>
                        <span className="inline-flex items-center gap-2 text-amber-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-10 bg-amber-50 px-6 py-2.5 rounded-full border border-amber-100">
                            <Trophy className="w-3.5 h-3.5" />
                            Elite Honors
                        </span>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-slate-900 tracking-tighter leading-[0.8]">
                            Recognised.<br />
                            <span className="gradient-text-warm">Celebrated.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-10">
                        {cvData.awards.map((award, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-slate-100 p-12 flex flex-col md:flex-row gap-10 items-start md:items-center rounded-[2.5rem] transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-amber-200 hover:-translate-y-1"
                            >
                                <div className="shrink-0 scale-110 group-hover:scale-125 transition-transform duration-500">
                                    {award.org ? (
                                        <BrandLogo name={award.org} size={110} />
                                    ) : (
                                        <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center text-4xl shadow-sm border border-amber-100">
                                            {i === 0 ? "🏛️" : i === 1 ? "⚗️" : "🏆"}
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    {award.org && (
                                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.4em] block mb-2">{award.org}</span>
                                    )}
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-tight tracking-tight group-hover:text-amber-600 transition-colors">
                                        {award.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-lg font-medium">{award.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative flex flex-col gap-10 lg:mt-10">
                        <div className="relative overflow-hidden rounded-[3rem] shadow-2xl group border-[12px] border-white ring-1 ring-slate-100">
                            <img 
                                src="/photos/award-ceremony-2.jpg" 
                                alt="Republic Day Award Ceremony" 
                                className="w-full h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/10 to-transparent p-12 flex flex-col justify-end">
                                <p className="text-[11px] font-mono font-bold text-amber-400 tracking-[0.4em] uppercase mb-4">State Recognition</p>
                                <p className="text-2xl font-display font-bold text-white tracking-tight leading-tight">Presented by the Lt. Governor of Puducherry for Creative Excellence.</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl group border-8 border-white ml-20 -mt-20 z-10 glass shadow-2xl">
                            <img 
                                src="/photos/award-ceremony-1.jpg" 
                                alt="National Conclave Participation" 
                                className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-1000" 
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
