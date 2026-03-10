"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Elena Martínez",
    role: "Propia en el 3ºB",
    quote: "Vivir aquí ha cambiado mi percepción del lujo. La paz que se siente al saber que tu hogar respeta el entorno no tiene precio.",
  },
  {
    name: "Carlos Ruiz",
    role: "Arquitecto & Residente",
    quote: "La atención al detalle en los acabados biodegradables es impecable. Un estándar que la industria debería seguir.",
  },
  {
    name: "Sofía & Marc",
    role: "Digital Nomads",
    quote: "El coworking y la luz natural en todo el piso lo convierten en el lugar perfecto para trabajar y desconectar.",
  },
  {
    name: "Javier López",
    role: "Inversor Sostenible",
    quote: "Una inversión segura en el futuro. Rentabilidad unida a una responsabilidad ambiental real.",
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
            Voces de nuestra <span className="text-secondary italic">Comunidad</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
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
