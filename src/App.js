import axios from "axios";
import { Footer, Header } from "components";
import Company from "components/Company";
import Content from "components/Content/Content";
import NewAbout from "components/NewAbout/NewAbout";
import ProductAbout from "components/ProductAbout/ProductAbout";
import Products from "components/Products/Products";
import Home from "pages/Home";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

export default function App() {
  
  const { t, i18n } = useTranslation();

  const [english, setEnglish] = useState(true);
  const [russian, setRussian] = useState(false);
  const [uzbek, setUzbek] = useState(false);
  const [langTitle, setLangTitle] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng").toUpperCase()
      : ""
  );

  function change1(item) {
    i18n.changeLanguage("ru");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setRussian(item);
    setEnglish(!item);
    setUzbek(!item);
  }
  function change2(item) {
    i18n.changeLanguage("en");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setEnglish(item);
    setRussian(!item);
    setUzbek(!item);
  }
  function change3(item) {
    i18n.changeLanguage("uz");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setUzbek(item);
    setEnglish(!item);
    setRussian(!item);
  }

  window.addEventListener("load", () => {
    setRussian(true);
    setEnglish(false);
    localStorage.setItem("i18nextLng", "en");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
  });

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/categories/")
      .then((res) => setCatalog(res.data));
  }, []);

  return (
    <>
      <div className="parallax-container">
        <Header
          langTitle={langTitle}
          change1={change1}
          change2={change2}
          change3={change3}
          english={english}
          russian={russian}
          uzbek={uzbek}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                langTitle={langTitle}
                english={english}
                russian={russian}
                uzbek={uzbek}
              />
            }
          />
          <Route path="/companes" element={<Company />} />
          <Route
            path="/product=:id"
            element={
              <Products
                langTitle={langTitle}
                english={english}
                russian={russian}
                uzbek={uzbek}
                
              />
            }
          />
          <Route
            path="/blog=:id"
            element={
              <NewAbout english={english} russian={russian} uzbek={uzbek} />
            }
          />
          <Route
            path="/aboutId=:id"
            element={
              <ProductAbout english={english} russian={russian} uzbek={uzbek} />
            }
          />
          <Route path="/texno" element={<Content />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
