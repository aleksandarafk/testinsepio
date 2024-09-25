import './App.css'
import './footer.css'
import { FaInstagram  } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function Contact() {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();

  return (
    <>
    <section id="contact">
    <div className='titleContact'>
      <div className='left'>
        <h1>{t("contact.title1")}</h1>
        <p>{t("contact.p1")}</p>
        <div className="container">
  <form>
    <input type="text" id="fname" name="firstname" placeholder="Your name" size="30" required/>
    <input type="email" name="lastname" id="email" placeholder="example@gmail.com" size="30" required/>
    <select id="topic" name="topic">
      <option value="option1">option1</option>
      <option value="option2">option2</option>
      <option value="option3">option3</option>
    </select>
    <textarea id="subject" name="subject" placeholder="Subject" style={{height: '200px', resize:'none'}} required/>
    <input type="submit" value="Submit"/>
  </form>
</div>
        </div>
      <div className='right'>
      <h1>{t("contact.title2")}</h1>
      <p>{t("contact.p2")}</p>
      <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <a href="https://www.instagram.com/climbing_women/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <FaInstagram size={40} color="#000" style={{ marginRight: '10px' }} />
          <span style={{ fontSize: '16px', color: '#000' }}>@climbing_women</span>
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="mailto:villy.ignatova@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <MdEmail size={40} color="#000" style={{ marginRight: '10px' }} />
          <span style={{ fontSize: '16px', color: '#000' }}>villy.ignatova@gmail.com</span>
        </a>
      </div>
    </div>        
    </div>
        </div>
    </section>
    <footer className="footer">
      <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
      </div>
      <p style={{textAlign: 'center', color: 'black', fontSize: '1rem', opacity:0.75}}>{t("contact.footer")}{currentYear}</p>
    </footer>
    </>
  )
}

export default Contact
//travel design
//trip designer
//your journey