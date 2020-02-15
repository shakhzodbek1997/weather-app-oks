import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import HomePage from '../src/containers/HomePage';
import ErrorPage from '../src/containers/ErrorPage';
import App from "../src/App";

const history = createBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route exact path={HomePage.path} component={HomePage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </App>
            </ConnectedRouter>
        );
    }
}


export default Routes;