import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const CarPriceDetail = ({ carData }) => {
  const { darkMode } = useContext(DarkModeContext);

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        transform: "scale(0.8)",
      }}
    >
      •
    </Box>
  );
  const calculateEMI = (price) => {
    const principleAmount = price;
    const monthlyInterestRate = 0.0083333;
    const numberOfMonths = 18;

    const emi =
      (principleAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    return emi.toFixed(2);
  };

  return (
    <div>
      <Card
        elevation={2}
        variant="elevation"
        sx={{
          textAlign: "left",
          color: "primary.main",
          borderRadius: "6px",
          mr: 1,
          height: 1,
          width: 1,
        }}
      >
        <CardContent>
          <Typography variant="h5">
            <strong>{`${carData?.car?.year} ${carData?.car?.brand} ${carData?.car?.model}`}</strong>
          </Typography>
          <Typography variant="body1">
            {carData?.car?.mileage / 1000}K KMs{bull}
            {carData?.car?.fuelType}
            {bull}
            {carData?.car?.transmission}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            <HomeRoundedIcon sx={{ fontSize: "15px", margin: "0 0 5px 0" }} />
            {bull}Home Test Drive: Available
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            <LocationOnRoundedIcon
              sx={{ fontSize: "15px", margin: "0 0 5px 0" }}
            />
            {bull}Location: {`${carData?.user?.city},${carData?.user?.state}`}
          </Typography>

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ my: 2 }}
          />

          <div>
            <Typography
              color="primary.main"
              align="left"
              fontWeight="bold"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "24px",
                alignItems: "end",
              }}
            >
              ₹ {carData?.car?.price / 100000} Lakh
              <Typography
                sx={{
                  fontSize: "16px",
                  m: "0 0 4px 25px",
                }}
              >
                From ₹ {calculateEMI(carData?.car?.price)} /m
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              color={
                darkMode ? "primary.contrastText" : "secondary.contrastText"
              }
            >
              Fixed On-Road Price
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarPriceDetail;
