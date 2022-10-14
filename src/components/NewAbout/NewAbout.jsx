import React from "react";
import "./NewAbout.css";
import news from './new.png'

function NewAbout() {
  return (
    <div className="new">
      <div className="container">
        <p className="new-home">Home > <span className="new-span">News</span></p>
        <div className="company-title">
          <div className="company-item">
            <p className="company-subname">
              19:31  <br /> <span style={{ color: "#F6EEEC" }}>04/09/2022</span>{" "}
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
              <img src={news} alt="" className="new-img" />
              <h2 className="new-name">собираясь купить ремень женский кожаный</h2>
            </div>
            <div className="company-titles">
              <p style={{ paddingTop: "40px" }} className="company-text">
                World Textile Marketing Agency основан в 2019 году молодыми
                специалистами в области маркетинга, текстильной индустрии,
                веб-программирования, организации мероприятий, дизайна одежды и
                полиграфии. Наша команда специализируется в продвижении
                предприятий легкой промышленности на зарубежные рынки.
              </p>
              <p className="company-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing penatibus ornare Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Adipiscing penatibus ornare Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. penatibus
                ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <img src={news} alt="" className="new-pic" />
              <p style={{ paddingBottom: "50px" }} className="company-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing penatibus ornare Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Adipiscing penatibus ornare Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. penatibus
                ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
