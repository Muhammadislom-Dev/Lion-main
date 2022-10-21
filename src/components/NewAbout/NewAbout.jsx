import React from "react";
import "./NewAbout.css";
import News from "./new.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function NewAbout({ uzbek, russian, english }) {
  const [news, setNew] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/news")
      .then((res) => setNew(res.data.find((e) => e.id == Number(id))));
  }, [id]);

  const { t } = useTranslation();

  return (
    <div className="new">
      <div className="container">
        <p className="new-home">
          <a href="/">Home</a> > <span className="new-span">News</span>
        </p>
        <div className="company-title">
          <div className="company-item">
            <p className="company-subname">
              19:31 <br /> <span style={{ color: "#F6EEEC" }}>04/09/2022</span>{" "}
            </p>
            {/* <p className="company-subname">{t("news_page_autgor")}</p> */}
          </div>
          <div className="company-items">
            <div className="company-about">
              <img src={news.image1} alt="" className="new-img" />
              {english && <h2 className="new-name">{news.name_en}</h2>}
              {russian && <h2 className="new-name">{news.name_ru}</h2>}
              {uzbek && <h2 className="new-name">{news.name_uz}</h2>}
            </div>
            <div style={{ paddingBottom: "50px" }} className="company-titles">
              {english && (
                <p style={{ paddingTop: "40px" }} className="company-text">
                  {news.description_en}
                </p>
              )}
              {russian && <p style={{ paddingTop: "40px" }} className="company-text">  {news.description_ru}  </p>}
              {uzbek && <p style={{ paddingTop: "40px" }} className="company-text">  {news.description_uz}  </p>}
              <img src={news.image2} alt="" className="new-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
