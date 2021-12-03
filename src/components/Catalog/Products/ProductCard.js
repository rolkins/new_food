import React, {useState, useRef} from "react";
import '../../src/styles/styles.css'
import { useSelector, useDispatch } from 'react-redux';
import {addProductToBasket} from "../../../redux/actions";
import Alert from '@mui/material/Alert';

export default function ProductCard(props) {
    const dispatch = useDispatch()

    const [position, setPosition] = useState()
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(props.product.price)
    const [added, setAdded] = useState(false)

    const quantityRef = useRef()

    const getQuantity = () => {
        setQuantity(quantityRef.current.value)
    }

    let close = document.querySelectorAll('.card')

    for(let card of close) {
        card.insertAdjacentHTML("afterbegin", '<button class="remove-button">.</button>');
        card.firstChild.onclick = () => card.remove();
    }

    return (
        
        <section className='card'>
            <div className="card__product">

                <div className="card__product-top">
                    <img src={props.product.image} alt="" className="card__product-top-image"/>
                </div>

                <div className="card__product__content">
                    <div className="card__product-header">
                        <div className="card__product-header-top">
                              <h1 className="card__product-header-top-product_name">
                                  {props.product.name}
                              </h1>

                              <div className="card__product-header-top-add-to-fav">
                                    ❤️
                              </div>
                        </div>

                        <br />

                        <p className="card__product-header-price-for-quantity">
                                Цена за килограмм: ₽{props.product.price * 10}
                        </p>

                        <div className="card__product-header-ready-to-basket">
                            <div className="card__product-header-ready-to-basket__specify-quantity">
                                <div className="card__product-header-ready-to-basket__specify-quantity-minus"
                                onClick={() => setQuantity(quantity - 1)}
                                >
                                    –
                                </div>
                                <input type="text"
                                       className="card__product-header-ready-to-basket__specify-quantity-input"
                                       value={quantity}
                                       ref={quantityRef}
                                       onChange={getQuantity}
                                />
                                <div className="card__product-header-ready-to-basket__specify-quantity-plus"
                                 onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </div>
                            </div>

                            <p className="card__product-header-ready-to-basket__price">
                                Итого - {price * quantity * 10}₽
                            </p>
                        </div>
                    </div>

                    <div className="card__product__description">
                        <h1 className="card__product__description-text-head">
                            Описание продукта
                        </h1>
                        <p className="card__product__description-text-paragraph">
                            {props.product.description}
                        </p>
                    </div>

                    <button className="card__product__button" onClick={
                        () => (dispatch(addProductToBasket(props.product.id, props.product.name, quantity, price * quantity * 10, props.product.price * 10   )), setAdded(true))
                    }>
                        <p className="card__product__button-text">
                                {added === false ? 'Добавить в корзину' : 'Товар теперь в корзине!'}
                        </p>
                    </button>

                </div>




            </div>
        </section>
    )
}