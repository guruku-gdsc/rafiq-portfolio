import Image from "next/image";
import { Button } from "../common/button";

export default function Navbar() {
  return (
    <div className="max-w-5xl flex justify-between items-center py-8 mx-auto">
      <Image src={"/svg/logo.svg"} width={40} height={40} alt="" />
      <div className="flex items-center gap-16 text-sm font-hellix-semibold uppercase">
        <p>Work</p>
        <p>Education</p>
        <p>Project</p>
        <p>Connect</p>
      </div>
      <Button>Get Connect</Button>
    </div>
  );
}
