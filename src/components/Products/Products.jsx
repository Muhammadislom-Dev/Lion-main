import React from "react";
import "./Products.css";
import mask from "./mask.png";
import demo from "./demos.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Products({ uzbek, english, russian }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setProduct(res.data));
  }, []);

  var { id } = useParams();

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/categories/")
      .then((res) => setCatalog(res.data));
  }, []);

  let activeStyle = {
    backgroundColor: "#fcd4a1",
    color: "#000",
  };

  let activeClassName = "underline";

  const { t } = useTranslation();

  return (
    <div className="product">
      <div className="container">
        <p className="new-home">
          <a href="/">{t("cat2_h6")}</a> >{" "}
          <span className="new-span">{t("cat2_h62")}</span>
        </p>
        <h2 className="product-name">
          {t("cat2_h1")}
          <span className="product-span">
            <p className="product-subtext">{t("cat2_h2")}</p>{" "}
          </span>{" "}
        </h2>
        <div className="product-title">
          <div className="product-left">
            {catalog.map((evt, i) => (
              <NavLink
                key={i}
                id={evt.id}
                to={`/product=${evt.id}`}
                activeClassName="product-button"
                className="product-buttons"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {english && <p>{evt.name_en}</p>}
                {russian && <p>{evt.name_ru}</p>}
                {uzbek && <p>{evt.name_uz}</p>}
                <img src={mask} alt="" className="product-image" />
              </NavLink>
            ))}
            <div className="product-item">
              <h3 className="product-subname">Мужские ремни</h3>
              <p className="product-cost">от — $55.00</p>
              <img src={demo} alt="" className="product-img" />
              <button className="product-btns">{t("cat2_btn2")}</button>
            </div>
          </div>
          <div className="product-right">
            {product
              .filter((e) => e.category === Number(id))
              .map((evt, i) => (
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={`/aboutId=${evt.id}`}
                  className="product-link"
                >
                  <div key={i} id={evt.id} className="product-items">
                    <div className="product--items">
                       <img src={evt.image} alt="" className="product-pic" />
                    </div>
                    {english && <p className="product-names">{evt.name_en}</p>}
                    {russian && <p className="product-names">{evt.name_ru}</p>}
                    {uzbek && <p className="product-names">{evt.name_uz}</p>}


                    {english && <p className="product--names">{evt.name_en}</p>}
                    {russian && <p className="product--names">{evt.name_ru}</p>}
                    {uzbek && <p className="product--names">{evt.name_uz}</p>}
                    <Link to={`/aboutId=${evt.id}`} className="products-link">Купи сейчас</Link>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
