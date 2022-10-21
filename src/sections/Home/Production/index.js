import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";

export default function HomeProduction() {

  const {t} = useTranslation()

  return (
    <section id="texno" className="homeproduction">
      <div className="container">
        <div className="homeproduction__left">
          <h2 className="homeproduction__left-title section__title">
              {t('p_5_h1')}
          </h2>
          <p className="homeproduction__left-text">
             {t('factory')}
          </p>
          <Link 
            onClick={() => window.scrollTo({ top: 0 })}
            to="/texno" style={{margin:"15px 0"}} className="products__modal-btn product__modal-btn">
            <span className="products__modal-btn-icon">
              <BsArrowRight />
            </span>
            <span className="products__modal-btn-text">{t("p_1_button")}</span>
          </Link>
        </div>
        <div className="homeproduction__right">
          <img
            src="/assets/images/home-production.png"
            alt="Lion Production"
            className="homeproduction__right-img"
          />
          <img
            src="/assets/images/about-video-btn.png"
            alt="Play Lion Video"
            className="homeproduction__right-btn about__left-video-btn"
          />
        </div>
      </div>
      <PinkBg style={{ top: "1000px", left: "-500px" }} />
      <PinkBg light style={{ top: "300px", right: "-800px" }} />
    </section>
  );
}
