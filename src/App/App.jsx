import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import WorkExperience from "../Pages/WorkExperience";
import VolunteerExperience from "../Pages/VolunteerExperience";
import Contact from "../Pages/Contact";
import SkillsNew from "../Pages/SkillsNew";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WorkExperience />
      <SkillsNew />
      <Projects /> 
      <VolunteerExperience />
      <Contact />
    </>
  );
}

export default App;
