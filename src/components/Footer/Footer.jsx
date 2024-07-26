import React from 'react';
import './Footer.scss';
import { FaInstagram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";  


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logos">
              <div className="footer__logo">
                <img src="/vite.svg" alt="broken" />
                <p>Для стройки и ремонта</p>
              </div>
              <button className="footer__btn">КАТАЛОГ</button>
            </div>
            <div className="footer__texts">
              <div className="footer__kat">
                <h2>Контакты</h2>
                <p>+7(912)533-40-18</p>
                <p>office@fukudamarket.ru</p>
                <div className="map">
                  <img src="/public/Link.svg" alt="broken" />
                </div>
              </div>
              <div className="footer_kont">
                <h2>О нас</h2>
                <p>О компании</p>
                <p>Преимущества</p>
                <p>Сервисный центр</p>
                <p>Сотрудничество</p>
              </div>

              <div className="footer__kat">
                <h2>Каталог</h2>
                <p>Лазерные уровни</p>
                <p>Присоски</p>
                <p>Разметочный инструмент</p>
                <p>Штативы и штанги</p>
                <p>Строительные фены</p>
              </div>

              <div className="footer__kupit">
                <h2>Купить товары</h2>
                <h3>Яндекс маркет ⯈</h3>
                <h3>Ozon ⯈</h3>
                <h3>Wildberries ⯈</h3>
                <p>Политика конфиденциальности</p>
              </div>
            </div>

            <div className="footer__footer">
              <div className="footer__icons">
                <BsWhatsapp  className="footer__icons-fs" />
                <FaInstagram  className="footer__icons-fs"/>
              </div>

              <h1 className='footer__h1-copy'>Copyright © 2023 BoomTools</h1>

              <div className="footer__footer-copy">
                <p>
                  Site made by <img src="/brand-logo.svg" alt="broken" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
