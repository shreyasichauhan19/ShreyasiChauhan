import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import WorkExperience from "../Pages/WorkExperience";
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
      <Contact />
    </>
  );
}

export default App;
