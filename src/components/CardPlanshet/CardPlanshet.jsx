import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CardPlanshet.css"

function CardPlanshet({ russian, english, uzbek }) {

    const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="cards">
      <div className="card-slider">
        <Splide
          className="splide-slidee"
          options={{  perPage: 2, autoplay: true }}
        >
          {product.map((partner, i) => (
            <SplideSlide key={i} className="splide-box">
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to={`/aboutId=${partner.id}`}
              >
                <div
                  key={i}
                  id={partner.id}
                  className="product__items about--items"
                >
                  <img
                    src={partner.image}
                    alt=""
                    className="product-pic about--pic"
                  />
                  {english && (
                    <p className="product-names">{partner.name_en}</p>
                  )}
                  {russian && (
                    <p className="product-names">{partner.name_ru}</p>
                  )}
                  {uzbek && <p className="product-names">{partner.name_uz}</p>}
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default CardPlanshet;
