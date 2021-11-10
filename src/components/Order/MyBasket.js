import React from "react";
import '../src/styles/styles.css'

export default function MyBasket(position) {

    console.log(position)
    return (
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
                                      position.position
                                  }
                              </h1>

                              {/*<div className="card__product-header-top-add-to-fav">*/}
                              {/*      ❤️*/}
                              {/*</div>*/}
                        </div>

                        <br />

                        <p className="card__product-header-price-for-quantity">
                                Цена за килограмм: ₽334
                        </p>

                        <div className="card__product-header-ready-to-basket">
                            <div className="card__product-header-ready-to-basket__specify-quantity">
                                <div className="card__product-header-ready-to-basket__specify-quantity-minus">
                                    --
                                </div>
                                <input type="text"
                                       className="card__product-header-ready-to-basket__specify-quantity-input"/>
                                <div className="card__product-header-ready-to-basket__specify-quantity-plus">
                                    +
                                </div>
                            </div>

                            <p className="card__product-header-ready-to-basket__price">
                                Итого - {position.price} ₽ за {position.quantity} кг.
                            </p>
                        </div>
                    </div>
             </div>
        </div>
    )
}