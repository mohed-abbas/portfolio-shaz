import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono, Handlee } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchModal from "@/components/GetInTouchModal";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const handlee = Handlee({
  variable: "--font-handlee",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// Update to the real production domain once deployed.
const siteUrl = "https://shahzaib-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Shahzaib — Full-Stack Developer",
  description:
    "Muhammad Shahzaib — Full-Stack Developer based in Paris. Building production SaaS and AI-integrated web apps with React, Next.js, Node, and Laravel.",
  keywords: [
    "Muhammad Shahzaib",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "SaaS",
    "AI Integration",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Shahzaib" }],
  openGraph: {
    title: "Muhammad Shahzaib — Full-Stack Developer",
    description:
      "Building production SaaS and AI-integrated web apps from database to deployed UI.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahzaib — Full-Stack Developer",
    description:
      "Building production SaaS and AI-integrated web apps from database to deployed UI.",
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
