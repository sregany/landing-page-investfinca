"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

const formSchema = z.z.object({
  nombre: z.string().min(2, { message: "El nom ha de tenir almenys 2 caràcters." }),
  email: z.string().email({ message: "Email no vàlid." }),
  tel: z.string().min(9, { message: "Introdueix un telèfon vàlid." }),
  presupuesto: z.string().optional(),
  mensaje: z.string().min(10, { message: "El missatge ha de ser més detallat." }),
});

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      tel: "",
      presupuesto: "",
      mensaje: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sol·licitud enviada!",
        description: "Un assessor es posarà en contacte amb tu en menys de 24h.",
        variant: "default",
      });
      form.reset();
    }, 2000);
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Uneix-te a la <br /><span className="text-primary italic">Bioconstrucció</span>
              </h2>
              <p className="text-neutral-dark/70 text-lg mb-8">
                A INVEST-FINCA estem projectant el futur de la llar. Deixa&apos;ns les teves dades i un especialista en habitatges biodegradables es posarà en contacte amb tu per mostrar-te les nostres promocions actives.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <span className="text-neutral-dark/80">+34 900 123 456</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span className="text-neutral-dark/80">invertremp@gmail.com</span>
                 </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="El teu nom..." {...field} className="rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email corporatiu</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" {...field} className="rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="tel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telèfon</FormLabel>
                          <FormControl>
                            <Input placeholder="+34..." {...field} className="rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="presupuesto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pressupost estimat</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 300k - 500k" {...field} className="rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Explica&apos;ns quina tipologia t&apos;interessa..." 
                            className="resize-none min-h-[120px] rounded-xl" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviant..." : "Enviar Sol·licitud"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
