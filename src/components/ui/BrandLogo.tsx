"use client";

const domainMap: Record<string, string> = {
    "Royal Society, London": "royalsociety.org",
    "Uni of Selinius, Delaware, USA": "selinusuniversity.it",
    "University of Manchester, UK": "manchester.ac.uk",
    "Loyola College, Chennai": "loyolacollege.edu",
    "Nehru College Puducherry": "ncesi.in",
    "IUPAC": "iupac.org",
    "American Chemical Society": "acs.org",
    "Microsoft": "microsoft.com",
    "Indian Institute of Technology Bombay": "iitb.ac.in",
    "Adobe": "adobe.com",
    "IBM": "ibm.com",
    "NVIDIA": "nvidia.com",
    "Google": "google.com",
    "UNESCO": "unesco.org",
    "University of Glasgow": "gla.ac.uk",
    "University of Cambridge": "cam.ac.uk",
    "Université de Genève": "unige.ch",
    "Stanford University": "stanford.edu",
    "University of Colorado Boulder": "colorado.edu",
    "Physics Wallah": "pw.live",
    "Indian Institute of Management Ahmedabad": "iima.ac.in",
    "Johns Hopkins University": "jhu.edu",
    "CERN Geneva EU Zenodo": "cern.ch",
    "Harvard University": "harvard.edu",
    "IJIRST": "ijirst.org",
    "IJRDO": "ijrdo.org",
    "IJCIRAS": "ijciras.com",
    "Amalorpavam Group of Institutions": "amalorpavamschool.org",
    "Amalorpavam Lourds Academy": "amalorpavamacademy.com",
    "Amalorpavam Higher Secondary School": "amalorpavamschool.org",
    "Starborn Young Scientist Academy": "starbornacademy.com"
};

export const BrandLogo = ({ name, size = 48 }: { name: string; size?: number }) => {
    const domain = domainMap[name];

    // Multi-source strategy
    const sources = domain ? [
        `https://unavatar.io/${domain}`,
        `https://logo.clearbit.com/${domain}`,
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    ] : [];

    return (
        <div
            className="flex-shrink-0 flex items-center justify-center rounded-md bg-zinc-900 border border-white/10 overflow-hidden group-hover:border-white/30 transition-colors duration-500"
            style={{ width: size, height: size }}
        >
            {domain ? (
                <LogoImage sources={sources} name={name} />
            ) : (
                <span className="font-display font-medium text-lg text-zinc-500">{name.charAt(0)}</span>
            )}
        </div>
    );
};

const LogoImage = ({ sources, name }: { sources: string[], name: string }) => {
    const [sourceIndex, setSourceIndex] = (typeof window !== 'undefined')
        ? require('react').useState(0)
        : [0, () => { }];

    const currentSource = sources[sourceIndex];

    if (sourceIndex >= sources.length) {
        return <span className="font-display font-medium text-lg text-zinc-500">{name.charAt(0)}</span>;
    }

    return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
            src={currentSource}
            alt={`${name} logo`}
            className="w-full h-full object-contain p-2 filter grayscale opacity-60 mix-blend-screen brightness-150 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:brightness-100 transition-all duration-500"
            onError={() => setSourceIndex(sourceIndex + 1)}
        />
    );
};
