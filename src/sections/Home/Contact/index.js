import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);

  const submit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY - 4000);

  const formBtn = (e) => {
    e.preventDefault();
    //  console.log(e)
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
                 Salom, Yangi Xabar!😊%0A
                 Ismi 👤: ${e.target[0].value}%0A
                 Raqam ☎: ${e.target[1].value}%0A 
                           
            `;

      let url = `https://api.telegram.org/bot5407892565:AAGcvMnAPpnfj5a5zU2rG5sCYPifARtAmV0/sendMessage?chat_id=-1001549647557&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);

      if (document.querySelector("#name").matches(".input-error")) {
        document.querySelector("#name").classList.remove("input-error");
        document.querySelector("#errorText").classList.remove("error-text1");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }
      if (document.querySelector("#tel").matches(".tel-error")) {
        document.querySelector("#tel").classList.remove("tel-error");
        document.querySelector("#errorTel").classList.remove("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.remove("modal-closest-btn");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }

      e.target[0].value = "";

      e.target[1].value = "";
    } else {
      if (e.target[0].value.length < 1) {
        document.querySelector("#name").classList.add("input-error");
        document.querySelector("#errorText").classList.add("error-text1");

        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
      if (e.target[1].value.length < 1) {
        document.querySelector("#tel").classList.add("tel-error");
        document.querySelector("#errorTel").classList.add("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.add("modal-closest-btn");
        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
    }
  };

  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__left">
          <h2 className="contact__left-title section__title">
          {t('p_7_h1')}
          </h2>
          <form id="myForm" onSubmit={formBtn}  className="contact__form">
            <input
              name="name" id="name" type="text"
              placeholder={t('name')}
              minLength={2}
              required
              maxLength={1000}
              className="contact__form-input"
            />
            <input
              id="tel" type="number" name='tel'
              placeholder={t('phone')}
              required
              className="contact__form-input"
            />
            <button className="contact__form-btn">{t('send')}</button>
          </form>
        </div>
        <div className="contact__right">
          <img
            src="/assets/images/contact-img.png"
            alt="Lion Contact"
            className="contact__right-img"
          />
          <img
            src="/assets/images/contact-icon.png"
            alt="Lion Contact"
            className="contact__right-icon about__left-video-btn"
          />
        </div>
      </div>

      <h1
        className="contact__bottom-text"
        style={{ transform: `translateX(-${(scrollY - 3000) * 0.5}px)` }}
      >
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
        <span>LION LETHER BELT</span>
      </h1>
    </section>
  );
}
