import {
  Box,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import styled from "@emotion/styled";
import CarCard from "./CarCard";
import { useContext, useState } from "react";
import CarContext from "../../context/CarContext";

const Cars = () => {
  const { filteredCars } = useContext(CarContext);
  const [option, setOption] = useState("Relevance");
  const selectOption = [
    "Relevance",
    "Price - Low to High",
    "Price - High to Low",
  ];
  filteredCars.sort((a, b) => {
    if (option === "Price - Low to High") {
      return a.price - b.price;
    } else if (option === "Price - High to Low") {
      return b.price - a.price;
    }
    return a.id - b.id;
  });
  const StyledSelect = styled(Select)({
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "secondary.main",
      },
      "&:hover fieldset": {
        borderColor: "secondary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary.main",
      },
    },
  });

  const handleSortChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div style={{ flex: "80%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <div style={{ display: "flex", color: "primary.main" }}>
          <h4>{filteredCars.length}</h4>
          <p style={{ margin: "2.5px 0 0 7px" }}>Cars found near you</p>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "bold", mr: 1, color: "primary.main" }}>
            Sort:{" "}
          </Typography>
          <FormControl>
            <InputLabel>Sort By</InputLabel>
            <StyledSelect
              label="Sort By"
              size="small"
              onChange={handleSortChange}
              value={option}
              sx={{ width: 200 }}
            >
              {selectOption.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "20px",
          flexWrap: "wrap",
        }}
      >
        {filteredCars.map((cars, i) => (
          <CarCard data={cars} key={i} />
        ))}
      </Box>
    </div>
  );
};

export default Cars;
