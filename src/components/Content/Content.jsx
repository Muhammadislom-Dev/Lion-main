import React from "react";
import "./Content.css";
import kamar from "./1.png";
import kamarr from "./2.png";
import { t } from "i18next";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <p className="content-subname">
          <a href="/">Home</a> >{" "}
          <span className="content-span">{t("factory_h6")}</span>
        </p>
        <div className="content-title">
          <h3 className="content-name">{t("factory_name")}</h3>
        </div>
        <div className="content-list">
          <p style={{ paddingTop: "60px" }} className="content-text">
            {t("factory1")}
          </p>

          <div className="content-item">
            <p className="content-number">01</p>
            <img src={kamar} alt="" className="content-img" />
          </div>
          <p className="content-text">{t("factory2")}</p>
          <div className="content-item">
            <p className="content-number">02</p>
            <img src={kamarr} alt="" className="content-img" />
          </div>
          <p className="content-text">{t("factory3")}</p>
          <div className="content-item">
            <p className="content-number">03</p>
            <img src={kamarr} alt="" className="content-img" />
          </div>
          <p className="content-text">{t("factory4")}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
