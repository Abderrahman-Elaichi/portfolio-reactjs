
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import Projects from "./sections/Projects";


import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/About.css";
import "./styles/Projects.css";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
       <About />
        <Projects />
        
      </main>
      
    </>
  );
}

export default App;
