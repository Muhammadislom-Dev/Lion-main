import React from "react";
import "./index.css";
import company from "./company.png";

const Company = () => {
  return (
    <div className="company">
      <div className="container">
        <p className="company-subnames">
          <a href="/">Home</a>
          > <span>About</span>
        </p>
        <div className="company-title">
          <div className="company-item">
            <p className="company-subname">
              Products <br /> <span style={{color:"#F6EEEC"}}>125</span>{" "}
            </p>
            <p className="company-subname">
              Collegue <br /> <span>736 ta</span>{" "}
            </p>
            <p className="company-subname">
              Director <br /> <span>Mirali Yo'ldoshev</span>{" "}
            </p>
          </div>
          <div className="company-items">
            <div className="company-about">
              <img src={company} alt="" className="company-img" />
              <h2 className="company-name">O наши компани</h2>
            </div>
            <div className="company-titles">
              <p style={{paddingTop:"40px"}} className="company-text">
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
              <img src={company} alt="" className="company-pic" />
              <p style={{paddingBottom:"50px"}} className="company-text">
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
};

export default Company;
