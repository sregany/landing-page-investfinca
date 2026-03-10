import Hero from "@/components/Hero";
import BuildingSection from "@/components/BuildingSection";
import ApartmentsSection from "@/components/ApartmentsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import Gallery from "@/components/Gallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildingSection />
      <ApartmentsSection />
      <SustainabilitySection />
      <AmenitiesSection />
      <Gallery />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Toaster />
      <footer className="py-12 bg-neutral-dark text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
             <span className="font-serif text-2xl font-bold">INVEST<span className="text-primary">-</span>FINCA</span>
             <p className="text-white/40 text-sm">© 2026 INVEST-FINCA. Líderes en Bioconstrucción.</p>
          </div>
          <div className="flex gap-8 text-sm text-white/60">
             <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
             <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
}
