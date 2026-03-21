import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://cv-site-rosario.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Aroul Rosario S | Vice Principal, Chemist & Ed-Tech Founder | Puducherry",
    template: "%s | Dr. Aroul Rosario S",
  },
  description:
    "Dr. Aroul Rosario S — Vice Principal, Research Chemist, and serial Ed-Tech founder. Founder of OG Chemistry, Starborn IVY, Starborn Young Scientist Academy, and Neural Review. Keynote speaker at IIT Delhi. IIM-A certified Digital Strategist. FRSA. Author of 10,000+ educational simulations and multiple publications at CERN, Cambridge, and Harvard Dataverse.",
  keywords: [
    "Dr Aroul Rosario",
    "Aroul Rosario",
    "OG Chemistry",
    "Starborn IVY",
    "Starborn Young Scientist Academy",
    "Neural Review",
    "Ed-Tech India",
    "EdTech founder India",
    "Vice Principal Puducherry",
    "Chemistry educator India",
    "JEE NEET chemistry teacher",
    "AI education India",
    "IIT Delhi speaker",
    "molecular simulation education",
    "VR chemistry simulations",
    "FRSA Fellow Royal Society",
    "IUPAC member",
    "chemistry PhD India",
    "best chemistry teacher India",
    "research chemist India",
  ],
  authors: [{ name: "Dr. Aroul Rosario S", url: siteUrl }],
  creator: "Dr. Aroul Rosario S",
  publisher: "Dr. Aroul Rosario S",
  category: "education",
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dr. Aroul Rosario S",
    title: "Dr. Aroul Rosario S — Chemist, Educator & Ed-Tech Founder",
    description:
      "Vice Principal · Founder of OG Chemistry, Starborn IVY, Neural Review · IIT Delhi Speaker · FRSA · 10,000+ Educational Simulations · Published at CERN, Cambridge & Harvard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Aroul Rosario S — Chemist, Educator & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Aroul Rosario S — Chemist, Educator & Founder",
    description:
      "Vice Principal · Founder OG Chemistry, Starborn IVY, Neural Review · IIT Delhi Speaker · FRSA · 10K+ Simulations",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google-site-verification",
  },
};

// JSON-LD Structured Data for Google Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dr. Aroul Rosario S",
      honorificPrefix: "Dr.",
      jobTitle: "Vice Principal, Research Chemist & Ed-Tech Founder",
      url: siteUrl,
      sameAs: ["https://www.ogchemistry.in"],
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Amalorpavam Group of Institutions",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Puducherry",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "Organic Chemistry",
        "VR Molecular Simulations",
        "EdTech",
        "JEE NEET Preparation",
        "Artificial Intelligence in Education",
        "Neuro-Cognitive Pedagogy",
      ],
      award: [
        "President's Award Balashree for Creative Arts",
        "Sundaram Iyer Prize for Chemistry",
        "World Record - 10,000+ Educational Simulations",
      ],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "University of Manchester" },
        { "@type": "EducationalOrganization", name: "Loyola College, Chennai" },
      ],
      memberOf: [
        { "@type": "Organization", name: "Royal Society", description: "FRSA" },
        { "@type": "Organization", name: "IUPAC" },
        { "@type": "Organization", name: "American Chemical Society" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dr. Aroul Rosario S",
      description: "Official website of Dr. Aroul Rosario S",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Dr. Aroul Rosario S — Vice Principal, Chemist & Ed-Tech Founder",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.region" content="IN-PY" />
        <meta name="geo.placename" content="Puducherry, India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-white bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
