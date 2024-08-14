import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Cta } from "@/components/Cta";

export default function Home() {
  
  return (
    <>
      <div className="container h-full">
        <Hero />
        <About />
        <Services/>
        <Work />
        <Cta />
      </div>
    </>
  );
}
