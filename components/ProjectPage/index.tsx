"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalProjectCard from "@/components/PersonalProjectCard";
import { projects } from "../../projectsData/personalProjects";
import { FaArrowLeft } from "react-icons/fa";
import { PersonalProjectCardPropsT } from "../../utils/types";

const PersonalProjectsPage = () => {
  const catagaries = [
    "All",
    "Cloud",
    "DevOps",
    "fullstack",
    "backend",
    "frontend",
  ];
  const router = useRouter();
  const params = useSearchParams();
  const [currentCatagory, setCurrentCatagory] = React.useState<string>("All");
  const [loaded, setLoaded] = React.useState<boolean>(false);
  useEffect(() => {
    const parmCatagory = params.get("catagory");
    if (parmCatagory) {
      setCurrentCatagory(parmCatagory);
    }
    setLoaded(true);
  }, []);

  const handleChangeCatagory = (catagory: string) => {
    setCurrentCatagory(catagory);

    const newParams = new URLSearchParams(params);
    newParams.set("catagory", catagory);

    router.replace(`?${newParams.toString()}`);
  };
  return (
    loaded && (
      <div className="lg:m-15 md:m-10 text-white">
        <button
          className="p-2.5 bg-[#0d0d0d] rounded mb-5 hover:cursor-pointer hover:bg-[#1a1a1a]"
          onClick={() => router.push("/")}
        >
          <FaArrowLeft color="white" />
        </button>
        <p className="text-4xl">Personal Projects</p>
        <div className="flex flex-wrap gap-2 py-5 max-sm:justify-center mb-5">
          {catagaries.map((catagory, index) => (
            <button
              onClick={() => handleChangeCatagory(catagory)}
              key={index}
              className={`text-white p-3 rounded text-xl hover:cursor-pointer ${
                currentCatagory === catagory ? "bg-[#b5c13c]" : "bg-[#0d0d0d]"
              }`}
            >
              {catagory}
            </button>
          ))}
        </div>
        <div className="flex gap-7 flex-col">
          <div className="flex flex-wrap  max-xl:justify-center gap-5">
            {projects.map(
              (item: PersonalProjectCardPropsT) =>
                item.catagory?.includes(currentCatagory) && (
                  <PersonalProjectCard {...item} key={item.id} />
                )
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default PersonalProjectsPage;
