import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//import Home from "./views/Home";
import Home from "./views/Home";
import Rallies from "./components/Rallies/Rallies";
import Register from "./containers/Register/Register";
import Rally from "./components/Rally/Rally";
import Profile from "./views/Profile";
import AdminHome from "./views/AdminHome";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
    const { loading } = useAuth0();

    if (loading) {
        return <Loading />;
    }

    return (
        <Router history={history}>
            <div id='app' className='d-flex flex-column h-100'>
                <NavBar />
                <Container className='flex-grow-1 mt-5'>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/rallies' exact component={Rallies} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/rally' exact component={Rally} />
                        <PrivateRoute path='/profile' component={Profile} />
                        <PrivateRoute path='/adminHome' component={AdminHome} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
