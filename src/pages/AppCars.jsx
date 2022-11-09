import React, { useState, useEffect } from "react";
import CarsService from '../services/Cars';

export default function AppCars(){
    const [cars, setCars] = useState();

    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);
    };
    
    useEffect(() => {
        handleGetCars()
    }, []);

    const handleEditCar = () => {

    }

    return (
    <div>
        <h2>Cars:</h2>
        <ul>
            {cars && cars.map((car) => <li key={car.id}>
            <strong>Brand:</strong> {car.brand} &nbsp;
            <strong>Model:</strong> {car.model} &nbsp;
            <strong>Year:</strong> {car.year} &nbsp;
            <strong>Max Speed:</strong> {car.maxSpeed} &nbsp;
            <strong>Is automatic:</strong> {car.isAutomatic ? "Yes" : "No"} &nbsp;
            <strong>Engine:</strong> {car.engine} &nbsp;
            <strong> No of doors:</strong> {car.numberOfDoors} &nbsp;
            <button onClick={handleEditCar}>Edit</button>
            </li>)}
        </ul>    
    </div>
    )
}