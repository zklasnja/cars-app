import { useState } from "react";
import Cars from "../services/Cars";
import { useHistory } from 'react-router-dom';
import AddCarComponent from "../components/AddCarComponent";

export default function AddCar() {
    const history = useHistory();

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

    return (
        <div>
            <h2>Add new car to the records:</h2>
            <AddCarComponent
                onAddCar={onAddCar}
                newCar={newCar}
                setNewCar={setNewCar}
                years={years}
                handleResetForm={handleResetForm}
                handlePreviewForm={handlePreviewForm}
            />
        </div>
    )
}