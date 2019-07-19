import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import DetailedHouse from './components/DetailedHouse.js'
import Wizard from './components/Wizard.js';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/house/:id" component={DetailedHouse} />
        <Route path="/wizard" component={Wizard}/>
    </Switch>
)