import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {ordering} from "../../../redux/actions";

export default function Basket() {
    const dispatch = useDispatch()
    const sum1 = useSelector(state => state.order.sum_of_order)
    const [sum, setSum] = useState(sum1)
    let a = JSON.parse(localStorage.getItem('sum'))

    console.log(sum1)

    // useEffect(() => {
    //   let a = JSON.parse(localStorage.getItem('sum'))
    //     if(a !== true) {
    //         console.log(a)
    //     } else {
    //         setSum(a.reduce((a, b) => a + b, 0))
    //     }
    //
    // }, [])
    



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
                                🛒
                                {
                                    a === null ?
                                       ''
                                        :
                                    sum1 === null ? a.reduce((a, b) => a + b, 0)
                                        :
                                    sum1
                                }
                                     руб. Оформить заказ

                            </p>
                        </div>
                    </div>
                </nav>
    )
}