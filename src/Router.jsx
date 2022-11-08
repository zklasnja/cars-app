import React from "react";
import { Switch, Route } from 'react-router-dom';
import AppCars from './components/AppCars';

export default function Router(){
    return (
        <Switch>
          <Route default path='/cars'>
            <AppCars />
          </Route>
        </Switch>
    )
}