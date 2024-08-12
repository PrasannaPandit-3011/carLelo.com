import { useContext, useEffect, useState } from "react";
import CarContext from "../context/CarContext";

const usePriceRange = () => {
  const { setFilters } = useContext(CarContext);
  const [price, setPrice] = useState([300000, 8000000]);

  useEffect(() => {
    setFilters({ price: price });
  }, [price]);

  return [price, setPrice];
};

export default usePriceRange;
