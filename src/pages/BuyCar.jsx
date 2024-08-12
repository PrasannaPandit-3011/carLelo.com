import { useContext } from "react";
import { Cars, Filter } from "../components/BuyCar/index";
import DarkModeContext from "../context/DarkModeContext";
import { Box } from "@mui/material";

const BuyCar = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Box
      style={{
        margin: "50px auto",
        display: "flex",
        width: "80vw",
        color: darkMode ? "white" : "black",
        position: "relative",
      }}
    >
      <Filter />
      <Cars />
    </Box>
  );
};

export default BuyCar;
