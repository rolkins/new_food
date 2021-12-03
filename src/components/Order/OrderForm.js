import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from 'react-redux';
import {ordering, createOrder} from "../../redux/actions";
import React, {useState, useRef} from "react";
import '../src/styles/styles.css'

export default function OrderForm() {
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')))

    const dispatch = useDispatch()
    const sum1 = useSelector(state => state.order.sum_of_order)
    const [sum, setSum] = useState(12)

    const [method, setMethod] = useState('')
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [house, setHouse] = useState()
    const [flat, setFlat] = useState()
    const [email, setEmail] = useState()
    const [telephone, setTelephone] = useState()

    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const telephoneRef = useRef();
    const houseRef = useRef();
    const flatRef = useRef();
    const bonusRef = useRef()

    const getName = () => {
        setName(nameRef.current.value)
    }

    const getHouse = () => {
         setHouse(houseRef.current.value)
    }

    const getFlat = () => {
         setFlat(flatRef.current.value)
    }

    const getAddress = () => {
         setAddress(addressRef.current.value)
    }

    const getEmail = () => {
         setEmail(emailRef.current.value)
    }

    const getTelephone = () => {
        setTelephone(telephoneRef.current.value)
    }

    return (
        <div>
              <React.Fragment>
                    <h1 className="order__form-payment-method__title">
                        Метод оплаты
                    </h1>

            <div className="order__form-payment-method__methods-block"> 
                <div className="order__form-payment-method__e_money" onClick={() => setMethod('Электронные')}>
                    {
                        method === 'Электронные'
                        ?
                            <p>
                              ✅ 💻  Оплачу через сайт
                            </p>
                            :
                            <p>
                                 💻 Оплачу через сайт
                            </p>
                    }

                </div>

                <div className="order__form-payment-method__cash-to-courier" onClick={() => setMethod('Наличка')}>

                    {
                        method === 'Наличка'
                        ?
                            <p>
                                ✅ 🚴‍♂️ Оплачу наличными курьеру
                            </p>
                            :
                            <p>
                                🚴‍♂️ Оплачу наличными курьеру
                            </p>
                    }
                </div>

                <div className="order__form-payment-method__card-to-courier" onClick={() => setMethod('Карта курьеру')}>
                    {
                        method === 'Карта курьеру'
                        ?
                            <p>
                                            ✅ 💳 Оплачу картой курьеру

                            </p>
                            :
                             <p>
                                                   💳 Оплачу картой курьеру

                            </p>
                    }
                </div>

            </div>

      <Typography variant="h6" gutterBottom>
        Информация по доставке:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={getName}
            value={name}
            inputRef={nameRef}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Номер телефона"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={getTelephone}
            value={telephone}
            inputRef={telephoneRef}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Улица"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={getAddress}
            value={address}
            inputRef={addressRef}
          />
        </Grid>

        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="city"
            name="city"
            label="Номер дома"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={getHouse}
            value={house}
            inputRef={houseRef}
          />
        </Grid>

        <Grid item xs={3} sm={3}>
          <TextField
            id="state"
            name="state"
            label="Квартира"
            fullWidth
            variant="standard"
            onChange={getFlat}
            value={flat}
            inputRef={flatRef}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatch(ordering(false))}>
                    Отменить заказ
                </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
             <Button variant="contained" endIcon={<SendIcon />} onClick={() => dispatch(createOrder(method, name, address, house, flat, telephone, basket, sum))}>
                Подтвердить заказ на сумму - ₽{sum}
             </Button>
        </Grid>

      </Grid>
    </React.Fragment>
        </div>
    )
}