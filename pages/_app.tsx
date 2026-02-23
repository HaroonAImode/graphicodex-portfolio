import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Space_Grotesk } from "next/font/google";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen bg-slate-900 text-white antialiased`}>
      {/* Mobile Navigation - Hidden on desktop */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:block">
        <TopBar />
        <Header />
      </div>
      
      <main className="pt-14 pb-20 lg:pt-32 lg:pb-0 min-h-screen">
        <Component {...pageProps} />
      </main>

      {/* Desktop Footer - Hidden on mobile */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Bottom Navigation - Hidden on desktop */}
      <BottomNav />
    </div>
  );
}