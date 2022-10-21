import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="company" className="homeabout">
      <div className="container">
        <div className="about__left">
          <img
            src="/assets/images/about-img.png"
            alt="About Lion"
            className="about__left-img"
          />
          <img
            src="/assets/images/about-video-btn.png"
            alt="Play video"
            className="about__left-video-btn"
          />
        </div>
        <div className="about__right">
          <h3 className="about__right-title">{t("p_3_h1")}</h3>
          <p className="about__right-text">
             {t('about_us_mini')}
          </p>
          {/* <p className='about__right-text'>
            Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.
          </p> */}
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/company"
            style={{ margin: "15px 0" }}
            className="products__modal-btn product__modal-btn"
          >
            <span className="products__modal-btn-icon">
              <BsArrowRight />
            </span>
            <span className="products__modal-btn-text">{t("p_1_button")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
