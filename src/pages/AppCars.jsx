import React, { useEffect } from "react";
import Cars from '../services/Cars';
import { useHistory } from 'react-router-dom';
import AppCarsComponent from "../components/AppCarsComponent";
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsData } from '../store/cars/selector';
import { getAll } from "../store/cars/slice";


export default function AppCars() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cars = useSelector(selectCarsData);

    const handleGetCars = async () => {
        const cars = await Cars.getAll();
        dispatch(getAll(cars.data));
    };

    useEffect(() => {
        handleGetCars();
    }, []);

    const handleEditCar = (id) => {
        history.push(`/edit/${id}`);
    }
    
    const handleDeleteCar = async (id) => {
        const choice = window.confirm("Are you sure you want to delete this car?");
        if (!choice) return;
        await Cars.delete(id);
        
        const cars = await Cars.getAll();
        // setCars(cars);
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