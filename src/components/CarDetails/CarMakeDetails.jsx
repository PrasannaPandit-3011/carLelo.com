import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import { Paper } from "@mui/material";
const CarMakeDetails = ({ carData }) => {
  const makeDetails = [
    {
      title: "Make Year",
      value: carData?.car?.year,
    },
    {
      title: "Register Year",
      value: carData?.car?.year,
    },
    {
      title: "Feul Type",
      value: `${carData?.car?.fuelType} (BSIV)`,
    },
    {
      title: "Km Driven",
      value: `${carData?.car?.mileage / 1000}K KM`,
    },
    {
      title: "Transmission",
      value: `${carData?.car?.transmission} (Regular)`,
    },
    {
      title: "No. of Owner",
      value: `${carData?.car?.owner}`,
    },
    {
      title: "Insurance Validity",
      value: "Mar 2025",
    },
    {
      title: "Insurance Type",
      value: "Third Party",
    },
    {
      title: "RTO",
      value: "GJ01",
    },
    {
      title: "Car Location",
      value: `${carData?.user?.city}, ${carData?.user?.state}`,
    },
  ];

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      style={{
        textAlign: "left",
        margin: "10px 0 0 0",
      }}
    >
      <Typography variant="h5" color="primary.main">
        <strong>Car Overview</strong>
      </Typography>
      <Paper
        variant="elevation"
        elevation={1}
        display="flex"
        sx={{
          borderRadius: "10px",
          backgroundColor: darkMode ? "#1e1e1e" : "primary.contrastText",
          width: "810px",
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        {makeDetails.map((e, i) => (
          <Box
            key={i}
            sx={{
              width: "200px",
              marginBottom: "20px",
            }}
          >
            <Typography variant="body2">{e.title}</Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              {e.value}
            </Typography>
            <Divider variant="fullWidth" orientation="horizontal" />
          </Box>
        ))}
      </Paper>
    </div>
  );
};

export default CarMakeDetails;
