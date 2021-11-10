import React from "react";
import '../../src/styles/styles.css'
import { Link } from "react-router-dom";

export function AboutUs() {
    return (
        <div className="about__us">
                            <div className="about__us-left">
                                 <h1 className="contact__our-contacts">
                                     О нас
                            </h1>
                            <div className="contact__telephone-address">

                                <p className="contact__info-block">
                                    Здравствуйте. Меня зовут Елизавета. Я являюсь
                                    директором и владельцем компании Eco.Fruits по продаже продуктов питания.

                                    В данном бизнесе мы находимся уже более 15 лет. С каждым годом мы растем и
                                    развиваемся. И сейчас, со своей командой мы решили сделать очередной шаг вперёд.
                                    Мы запускаем свой сайт и доставку продкутов по городу Ижевск.
                                </p>
                                <br/>

                            </div>
                            <h2 className="contact__info">
                                Кто наши поставщики?
                            </h2>
                            <div className="contact__info-block">
                                 <p className="contact__info-ip">
                                     Наши поставщики это фермеры и небольшие производства,
                                     которые выращивают и производят натуральные продукты. Каждый из наших поставщиков,
                                     представляет сертификат на каждую продукцию
                                 </p>
                            </div>

                             <h2 className="contact__info">
                                Мы разбираемся в продуктах
                            </h2>
                            <div className="contact__info-block">
                                 <p className="contact__info-ip">
                                     У нас лучшее качество продуктов. Наши комплектовщики
                                     аккуратно собирают заказ, вручную только лучшее для вас.
                                 </p>
                                <h2 className="contact__info">
                                Сроки годности
                            </h2>
                            <div className="contact__info-block">
                                 <p className="contact__info-ip">Мы не допускаем продукты с истёкшим сроком годности и
                                     отправляем клиенту только свежее. У нас два раза в день поставка фруктов, овощей и
                                     зелени. Категорически запрещается отправка на последнем дне срока годности.
                                 </p>
                            </div>
                            </div>
                            </div>
                       </div>
    )
}

export function Contacts() {
    return (
        <div className="contact">
                            <div className="contact__left">

                                 <h1 className="contact__our-contacts">
                                Наши контакты:
                                </h1>

                            <div className="contact__telephone-address">

                                <p className="contact__telephone">Контактный телефон: 8-909-064-36-36</p>
                                <br/>
                                <p className="contact__address">Юридический адрес: 426068, УР, г. Ижевск, улица Сабурова, д. 47, кв. 27</p>

                            </div>

                            <h2 className="contact__info">
                                Реквизиты
                            </h2>

                            <div className="contact__info-block">

                                 <p className="contact__info-ip">ИП Васильева Елена Витальевна</p>
                                    <p className="contact__info-inn">ИНН 1834404136091</p>
                                    <p className="contact__info-ogrn">ОГРН 305184009600049</p>

                            </div>

                             <h2 className="contact__info">
                                Способы оплаты
                            </h2>
                            <div className="contact__info-block">
                                 <p className="contact__info-ip">Банковские карты (Visa, Mastercard, Maestro, Мир)</p>
                                    <p className="contact__info-ogrn">Наличными при получении заказа</p>
                                    <p className="contact__info-inn">Apple Pay, Google Pay</p>
                                    <p className="contact__info-ogrn">Оплата из электронных кошельков (Яндекс.Деньги)</p>

                            </div>
                                 <div className="contact__info-block">
                                    <p className="contact__info-ogrn">
                                         Ознакомиться с нашим пользовательским соглашением
                                        <>
                                            можно здесь
                            </></p>
                            </div>


                            </div>
                        </div>
    )
}