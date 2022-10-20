import React from "react";
import "./Products.css";
import mask from "./mask.png";
import demo from "./demos.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";

function Products() {
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
    color: "#000"
  };

  let activeClassName = "underline";


  return (
    <div className="product">
      <div className="container">
        <p className="new-home">
          <a href="/">Home</a> > <span className="new-span">Products</span>
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
            {catalog.map((evt, i) => (
              <NavLink 
                  key={i}
                  id={evt.id}
                  to={`/product=${evt.id}`}
                  activeClassName="product-button"
                  className="product-buttons"
                  style={({isActive}) => isActive ? activeStyle : undefined}
                  >
                   {evt.name_en}
                <img src={mask} alt="" className="product-image" />
              </NavLink>
            ))}
            {/* <button className="product-button">
              Женские ремни <img src={mask} alt="" className="product-image" />{" "}
            </button> */}
            <div className="product-item">
              <h3 className="product-subname">Мужские ремни</h3>
              <p className="product-cost">от — $55.00</p>
              <img src={demo} alt="" className="product-img" />
              <button className="product-btns">Подробный</button>
            </div>
          </div>
          <div className="product-right">
            {product
              .filter((e) => e.category === Number(id))
              .map((evt, i) => (
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={`/aboutId=${evt.id}`}
                >
                  <div key={i} id={evt.id} className="product-items">
                    <img src={evt.image} alt="" className="product-pic" />
                    <p className="product-names">{evt.name_en}</p>
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
