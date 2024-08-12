import Box from "@mui/material/Box";

import sellForm from "../../assets/sellCarFormImage.jpg";
import Typography from "@mui/material/Typography";
import SellCarForm from "./SellCarForm";

const SellForm = () => {
  const transmissionType = ["Automatic", "Manual"];

  const fuelType = ["Petrol", "Diesel", "Hybrid", "CNG"];

  const bodyType = ["Hatchback", "SUV", "Sedan", "MUV"];
  return (
    <Box
      sx={{
        width: "100vw",
        height: "85vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        border: 1,
        backgroundImage: `url("${sellForm}")`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}
    >
      <Box sx={{ textAlign: "right", mr: 4 }}>
        <Typography variant="h3" color="primary.main" gutterBottom>
          <strong>Sell your car in minutes</strong>
        </Typography>
        <Typography variant="h6" color="primary.main">
          Get doorstep pick up and instant payment
        </Typography>

        {
          <SellCarForm
            transmissionType={transmissionType}
            fuelType={fuelType}
            bodyType={bodyType}
          />
        }
      </Box>
    </Box>
  );
};

export default SellForm;
