import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import warranty from "../../assets/warranty-assured.svg";
import pointAssured from "../../assets/points-assured.svg";
import moneyBack from "../../assets/money-back-assured.svg";
import buyBack from "../../assets/buyback-assured (1).svg";
import fixedPrice from "../../assets/fixed-price-assured.svg";
import roadSide from "../../assets/assistance-assured.svg";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const CarLeloBenifits = () => {
  const { darkMode } = useContext(DarkModeContext);

  const benefits = [
    {
      src: warranty,
      body: "1 year warranty",
    },
    {
      src: pointAssured,
      body: "200-points inspected",
    },
    {
      src: moneyBack,
      body: "5-day money back ",
    },
    {
      src: buyBack,
      body: "Buy back guarantee",
    },
    {
      src: fixedPrice,
      body: "Fixed price assurance",
    },
    {
      src: roadSide,
      body: "Roadside Assistance",
    },
  ];

  return (
    <div
      style={{
        textAlign: "left",
        margin: "20px 0 0 0",
      }}
    >
      <Typography variant="h5" color="primary.main">
        <strong>CarLelo Assured Key Benefits</strong>
      </Typography>
      <Box
        sx={{
          backgroundColor: darkMode ? "#1e1e1e" : "primary.contrastText",
          width: "735px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
          padding: "30px",
          mt: 1,
        }}
      >
        {benefits.map((e, i) => (
          <Card
            key={i}
            variant="elevation"
            sx={{
              backgroundColor: darkMode ? "#1e1e1e" : "primary.contrastText",
              height: "220px",
              width: "200px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              image={e.src}
              warranty="100"
              sx={{
                height: "138px",
                width: "120px",
                borderRadius: "20px",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                color="#7D02CC"
                sx={{
                  textAlign: "center",
                  width: "180px",
                }}
              >
                {e.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CarLeloBenifits;
