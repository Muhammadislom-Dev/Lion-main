import React from "react";
import "./Products.css";
import mask from "./mask.png";
import demo from "./demos.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setProduct(res.data));
  }, []);

  console.log(product);

  return (
    <div className="product">
      <div className="container">
        <p className="new-home">
          Home > <span className="new-span">Products</span>
        </p>
        <h2 className="product-name">
          Наши{" "}
          <span className="product-span">
            продукты <p className="product-subtext">один твой</p>{" "}
          </span>{" "}
        </h2>
        <div className="product-title">
          <div className="product-left">
            <button className="product-btn">Мужские ремни</button>
            <button className="product-button">
              Женские ремни <img src={mask} alt="" className="product-image" />{" "}
            </button>
            <div className="product-item">
              <h3 className="product-subname">Мужские ремни</h3>
              <p className="product-cost">от — $55.00</p>
              <img src={demo} alt="" className="product-img" />
              <button className="product-btns">Подробный</button>
            </div>
          </div>
          <div className="product-right">
            {product.map((evt, i) => (
              <div className="product-items">
                <img src={evt.image} alt="" className="product-pic" />
                <p className="product-names">{evt.name_en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
