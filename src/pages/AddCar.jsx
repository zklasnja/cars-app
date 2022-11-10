import React, { useState, useEffect } from "react";
import Cars from "../services/Cars";
import { useHistory, useParams } from 'react-router-dom';
import AddCarComponent from "../components/AddCarComponent";

export default function AddCar() {
    const history = useHistory();
    let { id } = useParams();

    const [newCar, setNewCar] = useState({
        brand: "",
        model: "",
        year: "",
        maxSpeed: "",
        numberOfDoors: "",
        isAutomatic: false,
        engine: "",
    });

    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1))
            .map((element, index) => index + start);
    }

    const onAddCar = (e) => {
        e.preventDefault();

        const handleAddCar = async () => {
            await Cars.add(newCar);
        }
        if (handleAddCar) {
            handleAddCar();
            history.push('/cars');
        }
    }

    const onEditCar = (e) => {
        e.preventDefault();
        
        const handleEditCar = async () => {
            await Cars.edit(id, newCar);
        }
        if (handleEditCar) {
            handleEditCar();
            history.push('/cars');
        }
    }

    const handlePreviewForm = () => {
        alert(JSON.stringify(newCar));
    }

    const handleResetForm = () => {
        setNewCar({
            brand: "",
            model: "",
            year: "",
            maxSpeed: "",
            numberOfDoors: "",
            isAutomatic: false,
            engine: "",
        })
    }

    const handleGetSingleCar = async (id) => {
        if (id) {
            const response = await Cars.get(id);
            setNewCar(response);
        }
    }

    useEffect(() => {
        if (id) {
            handleGetSingleCar(id)
        }
    }, []);

    return (
        <div>
            <h2>Add new car to the records:</h2>
            <AddCarComponent
                onAddCar={id ? onEditCar : onAddCar}
                newCar={newCar}
                setNewCar={setNewCar}
                handleResetForm={handleResetForm}
                handlePreviewForm={handlePreviewForm}
                years={years}
            />
        </div>
    )
}