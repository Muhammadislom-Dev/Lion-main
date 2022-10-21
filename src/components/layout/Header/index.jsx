import { nav_items } from "data";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import "./index.css";
import vector from "./Vector (49).png";

export default function Header({ change1, change2, change3 }) {
  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  const [language, setLanguage] = useState(false);

  function changeHandle1() {
    change1(true);
    setLanguage(!language);
  }
  function changeHandle2() {
    change2(true);
    setLanguage(!language);
  }
  function changeHandle3() {
    change3(true);
    setLanguage(!language);
  }

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container px-normal">
        <div className="header__items-wrapper">
          <a href="/">
            <img
              src="/assets/images/logo.png"
              alt="Lion logo"
              className="header__logo"
            />
          </a>
          <ul className="header__links">
            <li className="header__link">
              <a href="#category">{t(`h_1`)}</a>
            </li>
            <li className="header__link">
              <a href="#company">{t(`h_2`)}</a>
            </li>
            <li className="header__link">
              <a href="#texno">{t(`h_3`)}</a>
            </li>
            <li className="header__link">
              <a href="#contact">{t(`h_4`)}</a>
            </li>
          </ul>
          <div className="header-list">
            <div className="nav__langs">
              <p className="nav__current-lang">
                 EN
              </p>
              <span className="nav__current-lang-path" />
              <ul className="nav__langs-container">
              <li onClick={() => changeHandle1()} className="nav__lang">RU</li>
               {/* <li onClick={() => changeHandle2()} className="nav__lang">EN</li> */}
               <li onClick={() => changeHandle3()} className="nav__lang">UZ</li>
              </ul>
            </div>
            <a href="tel:+998995595353" className="header-btn">
              {t(`f9`)}
            </a>
          </div>
          <button onClick={() => openKorzinkaModal()} className="header-open">
            <img src={vector} alt="Vector" className="header-img" />
          </button>
        </div>
      </div>

      <Modal shows={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>

        <ul className="header-list">
          <li className="header-item">
            <a href="#category" className="header-link">
            {t(`f_name2`)}
            </a>
          </li>
          <li className="header-item">
            <a href="#company" className="header-link">
            {t(`about_page_h6`)}
            </a>
          </li>
          <li className="header-item">
            <a href="#texno" className="header-link">
            {t(`f3`)}
            </a>
          </li>
          <li className="header-item">
            <a href="#contact" className="header-link">
            {t(`f_name3`)}
            </a>
          </li>
          <li className="header-item">
            <a href="tel:+998995595353" className="header-btn">
             {t(`f9`)}
            </a>
          </li>
        </ul>
      </Modal>
    </header>
  );
}
