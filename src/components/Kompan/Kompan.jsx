import React from 'react';
import './Kompan.scss';

const Kompan = () => {
  return (
    <>
      <div className="komp">
        <div className="container">
          <div className="komp__wrapper">
            <h1>О компании</h1>
            <div className="komp__cards">
              <div className="komp__card poiuytrewq">
                <img
                  src="https://st2.depositphotos.com/1001335/9340/i/450/depositphotos_93401314-stock-photo-concept-of-construction-and-design.jpg"
                  alt=""
                />
              </div>

              <div className="komp__card poiuytrewq textsss">
                <h1 className="komp__title">Бендас Тимофей</h1>
                <p>Генеральный директор и основатель бренда </p>
              </div>

              <div className="komp__card poiuytrewq poiuytr">
                <img src="/boomkomp.png" alt="broken" />
              </div>

              <div className="komp__card poiuy">
                <p>
                  В Boom Tools мы стремимся быть ведущим поставщиком
                  строительного инструмента и товаров для дома и ремонта,
                  предлагая нашим клиентам высококачественные продукты по
                  доступной цене.
                </p>
                <p>
                  Наша цель - предоставить широкий ассортимент продукции,
                  который удовлетворит потребности как опытных строителей, так и
                  любителей домашних ремонтных работ. Мы готовы предоставить
                  высококлассный сервис и гарантированное обслуживание для
                  каждого из наших клиентов. 
                </p>

                <p>
                  Вместе с Boom Tools вы можете быть уверены, что получите
                  надежный инструмент для ваших проектов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kompan;
