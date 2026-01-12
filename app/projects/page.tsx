import { Suspense } from "react";
import PersonalProjectsPage from "@/components/ProjectPage";
const ProjectsPage = () => {
  return (
    <Suspense fallback={<div className="text-white text-4xl">Loading...</div>}>
      <PersonalProjectsPage />;
    </Suspense>
  );
};

export default ProjectsPage;
