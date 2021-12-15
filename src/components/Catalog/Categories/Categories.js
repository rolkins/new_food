import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {catalogReducer} from "../../../redux/reducers";
import {changeCat, fetchCategories, fetchProducts} from "../../../redux/actions";


export default function Categories() {
    const dispatch = useDispatch()
    const cat = useSelector(state => state.catalog.category)
    const [cat_id, setCatId] = useState()

    console.log(localStorage.getItem('user'))

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const handleClick = e => {
        var foo = document.querySelectorAll("li");

        for (var i = 0; i < foo.length; i++) {
          foo[i].classList.remove("active");
        }

        e.currentTarget.classList.add("active");

      };

    return(
        <nav className="catalog__nav">
            <ul className="catalog__list">
                <li className="catalog__item-type active" onClick={handleClick}>
                    <p className="type__text" onClick={() => dispatch(changeCat(true))}>
                        Популярное
                    </p>
                </li>


                {
                    cat === null ?
                        <div></div>
                        :
                        cat.map(ct => (
                             <li className="catalog__item-type" onClick={handleClick}>
                                <p className="type__text" onClick={() => (dispatch(fetchProducts(ct.id)), dispatch(changeCat(false)))}>
                                    {ct.name}
                                </p>
                             </li>
                        ))
                }


            </ul>
        </nav>
    )
}