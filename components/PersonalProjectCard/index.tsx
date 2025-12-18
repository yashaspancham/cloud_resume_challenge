import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {PersonalProjectCardPropsT} from "@/utils/types";


const PersonalProjectCard = (item : PersonalProjectCardPropsT) => {
  const router = useRouter();
  return (
    <div className="bg-[#0d0d0d] w-[300px] h-auto flex flex-col gap-3 rounded-xl hover:shadow-[-1px_1px_5px_0px_rgba(255,255,255,0.75)] border-[0.5px] border-[#1a1a1a]">
      <img
        src={
          item.imageSrc && item.imageSrc !== ""
            ? item.imageSrc
            : "/assets/thumbnail/defaultThumbnail.png"
        }
        className="object-cover w-[300px] h-[170px] rounded-tr-xl rounded-tl-xl"
      />
      <div className="flex flex-col gap-3 px-5 pt-2 pb-4 ">
        <p className="text-2xl line-clamp-1">{item.title}</p>
        <p className="text-sm line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap">
          {item.techStack.map((tech, techIndex) => (
            <span
              className="text-xs p-1 border-[0.5px] border-white rounded-md mr-2 mb-2"
              key={techIndex}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-[270px] flex gap-2 justify-center">
          {item.github && (
            <a href={item.github} target="_blank">
              <button
                className={`bg-neutral-900 py-2 px-5 rounded-md flex gap-2 items-center hover:cursor-pointer`}
              >
                <img
                  src={"/assets/logo/githubWhite.png"}
                  alt="github white logo"
                  className="h-5"
                />
                <p>Code</p>
              </button>
            </a>
          )}
          {(item.docUrl || item.name!=="")&& <button
            onClick={() => {
              if (item.name !== "") {
                router.push(`/project-details?project-name=${item.name}`);
              } else {
                window.open(item.docUrl, "_blank");
              }
            }}
            className={`${
              item.github ? "bg-[#b5c13c]" : "bg-neutral-900"
            } py-2 px-5 rounded-md flex gap-2 items-center hover:cursor-pointer`}
          >
            <FaExternalLinkAlt />
            <p>Docs</p>
          </button>}
          {item.try && (
            <button
              onClick={() => {
                if (item.name !== "") {
                  router.push(`/project-details?project-name=${item.name}`);
                } else {
                  window.open(item.try, "_blank");
                }
              }}
              className={`bg-[#b5c13c] py-2 px-5 rounded-md flex gap-2 items-center hover:cursor-pointer`}
            >
              <FaExternalLinkAlt />
              <p>Try</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectCard;
