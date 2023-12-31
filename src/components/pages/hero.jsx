import { useEffect, useState } from "react";
import { Navbar } from ".";
import Link from "next/link";

const CONNECT = [
  {
    name: "LINKEDIN",
    path: "https://www.linkedin.com/in/rafiqalhafizh/",
  },
  {
    name: "BEHANCE",
    path: "https://www.behance.net/rafiqalhafizh",
  },
  {
    name: "DRIBBBLE",
    path: "https://dribbble.com/Due_UI",
  },
  {
    name: "GITHUB",
    path: "https://github.com/rafiqola",
  },
];

export default function Hero({
  scrollToWork,
  scrollToProject,
  scrollToEducation,
  scrollToConnect,
}) {
  const [text, setText] = useState("");
  const introText =
    "based in Medan, Indonesia. I'm available to explore new projects and inspire through my work.";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + introText[currentIndex]);
      currentIndex++;

      if (currentIndex === introText.length) {
        clearInterval(typingInterval);
      }
    }, 24);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar
        scrollToWork={scrollToWork}
        scrollToProject={scrollToProject}
        scrollToEducation={scrollToEducation}
        scrollToConnect={scrollToConnect}
      />
      <div className="wrapper flex flex-col gap-4">
        <h1 className="font-hellix-bold text-8xl max-md:text-7xl font-bold">
          RAFIQ AL HAFIZH ADHA
        </h1>
        <p className="h-14 max-md:h-auto text-xl max-md:text-lg">
          {text && (
            <>
              I&apos;m a{" "}
              <span className="text-blue-400 underline decoration-blue-400 decoration-2">
                UI/UX Designer
              </span>{" "}
              {introText.slice(0, text.length)}{" "}
              <span className="animate-blink">|</span>
            </>
          )}
        </p>
      </div>
      <div className="w-full max-w-md flex flex-wrap justify-between items-center gap-6 py-16 max-md:pt-16 max-md:pb-8 px-4 mx-auto">
        {CONNECT.map((item) => (
          <Link key={item.name} href={item.path} target="_blank">
            <p className="text-sm font-hellix-semibold hover:text-blue-400 hover:underline underline-offset-4 active:scale-95 transition cursor-pointer">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
