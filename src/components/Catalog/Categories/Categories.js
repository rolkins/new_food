import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {catalogReducer} from "../../../redux/reducers";
import {fetchCategories, fetchProducts} from "../../../redux/actions";


export default function Categories() {
    const dispatch = useDispatch()
    const cat = useSelector(state => state.catalog.category)
    const [cat_id, setCatId] = useState()

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
                    <p className="type__text">
                        Популярное
                    </p>
                </li>


                {
                    cat === null ?
                        <div></div>
                        :
                        cat.map(ct => (
                             <li className="catalog__item-type" onClick={handleClick}>
                                <p className="type__text" onClick={() => dispatch(fetchProducts(ct.id))}>
                                    {ct.name}
                                </p>
                             </li>
                        ))
                }




                {/* <li className="catalog__item-type">*/}
                {/*    <p className="type__text">*/}
                {/*        Залупа*/}
                {/*    </p>*/}
                {/*</li>*/}

                {/* <li className="catalog__item-type">*/}
                {/*    <p className="type__text">*/}
                {/*        Пенис*/}
                {/*    </p>*/}
                {/*</li>*/}

                {/*<li className="catalog__item-type">*/}
                {/*    <p className="type__text">*/}
                {/*        Хер*/}
                {/*    </p>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}