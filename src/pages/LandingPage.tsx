import { Background } from "../components/Background";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";

export function LandingPage() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}