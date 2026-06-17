import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
