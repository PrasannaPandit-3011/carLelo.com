import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import greatPrice from "../../assets/greatPrice.svg";
import instantPayment from "../../assets/instant.svg";
import hassleFree from "../../assets/hassleFree.svg";
import anywhere from "../../assets/sellFromAnywhere.svg";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const WhySell = () => {
  const { darkMode } = useContext(DarkModeContext);

  const cards = [
    {
      src: greatPrice,
      title: "Great Price",
      body: "Largest dealer network + Smart AI Pricing Engine = great deal for your car",
    },
    {
      src: instantPayment,
      title: "Instant payment",
      body: "The amount is transferred directly to your bank account within minutes,",
    },
    {
      src: hassleFree,
      title: "Hassle-free",
      body: "Documentation, RC transfers can take months! We’ll handle it all,",
    },
    {
      src: anywhere,
      title: "Sell from anywhere",
      body: "From inspection to payment, everything right from your doorstep!",
    },
  ];

  return (
    <div
      style={{
        textAlign: "left",
        margin: "30px 0 0 20px",
      }}
    >
      <Typography variant="h5" color="primary.main">
        <strong>Why sell with CarLelo?</strong>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          my: 3,
          color: darkMode ? "primary.contrastText" : "secondary.contrastText",
        }}
      >
        CarLelo provides instant valuation of your car online, has a large
        selling network of dealers and provides a hassle-free experience.
        CarLelo does free inspection for your car and has a very transparent
        process. Selling used cars through classifieds can be challenging due to
        privacy concerns, fake profiles, excessive calls. As a solution, selling
        cars online offers convenience, wider reach, cost savings, and a
        streamlined process.
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cards.map((card, i) => (
          <Card
            key={i}
            variant="elevation"
            elevation={10}
            sx={{
              width: 270,
              borderRadius: "15px",
              m: { lg: 2, md: 1 },
              height: 350,
            }}
          >
            <img
              src={card.src}
              alt=""
              style={{
                height: "125px",
                width: "200px",
                margin: "20px 30px 30px",
              }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1 }}>
                <strong>{card.title}</strong>
              </Typography>
              <Typography variant="h6">{card.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhySell;
