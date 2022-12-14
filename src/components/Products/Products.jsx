import React from "react";
import "./Products.css";
import mask from "./mask.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

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

  const [reklama, setReklama] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/reklama")
      .then((res) => setReklama(res.data));
  }, []);

  let activeStyle = {
    backgroundColor: "#fcd4a1",
    color: "#000",
  };

  let activeClassName = "underline";

  const { t } = useTranslation();

  const [value, setValue] = useState("");
  const handleValue = (e) => {
    if (e.target.textContent) {
      setValue(e.target.textContent);
    }
  };

  return (
    <div className="product">
      <div className="container">
        <p className="new-home">
          <a href="/">{t("cat2_h6")}</a> >{" "}
          <span className="new-span">{t("cat2_h62")}</span>
        </p>
        <div className="product-select">
          <div className="dropdown">
            <div className="dropdown">
              <button className="dropbtn">
                {value
                  ? value
                  : t('f6')}
                  <img src="https://cdn-icons-png.flaticon.com/128/54/54470.png" alt="" />
              </button>
              <div className="dropdown-content" onClick={handleValue}>
                {catalog.map((evt, i) => (
                  <div key={i}>
                    {english && (
                      <Link 
                        onClick={() => window.scrollTo({ top: 0 })}
                        id={evt.id}
                        to={`/product=${evt.id}`}
                      >
                        {evt.name_en}
                      </Link>
                    )}
                    {russian && (
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        id={evt.id}
                        to={`/product=${evt.id}`}
                      >
                        {evt.name_ru}
                      </Link>
                    )}
                    {uzbek && (
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        id={evt.id}
                        to={`/product=${evt.id}`}
                      >
                        {evt.name_uz}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
            {reklama.map((evt, i) => (
              <div className="product-item">
                {english && <h3 className="product-subname">{evt.name_en}</h3>}
                {russian && <h3 className="product-subname">{evt.name_ru}</h3>}
                {uzbek && <h3 className="product-subname">{evt.name_uz}</h3>}
                <img src={evt.image1} alt="" className="product-img" />
                <a href="/" className="product-btns">
                  {t("cat2_btn2")}
                </a>
              </div>
            ))}
          </div>
          <div className="product-right">
            {product
              .filter((e) => e.category === Number(id))
              .map((evt, i) => (
                <Link
                  onClick={() => window.scroll(0,0)}
                  to={`/aboutId=${evt.id}`}
                  className="product-link"
                >
                  <div 
                  key={i} id={evt.id} className="product-items">
                    <div className="product--items">
                      <img src={evt.image} alt="" className="product-pic" />
                    </div>
                    {english && <p className="product-names">{evt.name_en}</p>}
                    {russian && <p className="product-names">{evt.name_ru}</p>}
                    {uzbek && <p className="product-names">{evt.name_uz}</p>}

                    {english && <p className="product--names">{evt.name_en}</p>}
                    {russian && <p className="product--names">{evt.name_ru}</p>}
                    {uzbek && <p className="product--names">{evt.name_uz}</p>}
                      <Link to={`/aboutId=${evt.id}`} className="products-link">
                          {t('cat2_btn')}
                      </Link>
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
