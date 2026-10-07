import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baksotelkom.vercel.app"),
  title: {
    default: "Bakso Telkom Klaten | Bakso Enak di Klaten",
    template: "%s | Bakso Telkom Klaten",
  },
  description: "Bakso Telkom Klaten menyajikan bakso sapi berkualitas, kuah kaldu gurih, dan menu favorit di Klaten. Cek lokasi, jam operasional, dan menu terbaru kami.",
  keywords: ["bakso telkom klaten", "bakso klaten", "warung bakso klaten", "bakso sapi klaten", "bakso enak di klaten", "menu bakso telkom"],
  applicationName: "Bakso Telkom Klaten",
  authors: [{ name: "Bakso Telkom Klaten" }],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Bakso Telkom Klaten | Bakso Enak di Klaten",
    description: "Nikmati bakso sapi pilihan, kuah gurih, dan tempat makan nyaman di Klaten. Temukan lokasi, jam buka, dan menu favorit kami.",
    url: "https://baksotelkom.vercel.app",
    siteName: "Bakso Telkom Klaten",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/warung2.webp", width: 1200, height: 630, alt: "Bakso Telkom Klaten" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakso Telkom Klaten | Bakso Enak di Klaten",
    description: "Bakso Telkom Klaten – warung bakso enak di Klaten dengan kuah gurih, menu variatif, dan lokasi strategis.",
    images: ["/warung2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-softCream text-forestGreen font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
