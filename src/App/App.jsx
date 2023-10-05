import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import WorkExperience from "../Pages/WorkExperience";
import VolunteerExperience from "../Pages/VolunteerExperience";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects /> 
      <VolunteerExperience />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
