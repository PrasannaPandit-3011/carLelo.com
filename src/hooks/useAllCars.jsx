import axios from "axios";
import { useEffect, useState } from "react";

const useAllCars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCars(response.data.cars);
        setFilteredCars(response.data.cars);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCars();
  }, []);
  return [cars, filteredCars, setFilteredCars];
};

export default useAllCars;
