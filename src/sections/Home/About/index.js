import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./index.css";

export default function About() {
  return (
    <section id='company' className="homeabout">
      <div className="container">
        <div className='about__left'>
          <img
            src="/assets/images/about-img.png"
            alt="About Lion"
            className='about__left-img'
          />
          <img
            src="/assets/images/about-video-btn.png"
            alt="Play video"
            className='about__left-video-btn'
          />
        </div>
        <div className='about__right'>
          <h3 className='about__right-title'>O наши компани</h3>
          <p className="about__right-text">
            World Textile Marketing Agency основан
            в 2019 году молодыми специалистами
            в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и  полиграфии.
          </p>
          <p className='about__right-text'>
            Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.
          </p>
          <Link 
            onClick={() => window.scrollTo({ top: 0 })}
            to="/company" style={{margin:"15px 0"}} className="products__modal-btn product__modal-btn">
            <span className="products__modal-btn-icon">
              <BsArrowRight />
            </span>
            <span className="products__modal-btn-text">Перейти в каталог</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
