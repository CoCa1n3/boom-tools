import React from 'react';
import './Service.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { CiClock2 } from 'react-icons/ci';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { PiWrenchFill } from "react-icons/pi";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="service__wrapper">
            <div className="service__card-1">
              <h1 className="servie__title">Сервисный центр</h1>
              <p className="service__text">
                На весь инструмент BOOM TOOLS предоставляется гарантийное
                сервисное обслуживание
              </p>

              <div className="service__card">
                <IoMdCheckmarkCircleOutline className="service__icons" />
                <h2 className="service__card-text">Гарантия до 2-х лет</h2>
              </div>

              <div className="service__card">
                <HiMiniWrenchScrewdriver className="service__icons" />
                <h2 className="service__card-text">
                  Сервисный ремонт для негарантийных случаев
                </h2>
              </div>

              <div className="service__card">
                <CiClock2 className="service__icons" />
                <h2 className="service__card-text">Кратчайшие сроки</h2>
              </div>

              <div className="service__card">
                <PiWrenchFill  className="service__icons" />
                <h2 className="service__card-text">
                  Принимаем в ремонт по всей России
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
