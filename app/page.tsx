import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Hero />
      <Projects />
    </main>
  );
}
