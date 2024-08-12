import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { useContext } from "react";
import CarContext from "../../../context/CarContext";
import { Box } from "@mui/material";

const Brands = () => {
  const { setFilters, filter } = useContext(CarContext);

  const handleCheckboxChange = (value) => {
    let prev = filter.brands;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    setFilters({ brands: prev });
  };

  const carBrands = [
    "Audi",
    "Bmw",
    "Honda",
    "Hyundai",
    "Mahindra",
    "Maruti Suzuki",
    "Mercedes",
    "Tata",
    "Volvo",
  ];

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
        Brands
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {" "}
        <FormControl
          component="fieldset"
          sx={{
            fontSize: "200px",
            color: "primary.main",
          }}
        >
          <FormGroup>
            {carBrands.map((brand, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onClick={() => handleCheckboxChange(brand)}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                  />
                }
                label={
                  <span style={{ fontSize: "15px", fontFamily: "inherit" }}>
                    {brand}
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

export default Brands;
