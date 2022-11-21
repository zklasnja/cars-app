import React from "react";
import { Switch, Route } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from "./pages/AddCar";
import AppLogin from "./pages/AppLogin";

export default function Router(){
    return (
        <Switch>
          <Route default path='/cars'>
            <AppCars />
          </Route>
          <Route path='/add'>
            <AddCar />
          </Route>
          <Route path='/edit/:id'>
            <AddCar />
          </Route>
          <Route path='/delete/:id'>
            <AppCars />
          </Route>
          <Route path='/login'>
            <AppLogin />
          </Route>
        </Switch>
    )
}