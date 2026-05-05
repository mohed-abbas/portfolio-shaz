import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muneeb Ur Rehman — Full-Stack & DevOps Engineer",
  description:
    "Muhammad Muneeb Ur Rehman — Full-Stack & DevOps Engineer based in Pakistan. Building production web applications with Laravel, Next.js, and cloud-native infrastructure.",
  keywords: [
    "Muneeb Ur Rehman",
    "Full-Stack Engineer",
    "DevOps",
    "Laravel",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Muneeb Ur Rehman" }],
  openGraph: {
    title: "Muneeb Ur Rehman — Full-Stack & DevOps Engineer",
    description:
      "Building production web applications and cloud-native systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans bg-cream-100 text-ink-900 antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 -z-10 grain-overlay opacity-100 pointer-events-none" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
