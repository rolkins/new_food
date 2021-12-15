import React, {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {ordering, URL} from "../../../redux/actions";
import Modal from "@mui/material/Modal";
import ProductCard from "../Products/ProductCard";

export default function Basket() {
    const dispatch = useDispatch()
    const [request, setRequest] = useState()
    const [search_result, setSearchResult] = useState()
    const [product, setProduct] = useState()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);

    const requestRef = useRef()

    const ToSearch = async () => {

         setRequest(requestRef.current.value)

        console.log(request)
        const data = await fetch(
            URL + '/v1/products/search/?search=' + request
        )
        const result = await data.json()
        setSearchResult(result)
    }

    console.log(request)

    return (
        <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                    <ProductCard product={product}/>
                </Modal>
        <nav className="catalog__srch">
                    <div className="catalog__search">
                        <div className="catalog__search_field_block">
                              <input type="text"
                               className="search__field"
                               placeholder="Поиск"
                               ref={requestRef}
                               value={request}
                               onChange={ToSearch}

                        />
                        </div>

                        <div
                            className='catalog__basket-img' onClick={() => dispatch(ordering(true))}>
                            <p className="catalog__basket-sum" >
                                🛒
                                {
                                    localStorage.getItem('sum') === null
                                    ?
                                        '0'
                                            :
                                        JSON.parse(localStorage.getItem('sum')).reduce((a, b) => a + b, 0)
                                }

                                     руб. Оформить заказ

                            </p>
                        </div>
                    </div>
            <div>
                {
                    search_result === undefined || search_result.length === 0 || request === ''
                    ?
                        <div>

                        </div>
                        :
                        <div className="cards">

                            {search_result.map(res => (
                            <div>
                                <div className="item__card">
                                    <div className="item__card-rectangle">
                                        <img src={res.image} alt="" className="item__card-img"/>
                                        <h1 className="item__card-name">{res.name}</h1>
                                        <p className="item__card-description">Цена за килограм</p>
                                        <p className="item__card-price">₽ {res.price * 10}</p>

                                        <button className="item__card-button"
                                                onClick={() => (handleOpen(), setProduct(res))}
                                        >

                                        </button>
                            </div>
        </div>
                            </div>
                        ))}
                        </div>
                }
            </div>
                </nav>
        </div>
    )
}