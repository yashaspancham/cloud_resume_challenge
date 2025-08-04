"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "@/projectsData/projectDetails";
import { useRouter } from "next/navigation";

const PersonalProjectComp = () => {
  const param = useSearchParams();
  type ProjectKey = keyof typeof projectsData;
  const router = useRouter();
  let projectName: string | null = param.get("project-name");
  if (projectName === null) {
    projectName = "";
  }
  const data = projectsData[projectName as ProjectKey];
  return (
    <>
      <div className="text-2xl sm:text-4xl lg:text-8xl">{data.title}</div>
      <p className="text-xs sm:text-sm xl:text-md">
        {data.description}(
        <a
          className="text-blue-500 underline"
          href={data.Website}
          target="_blank"
          rel="noopener noreferrer"
        >
          visit website
        </a>
        )
      </p>
      <div className="w-full flex flex-col gap-10 my-10">
        <div className="flex flex-col gap-5">
          <p className="text-xl sm:text-2xl lg:text-4xl">Why??</p>
          <p className="text-sm md:text-md xl:text-lg">{data.why}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl sm:text-2xl lg:text-4xl">Challenges</p>
          <p className="text-sm md:text-md xl:text-lg">
            {data.challengesAndHowItWasSolved}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl sm:text-2xl lg:text-4xl">Achitecture</p>
          <ul className="list-disc pl-5 text-lg">
            {data.Achitecture?.map((item, index) => (
              <li className="text-sm md:text-md xl:text-lg" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={data.architectureimage}
            alt={`Architecture of ${projectName}`}
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl sm:text-2xl lg:text-4xl">Tech</p>
          <ul className="list-disc pl-5 text-lg">
            {data.Tech?.map((item, index) => (
              <li className="text-sm md:text-md xl:text-lg" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl sm:text-2xl lg:text-4xl">What I learned?</p>
          <ul className="list-disc pl-5 text-lg">
            {data.whatILearned?.map((item, index) => (
              <li className="text-sm md:text-md xl:text-lg" key={index}>
                {item}
              </li>
            ))}
            <li className="text-sm md:text-md xl:text-lg">
              Github-
              <a
                className="text-blue-500 underline"
                href={data.githubFrontEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 underline"
                href={data.githubbackEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end
              </a>
            </li>
          </ul>
        </div>
        <button
          className="text-xl sm:text-2xl lg:text-4xl hover:cursor-pointer bg-[#191919] hover:bg-[#262626] m-5 w-fit p-2 xl:p-4 rounded-xl"
        ><a href="https://www.yashas-dev.com">Return</a>
        </button>
      </div>
    </>
  );
};

export default PersonalProjectComp;
