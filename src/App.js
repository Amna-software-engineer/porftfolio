import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ThemeProvider from "./context/ThemContext";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import { ScrollContext } from "./context/ScrollContext";
// main function
function App() {
  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const servicesRef=useRef(null);
  const skillsRef=useRef(null);
  const resumeRef=useRef(null);
  const projectsRef=useRef(null);
  const contactRef=useRef(null);
 return (
  <ScrollContext.Provider value={{homeRef,aboutRef,servicesRef,skillsRef,resumeRef,projectsRef,contactRef}}>
   <ThemeProvider> 
      <Header/>
      <Hero ref={homeRef}/>
      <About ref={aboutRef}/>
      {/* <Services ref={servicesRef}/> */}
      <Skills ref={skillsRef}/>
      <Resume ref={resumeRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
      <Footer/>
   </ThemeProvider>
   </ScrollContext.Provider>
  );
}
export default App;
