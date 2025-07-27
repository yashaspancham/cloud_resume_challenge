import Info from "@/components/Info";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import PersonalProjects from "@/components/PersonalProjects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="max-md:p-10 max-md:flex max-md:flex-col max-md:gap-20 bg-black text-white w-full h-full scroll-smooth">
      <section className="mt-20 md:mx-20 md:p-20 md:broder-[white] md:border-t md:border-l md:border-r md:rounded-t-xl">
        <Info />
      </section>
      <section
        id="tech-stack"
        className="md:mx-20 md:p-20 md:broder-[white] md:border-l md:border-r md:flex md:justify-end"
      >
        <TechStack />
      </section>
      <section
        id="work-experience"
        className="md:mx-20 md:p-20 md:broder-[white] md:border-l md:border-r md:flex"
      >
        <WorkExperience />
      </section>
      <section
        id="certifications-and-achievements"
        className="md:mx-20 md:p-20 md:broder-[white] md:border-l md:border-r md:flex md:justify-end"
      >
        <CertificationsAndAchievements />
      </section>
      <section
        id="personal-projects"
        className="md:mx-20 md:p-20 md:broder-[white] md:border-l md:border-r"
      >
        <PersonalProjects />
      </section>
      <section
        id="contact-me"
        className="md:mx-20 md:p-20 broder-[white] md:border-l md:border-r md:border-b md:flex md:justify-end md:rounded-b-xl"
      >
        <ContactMe />
      </section>
      <section className="h-[500px] flex justify-center items-center text-md" >
        Thank you for you time and consideration!
      </section>
    </main>
  );
}
