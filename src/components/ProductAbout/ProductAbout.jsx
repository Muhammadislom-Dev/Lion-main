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

  const [top, setTop] = useState([]);

  useEffect(() => {
    axios
      .get("https://lion.abba.uz/api/products/")
      .then((res) => setTop(res.data));
  }, []);

  //Bot meesage

  const formBtn = (e)=>{
 
    e.preventDefault();
//  console.log(e)
        if (e.target[0].value.length > 0
             && e.target[1].value.length > 0 
               ) {

            let botMessege = `
                 Salom, Yangi Xabar!😊%0A
                 Ismi 👤: ${e.target[0].value}%0A
                 Raqam ☎: ${e.target[1].value}%0A 
                           
            `;
     
            let url =`https://api.telegram.org/bot5407892565:AAGcvMnAPpnfj5a5zU2rG5sCYPifARtAmV0/sendMessage?chat_id=-1001549647557&text=${botMessege}`;
        //   console.log(url)
            async function fetchAsync(url) {
              let response = await fetch(url);
            //   console.log(response,"1-si")
              let data = await response.json();
            // console.log(data,"2-si")
              return data;
               
            }
            fetchAsync(url);

            if(document.querySelector("#name").matches(".input-error")){
                document.querySelector("#name").classList.remove("input-error")       
                document.querySelector("#errorText").classList.remove("error-text1")
                document.querySelector("#closestBtn").classList.remove("close1-btn")  
                document.querySelector("#closestBtn1").classList.remove("closes-btn1") }
            if(document.querySelector("#tel").matches(".tel-error")){
                document.querySelector("#tel").classList.remove("tel-error")
                 document.querySelector("#errorTel").classList.remove("error-tel1")
                 document.querySelector("#closestBtn").classList.remove("modal-closest-btn")
                 document.querySelector("#closestBtn").classList.remove("close1-btn")  
                 document.querySelector("#closestBtn1").classList.remove("closes-btn1")
            }
           

            e.target[0].value=""
            
       
            e.target[1].value=""       
            
            // e.target[2].value=""  
              
            
    } 
    else{
        if(e.target[0].value.length < 1 ){
            
            document.querySelector("#name").classList.add("input-error")
           document.querySelector("#errorText").classList.add("error-text1")

           document.querySelector("#closestBtn").classList.add("close1-btn")  
           document.querySelector("#closestBtn1").classList.add("close2-btn")
    
        }
        if(e.target[1].value.length < 1){
            document.querySelector("#tel").classList.add("tel-error")
            document.querySelector("#errorTel").classList.add("error-tel1")
            document.querySelector("#closestBtn").classList.add("modal-closest-btn")
            document.querySelector("#closestBtn").classList.add("close1-btn")  
            document.querySelector("#closestBtn1").classList.add("close2-btn")
        } 
        // if(e.target[2].value.length < 1){
        //     document.querySelector("#textarea").classList.add("error-info")
        //     document.querySelector("#errorInfo").classList.add("error-info1")
        //     document.querySelector("#closestBtn").classList.add("modal-closest-btn")
        //     document.querySelector("#closestBtn").classList.add("close1-btn")  
        //     document.querySelector("#closestBtn1").classList.add("close2-btn")
        // }  
    }
  
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
            <Link
              onClick={() => window.scrollTo({ top: 0 })}
              to="/"
              className="about-links"
            >
              <img src={mask} alt="" className="about-logo" /> Назад
            </Link>

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

            <p className="about--text">это твой</p>
            <div className="about-product">
              {top.map((evt, i) => (
                <Link to={`/aboutId=${evt.id}`}>
                  <div
                    key={i}
                    style={{ margin: "5px" }}
                    id={evt.id}
                    className="product-items about--items"
                  >
                    <img
                      src={evt.image}
                      alt=""
                      className="product-pic about--pic"
                    />
                    <p className="product-names">{evt.name_en}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal show={korzinkaModal}>
        <button onClick={() => setKorzinkaModal()} className="modal-closes">
          &times;
        </button>
        <div className="modal-pages">
          <div className="modal-title">
            <p className="modal-name">это твой</p>
            <form  id="myForm" onSubmit={formBtn}  className="modal-form">
              <input
                name="name" id="name" type="text"
                placeholder="Имя"
                required
                className="modal-input"
              />
              <input
                id="tel" type="number" name='tel'
                placeholder="ТЕЛЕФОН НОМЕР"
                required
                className="modal-input"
              />
              <button id="btnSubmit" type='submit' className="modal-btn">ОТПРАВИТЬ</button>
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
