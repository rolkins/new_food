import React from "react"
import Header from "./components/HelloBlock/Header/Header";
import Intro from "./components/HelloBlock/Intro/Intro";
import Catalog from "./components/Catalog/Catalog";
import Feedback from "./components/FeedBack/Feedback";
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import {login_or_registration, logout} from "./redux/actions";
import Auth from "./components/Users/Auth";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from "./components/Admin/Admin";
import Page from "./Page";

function App() {
    const dispatch = useDispatch()
    const is_login = useSelector(state => state)

  return (

    <div className="App">

        <Router>
            <Switch>

                <Route path='/' exact component={Page} />
                <Route path='/admin' component={Admin} />
            </Switch>

        </Router>

    </div>
  );
}

export default App;
