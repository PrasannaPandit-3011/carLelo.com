import texture from "../../assets/textureBg.webp";
import buyback from "../../assets/buy_back.svg";
import { Box } from "@mui/material";
import { CustomTypography } from "../Custom";

const CarBuyBackInfo = ({ carData }) => {
  return (
    <Box
      sx={{
        color: "primary.main",
        borderRadius: "6px",
        height: 1,
        backgroundImage: `url("${texture}")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.1)",
        ml: { md: 2, lg: 0 },
        mt: { lg: 1, md: 0 },
      }}
    >
      <img
        src={buyback}
        style={{
          width: "100px",
          height: "30px",
          margin: "20px 205px 60px 10px",
        }}
      />
      <CustomTypography
        text={"Our Assurance to buy again at"}
        variant={"body1"}
      />
      <CustomTypography
        text={
          <strong>
            ₹{((carData?.car?.price - 213100) / 100000).toFixed(2)} Lakh*{" "}
          </strong>
        }
        variant={"h6"}
      />
      <CustomTypography
        text={"within 12 months of purchase"}
        variant={"body1"}
      />
    </Box>
  );
};

export default CarBuyBackInfo;
