import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import usePriceRange from "../../../hooks/usePriceRange";

const valuetext = (price) => {
  return `$${price}`;
};

const PriceRange = () => {
  const [price, setPrice] = usePriceRange();

  const handleChange = (e, newValue) => {
    setPrice(newValue);
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
        Price Range
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>₹{price[0]}</p>
        <p>₹{price[1]}</p>
      </div>
      <Slider
        getAriaLabel={(value) => `Price Range: ${valuetext(value)}`}
        value={price}
        min={300000}
        max={8000000}
        step={100000}
        shiftStep={100000}
        onChange={handleChange}
        getAriaValueText={valuetext}
        color="primary"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <sub>Minimum</sub>
        <sub>Maximum</sub>
      </div>
    </Box>
  );
};

export default PriceRange;
