import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bakso Telkom Klaten",
  image: "https://baksotelkom.vercel.app/warung2.webp",
  description: "Bakso Telkom Klaten menyajikan bakso sapi berkualitas, kuah kaldu gurih, dan menu favorit di Klaten.",
  url: "https://baksotelkom.vercel.app",
  telephone: "+62-812-3456-7890",
  servesCuisine: ["Bakso", "Makanan Indonesia"],
  priceRange: "Rp 3.000 - Rp 16.500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Solo-Jogja No.KM. 9, Dusun 2, Tegalyoso, Kec. Klaten Sel.",
    addressLocality: "Klaten",
    addressRegion: "Jawa Tengah",
    postalCode: "57424",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.7148307,
    longitude: 110.5893614,
  },
  openingHours: ["Mo-Sa 10:00-20:00"],
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationSection />
      <Testimonial />
      <Footer />
    </main>
  );
}
