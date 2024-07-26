import React from 'react';
import './About1.scss';
import { Link } from 'react-router-dom';

const About1 = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__cards">
              <div className="about__card-1">
                <Link to={'/'}>
                  <label htmlFor="#" className="about__lbl">
                    <btn className="about__btn"> ⯇ </btn>
                    <h3 className="about__tit">Главная → </h3>
                  </label>
                </Link>
                <h3 className="about__tex">О нас </h3>
              </div>       
              <div className="about__card-2">
                <h1 className="about__title">BOOM TOOLS</h1>

                <p className="about__text">
                  Профессиональный инструмент для строительства и ремонта
                </p>
              </div>
            </div>
            <div className="about__bg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
