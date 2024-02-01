import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="w-[680px] mx-auto mt-14">
      <Hero />
      <About />
      <Education />
      <Proyects />
    </main>
  );
}
