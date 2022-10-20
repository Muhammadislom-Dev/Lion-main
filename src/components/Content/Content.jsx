import React from "react";
import "./Content.css";
import kamar from "./1.png";
import kamarr from "./2.png";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <p className="content-subname">
          <a href="/">Home</a> >{" "}
          <span className="content-span">Production</span>
        </p>
        <div className="content-title">
          <h3 className="content-name">
            Bizdagi Kamar ishlab chiqarish texnalogiyasi jahon standartlariga
            javob beradi
          </h3>
        </div>
        <div className="content-list">
          <p style={{paddingTop:"60px"}} className="content-text">
            World Textile Marketing Agency основан в 2019 году молодыми
            специалистами в области маркетинга, текстильной индустрии,
            веб-программирования, организации мероприятий, дизайна одежды и
            полиграфии. Наша команда специализируется в продвижении предприятий
            легкой промышленности на зарубежные рынки.
          </p>

          <div className="content-item">
            <p className="content-number">01</p>
            <img src={kamar} alt="" className="content-img" />
          </div>
          <p  className="content-text">
            World Textile Marketing Agency основан в 2019 году молодыми
            специалистами в области маркетинга, текстильной индустрии,
            веб-программирования, организации мероприятий, дизайна одежды и
            полиграфии. Наша команда специализируется в продвижении предприятий
            легкой промышленности на зарубежные рынки.
          </p>
          <div className="content-item">
            <p className="content-number">02</p>
            <img src={kamarr} alt="" className="content-img" />
          </div>
          <p className="content-text">
            World Textile Marketing Agency основан в 2019 году молодыми
            специалистами в области маркетинга, текстильной индустрии,
            веб-программирования, организации мероприятий, дизайна одежды и
            полиграфии. Наша команда специализируется в продвижении предприятий
            легкой промышленности на зарубежные рынки.
          </p>
          <div className="content-item">
            <p className="content-number">03</p>
            <img src={kamarr} alt="" className="content-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
