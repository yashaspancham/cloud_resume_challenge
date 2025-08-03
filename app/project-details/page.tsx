import PersonalProjectComp from "@/components/PersonalProjectComp";
import { Suspense } from "react";

const ProjectDetails = () => {
  return (
    <div className="text-white xl:p-20 lg:p-15 md:p-10 sm:p-5 p-2">
      <Suspense fallback={<div className="text-white">Loading project...</div>}>
        <PersonalProjectComp />
      </Suspense>
    </div>
  );
};

export default ProjectDetails;
