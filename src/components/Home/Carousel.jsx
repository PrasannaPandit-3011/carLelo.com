import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "@mui/material/Button";
import buyCarImage from "../../assets/buyCarImage.jpg";
import sellCar from "../../assets/sellCar.jpg";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: buyCarImage,
    alt: "buy car",
    titleHeading: "Go places, Go far",
    titleBody: "Buy your dream car",
    buttonText: "View all cars",
    style: {
      textAlign: "right", // Align text to the left
      top: "72%", // Align vertically to the middle
      transform: "translateY(-50%)", // Adjust for vertical alignment
      paddingLeft: "20px",
    },
    path: "/buy",
  },
  {
    src: sellCar,
    alt: "sell car",
    titleHeading: "A happy farewell",
    titleBody: "Sell your car at the best price",
    buttonText: "Sell your car",
    style: {
      textAlign: "left", // Align text to the left
      top: "60%", // Align vertically to the middle
      transform: "translateY(-50%)", // Adjust for vertical alignment
      paddingLeft: "20px", // Optional: Add left padding for better alignment
      color: "secondary.contrastText",
    },
    path: "/sell",
  },
];

function CarouselComponent() {
  const navigate = useNavigate();

  return (
    <Carousel
      style={{
        height: "70vh",
        width: "99.5vw",
      }}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              height: "70vh",
              width: "99.5vw",
            }}
            onClick={() => navigate(image.path)}
          />

          <Carousel.Caption style={image.style}>
            <h1>{image.titleHeading}</h1>
            <h4>{image.titleBody}</h4>
            <Button
              varaint="contained"
              size="medium"
              onClick={() => navigate(image.path)}
              sx={{
                backgroundColor: "secondary.main",
                color: "primary.contrastText",
                marginTop: "10px",
                borderRadius: 2,
              }}
            >
              {image.buttonText}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
