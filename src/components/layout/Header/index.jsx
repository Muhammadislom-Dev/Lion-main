import { nav_items } from "data";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./index.css";
import vector from "./Vector (49).png";

export default function Header({
  change1,
  change2,
  change3,
  english,
  russian,
  uzbek,
  langTitle,
}) {
  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
    window.screenY = "2400";
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
  const location = useLocation();
  console.log(location?.pathname === "/");
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
              <Link onClick={() => window.scrollTo({ top: 900 })} to="/">
                {t(`h_1`)}
              </Link>
            </li>
            <li className="header__link">
              <Link onClick={() => window.scrollTo({ top: 1750 })} to="/">
                {t(`h_2`)}
              </Link>
            </li>
            <li className="header__link">
              <Link onClick={() => window.scrollTo({ top: 2400 })} to="/">
                {t(`h_3`)}
              </Link>
            </li>
            <li className="header__link">
              <Link onClick={() => window.scrollTo({ top: 3100 })} to="/">
                {t(`h_4`)}
              </Link>
            </li>
          </ul>
          <div className="header-page">
            <div className="header-list">
              <a href="tel:+998995595353" className="header-btn">
                {t(`f9`)}
              </a>
            </div>
            {english && (
              <div className="nav__langs">
                <p className="nav__current-lang">{langTitle}</p>
                <span className="nav__current-lang-path" />
                <ul className="nav__langs-container">
                  <li onClick={() => changeHandle1()} className="nav__lang">
                    RU
                  </li>
                  <li onClick={() => changeHandle3()} className="nav__lang">
                    UZ
                  </li>
                </ul>
              </div>
            )}
            {russian && (
              <div className="nav__langs">
                <p className="nav__current-lang">{langTitle}</p>
                <span className="nav__current-lang-path" />
                <ul className="nav__langs-container">
                  <li onClick={() => changeHandle2()} className="nav__lang">
                    EN
                  </li>
                  <li onClick={() => changeHandle3()} className="nav__lang">
                    UZ
                  </li>
                </ul>
              </div>
            )}
            {uzbek && (
              <div className="nav__langs">
                <p className="nav__current-lang">{langTitle}</p>
                <span className="nav__current-lang-path" />
                <ul className="nav__langs-container">
                  <li onClick={() => changeHandle1()} className="nav__lang">
                    RU
                  </li>
                  <li onClick={() => changeHandle2()} className="nav__lang">
                    EN
                  </li>
                </ul>
              </div>
            )}
            <button onClick={() => openKorzinkaModal()} className="header-open">
              <img src={vector} alt="Vector" className="header-img" />
            </button>
          </div>
        </div>
      </div>

      <Modal shows={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>

        <ul className="header-lists">
          <li onClick={() => setKorzinkaModal()} className="header-item">
            {location?.pathname === "/" ? (
              <Link
                onClick={() => window.scrollTo({ top: 900 })}
                to="/"
                className="header-link"
              >
                {t(`f_name2`)}
              </Link>
            ) : (
              <span onClick={() => window.scrollTo({ top: 900 })}>
                <a href="/" className="header-link">
                  {t(`f_name2`)}
                </a>
              </span>
            )}
          </li>
          <li onClick={() => setKorzinkaModal()} className="header-item">
            {location?.pathname === "/" ? (
              <Link
                onClick={() => window.scrollTo({ top: 1750 })}
                to="/"
                className="header-link"
              >
                {t(`about_page_h6`)}
              </Link>
            ) : (
              <span onClick={() => window.scrollTo({ top: 1750 })}>
                <a href="/" className="header-link">
                  {t(`about_page_h6`)}
                </a>
              </span>
            )}
            {/* <a
              onClick={() => window.scrollTo({ top: 1750 })}
              href="/"
              className="header-link"
            >
              {t(`about_page_h6`)}
            </a> */}
          </li>
          <li onClick={() => setKorzinkaModal()} className="header-item">
          {location?.pathname === "/" ? (
              <Link
                onClick={() => window.scrollTo({ top: 2400 })}
                to="/"
                className="header-link"
              >
                 {t(`f3`)}
              </Link>
            ) : (
              <span onClick={() => window.scrollTo({ top: 2400 })}>
                <a href="/" className="header-link">
                   {t(`f3`)}
                </a>
              </span>
            )}
            {/* <a
              onClick={() => window.scrollTo({ top: 2400 })}
              href="/"
              className="header-link"
            >
              {t(`f3`)}
            </a> */}
          </li>
          <li onClick={() => setKorzinkaModal()} className="header-item">
          {location?.pathname === "/" ? (
              <Link
                onClick={() => window.scrollTo({ top: 2400 })}
                to="/"
                className="header-link"
              >
                  {t(`f_name3`)}
              </Link>
            ) : (
              <span onClick={() => window.scrollTo({ top: 2400 })}>
                <a href="/" className="header-link">
                {t(`f_name3`)}
                </a>
              </span>
            )}
            {/* <a
              onClick={() => window.scrollTo({ top: 2400 })}
              href="/"
              className="header-link"
            >
              {t(`f_name3`)}
            </a> */}
          </li>
          <li className="header-item">
            <a href="tel:+998995595353" className="header-btns">
              {t(`f9`)}
            </a>
          </li>
        </ul>
      </Modal>
    </header>
  );
}
