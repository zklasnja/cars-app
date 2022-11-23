import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SingleCarComponent from '../components/AppSingleCarComponent';
import CarsService from '../services/Cars';


export default function SingleCarPage() {
    const history = useHistory();
    let { carId } = useParams();
    const [singleCar, setSingleCar] = useState();

    const handleSingleCar = async (carId) => {
        const response = await CarsService.get(carId);
        if (response) {
            setSingleCar(response);
            return response;
        }
    }

    useEffect(() => {
        if (carId) {
            handleSingleCar(carId);
        }
    }, []);

    const handleEditCar = (id) => {
        history.push(`/edit/${id}`);
    }
    
    const handleDeleteCar = async (id) => {
        const choice = window.confirm("Are you sure you want to delete this car?");
        if (!choice) return;
        await CarsService.delete(id);
        history.push(`/cars`)
    }

    return <div>
        <SingleCarComponent
            id={carId}
            singleCar={singleCar}
            onDeleteCar={handleDeleteCar}
            onEditCar={handleEditCar}
        />
    </div>
}