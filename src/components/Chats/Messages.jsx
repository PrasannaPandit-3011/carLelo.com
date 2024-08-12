import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Messages = ({ displayMessage }) => {
  return displayMessage.map((message, i) => (
    <Box
      key={i}
      sx={{
        px: 2,
        display: "flex",
        borderRadius: 5,
        textAlign: "left",
        flexDirection: "column",
        maxWidth: "250px",
        flexWrap: "wrap",
        mb: 2,
        alignItems: "left",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          width: "100%",
          overflowX: "hidden",
          flexWrap: "wrap",
          border: 1,
          p: 1,
          borderRadius: 5,
          color: "primary.contrastText",
          backgroundColor: "primary.main",
        }}
      >
        {message.message}
      </Typography>
      <sub
        style={{
          marginTop: 5,
        }}
      >
        {message.time}
      </sub>
    </Box>
  ));
};

export default Messages;
