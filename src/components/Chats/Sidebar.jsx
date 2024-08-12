import { Box, Typography, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const carDetails = useSelector((state) => state.chat.carDetails);

  return (
    carDetails && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          width: "20vw",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <Avatar
          variant="circular"
          src={`https://source.unsplash.com/random/1080×1920/?${carDetails?.brand}-${carDetails?.model}`}
          alt="car"
          sx={{ width: "200px", height: "200px", mb: 2, mt: 5 }}
        />
        <Typography variant="h5" fontWeight="bold">
          {carDetails?.year} {carDetails?.brand} {carDetails?.model}
        </Typography>
        <Typography variant="h6"></Typography>
        <Typography variant="h6">
          Asking Price: <b> ₹{carDetails?.price} </b>
        </Typography>
        <Typography variant="body1">
          Mileage: <b>{carDetails?.mileage}KMs</b>
        </Typography>
        <Typography variant="body1">
          Fuel Type: <b>{carDetails?.fuelType}</b>
        </Typography>
        <Typography variant="body1">
          Transmission: <b>{carDetails?.transmission}</b>
        </Typography>
        <Typography variant="body1">
          Body Type: <b>{carDetails?.bodyType}</b>
        </Typography>
        <Typography>
          Owners: <b>{carDetails?.owner}</b>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            border: 1,
            width: 0.65,
            borderRadius: 1,
            p: 1,
          }}
        >
          <b>{carDetails?.description}</b>
        </Typography>
      </Box>
    )
  );
};

export default Sidebar;
