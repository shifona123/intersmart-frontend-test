import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02091c]">
      <div className="hero-background min-h-screen bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Process />
      <Contact />
      <Projects />
      <Footer />
    </main>
  );
}