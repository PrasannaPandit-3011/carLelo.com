import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  LogIn,
  Main,
  BuyCar,
  SellCar,
  CarDetails,
  Chats,
  SignUp,
  NotFound,
} from "./pages/index";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const theme = createTheme({
    palette: {
      primary: {
        light: "#6300a3",
        main: "#5c42af",
        dark: "#2E054E",
        contrastText: "#fff",
      },
      secondary: {
        light: "#2e054e",
        main: "#D73746",
        dark: "#ba000d",
        contrastText: "#000",
      },
      warning: {
        main: "#e5b700",
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<BuyCar />} />
              <Route path="/sell" element={<SellCar />} />
              <Route path="/chat/:id" element={<Chats />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
