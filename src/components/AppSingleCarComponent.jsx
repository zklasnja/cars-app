import React from "react";

export default function SingleCarComponent({ singleCar, onEditCar, onDeleteCar}) {
    return <div>
        <p><strong>Brand:</strong> {singleCar && singleCar.brand}</p>
        <p><strong>Model:</strong> {singleCar && singleCar.model}</p>
        <p><strong>Year:</strong> {singleCar && singleCar.year}</p>
        <p><strong>Max Speed:</strong> {singleCar && singleCar.max_speed}</p>
        <p><strong>Is automatic:</strong> {singleCar && singleCar.is_automatic ? "Yes" : "No"}</p>
        <p><strong>Engine:</strong> {singleCar && singleCar.engine}</p>
        <p><strong> No of doors:</strong> {singleCar && singleCar.number_of_doors}</p>
        <button className="btn btn-blue" onClick={() => onEditCar(singleCar.id)}>Edit</button>
        <button className="btn btn-blue" onClick={() => onDeleteCar(singleCar.id)}>Delete</button>
    </div>
}