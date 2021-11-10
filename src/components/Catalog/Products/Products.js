import React, {useState} from "react";
import '../../src/styles/styles.css'
import {catalogReducer} from "../../../redux/reducers";
import {fetchCategories, fetchProducts} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Modal from '@mui/material/Modal';
import ProductCard from "./ProductCard";


export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.catalog.products)
    const basket = useSelector(state => state.order)
    const [product, setProduct] = useState()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);


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
            products === null
        ?
            <div>1 </div>
            :
            products.product.map(product => (

            <div className="item__card">
                <div className="item__card-rectangle">
                    <img src={product.image} alt="" className="item__card-img"/>
                    <h1 className="item__card-name">{product.name}</h1>
                    <p className="item__card-description">{product.note}</p>
                    <p className="item__card-price">₽{product.price}</p>

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