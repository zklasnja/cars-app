import React from 'react';
import { Link } from 'react-router-dom';


export default function AppCarsComponent({ cars, onEditCar, onDeleteCar }) {

    return (
        <ul>
            {cars && cars.map((car) => <li key={car.id}>
                <p><strong>Brand:</strong> {car.brand} &nbsp;
                <strong>Model:</strong> {car.model} &nbsp;
                <strong>Year:</strong> {car.year} &nbsp;
                <strong>Max Speed:</strong> {car.maxSpeed} &nbsp;
                <strong>Is automatic:</strong> {car.isAutomatic ? "Yes" : "No"} &nbsp;
                <strong>Engine:</strong> {car.engine} &nbsp;
                <strong> No of doors:</strong> {car.number_of_doors} &nbsp;
                <Link to={`/cars/${car.id}`}>View</Link>
                <button className="btn btn-blue" onClick={() => onEditCar(car.id)}>Edit</button>
                <button className="btn btn-blue" onClick={() => onDeleteCar(car.id)}>Delete</button>
                </p>
            </li>
            )}
        </ul>
    )
}