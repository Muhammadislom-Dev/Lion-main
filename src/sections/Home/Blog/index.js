import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { SplideSlider } from "components";
import { homeproducts } from "data";
import { t } from "i18next";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";

export default function HomeBlog({ english, uzbek, russian }) {
  const [news, setNew] = useState([]);

  useEffect(() => {
    axios.get("https://lion.abba.uz/api/news").then((res) => setNew(res.data));
  }, []);

  const { t } = useTranslation();

  return (
    <section id="new" className="homeblog">
      <div className="container">
        <h2 className="section__title homeblog__title">{t("p_4_h1")}</h2>
        <div className="homeproducts__wrapper">
          <SplideSlider>
            {news.map((prd, i) => (
              <SplideSlide id={prd.id} key={i}>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={`/blog=${prd.id}`}
                >
                  <div
                    key={i}
                    id={prd.id}
                    className="homeproducts__product blog__item"
                  >
                    <img
                      src={prd.image1}
                      className="homeproducts__product-img blog__item-img"
                    />
                    {english && (
                      <p className="homeproducts__product-name">
                        {prd.name_en}
                      </p>
                    )}
                    {russian && (
                      <p className="homeproducts__product-name">
                        {prd.name_ru}
                      </p>
                    )}
                    {uzbek && (
                      <p className="homeproducts__product-name">
                        {prd.name_uz}
                      </p>
                    )}
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </SplideSlider>
        </div>

        <Splide
          className="product-splide"
          options={{ perPage: 1, autoplay: true }}
        >
          {news.map((prd, i) => (
            <SplideSlide 
            onClick={() => window.location.reload(false)}
            key={i} id={prd.id}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                // id={prd.id}
                to={`/blog=${prd.id}`}
              >
                <div  onClick={() => window.location.reload(false)}
                    key={i}
                    id={prd.id}
                    className="homeproducts__product blog__item"
                  >
                    <img
                      src={prd.image1}
                      className="homeproducts__product-img blog__item-img"
                    />
                    {english && (
                      <p className="homeproducts__product-name">
                        {prd.name_en}
                      </p>
                    )}
                    {russian && (
                      <p className="homeproducts__product-name">
                        {prd.name_ru}
                      </p>
                    )}
                    {uzbek && (
                      <p className="homeproducts__product-name">
                        {prd.name_uz}
                      </p>
                    )}
                  </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <PinkBg style={{ top: "0", left: "-500px" }} />
      <PinkBg style={{ top: "100px", right: "-50px" }} />
    </section>
  );
}
