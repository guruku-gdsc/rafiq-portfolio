import { useEffect, useState } from "react";
import { Navbar } from ".";

const CONNECT = [
  {
    name: "LINKEDIN",
  },
  {
    name: "BEHANCE",
  },
  {
    name: "DRIBBLE",
  },
  {
    name: "GITHUB",
  },
];

export default function Hero() {
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
      <Navbar />
      <div className="wrapper flex flex-col gap-10">
        <div className="flex flex-col gap-4 py-24">
          <h1 className="font-hellix-bold text-8xl font-bold">
            RAFIQ AL HAFIZH ADHA
          </h1>
          <p className="h-14 text-xl">
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
      </div>
      <div className="w-full max-w-md flex justify-between items-center py-16 mx-auto">
        {CONNECT.map((item) => (
          <p
            key={item.name}
            className="text-sm font-hellix-semibold hover:text-blue-400 hover:underline underline-offset-4 active:scale-95 transition cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}
