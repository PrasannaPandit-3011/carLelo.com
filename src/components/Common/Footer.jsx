import { Link, Typography, Box } from "@mui/material";
import footerBG from "../../assets/footerBG.png";
import logo from "../../assets/fullLogo.png";
import Button from "@mui/material/Button";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export default function Footer() {
  function handleCopy() {}
  return (
    <>
      <Box
        display=""
        mx=""
        my=""
        sx={{
          width: 1,
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${footerBG})`,
          backgroundColor: "primary.dark",
          backgroundSize: "1000px",
          color: "primary.contrastText",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px auto",
            }}
          >
            <img
              src={logo}
              width={80}
              height={60}
              style={{
                borderRadius: "10%",
              }}
            />
            <span
              style={{
                margin: "10px 0 0 20px",
                textAlign: "left",
                fontSize: "normal",
                fontWeight: "lighter",
                width: "850px",
              }}
            >
              CarLelo is the most trusted way of buying and selling new and used
              cars. Choose from over 5000 fully inspected first-hand and
              second-hand car models. Select online and book a test drive at
              your home or at a CarLelo Hub near you. Get a no-questions-asked
              5-day money back guarantee and a free one-year comprehensive
              service warranty with Assured Resale Value on every CarLelo car.
            </span>
          </div>
        </div>
        <Button variant="contained" onClick={handleCopy}>
          <LocalPhoneRoundedIcon />
          <a
            href="tel:+91 00000-00000"
            id="phoneNo"
            style={{
              color: "priamry.contrastText",
              textDecoration: "none",
            }}
          >
            +91 00000-00000
          </a>
        </Button>
        <Typography
          variant="body2"
          align="center"
          sx={{ m: "auto", color: "white" }}
        >
          {"Copyright © "}
          <Link color="inherit" href="http://localhost:5173/">
            Carlelo
          </Link>{" "}
          (A Corporate Company)
          {" " + new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
