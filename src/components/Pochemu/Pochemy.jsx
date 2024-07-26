import React from 'react';
import { PiScalesFill } from 'react-icons/pi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import './Pochemu.scss';

const Pochemy = () => {
  return (
    <>
      <div className="icon">
        <div class="container">
          <div className="icon__wrapper">
            <h1 className="icon__main-text">Почему клиенты выбирают нас</h1>
            <div className="icon__cards">
              <div className="icon__card-1">
                <div className="icon__sud">
                  <PiScalesFill className="icon__icons" />
                  <h3 className="icon__title">Цена и качество </h3>
                  <p className="icon__text">
                    Высокое качество по доступным ценам
                  </p>
                </div>

                <div className="icon__sud">
                  <GiCardboardBoxClosed className="icon__icons" />
                  <h3 className="icon__title">Большой ассортимент</h3>
                  <p className="icon__text">
                    Создаем и дорабатываем инструменты, чтобы облегчить работу
                    для вас
                  </p>
                </div>
              </div>

              <div className="icon__card-2">
                <IoShieldCheckmarkOutline className="icon__icons" />
                <h3 className="icon__title">Контроль качества</h3>
                <p className="icon__text">
                  Проверяем товар <br />
                  на всех этапах, в том числе перед отправкой.
                </p>
              </div>

              <div className="icon__card-1">
                <div className="icon__sud">
                  <TbTruckDelivery className="icon__icons" />
                  <h3 className="icon__title">Быстрая доставка</h3>
                  <p className="icon__text">
                    Обычно до 3-х дней, но мы делаем все для ее ускорения даже в
                    самые удаленные регионы.
                  </p>
                </div>

                <div className="icon__sud">
                  <IoMdCheckmarkCircleOutline className="icon__icons" />
                  <h3 className="icon__title">Гарантия до 2-х лет</h3>
                  <p className="icon__text">
                    Проблемы с инструментом? Исправим в собственном сервисном
                    центре бесплатно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pochemy;
