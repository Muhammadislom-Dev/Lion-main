import React, { useEffect, useState } from "react";
import "./ProductAbout.css";
import mask from "./mask.png";
import demos from "../Products/demos.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "subcomponents/Modal/Modal";
import { useTranslation } from "react-i18next";
import SlideBtn from "components/SlideBtn/SlideBtn";
import { Splide } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";


function ProductAbout({ english, russian, uzbek }) {
  var { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setProduct(res.data.find((e) => e.id == Number(id))));
  }, [id]);

  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  const [top, setTop] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setTop(res.data));
  }, []);

  //Bot meesage

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
      //   console.log(url)
      async function fetchAsync(url) {
        let response = await fetch(url);
        //   console.log(response,"1-si")
        let data = await response.json();
        // console.log(data,"2-si")
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

      // e.target[2].value=""
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
    <div className="about">
      <div className="container">
        <ul className="about-list">
          <li className="about-item">
            <a href="/" className="about-link">
              Home
            </a>
          </li>
          <li className="about-item">></li>
          <li className="about-item">
            <a href="#category" className="about-link">
              Products
            </a>
          </li>
          <li className="about-item">></li>
          {english && <li className="about-item">{product.name_en}</li>}
          {russian && <li className="about-item">{product.name_ru}</li>}
          {uzbek && <li className="about-item">{product.name_uz}</li>}
        </ul>

        <div className="about--title">
          {english && <h2 className="about-name">{product.name_en}</h2>}
          {russian && <h2 className="about-name">{product.name_ru}</h2>}
          {uzbek && <h2 className="about-name">{product.name_uz}</h2>}
          <p>{t("cat3_h2")}</p>
        </div>

        <div className="about-title">
          <div className="about-left">
            <Link
              onClick={() => window.scrollTo({ top: 0 })}
              to="/"
              className="about-links"
            >
              <img src={mask} alt="" className="about-logo" /> {t("cat3_btn")}
            </Link>

            <div className="about-items">
              <h3 className="about-subnames">Мужские ремни</h3>
              <p className="about-cost">от — $55.00</p>
              <img src={demos} alt="" className="about-img" />
              <button className="product-btns">{t("cat2_btn2")}</button>
            </div>
          </div>

          <div className="about-right">
            <div className="about__rights">
              <div className="about-titles">
                <h3 className="about-names">Мужские ремни</h3>
                {english && (
                  <p className="about-text">{product.description_en}</p>
                )}
                {russian && (
                  <p className="about-text">{product.description_ru}</p>
                )}
                {uzbek && (
                  <p className="about-text">{product.description_uz}</p>
                )}
                <div className="about--page">
                  <ul className="about--list">
                    <li className="about--item">{t("cat3_i1")}</li>
                    <li className="about--item">{t("cat3_i2")}</li>
                    <li className="about--item">{t("cat3_i3")}</li>
                    <li className="about--item">{t("cat3_i4")}</li>
                    <li className="about--item">{t("cat3_i5")}</li>
                    <li className="about--item">{t("cat3_i6")}</li>
                    <li className="about--item">{t("cat3_i7")}</li>
                  </ul>
                  <ul className="about--list">
                    {english && (
                      <li className="about--item">{product.name_en}</li>
                    )}
                    {russian && (
                      <li className="about--item">{product.name_ru}</li>
                    )}
                    {uzbek && (
                      <li className="about--item">{product.name_uz}</li>
                    )}
                    <li className="about--item">{t("cat3_i2")}</li>
                    <li className="about--item">{t("uzb")}</li>
                    <li className="about--item">{t("cat3_i4")}</li>
                    <li className="about--item">{t("premium")}</li>
                    <li className="about--item">{t("cat3_i6")}</li>
                    <li className="about--item">{t("dog")}</li>
                  </ul>
                </div>
                <button
                  onClick={() => openKorzinkaModal()}
                  className="about-button"
                >
                  Купи сейчас
                </button>
              </div>
              <div className="about-page">
                <img src={product.image} alt="" className="about-image" />
              </div>
            </div>

            <p className="about--text">{t("cat3_h2")}</p>
            <div className="about-splide">
              <Splide
                aria-label="React Splide Example"
              >
                {top.map((evt, i) => (
                  <SplideSlide>
                    <Link to={`/aboutId=${evt.id}`}>
                      <div
                        key={i}
                        id={evt.id}
                        className="product__items about--items"
                      >
                        <img
                          src={evt.image}
                          alt=""
                          className="product-pic about--pic"
                        />
                        {english && (
                          <p className="product-names">{evt.name_en}</p>
                        )}
                        {russian && (
                          <p className="product-names">{evt.name_ru}</p>
                        )}
                        {uzbek && (
                          <p className="product-names">{evt.name_uz}</p>
                        )}
                      </div>
                    </Link>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>

      <Modal show={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>
        <div className="modal-pages">
          <div className="modal-title">
            <p className="modal-name">
              <p>{t("cat3_h2")}</p>
            </p>
            <form id="myForm" onSubmit={formBtn} className="modal-form">
              <input
                name="name"
                id="name"
                type="text"
                placeholder={t("name")}
                required
                className="modal-input"
              />
              <input
                id="tel"
                type="number"
                name="tel"
                placeholder={t("phone")}
                required
                className="modal-input"
              />
              <button id="btnSubmit" type="submit" className="modal-btn">
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
          <div className="modal-item">
            <img src={product.image} alt="" className="modal-img" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProductAbout;
