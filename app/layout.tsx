import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono, Handlee } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchModal from "@/components/GetInTouchModal";

const ubuntu = Ubuntu({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const handlee = Handlee({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muneeb Ur Rehman — Product Engineer",
  description:
    "Muhammad Muneeb Ur Rehman — Product Engineer based in Pakistan. Building production web applications with Laravel, Next.js, and cloud-native infrastructure.",
  keywords: [
    "Muneeb Ur Rehman",
    "Product Engineer",
    "Laravel",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Muneeb Ur Rehman" }],
  openGraph: {
    title: "Muneeb Ur Rehman — Product Engineer",
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
        className={`${ubuntu.variable} ${ubuntuMono.variable} ${handlee.variable} font-sans bg-cream-100 text-ink-900 antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 -z-10 grain-overlay opacity-100 pointer-events-none" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GetInTouchModal />
      </body>
    </html>
  );
}
