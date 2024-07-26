import React from 'react';
import './Boom.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GrServices } from 'react-icons/gr';
import { TbTruckDelivery } from 'react-icons/tb';

const Boom = () => {
  return (
    <>
      <div className="boom">
        <div className="container">
          <div className="boom__wrapper">
            <div className="boom__cards">
              <h1 className="boom__title">BOOM TOOLS</h1>
              <p className="boom__text">
                Профессиональный инструмент для строительства и ремонта
              </p>

              <div className="boom__card">
                <div className="boom__fist">
                  <IoMdCheckmarkCircleOutline className="boom__icons" />
                  <p className="boom__fist-text">
                    Два года гарантийного обслуживания
                  </p>
                </div>

                <div className="boom__fist  boom__second">
                  <GrServices className="boom__icons" />
                  <p className="boom__fist-text">Собственный сервисный центр</p>
                </div>

                <div className="boom__fist">
                  <TbTruckDelivery className="boom__icons" />
                  <p className="boom__fist-text">Быстрая доставка до 3 дней</p>
                </div>
              </div>
            </div>

            <img src="/container.png" alt="broken" className="boom__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Boom;
