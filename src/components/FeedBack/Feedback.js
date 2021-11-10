import React, {useRef, useState} from "react";
import '../src/styles/styles.css'

export default function Feedback() {
     const [name, setName] = useState()
     const [telephone, setTelephone] = useState()
     const [is_ready, setIsReady] = useState(false)

    const nameRef = useRef();
    const telephoneRef = useRef();

    const getName = () => {
        setName(nameRef.current.value)
    }

    const getTelephone = () => {
        setTelephone(telephoneRef.current.value)
    }

    // const postFeedback = async () => {
    //     const info = {
    //         name: name,
    //         telephone: telephone,
    //     }
    //     const data = await fetch(
    //         rest_host + 'feedback/', {
    //             method: "POST",
    //             body: JSON.stringify(info),
    //             headers: {'Content-Type': 'application/json'}
    //         }
    //     )
    //     await setIsReady(true)
    //     const response = await data.json()
    //     console.log(data)
    // }

    return(
        <div className="feedmain">
            <section className="feedback">
                    <div className="wrapper">
                        { is_ready ?
                        <h1 className="feedback__annotation">
                            Спасибо! Скоро наш менеджер свяжется с Вами
                        </h1>
                            :
                            <div>
                                  <h1 className="feedback__title">
                            Остались вопросы?
                        </h1>
                        <h1 className="feedback__annotation">
                            Оставьте контакты и мы сразу же свяжемся!
                        </h1>
                        <div className="feedback-form">
                            <fieldset className="feedback-form__wrap">
                                <p className="feedback-form__info">
                                    <input type="text" className="feedback-form__name-field" placeholder="Ваше имя"
                                    onChange={getName}
                                    ref={nameRef}
                                    value={name}

                                    />
                                    <input type="text" className="feedback-form__telephone-field" placeholder="Номер телефона"
                                    onChange={getTelephone}
                                    ref={telephoneRef}
                                    value={telephone}

                                    />
                                    <button className="feedback-form__submit" onClick={() => console.log('1')}>Отправить</button>
                                </p>
                            </fieldset>
                        </div>
                            </div>
                        }

                        <div className="truck">
                        </div>

                    </div>
            </section>
        </div>
    )
}