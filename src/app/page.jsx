import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { About } from "@/components/About";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
      <link rel="icon" href="/logo.svg" type="image/svg+xml"/>
      </Head>
      <div className="container h-screen">

        <Hero />
        <About />

      </div>

    </>
  );
}
