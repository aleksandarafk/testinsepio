import './App.css'
import { useTranslation } from 'react-i18next';

function OurServices() {
  const {t} = useTranslation()

  return (
    <>
    <section id="services">
      <div className='info'>
        <h1>{t("OurServices.title")}</h1>
        <p>{t("OurServices.p1")}</p>
      </div>
      <div className="box-container">
        <div className="box lightBlue" >
          <img src="/service1.svg" height="200px" alt="" />
          <h3>{t("OurServices.package1")} <span class="tooltip" data-tooltip="Detail explanation of service can be done like">?</span></h3>
          <p>{t("OurServices.package1desc")}</p>
        </div>

        <div className="box white">
          <img src="./service2.svg" height="200px" alt="" />
          <h3>{t("OurServices.package2")} <span class="tooltip" data-tooltip="Detail explanation of service can be done like">?</span></h3>
          <p>{t("OurServices.package2desc")}</p>
        </div>

        <div className="box darkBlue">
          <img src="./service3.svg" height="200px" alt="" />
          <h3> {t("OurServices.package3")} <span class="tooltip" data-tooltip="Detail explanation of service can be done like">?</span></h3>
          <p>{t("OurServices.package3desc")}</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default OurServices
