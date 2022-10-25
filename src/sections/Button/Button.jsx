import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import interact from "interactjs";
import "./Button.css";
import  pro from './pro.png'

let timeout = null;

function Button() {

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

  const {t} = useTranslation()

  return (
    <div className="download-box">
      <div className="download-btn">{t("p_1_button")}</div>
      <div ref={downRef} className="main-btn">
        <div className="download-blok">
            <img src={pro} alt="" />
          {/* <BsArrowRight style={{ color: "#000" }} /> */}
        </div>
      </div>
      <Link
        to="/companes"
        onClick={() => window.scrollTo({ top: 0 })}
        hidden
        ref={aRef}
      ></Link>
    </div>
  );
}

export default Button;
