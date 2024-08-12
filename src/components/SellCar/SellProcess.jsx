import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import laptop from "../../assets/laptop.jpg";
import carInspection from "../../assets/carInspection.jpg";
import instantPayment from "../../assets/instantPayment.jpg";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
const SellProcess = () => {
  const { darkMode } = useContext(DarkModeContext);
  const cards = [
    {
      src: laptop,
      number: "01",
      title: "Get your own price",
      body: "Just fill the questions about your car to help us understand its details and help up get your own price",
    },
    {
      src: carInspection,
      number: "02",
      title: "Car inspection",
      body: "Our car expert will physically verify your car’s condition and give you the final offer",
    },
    {
      src: instantPayment,
      number: "03",
      title: "Car pick up & payment",
      body: "We will transfer the amount directly to your bank account before your car is picked up",
    },
  ];

  return (
    <div
      style={{
        textAlign: "left",
        margin: "30px 0 0 20px",
        width: "100%",
      }}
    >
      <Typography variant="h5" color="primary.main">
        <strong>Process of selling your car</strong>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.map((card, i) => (
          <Card
            elevation={5}
            key={i}
            sx={{ width: 400, borderRadius: "15px", m: 2 }}
          >
            <CardMedia
              component="img"
              height="250"
              image={card.src}
              alt="online price"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.1)",
                  width: 0.25,
                  texAlign: "right",
                  borderRadius: "50%",
                  p: 1,
                }}
              >
                {card.number}
              </Typography>
              <Typography
                variant="h5"
                sx={
                  darkMode
                    ? {
                        color: "primary.contrastText",
                      }
                    : {
                        color: "secondary.contrastText",
                      }
                }
              >
                {card.title}
              </Typography>
              <Divider
                variant="fullWidth"
                orientation="horizontal"
                sx={{
                  my: 1,
                }}
              />
              <Typography variant="h6" color="primary.main">
                {card.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SellProcess;
