import Image from "next/image";
import { Button } from "../common/button";
import Link from "next/link";

const NAVBAR = [
  { name: "WORK" },
  { name: "PROJECT" },
  { name: "EDUCATION" },
  { name: "CONNECT" },
];

export default function Navbar() {
  return (
    <div className="w-full max-w-6xl flex justify-between items-center py-8 px-4 mx-auto">
      <Link href={"/"}>
        <Image
          src={"/svg/logo.svg"}
          width={40}
          height={40}
          alt=""
          className="hover:scale-105 active:scale-95 transition"
        />
      </Link>
      <div className="flex items-center gap-16">
        {NAVBAR.map((item) => (
          <p
            key={item.name}
            className="text-sm font-hellix-semibold hover:text-blue-400 hover:underline underline-offset-4 active:scale-95 transition cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Button>Get Connect</Button>
        <Image
          src={"/svg/icon-navbar-menu.svg"}
          width={24}
          height={24}
          alt=""
          className="hover:scale-105 active:scale-95 transition cursor-pointer"
        />
      </div>
    </div>
  );
}
