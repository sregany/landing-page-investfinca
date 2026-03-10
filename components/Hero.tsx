"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/fachada.png"
          alt="INVEST-FINCA Edificio Carrer Tarragona 19"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-neutral-dark/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Arquitectura que Respira: L&apos;Elit de la Bioconstrucció a <span className="text-secondary italic">Tremp</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-arena/90 font-light"
          >
            A INVEST-FINCA projectem el futur de la llar a través de la bioconstrucció. Un projecte exclusiu de 3 plantes que fusiona el disseny d&apos;estat de l&apos;art amb el màxim respecte pel medi ambient.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
               size="lg" 
               className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-full transition-all hover:scale-105"
               onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sol·licitar visita
            </Button>
            <Button 
               size="lg" 
               variant="outline" 
               className="border-white text-white hover:bg-white/10 text-lg px-8 py-7 rounded-full backdrop-blur-sm"
               onClick={() => document.getElementById('edificio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Veure el projecte
            </Button>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
