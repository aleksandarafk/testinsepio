import React, { useRef} from 'react';
import './Navigation.css'
import TranslationBTN from './translationbtn';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";



const Navigation = () => {
  const tiltRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const {t} = useTranslation() 
  const currentLocation = useLocation().pathname;

  return (
<nav className="nav" style={{position:"fixed", top:0, left: 0, right:0}}>
  <div className='tilt' ref={tiltRef}>
    {/* Logo */}
    <Link to="/" state="/" style={{textDecoration:'none', color:'white'}}> <h1 alt="Logo" className="logo">Insepio</h1></Link>
  </div>
{currentLocation === "/" ?
      <ul className="menu">
          <li ref={servicesRef} className="menuItem"> <Link to="#services" state="services" style={{textDecoration:'none', color:'white'}}>{t("Services")}</Link> 
          </li>
          <li ref={aboutRef} className="menuItem" > <Link to="#about" state="about" style={{textDecoration:'none', color:'white'}}>{t("About")}</Link>
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="#contact" state="contact" style={{textDecoration:'none', color:'white'}}>{t("Contact")} </Link> 
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="/howitworks" style={{textDecoration:'none', color:'white'}}>{t("HowItWorks")} </Link> 
          </li>
            </ul>
          : <ul className="menu"> <li ref={servicesRef} className="menuItem"> <Link to="/" state="services" style={{textDecoration:'none', color:'white'}}>{t("Services")}</Link> 
          </li>
          <li ref={aboutRef} className="menuItem" > <Link to="/" state="about" style={{textDecoration:'none', color:'white'}}>{t("About")}</Link>
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="/" state="contact" style={{textDecoration:'none', color:'white'}}>{t("Contact")}</Link> 
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="/howitworks" style={{textDecoration:'none', color:'white'}}>{t("HowItWorks")} </Link> 
          </li>
    </ul> }
  <div className="buttonContainer">
      <TranslationBTN/>
  </div>
</nav>
  );
};

export default Navigation;
