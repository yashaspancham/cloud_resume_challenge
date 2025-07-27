import Info from "@/components/Info";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import PersonalProjects from "@/components/PersonalProjects";
import ContactMe from "@/components/ContactMe";
import FireBall from "@/components/Fireball";


export default function Home() {
  return (
    <main className="max-md:p-10 max-md:flex max-md:flex-col max-md:gap-20 bg-black text-white w-full h-full scroll-smooth">
      <section className="2xl:h-[40vw] xl:h-[65vw] lg:h-[100vw] md:h-[110vw] sm:h-[120vw] h-[200vw] m-0 sm:m-10 sticky top-0 z-0">
      <FireBall />
      </section>
      <section className="mt-20 md:mx-20 md:p-20 ">
        <Info />
      </section>
      <section
        id="tech-stack"
        className="md:mx-20 md:p-20  md:flex md:justify-end"
      >
        <TechStack />
      </section>
      <section
        id="work-experience"
        className="md:mx-20 md:p-20  md:flex"
      >
        <WorkExperience />
      </section>
      <section
        id="certifications-and-achievements"
        className="md:mx-20 md:p-20  md:flex md:justify-end"
      >
        <CertificationsAndAchievements />
      </section>
      <section
        id="personal-projects"
        className="md:mx-20 md:p-20 "
      >
        <PersonalProjects />
      </section>
      <section
        id="contact-me"
        className="md:mx-20 md:p-20   md:flex md:justify-end"
      >
        <ContactMe />
      </section>
      <section className="h-[500px] w-full flex justify-center items-center text-md relative z-10" >
        <p>
        Thank you for you time and consideration!
        </p>
      </section>
    </main>
  );
}
