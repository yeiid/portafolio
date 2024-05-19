import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Proyect from "./proyect/Proyects";
import Qualication from "./qualication/Qualication";
import Contact from "./contact/Contact";

export default function Page(): JSX.Element {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Proyect />
      <Qualication />
      <Contact />
    </main>
  );
}
