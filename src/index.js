import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Pnf from './components/Pnf';

const menu = (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" render={() => <Menu><App /></Menu>} />
            <Route exact path="/home" render={() => <Menu><Home /></Menu>} />
            <Route exact path="/about" render={() => <Menu><About /></Menu>} />
            <Route exact path="/contct" render={() => <Menu><Contact /></Menu>} />
            <Route exact path="**" render={() => <Menu><Pnf /></Menu>} />
        </Switch>
    </Router>
);

ReactDOM.render(menu, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
