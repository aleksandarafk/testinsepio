import './App.css'
import { FaRegCompass } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next';

function About() {
  const {t} = useTranslation() 

  return (
    <>
    <section id='about'>
        <img src='/ContactImg.png' className='imgleft'/>
        <div className='text-box'>
            <p className='uppercase about'>{t("about.overtitle")}</p>
            <h1>{t("about.title")}</h1>
            <p>{t("about.p1")}</p>
            <div className='infobox'>
                <div className='reason'>
                <h1><FaRegCompass  size={40}/> {t("about.subtitle1")}</h1>
                <p>{t("about.p2")}</p>
                </div>
                <div className='reason'>
                <h1> <RiEmotionHappyLine size={40}/>{t("about.subtitle2")}</h1>
                <p>{t("about.p3")}</p>
                </div>
                <div className='reason'>
                <h1> <IoMdCheckmarkCircleOutline  size={40}/> {t("about.subtitle3")}</h1>
                <p>{t("about.p4")}</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
