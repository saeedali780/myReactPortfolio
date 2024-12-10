import Navbar from "./Components/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/services.jsx";
import Experiance from "./Components/Experiance/Experiance.jsx";
import Works from "./Components/Works/Works.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="App"
    style={{background: darkMode?'black': ' ',
    color : darkMode? 'white': ' '}}>
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
