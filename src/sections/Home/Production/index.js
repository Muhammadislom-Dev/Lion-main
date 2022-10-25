import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PinkBg } from "subcomponents";
import "./index.css";
import interact from "interactjs";
import Modal from "subcomponents/Modal/Modal";
import Iframe from "react-iframe";

let timeout = null;

export default function HomeProduction() {
  const { t } = useTranslation();


  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  const downRef = useRef();
  const aRef = useRef();
  const [, setDowned] = useState(false);

  useEffect(() => {
    const btn = interact(".main-btn");

    btn.draggable({
      // make the element fire drag events
      origin: "self", // (0, 0) will be the element's top-left
      inertia: true, // start inertial movement if thrown
      modifiers: [
        interact.modifiers.restrict({
          restriction: "self", // keep the drag coords within the element
        }),
      ],
      listeners: {
        move(event) {
          // call this listener on every dragmove
          const sliderWidth = interact.getElementRect(event.target).width;
          const value = event.pageX / sliderWidth;

          event.target.style.paddingLeft = value * 100 + "%";
          event.target.setAttribute("data-value", value.toFixed(2));
          clearTimeout(timeout);

          if (
            parseFloat(downRef.current?.style.paddingLeft) >= parseFloat("65%")
          ) {
            setDowned((prev) => {
              if (!prev) {
                aRef.current.click();
              }

              downRef.current.style.paddingLeft = "0%";
              return true;
            });
          } else {
            setDowned(false);
            timeout = setTimeout(() => {
              downRef.current.style.paddingLeft = "0%";
            }, 500);
          }
        },
      },
    });
  }, []);

  return (
    <section id="texno" className="homeproduction">
      <div className="container">
        <div className="homeproduction__left">
          <h2 className="homeproduction__left-title section__title">
            {t("p_5_h1")}
          </h2>
          <p className="homeproduction__left-text">{t("about_us_mini")}</p>
          <Link
            to="/texno" onClick={() => window.scrollTo({ top: 0 })}
            className="products__modal-btn product__modal-btn"
          >
            <span className="products__modal-btn-icon">
              <BsArrowRight />
            </span>
            <span className="products__modal-btn-text">{t("p_1_button")}</span>
          </Link>
        </div>
        <div className="homeproduction__right">
          <img
            src="/assets/images/home-production.png"
            alt="Lion Production"
            className="homeproduction__right-img"
          />
          <button onClick={() => openKorzinkaModal(true)}>
          <img  
            src="/assets/images/about-video-btn.png"
            alt="Play Lion Video"
            className="homeproduction__right-btn about__left-video-btn"
          />
          </button>
        </div>
      </div>

      <Modal show={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>
        <div className="modal-video">
          <Iframe
            url="https://www.sdrive.app/embed/1ptBQD"
            id=""
            display="block"
            position="relative"
            className="modal-iframe"
          />
        </div>
      </Modal>
      <PinkBg style={{ top: "1000px", left: "-500px" }} />
      <PinkBg light style={{ top: "300px", right: "-800px" }} />
    </section>
  );
}
