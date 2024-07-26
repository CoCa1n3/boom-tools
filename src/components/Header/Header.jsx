import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isBurgerX, setIsBurgerX] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    toggleBurgerX();
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleBurgerX = () => {
    setIsBurgerX((prev) => !prev);
  };

  const toggleCloseMenu = () => {
    toggleBurger();
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <img src="/public/vite.svg" alt="broken" />
              <p>Для стройки и ремонта</p>
            </div>
            <div className="header__texts">
              <Link to={'/about'} className="header__text">
                О нас
              </Link>
              <Link to={'/collab'} className="header__text">
                Сотрудничество
              </Link>

              <div className="header__block">
                <input type="checkbox" id="acccordion1" />
                <label for="acccordion1">Каталог</label>

                <div className="header__box">
                  <Link to={'/'}>
                    <button className="header__box_btn border">
                      Лазерные уровни
                    </button>
                  </Link>
                  <hr />
                  <Link to={'/'}>
                    <button className="header__box_btn  border">
                      Присоски
                    </button>
                  </Link>
                  <hr />
                  <Link to={'/'}>
                    <button className="header__box_btn  border">
                      Разметочный инструмент
                    </button>
                  </Link>
                  <hr />
                  <Link to={'/'}>
                    <button className="header__box_btn  border">
                      Штативы и штанги
                    </button>
                  </Link>
                  <hr />
                  <Link to={'/'}>
                    <button className="header__box_btn">
                      Строительные фены
                    </button>
                  </Link>
                  <hr />
                </div>
              </div>
            </div>
            <div className="header__about">
              <p className="header__about-text">+7(912)533-40-18</p>
              <FaWhatsapp className="header__icons" />
              <FaYoutube className="header__icons" />
              <FaInstagram className="header__icons" />
            </div>

            <button className="header__btn">Обратный звонок</button>

            <div
              className={isBurgerX ? 'header__burger active' : 'header__burger'}
              onClick={toggleBurger}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className={isOpen ? 'header__menu active' : 'header__menu'}
              onClick={toggleBurgerX}
            >
              <div className="header__inner">
                <div className="header__inner-texts">
                  <Link to={'/about'}>
                    <h2 className="header__h2">О нас</h2>
                  </Link>
                  <Link to={'/collab'}>
                    <h2 className="header__h2">Сотрудничество</h2>
                  </Link>
                  <Link to={'/catalogs'}>
                    <h2 className="header__h2">Каталог</h2>
                  </Link>
                </div>
                <div className="header__footer">
                  <button className="header__footer-btn">КАТАЛОГ</button>
                  <div className="header__footer-logo">
                    +7(912)533-40-18
                    <div className="header__icon">
                      <FaWhatsapp className="header__icons" />
                      <FaYoutube className="header__icons" />
                      <FaInstagram className="header__icons" />
                    </div>
                  </div>
                  <div className="header__footer-copy">
                    <h3>Copyright </h3>
                    <p>
                      Site made by <img src="/brand-logo.svg" alt="broken" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
