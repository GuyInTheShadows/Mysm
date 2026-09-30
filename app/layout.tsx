import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { resume } from "@/content/resume";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  adjustFontFallback: true,
});

const description =
  "Front-end engineer building large Vue and Next.js applications. Front-End Lead at DAPA and creator of SliceGames.";

export const metadata: Metadata = {
  metadataBase: new URL(resume.identity.site),
  title: "Meysam Kiani - Front-End Engineer",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meysam Kiani - Front-End Engineer",
    description,
    url: "/",
    siteName: "Meysam Kiani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meysam Kiani - Front-End Engineer",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.identity.name,
  jobTitle: resume.identity.title,
  url: resume.identity.site,
  email: resume.identity.email,
  ...(resume.identity.phone
    ? { telephone: resume.identity.phone.replace(/\s+/g, "") }
    : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  sameAs: resume.identity.links.map((link) => link.href),
  knowsAbout: ["Vue", "React", "Next.js", "TypeScript", "WebRTC"],
  ...(resume.identity.photo
    ? {
        image: `${resume.identity.site}${resume.identity.photo.src}`,
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
