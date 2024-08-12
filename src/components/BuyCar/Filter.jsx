import Divider from "@mui/material/Divider";
import {
  PriceRange,
  Brands,
  FuelType,
  Transmission,
  BodyType,
  CustomDivider,
} from "./Filter/index";
import { Paper } from "@mui/material";

const Filter = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        flex: "20%",
        borderRadius: "7px",
        height: "803px",
        position: "sticky",
        top: 0,
        backgroundColor: "primary",
        overflowY: "scroll",
      }}
    >
      <PriceRange />
      <CustomDivider />
      <Brands />
      <CustomDivider />
      <FuelType />
      <CustomDivider />
      <Transmission />
      <CustomDivider />
      <BodyType />
      <Divider
        variant="middle"
        orientation="horizontal"
        sx={{
          fontSize: "10px",
          mb: 2,
          color: "primary.main",
        }}
      >
        *You&apos;ve reached the end*
      </Divider>
    </Paper>
  );
};

export default Filter;
