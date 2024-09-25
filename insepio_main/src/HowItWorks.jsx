import './App.css'
import { useTranslation } from 'react-i18next';

function HowItWorks() {
  const {t} = useTranslation()

  return (
    <>
    <section id="howitworks">
      <div className='intro'>
        <h1 className='title' style={{color: "#000"}}>{t("HowItWorks")}</h1>
      </div>
      </section>
    </>
  )
}

export default HowItWorks
