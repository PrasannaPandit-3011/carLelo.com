import { Box } from "@mui/material";
import notfound from "../assets/404 Error.gif";
function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vh",
        height: "100vh",
      }}
    >
      <img
        src={notfound}
        alt="not found"
        style={{
          height: "60vh",
          width: "50vw",
          margin: "125px",
        }}
      />
    </Box>
  );
}

export default NotFound;
