import React from "react";
import "./NewAbout.css";
import News from "./new.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewAbout() {
  const [news, setNew] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/news")
      .then((res) => setNew(res.data.find((e) => e.id == Number(id))));
  }, [id]);

  console.log(news);

  return (
    <div className="new">
      <div className="container">
        <p className="new-home">
          <a href="/">Home</a> > <span className="new-span">News</span>
        </p>
        <div className="company-title">
          <div className="company-item">
            <p className="company-subname">
              19:31 <br /> <span style={{ color: "#F6EEEC" }}>04/09/2022</span>{" "}
            </p>
            <p className="company-subname">
              Collegue <br /> <span>736 </span>{" "}
            </p>
            <p className="company-subname">
              Director <br /> <span>Mirali Yo'ldoshev</span>{" "}
            </p>
          </div>
          <div className="company-items">
            <div className="company-about">
              <img src={news.image1} alt="" className="new-img" />
              <h2 className="new-name">
                  {news.name_en}
              </h2>
            </div>
            <div className="company-titles">
              <p style={{ paddingTop: "40px" }} className="company-text">
                {news.description_en}
              </p>
              <p className="company-text">{news.description_en}</p>
              <img src={news.image2} alt="" className="new-pic" />
              <p style={{ paddingBottom: "50px" }} className="company-text">
                {news.description_en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
