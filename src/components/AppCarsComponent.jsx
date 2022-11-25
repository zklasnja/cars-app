import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cars from "../services/Cars";
import { selectCarsData } from "../store/cars/selector";
import { getAll } from "../store/cars/slice";
import AppCarRow from "./AppCarRow";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function AppCarsComponent() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsData);
  const [selectedCarsIds, setSelectedCarsIds] = useState([]);

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleGetCars = async () => {
    const cars = await Cars.getAll();
    dispatch(getAll(cars.data));
  };

  const selectAll = () => setSelectedCarsIds(cars.map((c) => c.id));
  const deselectAll = () => setSelectedCarsIds([]);

  const sortByBrandAsc = () => {
    const sortedCars = [...cars].sort((a, b) => (a.brand > b.brand ? 1 : -1));
    dispatch(getAll(sortedCars));
  };
  const sortByBrandDesc = () => {
    const sortedCars = [...cars].sort((a, b) => (a.brand < b.brand ? 1 : -1));
    dispatch(getAll(sortedCars));
  };
  const sortByMaxSpeedAsc = () => {
    const sortedCars = [...cars].sort((a, b) => a.max_speed - b.max_speed);
    dispatch(getAll(sortedCars));
  };
  const sortByMaxSpeedDesc = () => {
    const sortedCars = [...cars].sort((a, b) => b.max_speed - a.max_speed);
    dispatch(getAll(sortedCars));
  };

  return (
    <ul>
      {selectedCarsIds.length}
      <br />

      <Button variant="secondary" onClick={selectAll}>
        Select All
      </Button>
      <Button variant="secondary" onClick={deselectAll}>
        Deselect All
      </Button>
      <Button variant="secondary" onClick={sortByBrandAsc}>
        Sort by Brand asc
      </Button>
      <Button variant="secondary" onClick={sortByBrandDesc}>
        Sort by Brand desc
      </Button>
      <Button variant="secondary" onClick={sortByMaxSpeedAsc}>
        Sort by Max Speed asc
      </Button>
      <Button variant="secondary" onClick={sortByMaxSpeedDesc}>
        Sort by Max Speed desc
      </Button>
      {cars?.map((car) => (
        <AppCarRow
          key={car.id}
          {...car}
          selectedCarsIds={selectedCarsIds}
          setSelectedCarsIds={setSelectedCarsIds}
        />
      ))}
    </ul>
  );
}
