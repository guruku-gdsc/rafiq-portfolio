import Image from "next/image";
import { Button } from "../common/button";

const GROUP = ["codedesign", "dza", "strum-vehicles", "mything"];

export default function Connect() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-20 my-20">
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
          <p className="font-hellix-bold text-6xl font-bold">
            Let&apos;s create an amazing project together!
          </p>
          <div className="flex items-center gap-8">
            <Image
              src={"/svg/icon-social-figma.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/svg/icon-social-dribble.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/svg/icon-social-behance.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <Button className="max-w-[180px]">Let&apos;s Get E-mail</Button>
        </div>
      </div>
    </div>
  );
}
