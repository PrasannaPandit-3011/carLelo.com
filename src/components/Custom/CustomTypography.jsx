import { Typography } from "@mui/material";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const CustomTypography = ({ text, variant }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Typography
      variant={variant}
      color={darkMode ? "primary.contrastText" : "initial"}
      sx={{
        textAlign: "left",
        ml: 2,
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;
