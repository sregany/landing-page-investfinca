"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Wind, Droplets, Sun } from "lucide-react";

const stats = [
  { label: "Reducción CO2", value: "70%", icon: Wind },
  { label: "Ahorro Energía", value: "40%", icon: Sun },
  { label: "Ciclo del Agua", value: "100%", icon: Droplets },
  { label: "Áreas Verdes", value: "1.200m²", icon: TreeDeciduous },
];

const SustainabilitySection = () => {
  return (
    <section id="sostenibilidad" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            Líderes en <span className="text-secondary italic">Bioconstrucción</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            En INVEST-FINCA, la bioconstrucción no es una opción, es nuestro ADN. Utilizamos materiales que retornan a la tierra, garantizando un aire puro y un entorno saludable para tu familia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <stat.icon className="w-10 h-10 mb-4 text-secondary" />
              <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-sm uppercase tracking-widest text-white/60 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
