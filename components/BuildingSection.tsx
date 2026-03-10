"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Leaf, Award } from "lucide-react";

const features = [
  {
    title: "Materials Nobles i Biodegradables",
    description: "Construcció amb fusta de proximitat i polímers naturals que respecten l&apos;ecosistema.",
    icon: Leaf,
  },
  {
    title: "Eficiència Energètica A+++",
    description: "Sistemes d&apos;autosuficiència amb plaques fotovoltaiques i aerotèrmia d&apos;alt rendiment.",
    icon: Zap,
  },
  {
    title: "Excel·lència LEED Gold",
    description: "Compromís amb els estàndards globals més exigents en sostenibilitat i disseny.",
    icon: Award,
  },
  {
    title: "Seguretat Intel·ligent",
    description: "Sistemes de domòtica avançada i vigilància 24/7 integrats de forma invisible.",
    icon: ShieldCheck,
  },
];

const BuildingSection = () => {
  return (
    <section id="edificio" className="py-24 bg-neutral-arena">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            L&apos;Evolució del Patrimoni <br /> <span className="text-primary italic">cap a la Bioconstrucció</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-neutral-dark/70 text-lg mb-8 leading-relaxed"
            >
              Situat a l&apos;emblemàtic Carrer Tarragona 19, estem redefinint una estructura històrica al centre de Tremp. Convertim un edifici d&apos;època en una joia arquitectònica de 3 plantes, utilitzant matèries primeres naturals que garanteixen una llar saludable i un llegat atemporal.
            </motion.p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                   <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold text-neutral-dark text-sm">{feature.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
                 <img src="/images/materiales-eco.jpg" alt="Materiales" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl">
                 <img src="/images/lifestyle-residentes.jpg" alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl">
                 <img src="/images/zonas-comunes.jpg" alt="Zonas Comunes" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
                 <img src="/images/interior-salon-moderno.jpg" alt="Interior" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
