import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components/Common/index";
import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { useSelector } from "react-redux";
const Main = () => {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: darkMode ? "#1E1E1E" : "#ffffff",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Main;
