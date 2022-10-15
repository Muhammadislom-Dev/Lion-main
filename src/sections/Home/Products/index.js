import { SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { SplideSlider } from "components";
import { homeproducts } from "data";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";

export default function HomeProducts() {

  
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/categories/")
      .then((res) => setCatalog(res.data));
  }, []);

  console.log(catalog);

  return (
    <section className="homeproducts">
      <div className="container">
        <h3 className="section__title homeproducts__title">Наши продукты</h3>
        <div className="homeproducts__wrapper">
          <SplideSlider>
            {catalog.map((prd,i) => (
              <SplideSlide
                key={i}
                id={prd.id}
              >
                <Link id={prd.id} to={`/product=${prd.id}`} >
                  <div className="homeproducts__product">
                      <img
                        src={`https://lion.abba.uz/${prd.image}`}
                        className="homeproducts__product-img"
                      />
                    <p className="homeproducts__product-name">{prd.name_en}</p>
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
