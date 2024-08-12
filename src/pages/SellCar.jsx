import { SellForm, SellProcess, WhySell } from "../components/SellCar/index";
import { Box } from "@mui/material";

const SellCar = () => {
  return (
    <>
      <SellForm />
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: { md: "88vw" },
          mx: "auto",
        }}
      >
        <SellProcess />
        <WhySell />
      </Box>
    </>
  );
};

export default SellCar;
