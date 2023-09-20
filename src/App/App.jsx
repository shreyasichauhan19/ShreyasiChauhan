import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import WorkExperience from "../Pages/WorkExperience";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WorkExperience/>
      <Skills />
      <Projects /> 
    </>
  );
}

export default App;
