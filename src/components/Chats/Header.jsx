import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VideocamIcon from "@mui/icons-material/Videocam";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.chat.user);

  return (
    user && (
      <Box
        sx={{
          display: "flex",
          textAlign: "left",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0 20px 10px",
            flexGrow: 1,
          }}
        >
          <Avatar
            src={`https://source.unsplash.com/random/1080×1920/?indian-person}`}
            alt="dp"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              overflowX: "hidden",
            }}
          >
            <Typography variant="body1" sx={{ ml: 2 }}>
              {user?.name}
            </Typography>
            <Typography variant="body2" sx={{ ml: 2.1 }}>
              {`${user?.city}, ${user?.state}`}
            </Typography>
          </div>
        </div>
        <IconButton
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "primary.contractText",
            }}
          >
            <VideocamIcon sx={{ fontSize: 30 }} />
            Video Call
          </Typography>
        </IconButton>
        <IconButton
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "primary.contractText",
              mx: 2,
            }}
          >
            <CallIcon sx={{ fontSize: 30 }} />
            Call
          </Typography>
        </IconButton>
      </Box>
    )
  );
};

export default Header;
