"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "@/projectsData/projectDetails";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const PersonalProjectComp = () => {
  const param = useSearchParams();
  const router=useRouter();
  let projectName: string | null = param.get("project-name");
  if (projectName === null) {
    projectName = "";
  }

  const data = (projectsData as any)[projectName];

  return (
    <>
      <button 
        onClick={() => router.replace("/")}
      className="text-xl lg:text-2xl hover:cursor-pointer bg-[#191919] hover:bg-[#262626] m-2 w-fit p-3 rounded-xl absolute top-2.5 lg:top-5 left-2.5 lg:left-5">
        <IoArrowBack />
      </button>
      <div className="text-2xl sm:text-4xl lg:text-8xl max-xl:mt-10 max-lg:mt-12 max-md:mt-18">{data?.title}</div>

      {data?.description && (
        <p className="text-xs sm:text-sm xl:text-md">
          {data.description}{" "}
          {data?.Website && (
            <a
              className="text-blue-500 underline"
              href={data.Website}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit website
            </a>
          )}
        </p>
      )}

      <div className="w-full flex flex-col gap-10 my-10">
        {data?.why && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">Why??</p>
            <p className="text-sm md:text-md xl:text-lg">{data.why}</p>
          </div>
        )}

        {data?.challengesAndHowItWasSolved && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">Challenges</p>
            <p className="text-sm md:text-md xl:text-lg">
              {data.challengesAndHowItWasSolved}
            </p>
          </div>
        )}

        {data?.Achitecture && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">Architecture</p>
            <ul className="list-disc pl-5 text-lg">
              {data.Achitecture.map((item: string, index: number) => (
                <li className="text-sm md:text-md xl:text-lg" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {data?.architectureimage && (
          <div className="flex justify-center items-center">
            <img
              src={data.architectureimage}
              alt={`Architecture of ${projectName}`}
            />
          </div>
        )}

        {data?.DATA && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">DATA</p>
            <ul className="list-disc pl-5 text-lg">
              {data.DATA.map((item: any, index: number) => (
                <div key={index}>
                  {item?.text && (
                    <li className="text-sm md:text-md xl:text-lg">
                      {item.text}
                      {item?.link && (
                        <a
                          href={item?.link}
                          target="_blank"
                          className="text-blue-500 underline"
                        >
                          here
                        </a>
                      )}
                      {item?.img && (
                        <img
                          src={item?.img[0]}
                          alt={item?.img[1]}
                          className="lg:p-15 md:p-10 sm:p-5 p-1"
                        />
                      )}
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}

        {data?.Tech && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">Tech</p>
            <ul className="list-disc pl-5 text-lg">
              {data.Tech.map((item: string, index: number) => (
                <li className="text-sm md:text-md xl:text-lg" key={index}>
                  {item}
                </li>
              ))}
              {(data.githubbackEnd || data.githubFrontEnd) && (
                <li className="text-sm md:text-md xl:text-lg">
                  Github –
                  <a
                    className="text-blue-500 underline"
                    href={data?.githubFrontEnd}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-end
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-blue-500 underline"
                    href={data?.githubbackEnd}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-end
                  </a>
                </li>
              )}
              {data?.github && (
                <li>
                  <a
                    className="text-blue-500 underline"
                    href={data?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github{" "}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {data.whatILearned && (
          <div className="flex flex-col gap-5">
            <p className="text-xl sm:text-2xl lg:text-4xl">What I learned?</p>
            <ul className="list-disc pl-5 text-lg">
              {data?.whatILearned?.map((item: string, index: number) => (
                <li className="text-sm md:text-md xl:text-lg" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PersonalProjectComp;
