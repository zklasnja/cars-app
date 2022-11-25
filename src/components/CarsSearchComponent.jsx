import React, { useState } from "react";
import debounce from "lodash.debounce";
import Cars from "../services/Cars";
import { useDispatch } from "react-redux";
import { getAll } from "../store/cars/slice";

export default function CarsSearchComponent() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (searchItem) => {
    setSearchTerm(searchItem);
    const response = await Cars.getAll(searchItem);
    dispatch(getAll(response.data));
  };

  const handleChange = debounce((e) => handleSearch(e.target.value), 500);

  return (
    <header>
      <input
        className="input-text"
        type="text"
        placeholder="Search for..."
        defaultValue={searchTerm}
        onChange={handleChange}
      />
    </header>
  );
}
