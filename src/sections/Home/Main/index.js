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
import VideoModal from "../VideoModal/VideoModal";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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

export default function HomeMain() {
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

  const [isOpen, setOpen] = useState(false);

  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  return (
    <div className="homemain">
      <div className="container">
        <div className="homemain__slides">
          <SplideSlider options={splideOpts}>
            {homemain_slides.map((slide, i) => (
              <SplideSlide key={i}>
                <button
                  onClick={() => openKorzinkaModal(true)}
                  className="homemain__slide"
                >
                  <img
                    src={slide}
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
            <div>
              <h1 className="homemain__title">
                ПРОИЗВОДСТВО ременей в Узбекистане
              </h1>
              <p className="homemain__text">
                Оптовые цены и оптовые объёмы Большой ассортимент
              </p>
            </div>
            <a
              href="#category"
              className="products__modal-btn product__modal-btn"
            >
              <span className="products__modal-btn-icon">
                <BsArrowRight />
              </span>
              <span className="products__modal-btn-text">
                Перейти в каталог
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
                    <p className="homemain__main-slide-text">{slide.name_en}</p>
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
          <Splide
            options={ { rewind: true } }
            aria-label="React Splide Example"
          >
            {video.map((slide, i) => (
              <SplideSlide  key={i}>
                <div style={{ borderRadius: "50px" }} className="modal-page">
                  <Player style={{ borderRadius: "50px" }}>
                    <source style={{ borderRadius: "50px" }} src={slide.video} />
                  </Player>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </VideoModal>
    </div>
  );
}
