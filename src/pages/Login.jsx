import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import fullLogo from "../assets/fullLogo.png";
import logo from "../assets/logo.png";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slice/userSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:5173/logIn">
        CarLelo.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailErr, setEmailErr] = useState({ status: false, msg: "" });
  const [pwdErr, setPwdErr] = useState({ status: false, msg: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      validateEmail(email);
      validatePwd(password);
      dispatch(
        logIn({
          email,
          password,
        })
      );
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      setEmailErr({ status: true, msg: "Invalid email or password" });
      setPwdErr({ status: true, msg: "Invalid email or password" });
      toast.error("No user");
    }
  };

  const validateEmail = (email) => {
    if (email === "") {
      setEmailErr({ status: true, msg: "email is required" });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErr({ status: true, msg: "invalid email" });
      return;
    }
    setEmailErr({ status: false, msg: "" });
  };

  const validatePwd = (password) => {
    if (password === "") {
      setPwdErr({ status: true, msg: "password is required" });
      return;
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url("${fullLogo}")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "primary.contrastText",
          backgroundSize: "90%",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            src={logo}
            sx={{ m: 1, bgcolor: "#5C42AF", width: 0.3, height: 0.2 }}
          />

          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, display: "flex", flexDirection: "column" }}
          >
            <TextField
              autoFocus
              variant="outlined"
              value={email}
              required
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              error={emailErr.status}
              helperText={emailErr.msg}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              label="Password"
              error={pwdErr.status}
              helperText={pwdErr.msg}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ display: password.length > 0 ? "flex" : "none" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 2,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="*" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  ml: 1,
                }}
              >
                <Link href="http://localhost:5173/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
