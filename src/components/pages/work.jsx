const WORK_HISTORY = [
  {
    company: "TOPCODER",
    position: {
      name: "Freelancer UI Designer",
      date: "2023—Present",
    },
    description:
      "Working as a part-time freelancer, in accordance with the gig you get, from designing to becoming a prototype ready for testing. There aren't enough jobs here, but I can learn a lot about UI designers to UX designers, starting from CX, QA, UT, and others.",
  },
  {
    company: "OUZEN GROUP",
    position: [
      {
        name: "Web Developer",
        date: "2020—2023",
      },
      {
        name: "UI Designer",
        date: "2019—2023",
      },
    ],
    description:
      "Starting work to become a UI designer, and concurrently becoming a web developer. Become a designer of a sales landing page with a target of 4 visual designs a day to submit. I'm switching to becoming a web developer after concurrently, in a month, I can make sales page landing pages 80+ using WordPress CMS. Due to the fast-paced work environment for daily sales targets.",
  },
  {
    company: "PEDDIUM STUDIO",
    position: {
      name: "UI Designer",
      date: "2021—2022",
    },
    description:
      "Contributed to shot design on Dribbble team and Behance for Peddium Studio team agency, creating interfaces, color selection, slicing, design systems, and so on. As contributors, we have a monthly target to share as much as 8 designs every day.",
  },
];

export default function Work() {
  return (
    <div className="wrapper flex flex-col items-center gap-20 !py-10">
      <div className="flex flex-col items-center gap-4" data-aos="zoom-in">
        <h1 className="font-hellix-bold text-8xl max-md:text-7xl max-sm:text-5xl font-bold">
          INDONESIA
        </h1>
        <p className="text-xl">Medan City, North Sumatra</p>
      </div>
      <div className="flex flex-col gap-10">
        {WORK_HISTORY.map((item, index) => (
          <div key={index} className="flex flex-col gap-5" data-aos="fade-up">
            <div className="flex flex-col gap-3">
              <h2 className="font-hellix-bold text-4xl max-md:text-3xl">
                {item.company}
              </h2>
              <div className="flex flex-col gap-1">
                {Array.isArray(item.position) ? (
                  item.position.map((position, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center font-hellix-medium text-lg"
                    >
                      <p>{position.name}</p>
                      <p>{position.date}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-between items-center font-hellix-medium text-lg">
                    <p>{item.position.name}</p>
                    <p>{item.position.date}</p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-grey1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
