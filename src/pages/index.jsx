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
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <>
      <Head>
        <title>Rafiq Al Hafizh Adha | UI/UX Designer</title>
        <meta
          name="description"
          content="A UI/UX Designer based in Medan, Indonesia. I'm available to explore new
          projects and inspire through my work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/logo.svg" />
      </Head>
      <main>
        <Hero
          scrollToWork={() =>
            workRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToProject={() =>
            projectRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToEducation={() =>
            educationRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToConnect={() =>
            connectRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
        <div ref={workRef}>
          <Work />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={connectRef}>
          <Connect />
        </div>
        <Footer
          scrollToWork={() =>
            workRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToProject={() =>
            projectRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToEducation={() =>
            educationRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToConnect={() =>
            connectRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </main>
    </>
  );
}
