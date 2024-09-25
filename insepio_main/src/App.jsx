import './App.css'
import Navigation from './NavigationMenu'
import { useLocation } from 'react-router-dom'
import React, { useEffect,} from 'react' 
import Contact from './Contact'
import About from './About'
import Gallery from './Gallery'
import OurServices from './OurServices'
import Home from './Hero'


function App() {
  const locationProps = useLocation().state;
  const currentPath = useLocation().pathname;
  
useEffect(() => {
  console.log(locationProps);
  const Projects = document.getElementById("services");
  const AboutMe = document.getElementById("about");
  const ContactMe = document.getElementById("contact");

  window.scrollTo(0, 0);

  if (locationProps === "/") {  
    window.scrollTo(0, 0);
  } else if (locationProps === "services") {
    Projects?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else if (locationProps === "about") {
    AboutMe?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else if (locationProps === "contact") {
    ContactMe?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else {
    window.scrollTo(0, 0);
  }
}, [currentPath, locationProps]);

  return (
    <>
    {currentPath === "/" &&
      <div className="app-container">
        <Navigation/>
          <Home/>
          <OurServices/>
          <Gallery/>
          <About/>
          <Contact/>
      </div>}
    </>
  )
}

export default App
