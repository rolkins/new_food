import React from 'react';
import Categories from "./Categories/Categories";
import Basket from "./Basket/Basket";
import Products from "./Products/Products";
import {useDispatch, useSelector} from "react-redux";

import '../src/styles/styles.css'
import ProductCard from "./Products/ProductCard";
import Order from "../Order/Order";


export default function Catalog() {
    let a = JSON.parse(localStorage.getItem('basket'))
    if (a !== true) {
        console.log('Тыр')
    }else {
        a = a.map(function (b) {
            return b.price
        })

    }

    console.log(a)
    const ordering = useSelector(state => state.order.ordering)



    return(
        <section className="catalog">

        <div className="wrapper">

            {
                ordering
                ?
                    <Order />
                    :
                    <div>
                          <h2 className="catalog__title">
                    Наш ассортимент
                </h2>



                <div className="catalog__wrapper">
                    <Basket />

                    <Categories />

                </div>
                <Products />
                    </div>
            }

        </div>



        </section>
    )
}