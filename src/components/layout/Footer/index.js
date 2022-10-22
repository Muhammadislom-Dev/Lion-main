import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { footer_links } from 'data';
import "./index.css"
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import logo from './Vector (50).png'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const notHomePage = location?.pathname === "/";

  useEffect(() => {
    const placeholder = document.querySelector('.placeholder')
    const footer = document.querySelector('.footer')

    updateHeight()

    window.addEventListener('resize', onResize)

    function onResize() {
      updateHeight()
    }

    function updateHeight() {
      // Placeholder should always match footer height
      placeholder.style.height = `${footer.offsetHeight}px`
    }
  }, []);

  const {t} = useTranslation()

  return (
    <>
      <div  className='placeholder' />
      <footer className='footer'>
        <div className='footer__top' style={notHomePage ? { background: "var(--pink-text)", color: "#136A61" } : {}}>
          <div className="container footer__items">
            <div className='footer__item'>
              <Link to="/">
                <img src={logo} alt="Lion Logo" className='footer__logo' />
              </Link>
              <p className='footer__text' style={notHomePage ? { opacity: 1 } : {}}>
                {t('slogan')}
              </p>
              <div className='footer__social-items'>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className='footer__social-item'>
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
              <div className='footer__item'>
                <h4 className='footer__item-title'>{t('f_name1')}</h4>
                <div className='footer__item-links'>
                   <Link onClick={() => window.scrollTo({ top: 1700 })} className='footer-link' to='/'>{t('f1')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 2400 })} className='footer-link' to='/'>{t('f2')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 3000 })} className='footer-link' to='/'>{t('f3')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 3500 })} className='footer-link' to='/'>{t('f4')}</Link>
                </div>
              </div>
              <div className='footer__item'>
                <h4 className='footer__item-title'>{t('f_name2')}</h4>
                <div className='footer__item-links'>
                   <Link onClick={() => window.scrollTo({ top: 1400 })} className='footer-link' to='/'>{t('f5')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 1400 })} className='footer-link' to='/'>{t('f6')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 1400 })} className='footer-link' to='/'>{t('f7')}</Link>
                   <Link onClick={() => window.scrollTo({ top: 1400 })} className='footer-link' to='/'>{t('f8')}</Link>
                </div>
              </div>
              <div className='footer__item'>
                <h4 className='footer__item-title'>{t('f_name3')}</h4>
                <div className='footer__item-links'>
                   <a className='footer-link' href='tel:+998995595353'>{t('f9')}</a>
                   <a className='footer-link' href='tel:+998946776769'>{t('f10')}</a>
                   <a className='footer-link' href='#'>{t('f11')}</a>
                   <a className='footer-link' href='#'>{t('f12')}</a>
                </div>
              </div>
          </div>
        </div>
        <div className='footer__copyright'>
          <p className='footer__copyright-text'>{t('f_under1')} <span>{t('f_under2')}</span>, <span>{t('f_under1')}</span></p>
        </div>
      </footer>
    </>
  )
}