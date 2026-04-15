import { cvData } from "@/data/cv";

type BookItem = {
    title: string;
    subtitle: string;
    cover: string;
    tag: string;
    description: string;
    link?: string;
};

const BOOKS: BookItem[] = [
    {
        title: "Chemistry for IIT-JEE & NEET",
        subtitle: "The Ultimate Competitive Prep Guide",
        cover: "/books/5.jpg",
        tag: "Competitive Prep",
        description: "100+ simulations · VR Kit · Video Lectures · Shortcuts & Tricks",
        link: "https://www.amazon.in/dp/9356551936",
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

function BookCard({ book, index }: { book: BookItem; index: number }) {
    const CardInner = (
        <div className="relative h-full flex flex-col">
            {/* Book Cover */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:border-slate-300 transition-all duration-700 hover:-translate-y-2">
                <img
                    src={book.cover}
                    alt={`${book.title} — book by Dr. Aroul Rosario`}
                    className="w-full aspect-[3/4] object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    loading="lazy"
                />
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em] mb-2">{book.description}</p>
                    {book.link && (
                        <div className="mt-4 pt-4 border-t border-white/20">
                            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                Available on Amazon
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </span>
                        </div>
                    )}
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest bg-white/90 backdrop-blur-md border border-slate-100 px-4 py-1.5 rounded-full shadow-sm">
                        {book.tag}
                    </span>
                </div>
            </div>

            {/* Title below */}
            <div className="mt-8 px-2 flex-grow">
                <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                    {book.title}
                </h3>
                <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-2">{book.subtitle}</p>
            </div>
            
            {book.link && (
                <div className="mt-4 px-2">
                     <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-indigo-700 transition-colors">
                        Buy Now
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                </div>
            )}
        </div>
    );

    return book.link ? (
        <a href={book.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
            {CardInner}
        </a>
    ) : (
        <div className="group cursor-default h-full">
            {CardInner}
        </div>
    );
}

export function Books() {
    return (
        <section id="academics" className="py-32 relative border-y border-slate-50 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-[0.5em] mb-10 block">08 // Authored Works</span>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-slate-900 tracking-tighter leading-[0.8]">
                            Literature.<br />
                            <span className="gradient-text">Portfolio.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium text-lg max-w-sm text-right hidden md:block leading-relaxed">
                        From comic-book chemistry to cinematic NCET—each book is a deep experiment in neuro-cognitive pedagogical design.
                    </p>
                </div>

                {/* 5-column grid of Elite book cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                    {BOOKS.map((book, i) => (
                        <BookCard key={i} book={book} index={i} />
                    ))}
                </div>

                {/* Bottom strip: stats + real book photo */}
                <div className="mt-32 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-4 flex flex-col gap-12">
                        {[
                            { n: "5", label: "Books Published" },
                            { n: "10K+", label: "Simulations Created" },
                            { n: "3", label: "Series Launched" },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-6xl font-display font-bold text-slate-900 tabular-nums">{s.n}</p>
                                <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] mt-3">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl group">
                        <img
                            src="/photos/book-handover.jpg"
                            alt="Dr. Aroul Rosario with his authored Chemistry book for IIT-JEE and NEET"
                            className="w-full h-[500px] object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 md:via-transparent to-transparent flex items-end p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
                                <div>
                                    <h4 className="text-2xl font-display font-bold text-white mb-2">Author Handover</h4>
                                    <p className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-[0.4em]">
                                        Chemistry for IIT-JEE &amp; NEET — Official Recognition
                                    </p>
                                </div>
                                <a 
                                    href="https://www.amazon.in/dp/9356551936" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="shrink-0 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-display font-bold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl pointer-events-auto"
                                >
                                    Get on Amazon
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

