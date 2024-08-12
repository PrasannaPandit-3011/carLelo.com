import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useNavigate } from "react-router-dom";

const CarCard = ({ data }) => {
  const navigate = useNavigate();

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
    <Card
      variant="elevation"
      elevation={2}
      sx={{
        width: { lg: "270px", md: "250px" },
        marginBottom: 2,
        ":hover": {
          boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`car/${data.id}`)}>
        <CardMedia
          component="img"
          height="140"
          image={`https://source.unsplash.com/random/150×300/?${data.brand}-${data.model}`}
          alt="car image"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            color="primary.main"
            sx={{ textAlign: "left" }}
          >
            <strong>
              {`${data.year} ${data.brand} ${data.model}`.length > 20
                ? `${data.year} ${data.brand} ${data.model}`.substring(0, 20) +
                  "..."
                : `${data.year} ${data.brand} ${data.model}`}
            </strong>
          </Typography>
          <Typography
            color="primary.main"
            sx={{
              fontSize: 13,
              textAlign: "left",
              mb: 1,
            }}
          >
            {data.mileage / 1000}K KMs{" "}
            <CircleIcon
              sx={{
                fontSize: "3px",
                mr: 1,
                ml: 1,
              }}
            />
            {data.fuelType}
            <CircleIcon
              sx={{
                fontSize: "3px",
                mr: 1,
                ml: 1,
              }}
            />
            {data.transmission}
          </Typography>
          <Typography
            variant="body1"
            color="primary.main"
            align="left"
            fontWeight="bold"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            ₹ {data.price / 100000} Lakh
            <sub
              style={{
                marginTop: "10px",
              }}
            >
              From ₹ {calculateEMI(data.price)} /m
            </sub>
          </Typography>
          <Divider variant="fullWidth" orientation="horizontal" />
          <sub
            style={{
              margin: "15px 0 5px 0",
              textAlign: "left",
            }}
          >
            <FmdGoodIcon
              fontSize="7px"
              sx={{
                marginBottom: "3px",
                color: "primary.main",
              }}
            />
            {`Ahmedabad, Gujarat`}
          </sub>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
