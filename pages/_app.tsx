import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:block">
        <TopBar />
        <Header />
      </div>
      
      <main className="pt-0 pb-20 lg:pt-32 lg:pb-0 min-h-screen">
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