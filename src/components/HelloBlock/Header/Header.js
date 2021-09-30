import React from "react";
import '../../src/styles/styles.css'

export default function Header() {
    return (
        <header className="header">
                <div className="wrapper">
                    <div className="header__wrapper">
                       <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <p href="#"  className="header__link">
                                        {/*{ profile ? profile.user_email : <p onClick={() => handleOpen()}>Войти</p> }*/}
                                        Войти
                                    </p>
                                </li>
                                <li className="header__item">
                                    <p className="header__link">

                                        {/*{ profile ? <p onClick={() => logout()}> Выйти </p> :*/}
                                        {/*    <p onClick={() => handleOpenAbout()}>О нас</p> }*/}

                                        О нас

                                    </p>
                                </li>
                                <li className="header__item">
                                    <a href="#" className="header__link" >
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__logo">

                        </div>

                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="" className="header__link">
                                        Работаем с 10:00 до 22:00
                                    </a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__link-bold">
                                        8-909-064-36-36
                                    </a>
                                </li>
                            </ul>
                        </nav>


                    </div>
                </div>
            </header>
    )
}