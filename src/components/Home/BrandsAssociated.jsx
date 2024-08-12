import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DarkModeContext from "../../context/DarkModeContext";
import audi from "../../assets/Brand Logos/audi.png";
import bmw from "../../assets/Brand Logos/bmw.webp";
import honda from "../../assets/Brand Logos/honda.webp";
import hyundai from "../../assets/Brand Logos/hyundai.webp";
import mahindra from "../../assets/Brand Logos/mahindra.webp";
import marutiSuzuki from "../../assets/Brand Logos/maruti-suzuki.webp";
import mercedes from "../../assets/Brand Logos/mercedes.png";
import tata from "../../assets/Brand Logos/tata.webp";
import volvo from "../../assets/Brand Logos/volvo.png";
import ford from "../../assets/Brand Logos/ford-logo-png-1770.png";
import volkswagen from "../../assets/Brand Logos/volkswagen.png";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";

const brandLogos = [
  {
    src: marutiSuzuki,
    name: "Maruti Suzuki",
    num: "350+ cars available",
  },
  {
    src: tata,
    name: "Tata",
    num: "320+ cars available",
  },
  {
    src: hyundai,
    name: "Hyundai",
    num: "300+ cars available",
  },
  {
    src: mahindra,
    name: "Mahindra",
    num: "200+ cars available",
  },
  {
    src: honda,
    name: "Honda",
    num: "150+ cars available",
  },
  {
    src: volkswagen,
    name: "Volkswagen",
    num: "100+ cars available",
  },
  {
    src: ford,
    name: "Ford",
    num: "80+ cars available",
  },
  {
    src: audi,
    name: "Audi",
    num: "20+ cars available",
  },
  {
    src: bmw,
    name: "BMW",
    num: "15+ cars available",
  },
  {
    src: mercedes,
    name: "Mercedes",
    num: "10+ cars available",
  },
  {
    src: volvo,
    name: "Volvo",
    num: "5+ cars available",
  },
  {
    src: logo,
    name: "Many more",
    num: `Explore now`,
  },
];

const BrandsAssociated = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/buy");
  };

  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Divider
        variant="middle"
        orientation="horizontal"
        sx={{
          width: 0.7,
          fontSize: "x-large",
          mt: 6,
          px: 2,
          color: darkMode ? "primary.main" : "primary.dark",
        }}
      >
        Brands Associated with CarLelo
      </Divider>
      <Box
        sx={{
          height: { lg: "300px", md: "400px" },
          width: { lg: "1200px", md: "800px" },
          padding: "20px",
          borderRadius: "20px",
          margin: "30px 0px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {brandLogos.map((e, i) => (
          <Box
            className="brands"
            key={i}
            onClick={handleNavigate}
            style={{
              backgroundColor: "primary.contrastText",
              width: "170px",
              height: "110px",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px",
              boxShadow: "0px 3px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={e.src}
              style={{
                width: "50px",
                height: "40px",
                marginBottom: "10px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "grey",
              }}
            >
              {e.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "grey",
              }}
            >
              {e.num}
            </Typography>
          </Box>
        ))}
        <Button
          variant="contained"
          style={{
            margin: "20px auto",
          }}
          onClick={handleNavigate}
        >
          {" "}
          View all cars{" "}
        </Button>
      </Box>
    </>
  );
};

export default BrandsAssociated;
