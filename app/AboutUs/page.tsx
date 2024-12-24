"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import './style.css';

export const AboutUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__content">
          <div className="about-us__main-container about-us__main-block">
            <div className="about-us__main-mobile">
              <h2 className="about-us__title about-us__title--main">
                Про нас
              </h2>

              <p className="about-us__main-info">
                Вітаємо у Expedia! Ми — команда професіоналів, які понад 8 років створює незабутні подорожі для наших клієнтів.
              </p>

              <div className="about-us__mobile-main-image-container"></div>

              <div className="about-us__mobile-colors">
                <div className="color-block-darkcyan about-us__mobile-color-block">
                  <p className="about-us__title-counts">
                    Спеціальних Турів
                  </p>

                  <p className="about-us__counts">
                    1,000
                  </p>
                </div>
                <div className="color-block-white about-us__mobile-color-block"></div>
                <div className="color-block-cyan about-us__mobile-color-block">
                  <p className="about-us__title-counts">
                    Задоволенних мандрівників
                  </p>

                  <p className="about-us__counts about-us__counts--mobile-right">
                    250,000+
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us__main-grid about-us__main-grid--first">
              <div className="about-us__main-grid-left about-us__main-grid-left--first">
                <h2 className="about-us__title about-us__title--main">
                  Про нас
                </h2>

                <p className="about-us__main-info">
                  Вітаємо у Expedia! Ми — команда професіоналів, які понад 8 років створює незабутні подорожі для наших клієнтів.
                </p>
              </div>

              <div className="about-us__main-grid-right about-us__main-grid-right--first">
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--1"></div>
                <div className="color-block-white about-us__color-block about-us__color-block--2"></div>
                <div className="color-block-cyan about-us__color-block about-us__color-block--3">
                  <p className="about-us__title-counts">
                    Спеціальних Турів
                  </p>

                  <p className="about-us__counts">
                    1,000
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us__main-grid about-us__main-grid--second">
              <div className="about-us__main-grid-left about-us__main-grid-left--second"></div>

              <div className="about-us__main-grid-right about-us__main-grid-right--second">
                <div className="color-block-cyan about-us__color-block about-us__color-block--4"></div>
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--5">
                  <p className="about-us__title-counts">
                    Задоволенних мандрівників
                  </p>

                  <p className="about-us__counts">
                    250,000+
                  </p>
                </div>
                <div className="about-us__color-block about-us__color-block--6"></div>
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--7"></div>
              </div>
            </div>
          </div>

          <div className="about-us__why-are-we-here about-us__main-block">
            <h2 className="about-us__title">
              Чому ми <span className="about-us__title--blue">тут</span>
            </h2>

            <div className="about-us__why-are-we-here-main-info-container">
              <div className="about-us__why-are-we-here-info-container about-us__why-are-we-here-info-container--left">
                <p className="about-us__why-are-we-here-info">
                  Наша місія — створювати для Вас мандрівки, які надихають, розширюють горизонти та залишають незабутній слід у серці. Ми прагнемо зробити кожну подорож унікальною, наповненою емоціями, що надихають на нові відкриття.
                </p>
              </div>
              
              <div className="about-us__why-are-we-here-info-container about-us__why-are-we-here-info-container--right">
                <p className="about-us__why-are-we-here-info">
                  Ми віримо, що подорожі — це шлях до пізнання світу, культур, а також самих себе. Тому наша команда працює з турботою про кожну деталь, щоб Ваш відпочинок був безтурботним і максимально комфортним.
                </p>
              </div>
            </div>

            <div className="about-us__why-are-we-here-main-blocks-image-info-container">
              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--1">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--1"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Індивідуальний підхід до кожного клієнта
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--2">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--2"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Широкий вибір напрямків і турів
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--3">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--3"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Підтримка 24/7 під час подорожі
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--4">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--4"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Ексклюзивні пропозиції та партнерства
                </p>
              </div>
            </div>
          </div>

          <div className="about-us__development">
            <h2 className="about-us__title">
              Розвиток компанії
            </h2>

            <div className="about-us__development-by-years-container about-us__main-block">
              <div className="about-us__development-by-year-container about-us__development-by-year-container--2015">
                <h2 className="about-us__development-year">
                  2015
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container">
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                  </div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Наша подорож розпочалася з невеликої команди ентузіастів, які прагнули змінити підхід до організації подорожей, зробивши їх комфортними та доступними для кожного."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2017">
                <h2 className="about-us__development-year">
                  2017
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container"></div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Ми організували понад 100 турів та встановили партнерства з провідними готелями і туристичними операторами по всій країні."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2020">
                <h2 className="about-us__development-year">
                  2020
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container">
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                  </div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Розроблено унікальні авторські пропозиції, які охоплюють понад 50 напрямків. Запуск онлайн-платформи для бронювання подорожей."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2023">
                <h2 className="about-us__development-year">
                  2023
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container"></div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Досягнуто позначки у 250,000 задоволених клієнтів. Ми увійшли до рейтингу топ-10 туристичних агентств країни."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-us__about-our-team-container">
              <div className="about-us__about-our-team-absolute-image-container"></div>

              <div className="about-us__about-our-team-image-info-container">
                <div className="about-us__about-our-team-image-container"></div>

                <div className="about-us__about-our-team-info-container">
                  <p className="about-us__about-our-team-info">
                    <span className="about-us__about-our-team-info--bold">Наша команда</span> – це більше, ніж просто колектив професіоналів. Це люди, які живуть ідеєю створення ідеальних подорожей. Завдяки багаторічному досвіду та увазі до деталей ми створюємо моменти, які залишаються з вами назавжди. Ми поруч із вами на кожному кроці вашої подорожі, щоб зробити її незабутньою.
                  </p>

                  <div className="about-us__our-team-line-hashtags">
                    <div className="about-us__flex-hashtags">
                      <p className="about-us__hashtag">
                        #Команда
                      </p>

                      <p className="about-us__hashtag">
                        #Експерти
                      </p>

                      <p className="about-us__hashtag">
                        #Надійна<span className="about-us__hashtag about-us__hashtag--yellow">Підтримка</span>
                      </p>
                    </div>
                  </div>

                  <div className="about-us__our-team-line-hashtags">
                    <div className="about-us__flex-hashtags about-us__flex-hashtags--second">
                      <p className="about-us__hashtag">
                        #Турбота
                      </p>

                      <p className="about-us__hashtag about-us__hashtag--yellow">
                        #Досвід
                      </p>

                      <p className="about-us__hashtag">
                        #Професіонали
                      </p>

                      <p className="about-us__hashtag">
                        #ЗНами
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка звонка */}
      <Button
        className="call-button"
        onClick={onOpen}
        color="primary"
        radius="full"
      >
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png" alt="phone--v1"/>
      </Button>

      {/* Модальное окно */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        className="bg-[#5DB3C1CC]" 
        radius="none"
        classNames={{
         closeButton: "custom-close-button"
        }}>
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-center items-center">
              <h1 className="text-[#FFFFFF]">Хочете, зателефонуємо за 30 секунд?</h1>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>Наша команда доступна для вас в любое время. Позвоните нам, чтобы обсудить детали вашей поездки!</p>
          </ModalBody>
          <ModalFooter>
            <div className="flex flex-col items-start w-full">
              <p className="text-[#FFFFFF] text-left text-sm font-thin">Вільних операторів на лінії: 5</p>
              <p className="text-[#FFFFFF] text-left text-sm font-thin">Замовлених дзвінків за сьогодні: 20+</p>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default AboutUs;