"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/images/hero-edificio-exterior.jpg", aspect: "aspect-square" },
  { src: "/images/interior-salon-moderno.jpg", aspect: "aspect-video" },
  { src: "/images/dormitorio-principal.jpg", aspect: "aspect-square" },
  { src: "/images/zonas-comunes.jpg", aspect: "aspect-square" },
  { src: "/images/materiales-eco.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/lifestyle-residentes.jpg", aspect: "aspect-video" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${img.aspect}`}
            >
              <img
                src={img.src}
                alt={`Galeria INVEST-FINCA ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif text-2xl italic">Veure detall</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
