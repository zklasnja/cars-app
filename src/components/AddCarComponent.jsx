import React from 'react';
import '../App.css';

export default function AddCarComponent({ onAddCar, newCar, setNewCar, years, handleResetForm, handlePreviewForm }) {

    return (
        <div>
            <form onSubmit={onAddCar}>
                <div className='inputs'>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Brand"
                        value={newCar.brand}
                        onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
                    <input
                        type="text"
                        className="input-text"
                        value={newCar.model}
                        placeholder="Model"
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
                        value={newCar.max_speed}
                        placeholder="Max Speed"
                        onChange={(e) => setNewCar({ ...newCar, max_speed: e.target.value })} />
                    <input
                        type="number"
                        className="input-text"
                        value={newCar.number_of_doors}
                        placeholder="Number of Doors"
                        onChange={(e) => setNewCar({ ...newCar, number_of_doors: e.target.value })} />
                </div>
                <div className='check-buttons'>
                    <label> Automatic?
                        <input
                            type="checkbox"
                            value={newCar.is_automatic}
                            checked={newCar.is_automatic}
                            onChange={(e) => setNewCar({ ...newCar, is_automatic: e.target.checked ? e.target.checked : "" })} />
                    </label>
                    <label>Diesel
                        <input
                            type="radio"
                            value="diesel"
                            checked={newCar.engine === "diesel"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Petrol
                        <input
                            type="radio"
                            value="petrol"
                            checked={newCar.engine === "petrol"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Electric
                        <input
                            type="radio"
                            value="electric"
                            checked={newCar.engine === "electric"}
                            onChange={(e) => setNewCar({ ...newCar, engine: e.target.checked ? e.target.value : "" })} />
                    </label>
                    <label>Hybrid
                        <input
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