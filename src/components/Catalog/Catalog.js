import React from 'react';
import Categories from "./Categories/Categories";
import Basket from "./Basket/Basket";
import Products from "./Products/Products";


export default function Catalog() {
    return(
        <div>
            <h1>Наш ассортимент!</h1>
            <Categories />
            <Basket />
            <Products />
        </div>
    )
}