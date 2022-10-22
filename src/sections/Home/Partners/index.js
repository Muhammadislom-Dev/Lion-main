import { partners } from "data";
import React from "react";
import "./index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function HomePartners({russian, english, uzbek}) {
  return (
    <section id="partner" className="homepartners">
      {russian && <h2 className="homepartners__title section__title">Нам доверяли</h2>}
      {uzbek && <h2 className="homepartners__title section__title">Bizga ishonch bildirildi</h2>}
      {english && <h2 className="homepartners__title section__title">We were trusted</h2>}
      <div className="homepartners-list">
        <Splide
          className="splide-slide"
          options={{ type: "loop", perPage: 6, autoplay: true }}
        >
          {partners.map((partner, i) => (
            <SplideSlide key={i} className="splide-box">
              <a href="#">
                <img
                  className="homepartners__logo"
                  src={partner}
                  alt="Image1"
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
