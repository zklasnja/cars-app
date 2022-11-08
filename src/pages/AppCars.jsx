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
        <ul>
            {cars && cars.map((car) => <li key={car.id}>
            Brand: {car.brand} Model: {car.model} Year: {car.year} Max Speed: {car.maxSpeed} Is automatic: {car.isAutomatic} Engine: {car.engine} No of doors: {car.numberOfDoors}</li>)}
        </ul>    
    </div>
    )
}