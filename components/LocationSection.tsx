"use client";

import { motion } from "framer-motion";
import { MapPin, Train, ShoppingBag, School } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-24 bg-neutral-arena">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                El Cor de <span className="text-primary italic">Tremp</span>
              </h2>
              <p className="text-neutral-dark/70 text-lg max-w-2xl">
                Situat al Carrer Tarragona 19, el nostre projecte s&apos;integra en la vida del poble, aportant luxe i sostenibilitat a una ubicació privilegiada.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Carrer Tarragona 19</h4>
                  <p className="text-neutral-dark/60">Tremp, Lleida</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-primary/60" />
                     <span className="text-sm font-medium">Centre Històric</span>
                  </div>
                 <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-primary/60" />
                    <span className="text-sm font-medium">Organic Market</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <School className="w-5 h-5 text-primary/60" />
                    <span className="text-sm font-medium">Eco-Escoles</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary/60" />
                    <span className="text-sm font-medium">Parc Central</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.485128456286!2d0.8927940121773661!3d42.16453187114141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a64fe96791e87f%3A0x762f0f4a8e0f5be8!2sCarrer%20de%20Tarragona%2C%2019%2C%2025620%20Tremp%2C%20Lleida!5e0!3m2!1ses!2ses!4v1709400000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
