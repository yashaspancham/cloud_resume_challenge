import Info from "@/components/Info";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import PersonalProjects from "@/components/PersonalProjects";
import ContactMe from "@/components/ContactMe";
import FireBall from "@/components/Fireball";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-md:p-10 max-md:flex max-md:flex-col max-md:gap-20 text-white w-full h-full scroll-smooth">
        <FireBall />
        <section className="mt-20 md:mx-20 md:p-20 md:my-20" id="hi">
          <Info />
        </section>
        <section
          id="tech-stack"
          className="md:mx-20 md:p-20  md:flex md:justify-end md:my-20"
        >
          <TechStack />
        </section>
        <section
          id="personal-projects"
          className="md:p-20 md:my-10 md:mx-20 md:flex"
        >
          <PersonalProjects />
        </section>
        <section
          id="certifications-and-achievements"
          className="md:mx-20 md:p-20  md:flex md:justify-end md:my-20"
        >
          <CertificationsAndAchievements />
        </section>
        <section
          id="work-experience"
          className="md:mx-20 md:p-20 md:flex md:my-20"
        >
          <WorkExperience />
        </section>
        <section
          id="contact-me"
          className="md:flex md:justify-end md:my-20 md:mx-20 md:p-20"
        >
          <ContactMe />
        </section>
        <section className="h-[500px] w-full flex justify-center items-center text-md relative z-10 flex flex-col gap-5">
          <p>Thank you for your time and consideration!</p>
          <a href="#top"
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
          >
            ↑ Top
          </a>
        </section>
      </div>
    </main>
  );
}
