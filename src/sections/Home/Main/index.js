import { SplideSlide } from "@splidejs/react-splide";
import { SplideSlider } from "components";
import { homemain_slides, main_slides } from "data";
import React, { useEffect } from "react";
import { PinkBg } from "subcomponents";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { Player } from "video-react";
import Iframe from "react-iframe";
import VideoModal from "../VideoModal/VideoModal";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const splideOpts = {
  rewind: true,
  loop: true,
  pagination: false,
  perPage: 4,
  perMove: 2,
  breakpoints: {
    1000: {
      perPage: 3,
    },
    700: {
      perPage: 1,
    },
  },
};

const slideOptsMain = {
  rewind: true,
  loop: true,
  autoPlay: true,
  pagination: true,
  arrows: false,
};

export default function HomeMain({ english, russian, uzbek }) {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/sliders")
      .then((res) => setSlider(res.data));
  }, []);

  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/vodeos")
      .then((res) => setVideo(res.data));
  }, []);

  console.log(video);

  // const [isOpen, setOpen] = useState(false);

  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  const { t } = useTranslation();

  const [slider_reklama, setSlider_reklama] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/slider_reklama/")
      .then((res) => setSlider_reklama(res.data));
  }, []);

  return (
    <div className="homemain">
      <div className="container">
        <div className="homemain__slides">
          <SplideSlider options={splideOpts}>
            {video.map((slide, i) => (
              <SplideSlide key={i}>
                <button
                  onClick={() => openKorzinkaModal(true)}
                  className="homemain__slide"
                >
                  <img
                    src={slide.image}
                    alt="Lion Slide"
                    className="homemain__slide-img"
                  />
                </button>
              </SplideSlide>
            ))}
          </SplideSlider>
          <PinkBg style={{ top: "-600px", left: "-1000px" }} />
          <PinkBg style={{ top: "100px", left: "-1000px" }} />
          <PinkBg style={{ top: "100px", right: "-1000px" }} />
          <PinkBg style={{ top: "-600px", left: "400px" }} />
        </div>
        <div className="homemain__main">
          <div className="homemain__content">
            {slider_reklama.map((evt, i) => (
              <div>
                {english && <h1 className="homemain__title">{evt.name_en}</h1>}
                {russian && <h1 className="homemain__title">{evt.name_ru}</h1>}
                {uzbek && <h1 className="homemain__title">{evt.name_uz}</h1>}
                {english && <p className="homemain__text">{evt.description_en}</p>}
                {russian && <p className="homemain__text">{evt.description_ru}</p>}
                {uzbek && <p className="homemain__text">{evt.description_uz}</p>}
              </div>
            ))}
            <a
              href="#category"
              className="products__modal-btn product__modal-btn"
            >
              <span className="products__modal-btn-icon">
                <BsArrowRight />
              </span>
              <span className="products__modal-btn-text">
                {t("p_1_button")}
              </span>
            </a>
          </div>
          <div className="homemain__main-slider">
            <SplideSlider
              className="slideOptsMain"
              options={slideOptsMain}
              items={slider}
            >
              {slider.map((slide, i) => (
                <SplideSlide key={i}>
                  <div key={i} className="homemain__main-slide">
                    <img
                      src={slide.image}
                      alt="Lion Slide"
                      className="homemain__main-slide-img"
                    />
                    {english && (
                      <p className="homemain__main-slide-text">
                        {slide.name_en}
                      </p>
                    )}
                    {russian && (
                      <p className="homemain__main-slide-text">
                        {slide.name_ru}
                      </p>
                    )}
                    {uzbek && (
                      <p className="homemain__main-slide-text">
                        {slide.name_uz}
                      </p>
                    )}
                  </div>
                </SplideSlide>
              ))}
            </SplideSlider>
            <PinkBg style={{ top: "-300px", left: "-200px" }} light />
          </div>
        </div>
      </div>

      <VideoModal showw={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>

        <div className="modal-splide">
          <Splide options={{ rewind: true }} aria-label="React Splide Example">
            {video.map((slide, i) => (
              <SplideSlide key={i}>
                <div style={{ borderRadius: "50px" }} className="modal-page">
                  <Iframe
                    url={slide.video}
                    width="100%"
                    height="100%"
                    id=""
                    autoPlay={true}
                    className=""
                    display="block"
                    position="relative"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </VideoModal>
    </div>
  );
}
