"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Elena Martínez",
    role: "Propietària a la 3a Planta",
    quote: "Viure aquí ha redefinit el meu concepte de luxe. La pau de saber que la teva llar respecta el cicle natural és inigualable.",
  },
  {
    name: "Carlos Ruiz",
    role: "Arquitecte i Resident",
    quote: "L&apos;atenció al detall en els acabats biodegradables és excepcional. Un referent per al futur de l&apos;edificació sostenible.",
  },
  {
    name: "Sofía & Marc",
    role: "Nòmades Digitals",
    quote: "L&apos;espai de coworking i la calidesa de la llum natural fan d&apos;aquest habitatge el lloc ideal per a la vida moderna.",
  },
  {
    name: "Javier López",
    role: "Inversor Conscient",
    quote: "Inversió i responsabilitat ambiental en perfecta sincronia. Un actiu segur compromès amb el benestar futur.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-neutral-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            L&apos;Experiència de la nostra <span className="text-secondary italic">Comunitat</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-3xl h-full backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-8 flex-grow">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <span className="text-xs text-white/40 uppercase tracking-widest">{t.role}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
