import './App.css';
// import AOS from "aos";
// import "aos/dist/aos.css";

import Navbar from './components/Navbar'
import Header from './components/header'
import Features from './components/features'
import Section_one from './components/section_one'
import Offres from './components/offres'
import Footer from './components/footer'
import Faq from './components/faq'
import Realisations from "./components/realisations"
import Cta from './components/cta'

function App() {

  // useEffect(() => {
  //   AOS.init(); 
  //  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Section_one />
      <Offres />
      {/* <Realisations /> */}
      <Faq />
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
