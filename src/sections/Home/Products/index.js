import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { SplideSlider } from "components";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";
import "@splidejs/splide/dist/css/splide.min.css";

export default function HomeProducts({ english, uzbek, russian }) {

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/categories/")
      .then((res) => setCatalog(res?.data))
      .catch((err) => console.log(["APIGet error:", err]) )
  }, []);

  let myRef = useRef()



  const { t } = useTranslation();
  return (
    <section id="category" className="homeproducts">
      <div className="container">
        <h3 className="section__title homeproducts__title">{t("p_2_h1")}</h3>
        <div className="homeproducts__wrapper">
          <SplideSlider>
            {catalog.map((prd, i) => (
              <SplideSlide
                key={i}
                id={prd?.id}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  id={prd?.id}
                  to={`/product=${prd?.id}`}
                >
                  <div className="homeproducts__product">
                    <div className="products__title">
                      <img
                        src={`https://lion.abba.uz/${prd?.image}`}
                        className="homeproducts__product-img"
                      />
                    </div>
                    {english && (
                      <p className="homeproducts__product-name">
                        {prd?.name_en}
                      </p>
                    )}
                    {russian && (
                      <p className="homeproducts__product-name">
                        {prd?.name_ru}
                      </p>
                    )}
                    {uzbek && (
                      <p className="homeproducts__product-name">
                        {prd?.name_uz}
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
          {catalog.map((prd, i) => (
            <SplideSlide  onClick={() => window.location.reload(false)} 
            key={i} id={prd?.id}>
              <Link
                onClick={() => window.scroll(0,0)}
                id={prd?.id}
                to={`/product=${prd?.id}`}
              >
                <div onClick={() => window.location.reload(false)} className="homeproducts__product">
                  <div className="products__title">
                    <img
                      src={`https://lion.abba.uz/${prd?.image}`}
                      className="homeproducts__product-img"
                    />
                  </div>
                  {english && (
                    <p className="homeproducts__product-name">{prd?.name_en}</p>
                  )}
                  {russian && (
                    <p className="homeproducts__product-name">{prd?.name_ru}</p>
                  )}
                  {uzbek && (
                    <p className="homeproducts__product-name">{prd?.name_uz}</p>
                  )}
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <PinkBg light style={{ top: "600px", left: "0px" }} />
      <PinkBg style={{ top: "1000px", right: "-800px" }} />
    </section>
  );
}
