import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useCarData = () => {
  let { id } = useParams();

  const [carData, setCarData] = useState([]);

  const fetchCarData = async () => {
    const response = await axios.get(`/api/cars/${id}`);
    setCarData(response.data.data);
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  return carData;
};

export default useCarData;
