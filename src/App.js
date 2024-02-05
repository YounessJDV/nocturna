import './App.css';
import Navbar from './components/Navbar'
import Header from './components/header'
import Offres from './components/offres'
import Footer from './components/footer'
import Faq from './components/faq'
import Realisations from "./components/realisations"
import Cta from './components/cta'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offres />
      <Realisations />
      <Faq />
      <Cta class="z-10"/>
      <Footer clas="z-0" />
    </div>
  );
}

export default App;
