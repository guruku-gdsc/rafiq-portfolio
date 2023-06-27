import Link from "next/link";

const FOOTER = [
  { name: "WORK" },
  { name: "PROJECT" },
  { name: "EDUCATION" },
  { name: "CONNECT" },
];

export default function Footer() {
  return (
    <div className="w-full max-w-6xl flex justify-between items-center pb-10 px-4 mx-auto">
      <div className="flex items-center gap-16">
        {FOOTER.map((item) => (
          <p
            key={item.name}
            className="text-sm font-hellix-semibold hover:text-blue-400 hover:underline underline-offset-4 active:scale-95 transition cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
      <p className="text-right">
        UI Inspired by SonyLab and DStudio | Font Hellix |<br /> Developed by{" "}
        <Link href={"https://github.com/salluthdev"} target="_blank">
          <span className="hover:underline text-blue-400 cursor-pointer">
            @salluthdev
          </span>
        </Link>{" "}
        | Designed by{" "}
        <Link href={"/"} target="_blank">
          <span className="hover:underline text-blue-400 cursor-pointer">
            @rafiq
          </span>
        </Link>
      </p>
    </div>
  );
}