import React from "react";
import "./index.css";
import company from "./company.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Company = () => {

  const {t} = useTranslation()

  return (
    <div className="company">
      <div className="container">
        <p className="company-subnames">
          <a href="/">{t("cat2_h6")}</a>
          > <span>{t('about_page_h6')}</span>
        </p>
        <div className="company-title">
          <div className="company-item">
            <p className="company-subname">
               {t('i_g1')}
            </p>
            <p className="company-subname">
               {t('i_g2')}
            </p>
            <p className="company-subname">
              {t('i_g3')}
            </p>
          </div>
          <div className="company-items">
            <div className="company-about">
              <img src={company} alt="" className="company-img" />
              <h2 className="company-name">{t('about_us_name')}</h2>
            </div>
            <div className="company-titles">
              <p style={{paddingTop:"40px"}} className="company-text">
                 {t('about_us_top')}
              </p>
              <img src={company} alt="" className="company-pic" />
              <p style={{paddingBottom:"50px"}} className="company-text">
                {t('about_us_down')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
