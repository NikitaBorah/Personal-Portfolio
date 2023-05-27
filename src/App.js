import './App.css';
import {Header} from "./components/Header";
import {Banner} from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
function App() {
  return (
    <><Header />
    <Banner />
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
