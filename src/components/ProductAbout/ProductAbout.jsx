import React, { useEffect, useState } from "react";
import "./ProductAbout.css";
import mask from "./mask.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Modals from "subcomponents/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Modal from "subcomponents/Modal/Modal";
import Card from "components/Card/Card";
import CardPlanshet from "components/CardPlanshet/CardPlanshet";
import CardMobile from "components/CardMobile/CardMobile";

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

  const [greatModal, setGreatModal] = useState(false);

  function openGreatModal() {
    setGreatModal(!greatModal);
  }

  const formBtn = (e) => {
    e.preventDefault();
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

      openGreatModal()

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

  const [reklama, setReklama] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/reklama")
      .then((res) => setReklama(res.data));
  }, []);

  return (
    <div className="about">
      <div className="container">
        <ul className="about-list">
          <li className="about-item">
            <a href="/" className="about-link">
              {t("cat2_h6")}
            </a>
          </li>
          <li className="about-item">></li>
          <li className="about-item">
            <a href="/" className="about-link">
              {t("cat2_h62")}
            </a>
          </li>
          <li className="about-item">></li>
          {english && <li className="about-item">{product.name_en}</li>}
          {russian && <li className="about-item">{product.name_ru}</li>}
          {uzbek && <li className="about-item">{product.name_uz}</li>}
        </ul>
        <div className="about-box">
          <a
            // onClick={() => window.scrollTo({ top: 0 })}
            href="/"
            style={{ display: "flex" }}
            className="about--links"
          >
            <img src={mask} alt="" className="about-logo" /> {t("cat3_btn")}
          </a>
        </div>
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

            {reklama.map((evt, i) => (
              <div className="about-items">
                {english && <h3 className="about-subnames">{evt.name_en}</h3>}
                {russian && <h3 className="about-subnames">{evt.name_ru}</h3>}
                {uzbek && <h3 className="about-subnames">{evt.name_uz}</h3>}
                <img src={evt.image1} alt="" className="about-img" />
                <a href="/" className="product-btns">
                  {t("cat2_btn2")}
                </a>
              </div>
            ))}
          </div>

          <div className="about-right">
            <div className="about__rights">
              <div className="about-titles">
                <h3 className="about-names">{t('f6')}</h3>
                {/* {english && <h3 className="about-names">Men's belts</h3>} */}
                {/* {uzbek && <h3 className="about-names">Erkaklar kamarlari</h3>} */}
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
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i1")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i2")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i3")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i4")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i5")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i6")}
                    </li>
                    <li style={{ fontWeight: "bold" }} className="about--item">
                      {t("cat3_i7")}
                    </li>
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
                <button onClick={openKorzinkaModal} className="about-button">
                  {t("cat2_btn")}
                </button>
              </div>
              <div className="about-page">
                <img src={product.image} alt="" className="about-image" />
              </div>
            </div>

            <p className="about--text">{t("cat3_h2")}</p>
            <Card uzbek={uzbek} english={english} russian={russian} />
            <CardPlanshet uzbek={uzbek} english={english} russian={russian} />
            <CardMobile uzbek={uzbek} english={english} russian={russian} />
          </div>
        </div>
      </div>
      <div></div>
      <Modals show={korzinkaModal}>
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
              <div>
                <button
                  type="submit"
                  className="modal-btn"
                >
                  {t("send")}
                </button>
              </div>
            </form>
          </div>
          <div className="modal-item">
            <img src={product.image} alt="" className="modal-img" />
          </div>
        </div>
      </Modals>

      <Modal show={greatModal}>
        <div className="modal-form">
          {uzbek && (
            <h4 className="form-names">Murojaatingiz qabul qilindi.</h4>
          )}
          {english && (
            <h4 className="form-names">Your request has been accepted.</h4>
          )}
          {russian && <h4 className="form-names">Ваше обращение принято.</h4>}
          <div className="form-title">
              <a
                href="/"
                onClick={() => window.scrollTo({ top: 0 })}
                className="form-done"
              >
                Ok
              </a>            
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProductAbout;
