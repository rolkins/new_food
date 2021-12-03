import React, {useEffect, useState} from "react";
import '../src/styles/styles.css'
import OrderForm from "./OrderForm";
import MyBasket from "./MyBasket";
import {URL} from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';

export default function Order() {
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')))
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    const ordered = useSelector(state => state.order.created)

    const deletePosition = (bsk) => {
        console.log(basket)
        let basket1 = JSON.stringify(basket)
        let bsk1 = JSON.stringify(bsk)
        let updated_basket = basket1.replace(bsk1, null)
        localStorage.setItem('basket', updated_basket)
        setBasket(JSON.parse(localStorage.getItem('basket')))

    }

    return (
        <section className="order">
            {
                ordered ?
                    <h1>Ура, заказ создан! Наш менеджер скоро свяжется с Вами </h1>
                    :
                    <div>
             <div className="order__element-of-basket">
                <h1 className="order__element-of-basket__title">
                    Моя корзина
                </h1>

                {
                    basket === undefined
                        ?
                        <p>1</p>
                        :
                        <div>
                            {
                                basket.map(bsk =>
                                    bsk === null ?
                                        <p></p>
                                        :
                                    <div className="order__element-of-basket__item">

                                        <img src="" alt="" className="order__element-of-basket__item-img"/>
                                         <div className="card__product__content">
                                                <div className="card__product__content-image">
                                                    <img src="" alt=""/>
                                                </div>
                                                <div className="card__product-header">
                                                    <div className="card__product-header-top">
                                                          <h1 className="card__product-header-top-product_name">
                                                              {
                                                                  bsk === null ? <p></p> : bsk.position
                                                              }
                                                          </h1>

                                          <div className="card__product-header-top-add-to-fav" onClick={() => deletePosition(bsk)}>
                                                ❌
                                          </div>
                                    </div>

                        <br />

                        <p className="card__product-header-price-for-quantity">
                                Цена за килограмм: ₽{bsk.main_price}
                        </p>

                        <div className="card__product-header-ready-to-basket">


                            <p className="card__product-header-ready-to-basket__price">
                                Итого - {bsk.price} ₽ за {bsk.quantity} кг.
                            </p>
                        </div>
                    </div>
             </div>
        </div>
                                )
                            }
                        </div>
                }

            </div>
            <div className="order__form">
                {
                    check === true
                    ?
                        <div>
                            {
                    basket === undefined
                        ?
                        <p>1</p>
                        :
                        <div>
                            {
                                basket.map(bsk =>
                                    bsk === null ?
                                        <p></p>
                                        :
                                    <div className="order__element-of-basket__item">

                                        <img src="" alt="" className="order__element-of-basket__item-img"/>
                                         <div className="card__product__content">
                                                <div className="card__product__content-image">
                                                    <img src="" alt=""/>
                                                </div>
                                                <div className="card__product-header">
                                                    <div className="card__product-header-top">
                                                          <h1 className="card__product-header-top-product_name">
                                                              {
                                                                  bsk === null ? <p></p> : bsk.position
                                                              }
                                                          </h1>

                                          <div className="card__product-header-top-add-to-fav" onClick={() => deletePosition(bsk)}>
                                                ❌
                                          </div>
                                    </div>

                        <br />

                        <p className="card__product-header-price-for-quantity">
                                Цена за килограмм: ₽{bsk.main_price}
                        </p>

                        <div className="card__product-header-ready-to-basket">


                            <p className="card__product-header-ready-to-basket__price">
                                Итого - {bsk.price} ₽ за {bsk.quantity} кг.
                            </p>
                        </div>
                    </div>
             </div>
        </div>
                                )
                            }
                        </div>
                }
                            <button className="order__form-check-basket-button" onClick={() => setCheck(false)}>Вернуться к оформлению заказа</button>
                        </div>
                        :
                        <div>
                            <button className="order__form-check-basket-button" onClick={() => setCheck(true)}>Проверить корзину</button>
                            <OrderForm />

                        </div>

                }


            </div>
                    </div>
            }
        </section>
    )
}