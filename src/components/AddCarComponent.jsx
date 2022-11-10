import React from 'react';
import '../App.css';

export default function AddCarComponent({ onAddCar, newCar, setNewCar, years, handleResetForm, handlePreviewForm }) {

    return (
        <div>
            <form onSubmit={onAddCar}>
                <div className='inputs'>
                    <input
                        required
                        type="text"
                        className="input-text"
                        placeholder="Brand"
                        minLength="2"
                        value={newCar.brand}
                        onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
                    <input
                        required
                        type="text"
                        className="input-text"
                        value={newCar.model}
                        placeholder="Model"
                        minLength="2"
                        onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} />
                    <select
                        value={newCar.year}
                        className="dropdown"
                        onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}>
                        <option default>Select year</option>
                        {years().map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        className="input-text"
                        value={newCar.maxSpeed}
                        placeholder="Max Speed"
                        onChange={(e) => setNewCar({ ...newCar, maxSpeed: e.target.value })} />
                    <input
                        required
                        type="number"
                        className="input-text"
                        value={newCar.numberOfDoors}
                        placeholder="Number of Doors"
                        onChange={(e) => setNewCar({ ...newCar, numberOfDoors: e.target.value })} />
                </div>
                <div className='check-buttons'>
                    <label> Automatic?
                        <input
                            type="checkbox"
                            value={newCar.isAutomatic}
                            checked={newCar.isAutomatic}
                            onChange={(e) => setNewCar({ ...newCar, isAutomatic: e.target.checked ? e.target.checked : "" })} />
                    </label>
                    <label>Diesel
                        <input
                            required
                            type="radio"
                            value="diesel"
                            checked={newCar.engine === "diesel"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Petrol
                        <input
                            required
                            type="radio"
                            value="petrol"
                            checked={newCar.engine === "petrol"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Electric
                        <input
                            required
                            type="radio"
                            value="electric"
                            checked={newCar.engine === "electric"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Hybrid
                        <input
                            required
                            type="radio"
                            value="hybrid"
                            checked={newCar.engine === "hybrid"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                </div>
                <div className='buttons'>
                    <button className="btn btn-blue" type="submit">Submit</button>
                    <button className="btn btn-blue" onClick={handleResetForm} type="button">Reset Form</button>
                    <button className="btn btn-blue" onClick={handlePreviewForm} type="button">Preview Form</button>
                </div>
            </form>
        </div>
    )
}