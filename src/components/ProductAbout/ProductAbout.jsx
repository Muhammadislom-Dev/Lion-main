import React, { useEffect, useState } from "react";
import "./ProductAbout.css";
import mask from "./mask.png";
import demos from "../Products/demos.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "subcomponents/Modal/Modal";

function ProductAbout() {
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
          <li className="about-item">{product.name_en}</li>
        </ul>

        <h2 className="about-name">{product.name_en}</h2>

        <div className="about-title">
          <div className="about-left">
            <a href="#" className="about-links">
              <img src={mask} alt="" className="about-logo" /> Назад
            </a>

            <div className="about-items">
              <h3 className="about-subnames">Мужские ремни</h3>
              <p className="about-cost">от — $55.00</p>
              <img src={demos} alt="" className="about-img" />
              <button className="product-btns">Подробный</button>
            </div>
          </div>

          <div className="about-right">
            <div className="about__rights">
              <div className="about-titles">
                <h3 className="about-names">Мужские ремни</h3>
                <p className="about-text">{product.description_en}</p>
                <div className="about-box">
                  <ul className="about--list">
                    <li className="about--item">Articul:</li>
                    <li className="about--item">category:</li>
                    <li className="about--item">Country:</li>
                    <li className="about--item">Weight:</li>
                    <li className="about--item">class:</li>
                    <li className="about--item">uniform:</li>
                  </ul>
                  <ul className="about--list">
                    <li className="about--item">A13-b</li>
                    <li className="about--item">Мужской</li>
                    <li className="about--item">Uzbekistan</li>
                    <li className="about--item">35sm</li>
                    <li className="about--item">premium</li>
                    <li className="about--item">classic</li>
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

            {/* <p className="about--text">это твой</p>
            <div className="about-product">
              {product.map((evt, i) => (
                <Link to={`/aboutId=${evt.id}`}>
                  <div key={i}
                  style={{margin:"5px",}}
                  id={evt.id} className="product-items about--items">
                    <img src={evt.image} alt="" className="product-pic" />
                    <p className="product-names">{evt.name_en}</p>
                  </div>
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <Modal show={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>
        <div className="modal-page">
          <div className="modal-title">
            <p className="modal-name">это твой</p>
            <form action="" className="modal-form">
              <input
                type="text"
                placeholder="Имя"
                required
                className="modal-input"
              />
              <input
                type="tell"
                name="tell"
                placeholder="ТЕЛЕФОН НОМЕР"
                required
                className="modal-input"
              />
              <button className="modal-btn">ОТПРАВИТЬ</button>
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
