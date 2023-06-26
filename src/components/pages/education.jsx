import Image from "next/image";

export default function Education() {
  return (
    <div className="wrapper">
      <div className="my-20">
        <div className="flex flex-col gap-5" data-aos="fade-up">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 relative flex justify-center items-center bg-white rounded">
                <Image
                  src={"/svg/logo-pancabudi.svg"}
                  width={36}
                  height={36}
                  alt=""
                />
              </div>
              <h2 className="font-hellix-bold text-4xl">EDUCATION</h2>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center font-hellix-medium text-lg">
                <p>Bachelor of Comp. System</p>
                <p>2019—2023</p>
              </div>
            </div>
          </div>
          <p className="text-grey1">
            Univ. Pembangunan Panca Budi
            <br /> Bachelor Degree of Computer System, Cum Laude
            <br /> Honour - GPA 3.86/4
          </p>
        </div>
      </div>
    </div>
  );
}
