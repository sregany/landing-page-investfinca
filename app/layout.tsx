import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "INVEST-FINCA | Bioconstrucción de Lujo en Tremp",
  description: "Remodelación de lujo en el centro de Tremp (Carrer Tarragona 19). Edificio de 3 plantas con materiales biodegradables por INVEST-FINCA.",
  openGraph: {
    title: "INVEST-FINCA | Bioconstrucción en Tremp",
    description: "Transformamos el centro de Tremp con arquitectura de bioconstrucción y lujo.",
    url: "https://invest-finca.com",
    siteName: "INVEST-FINCA",
    images: [
      {
        url: "/images/hero-edificio-exterior.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        {/* Footer could go here */}
      </body>
    </html>
  );
}
