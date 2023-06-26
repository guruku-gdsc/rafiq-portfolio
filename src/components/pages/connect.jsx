import Image from "next/image";

const GROUP = ["codedesign", "dza", "strum-vehicles", "mything"];

export default function Connect() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-20 my-20">
        <div className="grid grid-cols-4 gap-4">
          {GROUP.map((group) => (
            <div
              key={group}
              className="w-full h-full relative aspect-square"
              data-aos="flip-left"
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
            Let's create an amazing project together!
          </p>
        </div>
      </div>
    </div>
  );
}
