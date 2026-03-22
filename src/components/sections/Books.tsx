"use client";

import { motion } from "framer-motion";

const BOOKS = [
    {
        title: "Chemistry for IIT-JEE & NEET",
        subtitle: "The Ultimate Competitive Prep Guide",
        cover: "/books/5.jpg",
        tag: "Competitive Prep",
        description: "100+ simulations · VR Kit · Video Lectures · Shortcuts & Tricks",
    },
    {
        title: "Mind Maps",
        subtitle: "Cora the Explorer Series",
        cover: "/books/6.jpg",
        tag: "Visual Learning",
        description: "Emoji hooks · Web App · YouTube · Insta Reels — for all competitive exams",
    },
    {
        title: "NCERT Reloaded",
        subtitle: "Modern NCERT Book for Gen Z",
        cover: "/books/8.jpg",
        tag: "Academic Textbook",
        description: "The NCERT reimagined — cinematic, immersive, and built for the modern learner",
    },
    {
        title: "Formula Comic Book",
        subtitle: "OG Chem Series",
        cover: "/books/9.jpg",
        tag: "Visual Pedagogy",
        description: "Spotify · Web App · Shortcuts · Tricks · 80/20 rule for all exams",
    },
    {
        title: "Chemistry Endgame",
        subtitle: "The Avengers of Chemistry",
        cover: "/books/10.jpg",
        tag: "Reference & Mastery",
        description: "Einstein · Mendeleev · Curie · Karplus · Zewail — chemistry told as an epic saga",
    },
];

function BookCard({ book, index }: { book: typeof BOOKS[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group cursor-default"
        >
            <div className="relative">
                {/* Book Cover */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_30px_80px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.9)] group-hover:border-white/20 transition-all duration-500">
                    <img
                        src={book.cover}
                        alt={`${book.title} — book by Dr. Aroul Rosario`}
                        className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                    />
                    {/* Glassmorphism overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">{book.description}</p>
                    </div>

                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                        <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                            {book.tag}
                        </span>
                    </div>
                </div>

                {/* Title below */}
                <div className="mt-5 px-1">
                    <h3 className="text-base font-display font-black text-white tracking-tight leading-tight">
                        {book.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 mt-1">{book.subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function Books() {
    return (
        <section id="books" className="py-32 relative border-y border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,242,255,0.025),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">09 // Authored Works</p>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">
                            5 Books.<br />
                            <span className="text-white/20">Written.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 font-light text-lg max-w-xs text-right hidden md:block">
                        From comic-book chemistry to cinematic NCERT — each book an experiment in pedagogy.
                    </p>
                </div>

                {/* 5-column grid of 3D book cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {BOOKS.map((book, i) => (
                        <BookCard key={i} book={book} index={i} />
                    ))}
                </div>

                {/* Bottom strip: stats + real book photo */}
                <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-wrap gap-10">
                        {[
                            { n: "5", label: "Books Published" },
                            { n: "10K+", label: "Simulations Created" },
                            { n: "3", label: "Series Launched" },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-4xl font-display font-black text-white">{s.n}</p>
                                <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
                    >
                        <img
                            src="/photos/book-handover.jpg"
                            alt="Dr. Aroul Rosario with his authored Chemistry book for IIT-JEE and NEET"
                            className="w-full h-72 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 pointer-events-none">
                            <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
                                Chemistry for IIT-JEE &amp; NEET — Author&apos;s copy
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
