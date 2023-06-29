import Image from "next/image";
import { Button } from "../common/button";
import Link from "next/link";

const GROUP = ["codedesign", "dza", "strum-vehicles", "mything"];
const SOCIAL_CONNECT = [
  {
    name: "figma",
    link: "/",
  },
  {
    name: "dribbble",
    link: "https://dribbble.com/Due_UI",
  },
  {
    name: "behance",
    link: "https://www.behance.net/rafiqalhafizh",
  },
];

export default function Connect() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-20 pt-10 pb-20">
        <div className="grid grid-cols-4 gap-4">
          {GROUP.map((group, index) => (
            <div
              key={group}
              className="w-full h-full relative aspect-square"
              data-aos="flip-left"
              data-aos-delay={index * 200}
            >
              <Image
                src={`/svg/group-${group}.svg`}
                fill
                alt=""
                className="object-cover rounded hover:scale-[1.02] active:scale-95 transition cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-hellix-bold text-6xl max-md:text-5xl max-sm:text-4xl font-bold">
            Let&apos;s create an amazing project together!
          </p>
          <div className="flex items-center gap-8">
            {SOCIAL_CONNECT.map((item, index) => (
              <Link key={item.name} href={item.link} target="_blank">
                <div className="relative w-10 max-md:w-9 h-10 max-md:h-9">
                  <Image
                    src={`/svg/icon-social-${item.name}.svg`}
                    width={40}
                    height={40}
                    alt=""
                    className="hover:scale-105 active:scale-95 transition"
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Button className="max-w-[180px]">Let&apos;s Get E-mail</Button>
        </div>
      </div>
    </div>
  );
}
