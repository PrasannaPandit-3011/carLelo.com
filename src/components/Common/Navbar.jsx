import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import DarkModeContext from "../../context/DarkModeContext";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slice/userSlice";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const pages = [
  {
    path: "",
    element: <HomeRoundedIcon />,
    title: "Home",
  },
  {
    path: "buy",
    element: <DirectionsCarFilledRoundedIcon />,
    title: "Buy a car",
  },
  {
    path: "sell",
    element: <SellRoundedIcon />,
    title: "Sell your car",
  },
];

const Navbar = () => {
  const { pathname } = window.location;
  const [anchor, setAnchor] = useState(null);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const open = Boolean(anchor);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageClick = () => {
    navigate("/");
  };
  const handleAvatarClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleLogoutClick = () => {
    setAnchor(null);
    dispatch(logOut());
    navigate("/login");
  };
  const handleClickAway = () => {
    setAnchor(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          onClick={handleImageClick}
          src={logo}
          alt="carlelo"
          className="logo"
          style={{
            height: "40px",
          }}
        />
        <Box
          sx={{
            flex: { md: 0.45, lg: 0.35 },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <IconButton
              key={page.title}
              onClick={() => {
                navigate(page.path);
              }}
              sx={{
                color:
                  pathname.split("/")[1] === page.path ? "#ed264f" : "#F2EEEB",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {page.element}
              <Typography
                component={"h3"}
                sx={{
                  fontWeight:
                    pathname.split("/")[1] === page.path ? "bolder" : "bold",
                  fontSize:
                    pathname.split("/")[1] === page.path ? "0.85rem" : "0.8rem",
                }}
              >
                {page.title}
              </Typography>
            </IconButton>
          ))}
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <ClickAwayListener onClickAway={handleClickAway}>
            <Tooltip title="Open Settings">
              <IconButton onClick={handleAvatarClick}>
                <Avatar
                  src="https://source.unsplash.com/random/1080×1920/?random-person"
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
          <Menu open={open} anchorEl={anchor}>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
