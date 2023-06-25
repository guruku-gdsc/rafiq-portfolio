import { Hero, Navbar } from "@/components/pages";
import Head from "next/head";

export default function Home() {
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
      </main>
    </>
  );
}
