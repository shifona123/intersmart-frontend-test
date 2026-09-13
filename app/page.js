import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#02091c]"
    >

      {/* NAVBAR + HERO */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ai-face.jpeg')",
        }}
      >
        <div className="min-h-screen bg-black/30">

          <Navbar />

          <Hero />

        </div>
      </div>

      {/* SERVICES */}
      <Services />
      <Process />
      <Contact />
      <Projects />
      <Footer />

    </main>
  );
}