import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import './App.css';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>
        </Layout>
    );
}

export default App;
