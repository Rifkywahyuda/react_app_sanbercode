import React from 'react';
import { Switch,Route } from 'react-router-dom';

import News from './list';
import Convert from './convert';
import Home from './home'
import Counter from './counter';
import Form from './form';
import Hooks from './hooks'
/*ini bagian routing*/
const Main = ()=>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route  path="/converter" component={Convert} />
        <Route path="/news" component={News} />
        <Route path="/counter" component={Counter} />
        <Route path="/form" component={Form} />
        <Route  path="/hook" component={Hooks} />
    </Switch>
)

export default Main;