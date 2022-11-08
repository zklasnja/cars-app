import React from "react";
import { Switch, Route } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from "./pages/AddCar";

export default function Router(){
    return (
        <Switch>
          <Route default path='/cars'>
            <AppCars />
          </Route>
          <Route path='/add'>
            <AddCar />
          </Route>
        </Switch>
    )
}