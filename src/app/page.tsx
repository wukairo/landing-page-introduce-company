import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FeaturedSolution } from "@/components/featured-solution";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { WhyLaztar } from "@/components/why-laztar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedSolution />
        <WhyLaztar />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
