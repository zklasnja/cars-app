import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import AppLogin from "./pages/AppLogin";
import RegisterPage from "./pages/AppRegister";
import SingleCarPage from "./pages/AppSingleCar";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest}>{user.token ? children : <Redirect to="/login" />}</Route>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest}>{user.token ? <Redirect to="/cars" /> : children}</Route>
  );
};

export default function Router() {
  return (
    <Switch>
      <AuthRoute exact path="/cars">
        <AppCars />
      </AuthRoute>
      <AuthRoute path="/cars/:carId">
        <SingleCarPage />
      </AuthRoute>
      <AuthRoute path="/add">
        <AddCar />
      </AuthRoute>
      <AuthRoute path="/edit/:id">
        <AddCar />
      </AuthRoute>
      <AuthRoute path="/delete/:id">
        <AppCars />
      </AuthRoute>
      <GuestRoute path="/register">
        <RegisterPage />
      </GuestRoute>
      <GuestRoute path="/login">
        <AppLogin />
      </GuestRoute>
      <AuthRoute path="/logout"></AuthRoute>
    </Switch>
  );
}
