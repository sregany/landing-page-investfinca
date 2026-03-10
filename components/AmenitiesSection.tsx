"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const amenities = [
  {
    title: "Eco Rooftop",
    description: "Jardí urbà amb vistes 360º de la ciutat i zones de relax.",
    image: "/images/zonas-comunes.jpg",
  },
  {
    title: "Green Gym",
    description: "Gimnàs equipat amb màquines que generen energia neta.",
    image: "/images/lifestyle-residentes.jpg",
  },
  {
    title: "Smart Coworking",
    description: "Espais de treball col·laboratiu banyats en llum natural.",
    image: "/images/interior-salon-moderno.jpg",
  },
  {
    title: "Pàrquing VE",
    description: "Places de pàrquing amb càrrega ultra-ràpida per a vehicles elèctrics.",
    image: "/images/materiales-eco.jpg",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 bg-neutral-arena overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
          >
            Serveis <span className="text-primary italic">Exclusius</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-neutral-dark/70 text-lg">
            Elevant el concepte de zones comunes cap a la funcionalitat i la sostenibilitat.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="-ml-4">
            {amenities.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-none rounded-3xl overflow-hidden shadow-md h-full bg-white">
                    <div className="relative aspect-[3/4]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-xs text-white/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="relative static translate-y-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="relative static translate-y-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AmenitiesSection;
