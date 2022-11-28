import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cars from "../services/Cars";
import { useDispatch } from "react-redux";
import { getAll } from "../store/cars/slice";

export default function AppCarRow({
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  number_of_doors,
  id,
  selectedCarsIds,
  setSelectedCarsIds,
}) {
  const history = useHistory();
  const dispath = useDispatch();
  const isSelected = selectedCarsIds.includes(id);

  const handleEditCar = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleDeleteCar = async (id) => {
    const choice = window.confirm("Are you sure you want to delete this car?");
    if (!choice) return;
    await Cars.delete(id);

    const cars = await Cars.getAll();
    dispath(getAll(cars));
  };

  const handleSelectCar = () => {
    if (isSelected) {
      setSelectedCarsIds(selectedCarsIds.filter((selCarId) => selCarId !== id));
    } else {
      setSelectedCarsIds([...selectedCarsIds, id]);
    }
  };

  return (
    <li key={id}>
      <p>
        &nbsp;
        <input
          checked={isSelected}
          type="checkbox"
          onChange={handleSelectCar}
        />
        &nbsp;
        <strong>Brand:</strong> {brand} &nbsp;
        <strong>Model:</strong> {model} &nbsp;
        <strong>Year:</strong> {year} &nbsp;
        <strong>Max Speed:</strong> {max_speed} &nbsp;
        <strong>Is automatic:</strong> {is_automatic ? "Yes" : "No"} &nbsp;
        <strong>Engine:</strong> {engine} &nbsp;
        <strong> No of doors:</strong> {number_of_doors} &nbsp;
        <Link to={`/cars/${id}`}>View</Link>
        <button className="btn btn-blue" onClick={() => handleEditCar(id)}>
          Edit
        </button>
        <button className="btn btn-blue" onClick={() => handleDeleteCar(id)}>
          Delete
        </button>
      </p>
    </li>
  );
}
