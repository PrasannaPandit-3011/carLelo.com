import Carousel from "react-bootstrap/Carousel";

const CarImageCarousel = () => {
  const images = [
    {
      src: `https://source.unsplash.com/random/1080×1920/?car-expensive`,
      alt: "car image",
    },
    {
      src: `https://source.unsplash.com/random/1920×1080/?car-interior`,
      alt: "car image",
    },
    {
      src: `https://source.unsplash.com/random/×1260/?cars-interior`,
      alt: "car image",
    },
    {
      src: `https://source.unsplash.com/random/1260×720/?car-interiors`,
      alt: "car image",
    },
    {
      src: `https://source.unsplash.com/random/2160×3840/?car-mercedes-interior`,
      alt: "car image",
    },
    {
      src: `https://source.unsplash.com/random/3840×2160/?car-porche-interior`,
      alt: "car image",
    },
  ];
  return (
    <Carousel
      style={{
        height: "52vh",
        width: "810px",
        borderRadius: "8px",
      }}
    >
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "810px",
              height: "51.3vh",
              borderRadius: "8px",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarImageCarousel;
