import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import PersonalProjects from "@/components/PersonalProjects";
import ContactMe from "@/components/ContactMe";


export default function Home() {
  return (
    <main className="bg-black text-white w-full h-full scroll-smooth">
      <Navbar />
      <section className="mt-20 mx-32 p-20 broder-[white] border-t border-l border-r rounded-t-xl">
        <Info />
      </section>
      <section id="tech-stack" className="mx-32 p-20 broder-[white] border-l border-r flex justify-end">
        <TechStack />
      </section>
      <section id="work-experience" className="mx-32 p-20 broder-[white] border-l border-r flex">
        <WorkExperience />
      </section>
      <section id="certifications-and-achievements" className="mx-32 p-20 broder-[white] border-l border-r flex justify-end">
        <CertificationsAndAchievements />
      </section>
      <section id="personal-projects" className="mx-32 p-20 broder-[white] border-l border-r">
        <PersonalProjects />
      </section>
      <section  id="contact-me" className="mx-32 p-20 broder-[white] border-l border-r border-b flex justify-end rounded-b-xl">
        <ContactMe/>
      </section>
      <div className="h-32"/>
    </main>
  );
}
