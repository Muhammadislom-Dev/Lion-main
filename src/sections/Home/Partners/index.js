import { partners } from "data";
import React from "react";
import "./index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export default function HomePartners({russian, english, uzbek}) {
  return (
    <section id="partner" className="homepartners">
      {english && <h2 className="homepartners__title section__title">Our trusted partners</h2>}
      {russian && <h2 className="homepartners__title section__title">Наши надежные партнеры</h2>}
      {uzbek && <h2 className="homepartners__title section__title">Bizning ishonchli hamkorlarimiz</h2>}
      <div className="homepartners-list">
        <Splide
          className="splide-slide"
          options={{ type: "loop", perPage: 6, autoplay: true }}
        >
          {partners.map((partner, i) => (
            <SplideSlide key={i} className="splide-box">
              <Link to="/">
                <img
                  className="homepartners__logo"
                  src={partner}
                  alt="Image1"
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
