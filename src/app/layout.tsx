import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import { AudioProvider } from "@/components/AudioProvider";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingEmbers } from "@/components/FloatingEmbers";
import { FallingTulips } from "@/components/FallingTulips";
import { FloatingHearts } from "@/components/FloatingHearts";
import { FloatingButterfly } from "@/components/FloatingButterfly";
import { WelcomeOverlay } from "@/components/WelcomeOverlay";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Angelyn",
  description: "A little gift, wrapped with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body className="overflow-x-hidden">
        <WelcomeOverlay />
        <AudioProvider>
          <FloatingEmbers count={20} />
          <FallingTulips count={10} />
          <FloatingHearts count={10} />
          <FloatingButterfly />
          <MusicToggle />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
