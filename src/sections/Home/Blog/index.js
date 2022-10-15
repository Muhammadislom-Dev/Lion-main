import { SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { SplideSlider } from "components";
import { homeproducts } from "data";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";

export default function HomeBlog() {


  var { newId } = useParams();
  const [news, setNew] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/news")
      .then((res) => setNew(res.data));
  }, []);

  console.log(news);

  return (
    <section className="homeblog">
      <div className="container">
        <h2 className="section__title homeblog__title">Новости Лиона</h2>
        <div className="homeproducts__wrapper">
          <SplideSlider>
            {news
            .map((prd, i) => (
              <SplideSlide id={prd.id} key={i}>
                <Link to={`/blog=${prd.id}`}>
                  <div key={i} id={prd.id} className="homeproducts__product blog__item">
                    <img
                      src={prd.image1}
                      // alt={prd.name}
                      className="homeproducts__product-img blog__item-img"
                    />
                    <p className="homeproducts__product-name">{prd.name_en}</p>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </SplideSlider>
        </div>
      </div>
      <PinkBg style={{ top: "0", left: "-500px" }} />
      <PinkBg style={{ top: "100px", right: "-50px" }} />
    </section>
  );
}
