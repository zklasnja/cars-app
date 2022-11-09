import React, { useState, useEffect } from "react";
import CarsService from '../services/Cars';
import { useHistory } from 'react-router-dom';

export default function AppCars(){
    const history = useHistory();

    const [cars, setCars] = useState();

    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);
    };
    
    useEffect(() => {
        handleGetCars()
    }, []);

    const handleEditCar = (id) => {
        history.push(`/edit/${id}`);
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
            <button onClick={() => handleEditCar(car.id)}>Edit</button>
            </li>)}
        </ul>    
    </div>
    )
}