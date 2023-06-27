import {
  Connect,
  Education,
  Footer,
  Hero,
  Project,
  Work,
} from "@/components/pages";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Rafiq | UI/UX Designer</title>
        <meta
          name="description"
          content="A UI/UX Designer based in Medan, Indonesia. I'm available to explore new
          projects and inspire through my work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/logo.svg" />
      </Head>
      <main>
        <Hero />
        <Work />
        <Project />
        <Education />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
