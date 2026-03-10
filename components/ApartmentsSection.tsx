"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BedDouble, Square, Tag } from "lucide-react";
import Image from "next/image";

const apartments = [
  {
    title: "Planta Baja: Garden Loft",
    beds: 1,
    size: "65m²",
    price: "295.000€",
    image: "/images/lifestyle-residentes.jpg",
    tag: "Bioconstrucción",
  },
  {
    title: "Planta 1: Luxury Suite",
    beds: 2,
    size: "95m²",
    price: "450.000€",
    image: "/images/interior-salon-moderno.jpg",
    tag: "Remodelación",
  },
  {
    title: "Planta 2: Duplex Ático",
    beds: 3,
    size: "155m²",
    price: "820.000€",
    image: "/images/dormitorio-principal.jpg",
    tag: "Exclusivo",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ApartmentsSection() {
  return (
    <section id="pisos" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Distribución de <span className="text-primary italic">3 Plantas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-dark/70 text-lg">
            Cada nivel ha sido diseñado para maximizar la luz natural y el bienestar, integrando materiales biodegradables en una remodelación de lujo sin precedentes en Tremp.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {apartments.map((apt, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group rounded-3xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={apt.image} 
                    alt={apt.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm rounded-full px-4 py-1">
                      {apt.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                   <h3 className="font-serif text-2xl font-bold text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                    {apt.title}
                  </h3>
                  <div className="flex items-center gap-6 text-neutral-dark/60">
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4" />
                      <span className="text-sm">{apt.beds} Hab.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{apt.size}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-neutral-dark/40 font-bold">Inversión desde</span>
                    <span className="text-2xl font-bold text-primary">{apt.price}</span>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all">
                    <Tag className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
           <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5 px-8 py-6">
              Descargar Catálogo de Materiales
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
