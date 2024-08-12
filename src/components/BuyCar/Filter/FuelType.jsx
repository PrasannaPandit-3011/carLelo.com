import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { useContext } from "react";
import CarContext from "../../../context/CarContext";

const FuelType = () => {
  const fuelType = ["Petrol", "Diesel", "CNG"];
  const { setFilters, filter } = useContext(CarContext);

  const handleCheckboxChange = (value) => {
    let prev = filter.fuelType;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    setFilters({ fuelType: prev });
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        width: "100%",
        padding: "20px",
        overflowX: "hidden",
      }}
    >
      <p
        style={{
          fontSize: "medium",
          color: "primary.dark",
        }}
      >
        Fuel Type
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormControl
          component="fieldset"
          sx={{
            fontSize: "200px",
            color: "primary.main",
          }}
        >
          <FormGroup>
            {fuelType.map((type, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onClick={() => handleCheckboxChange(type)}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                  />
                }
                label={
                  <span style={{ fontSize: "15px", fontFamily: "inherit" }}>
                    {type}
                  </span>
                }
                labelPlacement="end"
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </Box>
  );
};

export default FuelType;
