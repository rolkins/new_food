import React, {useState} from "react";
import '../../src/styles/styles.css'
import { Backdrop, Fade, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {AboutUs, Contacts} from './AboutUs'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Auth from "../../Users/Auth";
import { useSelector, useDispatch } from 'react-redux';
import {login_screen} from "../../../redux/actions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1024,
  bgcolor: 'background.paper',
  p: 4,
};

export default function Header() {
    console.log(localStorage.getItem('token'))
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    console.log(status)
    const dispatch = useDispatch()
    console.log(localStorage.getItem('token'))

    return (
        <>

                     <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                         {
                             status === 'about' ?
                                  <AboutUs />
                                  :
                                  status === 'contacts' ? <Contacts />
                                  :
                                      <Box>
                                                <Auth />
                                      </Box>

                         }

             </Modal>

        <header className="header">
                <div className="wrapper">
                    <div className="header__wrapper">
                       <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item" >
                                    {
                                        localStorage.getItem('token') === null ?
                                            <p href="#"  className="header__link" onClick={() => dispatch(login_screen('1'))}>
                                                🚪 Войти
                                            </p>
                                            :
                                              <p href="#"  className="header__link" onClick={() => (localStorage.removeItem('token'), localStorage.removeItem('user'))}>
                                                🚪 Выйти
                                            </p>
                                    }

                                </li>
                                <li className="header__item" onClick={() => handleOpen(setStatus('about'))}>
                                    <p className="header__link">

                                        {/*{ profile ? <p onClick={() => logout()}> Выйти </p> :*/}
                                        {/*    <p onClick={() => handleOpenAbout()}>О нас</p> }*/}

                                        🙋‍♀️ О нас

                                    </p>
                                </li>
                                <li className="header__item">
                                    <a href="#" className="header__link" onClick={() => handleOpen(setStatus('contacts'))}>
                                        📖 Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__logo">

                        </div>

                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="" className="header__link">
                                        ⏰ Работаем с 10:00 до 22:00
                                    </a>
                                </li>
                                <li className="header__item">
                                    <a href="" className="header__link-bold">
                                        ☎️ 8-909-064-36-36
                                    </a>
                                </li>
                            </ul>
                        </nav>


                    </div>
                </div>
            </header>
        </>
    )
}