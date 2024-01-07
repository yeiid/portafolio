

import Header from './header/Header.jsx'
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Services from './services/Services';
import Qualication from './qualication/Qualication';
// import Contact from './contact/Contact'
import Footer from './footer/Footer'


export default function Page() {
  return (
    <>
     <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualication/>
        {/* <Contact/> */}
        
      </main>
      <Footer/>
    </>
  );
}
