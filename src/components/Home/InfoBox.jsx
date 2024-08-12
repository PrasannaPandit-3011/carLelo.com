import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import inspection from "../../assets/200-point-inspection-desktopV2.webp";
import inspectionSVG from "../../assets/200-point-inspection-desktop.svg";
import warranty from "../../assets/1-year-warranty-desktopV2.jpg";
import warrantySVG from "../../assets/1-year-warranty-desktop.svg";
import fixedPrice from "../../assets/fixed-price-desktopV2.webp";
import fixedPriceSVG from "../../assets/fixed-price-desktop.svg";
import moneyBack from "../../assets/money-back-desktopV2.webp";
import moneyBackSVG from "../../assets/money-back-desktop.svg";
import sellCarCard from "../../assets/sellCarCard.jpg";
import audi from "../../assets/Brand Logos/audi.png";
import bmw from "../../assets/Brand Logos/bmw.webp";
import honda from "../../assets/Brand Logos/honda.webp";
import hyundai from "../../assets/Brand Logos/hyundai.webp";
import mahindra from "../../assets/Brand Logos/mahindra.webp";
import marutiSuzuki from "../../assets/Brand Logos/maruti-suzuki.webp";
import mercedes from "../../assets/Brand Logos/mercedes.png";
import tata from "../../assets/Brand Logos/tata.webp";
import volvo from "../../assets/Brand Logos/volvo.png";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const cards = [
  {
    image: inspection,
    title: "200-point inspection",
    body: "We offer a 200-point inspection for your car.",
    svg: inspectionSVG,
  },
  {
    image: warranty,
    title: "Warranty included",
    body: "Our way of being there for you through your car ownership journey.",
    svg: warrantySVG,
  },
  {
    image: moneyBack,
    title: "5-Day Money Back",
    body: "All our cars come with a no-questions-asked 5-day money back guarantee.",
    svg: moneyBackSVG,
  },
  {
    image: fixedPrice,
    title: "Fixed Price Assurance",
    body: "No more endless negotiations or haggling. With Spinny, you get the best deal upfront and right away.",
    svg: fixedPriceSVG,
  },
];

const brandLogos = [
  marutiSuzuki,
  tata,
  hyundai,
  mahindra,
  honda,
  audi,
  bmw,
  mercedes,
  volvo,
];

const InfoBox = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const handleViewCars = () => {
    navigate("/buy");
  };

  return (
    <center>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "90px",
        }}
      >
        <Row>
          <Paper
            style={{
              height: { lg: "500px", xl: "500px", md: "680px" },
              borderRadius: "20px",
              padding: "2px",
              boxShadow: "0px 3px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Tabs
              defaultActiveKey="buy"
              className="mb-3 custom-tabs"
              fill
              variant="pills"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "300px",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <Tab
                eventKey="buy"
                title="Buy Car"
                style={{
                  borderRadius: "10px",
                }}
              >
                <Row style={{}}>
                  <Col className="mt-1 mb-2" style={{}}>
                    <h3>CarLelo Benifits</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                    }}
                  >
                    {cards.map((card, i) => (
                      <Card
                        elevation={2}
                        key={i}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: { md: 200, lg: 250, xl: 280 },
                          height: { lg: "22rem", xl: "22rem", md: "25rem" },
                          borderRadius: "20px",
                          margin: "10px 10px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="gift"
                          height="100"
                          image={card.svg}
                          sx={{
                            position: "relative",
                            top: 90,
                            width: { lg: "15%", xl: "15%", md: "25%" },
                            height: "12%",
                            zIndex: 1,
                          }}
                        />
                        <CardMedia
                          component="img"
                          alt="gift"
                          image={card.image}
                          sx={{
                            width: 0.5,
                            height: 0.4,
                            zIndex: 1,
                          }}
                        />

                        <CardContent
                          sx={{
                            width: { lg: "18rem", md: "13rem" },
                            borderRadius: "20px",
                            color: darkMode ? "primary.main" : "primary.dark",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                              fontWeight: "bolder",
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {card.body}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Col>
                </Row>
                <Row
                  style={{
                    color: darkMode ? "primary.main" : "primary.dark",
                  }}
                >
                  <Col>
                    <Box
                      sx={{
                        my: 1,
                      }}
                    >
                      <Button
                        variant="danger"
                        onClick={handleViewCars}
                        style={{
                          width: "350px",
                        }}
                      >
                        View All Cars
                      </Button>
                    </Box>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="sell" title="Sell car">
                <Row>
                  <Col
                    style={{
                      flex: "10%",
                      margin: "0px 0px 0px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={sellCarCard}
                      style={{
                        height: "400px",
                        width: "320px",
                        borderRadius: "20px",
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      flex: "400px",
                      textAlign: "left",
                      width: "800px",
                    }}
                  >
                    <h6
                      style={{
                        color: darkMode ? "#6300a3" : "primary.dark",
                      }}
                    >
                      Popular Sold Car&apos;s Brands
                    </h6>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <BoltRoundedIcon />{" "}
                      <p
                        style={{
                          fontWeight: "lighter",
                          margin: "0 0 0 10px",
                        }}
                      >
                        Instant online quote
                      </p>
                      <DoorFrontIcon sx={{ ml: "10px" }} />{" "}
                      <p
                        style={{
                          fontWeight: "lighter",
                          margin: "0 0 0 10px",
                        }}
                      >
                        Free doorstep evaluation
                      </p>
                      <PaidOutlinedIcon sx={{ ml: "10px" }} />{" "}
                      <p
                        style={{
                          fontWeight: "lighter",
                          margin: "0 0 0 10px",
                        }}
                      >
                        Same day payment
                      </p>
                    </div>
                    <div
                      style={{
                        margin: "60px auto 0px",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      {brandLogos.map((logo) => (
                        <div
                          key={logo}
                          style={{
                            borderRadius: "10px",
                            boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.1)",
                            margin: "3px 5px",
                          }}
                        >
                          <img
                            src={logo}
                            style={{
                              width: "80px",
                              height: "80px",
                              padding: "10px",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="danger"
                      style={{ width: "350px", margin: "80px 110px" }}
                      onClick={() => navigate("/sell")}
                    >
                      Get Price
                    </Button>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Paper>
        </Row>
      </Box>
    </center>
  );
};

export default InfoBox;

/*
<Card
                        key={card.title}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: "16rem",
                          height: "22rem",
                          borderRadius: "20px",
                          border: 0,
                          margin: "10px 10px",
                        }}
                      >
                        <Card.Img
                          src={card.svg}
                          style={{
                            position: "absolute",
                            top: 84.5,
                            left: 110,
                            width: "15%",
                            height: "12%",
                            zIndex: 1,
                          }}
                        />
                        <Card.Img
                          variant="top"
                          src={card.image}
                          style={{
                            margin: "4px 0px 4px 4px",
                            borderRadius: "20px",
                            height: "200px",
                            width: "13rem",
                          }}
                        />
                        <Card.Body
                          style={{ width: "18rem", borderRadius: "20px" }}
                        >
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.body}</Card.Text>
                        </Card.Body>
                      </Card>
*/
