import React from "react";
import AppCarsComponent from "../components/AppCarsComponent";
import CarsSearchComponent from "../components/CarsSearchComponent";

export default function AppCars() {
  return (
    <div>
      <CarsSearchComponent />
      <h1>
        <strong>Cars:</strong>
      </h1>
      <AppCarsComponent />
    </div>
  );
}
