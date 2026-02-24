import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deeprani-institute.vercel.app"),

  title: {
    default:
      "DeepRani Institute of Medical Sciences | Premier Medical College in Unnao, UP",
    template: "%s | DeepRani Institute of Medical Sciences",
  },

  description:
    "DeepRani Institute of Medical Sciences is an upcoming premier medical institution on the Lucknow-Agra Expressway, Unnao, Uttar Pradesh. Offering B.Sc Nursing, BAMS, Paramedical, and ENT programs. Opening 2027.",

  keywords: [
    "DeepRani Institute of Medical Sciences",
    "DeepRani Institute",
    "medical college Unnao",
    "medical college UP",
    "BAMS college",
    "B.Sc Nursing college",
    "paramedical courses",
    "ENT courses",
    "medical college Lucknow Agra Expressway",
    "medical education India",
    "Unnao medical college",
    "medical admission 2027",
    "best medical college Uttar Pradesh",
  ],

  authors: [{ name: "DeepRani Institute of Medical Sciences" }],
  creator: "DeepRani Institute of Medical Sciences",
  publisher: "DeepRani Institute of Medical Sciences",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "DeepRani Institute of Medical Sciences",
    title: "DeepRani Institute of Medical Sciences | Premier Medical College, Unnao",
    description:
      "Upcoming premier medical institution offering B.Sc Nursing, BAMS, Paramedical & ENT courses on the Lucknow-Agra Expressway, Unnao, UP. Opening 2027.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DeepRani Institute of Medical Sciences Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeepRani Institute of Medical Sciences | Unnao, UP",
    description:
      "Upcoming premier medical institution offering B.Sc Nursing, BAMS, Paramedical & ENT courses.",
    images: ["/images/og-image.jpg"],
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

  verification: {
    google: "your-google-verification-code",
  },

  category: "Education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://deeprani-institute.vercel.app/#organization",
      name: "DeepRani Institute of Medical Sciences",
      url: "https://deeprani-institute.vercel.app",
      logo: "https://deeprani-institute.vercel.app/images/logo.png",
      description:
        "Upcoming premier medical institute offering B.Sc Nursing, BAMS, Paramedical, and ENT programs with a modern teaching hospital.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lucknow-Agra Expressway",
        addressLocality: "Unnao",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "admissions",
        email: "info@deeprani-institute.in",
      },
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://deeprani-institute.vercel.app/#hospital",
      name: "DeepRani Institute of Medical Sciences Hospital",
      medicalSpecialty: [
        "General Medicine",
        "ENT",
        "Nursing",
        "Ayurveda",
        "Paramedical",
      ],
      url: "https://deeprani-institute.vercel.app/hospital",
      parentOrganization: {
        "@id": "https://deeprani-institute.vercel.app/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://deeprani-institute.vercel.app/#website",
      url: "https://deeprani-institute.vercel.app",
      name: "DeepRani Institute of Medical Sciences",
      publisher: {
        "@id": "https://deeprani-institute.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
