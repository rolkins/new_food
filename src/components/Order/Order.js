import React from "react";
import '../src/styles/styles.css'
import OrderForm from "./OrderForm";
import MyBasket from "./MyBasket";

export default function Order() {
    const basket = JSON.parse(localStorage.getItem('basket'))

    return (
        <section className="order">
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
                                    <p>
                                         <MyBasket position={bsk.position} quantity={bsk.quantity} price={bsk.price}/>
                                    </p>
                                )
                            }
                        </div>
                }

            </div>
            <div className="order__form">
                <OrderForm />
            </div>
        </section>
    )
}