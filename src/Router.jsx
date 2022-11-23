import React from "react";
import { Switch, Route } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from "./pages/AddCar";
import AppLogin from "./pages/AppLogin";
import AppLogout from "./pages/AppLogout";
import RegisterPage from "./pages/AppRegister";
import SingleCarPage from "./pages/AppSingleCar";

export default function Router(){
    return (
        <Switch>
          <Route exact path='/cars'>
            <AppCars />
          </Route>
          <Route path='/cars/:carId'>
            <SingleCarPage />
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
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <AppLogin />
          </Route>
          <Route path='/logout'>
            <AppLogout />
          </Route>
        </Switch>
    )
}