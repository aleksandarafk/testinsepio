import './App.css'
import { useTranslation } from 'react-i18next';

function NotFound() {
  const {t} = useTranslation()

  return (
    <>
    <section id="notfound">
      <div className='intro'>
        <h1 className='title'>{t("404.notfound")}</h1>
        <p>{t("404.notfound_desc")}</p>
        <a className="herobtn" href='/'>{t("404.goback")}</a>
      </div>
      </section>
    </>
  )
}

export default NotFound
