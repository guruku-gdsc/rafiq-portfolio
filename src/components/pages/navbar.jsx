import Image from "next/image";
import { Button } from "../common/button";
import Link from "next/link";
import { useState } from "react";

const NAVBAR = [
  { name: "WORK" },
  { name: "PROJECT" },
  { name: "EDUCATION" },
  { name: "CONNECT" },
];

export default function Navbar() {
  const [showNavbarSlide, setShowNavbarSlide] = useState(false);

  return (
    <div className="w-full max-w-6xl relative flex justify-between items-center py-8 max-md:pb-0 px-10 max-lg:px-6 max-md:px-4 mx-auto">
      <Link href={"/"}>
        <div className="w-10 max-md:w-9 h-10 max-md:h-9 relative">
          <Image
            src={"/svg/logo.svg"}
            fill
            alt=""
            className="hover:scale-105 active:scale-95 transition"
          />
        </div>
      </Link>
      <div className="flex max-md:hidden items-center gap-16">
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
          onClick={() => setShowNavbarSlide(!showNavbarSlide)}
        />
      </div>
      <div
        className={`w-screen h-screen fixed top-0 left-0 transition-transform z-10 ${
          showNavbarSlide ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setShowNavbarSlide(false)}
      >
        <div
          className="wrapper fixed top-0 left-1/2 -translate-x-1/2 flex flex-col items-center bg-black rounded-b-2xl !p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {NAVBAR.map((item, index) => (
            <p
              key={item.name}
              className={`text-sm font-hellix-semibold hover:text-blue-400 active:scale-95 transition cursor-pointer ${
                index !== 0 ? "border-t" : "border-none"
              } border-white py-5`}
              onClick={() => setShowNavbarSlide(false)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
