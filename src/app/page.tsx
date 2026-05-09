import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"
import Booknow from "./components/home/book-now"
import Faq from "./components/home/faq"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <EducationSkills />
        <ExperienceSec />
        <LatestWork />
        <Booknow />
        <Faq />
        <Contact />
      </main>
    </>
  )
}

export default page