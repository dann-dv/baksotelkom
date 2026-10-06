import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
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
  title: "Bakso Telkom Klaten",
  description: "Website Landing Page Bakso Telkom Klaten. Menyajikan informasi operasional, menu favorit, dan kemudahan pemesanan melalui WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-softCream text-forestGreen font-sans">{children}</body>
    </html>
  );
}
