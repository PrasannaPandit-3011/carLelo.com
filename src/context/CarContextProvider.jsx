import { useEffect, useState } from "react";
import CarContext from "./CarContext";
import useAllCars from "../hooks/useAllCars";

const InitialFilters = {
  price: [],
  brands: [],
  bodyType: [],
  fuelType: [],
  transmission: [],
};

const CarContextProvider = ({ children }) => {
  const [cars, filteredCars, setFilteredCars] = useAllCars();
  const [filter, setFilter] = useState(InitialFilters);
  const filterCars = () => {
    const { brands, price, fuelType, transmission, bodyType } = filter;

    let filteredCars = [...cars];

    if (brands && brands.length > 0) {
      filteredCars = filteredCars.filter((car) => brands.includes(car.brand));
    }
    if (price && price.length > 0) {
      filteredCars = filteredCars.filter(
        (car) => car.price >= price[0] && car.price <= price[1]
      );
    }
    if (bodyType && bodyType.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        bodyType.includes(car.bodyType)
      );
    }
    if (transmission && transmission.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        transmission.includes(car.transmission)
      );
    }
    if (fuelType && fuelType.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        fuelType.includes(car.fuelType)
      );
    }

    setFilteredCars(filteredCars);
  };

  const setFilters = (filters) => {
    setFilter({ ...filter, ...filters });
  };

  useEffect(() => {
    filterCars();
  }, [filter]);

  return (
    <div>
      <CarContext.Provider value={{ filter, filteredCars, setFilters }}>
        {children}
      </CarContext.Provider>
    </div>
  );
};

export default CarContextProvider;
