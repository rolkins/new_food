import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {ordering} from "../../../redux/actions";

export default function Basket() {
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)


    useEffect(() => {
       let a = JSON.parse(localStorage.getItem('sum'))
       setSum(a.reduce((a, b) => a + b, 0))
    }, [])




    return (
        <nav className="catalog__srch">
                    <div className="catalog__search">
                        <div className="catalog__search_field_block">
                              <input type="text"
                               className="search__field"
                               placeholder="Поиск"
                               // ref={'searchRef'}
                               // value={'search_request'}
                               // onChange={'searchProduct'}
                               // onClick={() => fetchPopularity()}
                        />
                        </div>

                        <div
                            className='catalog__basket-img' onClick={() => dispatch(ordering(true))}>
                            <p className="catalog__basket-sum" >
                                    🛒 {sum} руб. Оформить заказ

                            </p>
                        </div>
                    </div>
                </nav>
    )
}