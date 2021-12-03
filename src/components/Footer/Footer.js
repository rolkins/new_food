import React from "react";
import '../src/styles/styles.css'
import '../src/styles/mobile.css'


export default function Footer() {
    return (
        <section className="footer">
            <div className="footer__block">
                <div className="footer__block-top">
                    <div className="footer__block-top-logo">

                    </div>
                    <div className="footer__block-top-info">
                        <div className="footer__block-top-info-location">
                            <div className="footer__block-top-info-location-mark">
                                🚴‍♀️
                            </div>
                            <p className="footer__block-top-info-location-text">
                                г. Ижевск, ул. Ленина, 166 А, ТЦ «Кедр»
                            </p>
                        </div>

                        <div className="footer__block-top-info-telephone">
                            <div className="footer__block-top-info-telephone-mark">
                                ☎️
                            </div>
                            <p className="footer__block-top-info-telephone-text">
                                +7-(909)-064-36-36
                            </p>
                        </div>

                        <div className="footer__block-top-social-media">
                            <div className="footer__block-top-social-media-text">
                                Социалки:
                            </div>
                            <p className="footer__block-top-social-media-icons">
                                📸
                            </p>
                             <p className="footer__block-top-social-media-icons">
                                🐶
                            </p>
                             <p className="footer__block-top-social-media-icons">
                                🐔
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__block-bottom">
                    <div className="footer__block-bottom-info">
                        <p className="footer__block-bottom-info-any">
                             О нас
                        </p>
                        <p className="footer__block-bottom-info-any">
                            Контакты
                        </p>
                        <p className="footer__block-bottom-info-any">
                            Помощь
                        </p>
                        <p className="footer__block-bottom-info-any">
                            Политика приватности
                        </p>
                        <p className="footer__block-bottom-info-any">
                            Пользовательское соглашение
                        </p>
                    </div>
                    <p className="footer_block-bottom-copyright">
                        Пыхтит с 2020 усилиями "Дирижабль Продакшн" 🎈
                    </p>

                </div>


            </div>
        </section>
    )
}