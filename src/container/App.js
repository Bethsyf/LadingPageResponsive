import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { Home } from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Testimonials from "../components/Testimonials/Testimonials";
import './styles.css'

function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
