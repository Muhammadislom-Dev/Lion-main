import { nav_items } from "data";
import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./index.css";
import vector from "./Vector (49).png";

export default function Header() {
  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

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
              <a href="#category" className="">
                Товары
              </a>
            </li>
            <li className="header__link">
              <a href="#company" className="">
                О нас
              </a>
            </li>
            <li className="header__link">
              <a href="#texno" className="">
                Производство
              </a>
            </li>
            <li className="header__link">
              <a href="#contact" className="">
                Контакты
              </a>
            </li>
          </ul>
          <a href="tel:+998995595353" className="header__btn">+998 99 559 53 53</a>
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
              Товары
            </a>
          </li>
          <li className="header-item">
            <a href="#company" className="header-link">
              О нас
            </a>
          </li>
          <li className="header-item">
            <a href="#texno" className="header-link">
              Производство
            </a>
          </li>
          <li className="header-item">
            <a href="#contact" className="header-link">
              Контакты
            </a>
          </li>
          <li className="header-item">
            <a href="tel:+998995595353" className="header-btn">
              +998 99 559 53 53
            </a>
          </li>
        </ul>
      </Modal>
    </header>
  );
}
