import { SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { SplideSlider } from "components";
import { homeproducts } from "data";
import { t } from "i18next";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";

export default function HomeProducts({english, uzbek, russian}) {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/categories/")
      .then((res) => setCatalog(res.data));
  }, []);

  const {t} = useTranslation()

  return (
    <section id="category" className="homeproducts">
      <div className="container">
        <h3 className="section__title homeproducts__title">{t("p_2_h1")}</h3>
        <div className="homeproducts__wrapper">
          <SplideSlider>
            {catalog.map((prd, i) => (
              <SplideSlide key={i} id={prd.id}>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  id={prd.id}
                  to={`/product=${prd.id}`}
                >
                  <div className="homeproducts__product">
                    <div className="products__title">
                      <img
                        src={`https://lion.abba.uz/${prd.image}`}
                        className="homeproducts__product-img"
                      />
                    </div>
                    {english &&  <p className="homeproducts__product-name">{prd.name_en}</p>}
                    {russian &&  <p className="homeproducts__product-name">{prd.name_ru}</p>}
                    {uzbek &&  <p className="homeproducts__product-name">{prd.name_uz}</p>}
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </SplideSlider>
        </div>
      </div>
      <PinkBg light style={{ top: "600px", left: "0px" }} />
      <PinkBg style={{ top: "1000px", right: "-800px" }} />
    </section>
  );
}
