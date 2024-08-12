import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarImageCarousel,
  CarBuyBackInfo,
  CarPriceDetail,
  CarMakeDetails,
  CarLeloBenifits,
  Specification,
  CarDetailButtons,
} from "../components/CarDetails/index";
import toast from "react-hot-toast";
import DarkModeContext from "../context/DarkModeContext";
import { Box } from "@mui/material";
import useCarData from "../hooks/useCarData";
const CarDetails = () => {
  let carData = useCarData();
  let { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [buyOpen, setBuyOpen] = useState(false);
  const [testOpen, setTestOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const handleBookTestDrive = () => {
    setTestOpen(true);
  };

  const handleOpenDialog = async () => {
    setBuyOpen(true);
    try {
      const response = await axios.patch(`/api/cars/${id}`, {
        userId: user.id,
      });
      toast.success(response.data.message);
      setTimeout(() => {
        setBuyOpen(false);
      }, 2000);
    } catch (error) {
      setBuyOpen(false);
      toast.error("Error buying car");
    }
  };

  const handleBuyClose = () => {
    setBuyOpen(false);
  };
  const handleTestClose = () => {
    setTestOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "20px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          overflowY: "sroll",
        }}
      >
        <CarImageCarousel carData={carData} />
        <CarMakeDetails carData={carData} />
        <Specification />
        <CarLeloBenifits />
      </div>
      <Box
        style={{
          margin: "0 20px",
          backgroundColor: darkMode
            ? "secondary.contrastText"
            : "primary.contrastText",
          padding: "17px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", lg: "contents" },
          }}
        >
          <CarPriceDetail carData={carData} />
          <CarBuyBackInfo carData={carData} />
        </Box>
        <CarDetailButtons
          carData={carData}
          handleOpenDialog={handleOpenDialog}
          handleBookTestDrive={handleBookTestDrive}
          buyOpen={buyOpen}
          handleBuyClose={handleBuyClose}
          testOpen={testOpen}
          handleTestClose={handleTestClose}
        />
      </Box>
    </div>
  );
};

export default CarDetails;
