import React, { useState, useEffect } from "react";
import Cars from '../services/Cars';
import { useHistory } from 'react-router-dom';
import AppCarsComponent from "../components/AppCarsComponent";

export default function AppCars() {
    const history = useHistory();

    const [cars, setCars] = useState();

    const handleGetCars = async () => {
        const cars = await Cars.getAll();
        setCars(cars.data);
    };

    useEffect(() => {
        handleGetCars()
    }, []);

    const handleEditCar = (id) => {
        history.push(`/edit/${id}`);
    }

    const handleDeleteCar = async (id) => {
        const choice = window.confirm("Are you sure you want to delete this car?");
        if (!choice) return;
        await Cars.delete(id);
        
        const cars = await Cars.getAll();
        setCars(cars);
    }

    return (
        <div>
            <h1><strong>Cars:</strong></h1>
            <AppCarsComponent
                cars={cars}
                onEditCar={handleEditCar}
                onDeleteCar={handleDeleteCar}
            />
        </div>
    )
}