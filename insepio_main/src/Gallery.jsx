import './App.css'
import { useTranslation } from 'react-i18next';

function Gallery() {
  const {t} = useTranslation()
  return (
    <>
    <section id="gallery">
      <div className='info'>
        <h1 >{t("Gallery.title")}</h1>
        <p>{t("Gallery.p1")}</p>
      </div>
      <div className="box-container gallery">
        <div className="box bulgaria" >
          <p className='uppercase'>{t("Gallery.packagedesc1")}</p>
          <h3 className='gallery'>{t("Gallery.gallery1")}</h3>
          <p className='pic'>{t("Gallery.pics")}</p>
        </div>

        <div className="box nl">
          <p className='uppercase'>{t("Gallery.package2desc")}</p>
          <h3 className='gallery'>{t("Gallery.gallery2")}</h3>
          <p className='pic'>{t("Gallery.pics")}</p>
        </div>

        <div className="box usa">
          <p className='uppercase'>{t("Gallery.package3desc")}</p>
          <h3 className='gallery'>{t("Gallery.gallery3")}</h3>
          <p className='pic'>{t("Gallery.pics")}</p>
        </div>
      </div>
      <a className='explorebtn'>{t("Gallery.exploregallery")}</a>
    </section>
    </>
  )
}

export default Gallery
