import React, {useEffect, useState} from "react";
import '../../src/styles/styles.css'
import {catalogReducer} from "../../../redux/reducers";
import {fetchCategories, fetchProducts, URL} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Modal from '@mui/material/Modal';
import ProductCard from "./ProductCard";


export default function Products() {
    const dispatch = useDispatch()
    const popularity = useSelector(state => state.catalog.popularity)
    const [pop_prod, setPopProd] = useState()
    const products = useSelector(state => state.catalog.products)
    const [prod, setProd] = useState()
    const basket = useSelector(state => state.order)
    const [product, setProduct] = useState()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchPopProduct()
    }, [])

    const fetchPopProduct = async () => {
         const data = await fetch(URL + '/v1/products/popularity/')
         const items = await data.json()
        setPopProd(items.results)
    }

    console.log(pop_prod)

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
            <div className="cards">


        {
            popularity === true ?
               pop_prod === null || pop_prod === undefined
        ?
            <div> </div>
            :
            pop_prod.map(product => (

            <div className="item__card">
                <div className="item__card-rectangle">
                    <img src={product.image} alt="" className="item__card-img"/>
                    <h1 className="item__card-name">{product.name}</h1>
                    <p className="item__card-description">Цена за килограм</p>
                    <p className="item__card-price">₽ {product.price * 10}</p>

                    <button className="item__card-button" onClick={() => (handleOpen(), setProduct(product))}>

                    </button>
                </div>
        </div>
            ))
                :
            products === null
        ?
            <div> </div>
            :
            products.product.map(product => (

            <div className="item__card">
                <div className="item__card-rectangle">
                    <img src={product.image} alt="" className="item__card-img"/>
                    <h1 className="item__card-name">{product.name}</h1>
                    <p className="item__card-description">Цена за килограм</p>
                    <p className="item__card-price">₽ {product.price * 10}</p>

                    <button className="item__card-button" onClick={() => (handleOpen(), setProduct(product))}>

                    </button>
                </div>
        </div>
            ))
        }
                </div>
        </div>


    )
}