import './App.css'
import { useTranslation } from 'react-i18next';

function Home() {
  const {t} = useTranslation();

  return (
    <>
     <section id="home">
     <div id="slideshow">
</div>
      <div className='intro'>
        <h1 className='title'>{t("title")}</h1>
        <p>{t("InfoBox")}</p>
        <a className="herobtn" href='#about'>{t("LearnMore")}</a>
        <a className="herobtn" href='#contact'>{t("Contact")}</a>
      </div>
      <div className="boxy">
      <a href="#services">
      <span></span>
      <span></span>
    </a>
    </div>
      </section>
    </>
  )
}

export default Home
