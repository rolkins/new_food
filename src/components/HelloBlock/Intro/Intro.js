import React from 'react'
import '../../src/styles/styles.css'
import Header from "../Header/Header";


export default function Intro() {
    return(
        <div>

            <Header />

            <main className="main">
                <section className="intro">
                    <div className="wrapper">

                        <h1 className="intro__title">
                            Доставка полезной еды в Ижевске
                        </h1>
                        <p className="intro__subtitle">
                            Продающий текст // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="vegetables" />
                    </div>
                </section>
            </main>
        </div>

    )
}