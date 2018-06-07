import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import RemHomepage from './pages/RemHomepage.jsx';
import './homepage.scss';

const Extra = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/Extra').default)
    }, "Extra")
}

const Page3 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/Page3').default)
    }, "Page3")
}

ReactDOM.render(

    <Router history={hashHistory}>
        <Route path = "/" component={RemHomepage} />
        <Route path = "Extra" getComponent={Extra} />
        <Route path = "Page3" getComponent={Page3} />
    </Router>
    , document.getElementById('root'));