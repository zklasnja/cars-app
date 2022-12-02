import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cars from "../services/Cars";
import { selectCarsData, selectSearchterm } from "../store/cars/selector";
import { getAll } from "../store/cars/slice";
import AppCarRow from "./AppCarRow";

export default function AppCarsComponent() {
  const dispatch = useDispatch();
  const carsData = useSelector(selectCarsData);
  const searchTerm = useSelector(selectSearchterm);

  const [selectedCarsIds, setSelectedCarsIds] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleGetCars({
      page,
      searchTerm,
    });
  }, [page, searchTerm]);

  const handleGetCars = async (params) => {
    const response = await Cars.getAll(params);
    dispatch(getAll(response));
  };

  const selectAll = () => setSelectedCarsIds(carsData.data.map((c) => c.id));
  const deselectAll = () => setSelectedCarsIds([]);

  const handleSorting = (id) => {
    const sortedCars = [...carsData.data];
    switch (id) {
      case 1:
        dispatch(
          getAll({
            ...carsData,
            data: sortedCars.sort((a, b) => (a.brand > b.brand ? 1 : -1)),
          })
        );
        break;
      case 2:
        dispatch(
          getAll({
            ...carsData,
            data: sortedCars.sort((a, b) => (a.brand < b.brand ? 1 : -1)),
          })
        );
        break;
      case 3:
        dispatch(
          getAll({
            ...carsData,
            data: sortedCars.sort((a, b) => a.max_speed - b.max_speed),
          })
        );
        break;
      case 4:
        dispatch(
          getAll({
            ...carsData,
            data: sortedCars.sort((a, b) => b.max_speed - a.max_speed),
          })
        );
        break;
    }
  };

  const handleNextPage = () => {
    if (page === carsData.last_page) {
      return;
    }
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <ul>
      No of selected cars: <strong>{selectedCarsIds.length}</strong>
      <br />
      <button className="btn btn-blue" onClick={selectAll}>
        Select All
      </button>
      <button className="btn btn-blue" onClick={deselectAll}>
        Deselect All
      </button>
      <button className="btn btn-blue" onClick={() => handleSorting(1)}>
        Sort by Brand asc
      </button>
      <button className="btn btn-blue" onClick={() => handleSorting(2)}>
        Sort by Brand desc
      </button>
      <button className="btn btn-blue" onClick={() => handleSorting(3)}>
        Sort by Max Speed asc
      </button>
      <button className="btn btn-blue" onClick={() => handleSorting(4)}>
        Sort by Max Speed desc
      </button>
      {carsData?.data?.length ? (
        carsData?.data?.map((car) => (
          <AppCarRow
            key={car.id}
            {...car}
            selectedCarsIds={selectedCarsIds}
            setSelectedCarsIds={setSelectedCarsIds}
          />
        ))
      ) : (
        <p>There are no result found</p>
      )}
      <br />
      <button className="btn btn-blue" onClick={handlePreviousPage}>
        Previous
      </button>
      Page: <strong>{page}</strong>
      <button className="btn btn-blue" onClick={handleNextPage}>
        Next
      </button>
    </ul>
  );
}
