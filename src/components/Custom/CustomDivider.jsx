import { Divider } from "@mui/material";

const CustomDivider = () => {
  return (
    <Divider
      variant="fullWidth"
      orientation="horizontal"
      sx={{
        width: "100%",
        color: "secondary.contrastText",
      }}
    />
  );
};

export default CustomDivider;
