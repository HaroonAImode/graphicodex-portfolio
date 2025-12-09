import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <TopBar />
      <Header />
      <main className="pt-24"> {/* Add padding-top for the fixed headers */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}