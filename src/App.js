import React from "react"
import Header from "./components/HelloBlock/Header/Header";
import Intro from "./components/HelloBlock/Intro/Intro";
import Catalog from "./components/Catalog/Catalog";
import Feedback from "./components/FeedBack/Feedback";
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import {login_or_registration, logout} from "./redux/actions";
import Auth from "./components/Users/Auth";

function App() {
    const dispatch = useDispatch()
    const is_login = useSelector(state => state)

  return (
    <div className="App">
        {
            is_login.login.login_screen === false
                ?
                <div>
                         <Intro />
                         <Catalog />
                         <Feedback />
                         <Footer />
                </div>
                :
                <div>
                    <Auth />
                </div>

        }

    </div>
  );
}

export default App;
