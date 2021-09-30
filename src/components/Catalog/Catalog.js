import React from 'react';
import Categories from "./Categories/Categories";
import Basket from "./Basket/Basket";
import Products from "./Products/Products";
import '../src/styles/styles.css'


export default function Catalog() {
    return(
        <section className="catalog">

        <div className="wrapper">
               <h2 className="catalog__title">
                    Наш ассортимент
                </h2>

                <div className="catalog__wrapper">
                    <Basket />

                    <Categories />

                </div>


                <Products />
        </div>



        </section>
    )
}