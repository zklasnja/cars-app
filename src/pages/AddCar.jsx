import { useState } from "react";
import Cars from "../services/Cars";
import { useHistory } from 'react-router-dom';

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
            Cars.add(newCar);
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


            <form onSubmit={onAddCar}>
                <input
                    required
                    type="text"
                    placeholder="Brand"
                    value={newCar.brand}
                    onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
                <input
                    required
                    type="text"
                    value={newCar.model}
                    placeholder="Model"
                    onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} />
                <select
                    onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}>
                    <option default >Select year</option>
                    {years().map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
                <input
                    type="number"
                    value={newCar.maxSpeed}
                    placeholder="Max Speed"
                    onChange={(e) => setNewCar({ ...newCar, maxSpeed: e.target.value })} />
                <input
                    required
                    type="number"
                    value={newCar.numberOfDoors}
                    placeholder="Number of Doors"
                    onChange={(e) => setNewCar({ ...newCar, numberOfDoors: e.target.value })} />
                <label> Automatic?
                    <input
                        type="checkbox"
                        value={newCar.isAutomatic}
                        onChange={(e) => setNewCar({ ...newCar, isAutomatic: e.target.checked ? e.target.checked : "" })} />
                </label>
                <label> diesel
                    <input
                        required
                        type="radio"
                        value="diesel"
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> petrol
                    <input
                        required
                        type="radio"
                        value="petrol"
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> electric
                    <input
                        required
                        type="radio"
                        value="electric"
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> hybrid
                    <input
                        required
                        type="radio"
                        value="hybrid"
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <button type="submit">Submit</button>
                <button onClick={handlePreviewForm} type="button">Preview Form</button>
                <button onClick={handleResetForm} type="button">Reset Form</button>
            </form>
        </div>
    )
}