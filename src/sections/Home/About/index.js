import { t } from "i18next";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "subcomponents/Modal/Modal";
import "./index.css";
import Iframe from "react-iframe";
import interact from "interactjs";
import Button from "sections/Button/Button";

let timeout = null;

export default function About() {
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
    <section id="company" className="homeabout">
      <div className="container">
        <div className="about__left">
          <img
            src="/assets/images/about-img.png"
            alt="About Lion"
            className="about__left-img"
          />
          <button onClick={() => openKorzinkaModal(true)}>
            <img
              src="/assets/images/about-video-btn.png"
              alt="Play video"
              className="about__left-video-btn"
            />
          </button>
        </div>
        <div className="about__right">
          <h3 className="about__right-title">{t("p_3_h1")}</h3>
          <p className="about__right-text">{t("about_us_mini")}</p>

            <Link to="/companes" onClick={() => window.scrollTo({ top: 0 })} className="products__modal-btn product__modal-btn">
              <span className="products__modal-btn-icon">
                <BsArrowRight />
              </span>
              <span className="products__modal-btn-text">
                 {t("p_1_button")}
              </span>
            </Link>
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
    </section>
  );
}
