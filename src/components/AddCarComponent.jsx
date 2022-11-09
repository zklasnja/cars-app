import React from 'react';

export default function AddCarComponent({ onAddCar, newCar, setNewCar, handleResetForm, handlePreviewForm }) {
    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1))
            .map((element, index) => index + start);
    }
    return (
        <div>
            <form onSubmit={onAddCar}>
                <input
                    required
                    type="text"
                    placeholder="Brand"
                    minLength="2"
                    value={newCar.brand}
                    onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
                <input
                    required
                    type="text"
                    value={newCar.model}
                    placeholder="Model"
                    minLength="2"
                    onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} />
                <select
                    value={newCar.year}
                    onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}>
                    <option default>Select year</option>
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
                        checked={newCar.isAutomatic}
                        onChange={(e) => setNewCar({ ...newCar, isAutomatic: e.target.checked ? e.target.checked : "" })} />
                </label>
                <label> diesel
                    <input
                        required
                        type="radio"
                        value="diesel"
                        checked={newCar.engine === "diesel"}
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> petrol
                    <input
                        required
                        type="radio"
                        value="petrol"
                        checked={newCar.engine === "petrol"}
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> electric
                    <input
                        required
                        type="radio"
                        value="electric"
                        checked={newCar.engine === "electric"}
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <label> hybrid
                    <input
                        required
                        type="radio"
                        value={newCar.engine === "hybrid"}
                        onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                </label>
                <button type="submit">Submit</button>
                <button onClick={handleResetForm} type="button">Reset Form</button>
                <button onClick={handlePreviewForm} type="button">Preview Form</button>
            </form>
        </div>
    )
}