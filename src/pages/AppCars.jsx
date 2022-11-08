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

    return (
    <div>
        <h2>Cars:</h2>
        <ul>
            {cars && cars.map((car) => <li key={car.id}>
            <strong>Brand:</strong> {car.brand} <strong>Model:</strong> {car.model} <strong>Year:</strong> {car.year} <strong>Max Speed:</strong> {car.maxSpeed} <strong>Is automatic:</strong> {car.isAutomatic} <strong>Engine:</strong> {car.engine} <strong> No of doors:</strong> {car.numberOfDoors}</li>)}
        </ul>    
    </div>
    )
}