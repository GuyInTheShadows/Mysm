import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Ai } from "@/components/sections/ai";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { resume } from "@/content/resume";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header identity={resume.identity} nav={resume.nav} />
      <main id="main">
        <Hero hero={resume.hero} photo={resume.identity.photo} />
        <About about={resume.about} stats={resume.stats} />
        <Experience experience={resume.experience} />
        <Work work={resume.work} />
        <Skills skills={resume.skills} />
        <Ai ai={resume.ai} />
        <Education
          education={resume.education}
          languages={resume.languages}
        />
        <Contact contact={resume.contact} identity={resume.identity} />
      </main>
      <Footer identity={resume.identity} />
    </>
  );
}
