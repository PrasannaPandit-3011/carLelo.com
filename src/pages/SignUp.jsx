import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/slice/userSlice";

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

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [initial, setInitial] = useState  (true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailErr, setEmailErr] = useState({ status: false, msg: "" });
  const [pwdErr, setPwdErr] = useState({ status: false, msg: "" });
  const [nameErr, setNameErr] = useState({
    status: false,
    msg: "",
  });
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (email === "") {
      setEmailErr({ status: true, msg: "email is required" });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErr({ status: true, msg: "invalid email" });
      return;
    }
    setEmailErr({ status: false, msg: "" });
    setInitial(false);
  };
  const validatePwd = (e) => {
    setPassword(e.target.value);
    if (password === "") {
      setPwdErr({ status: true, msg: "password is required" });
      return;
    }
    if (password.length < 6) {
      setPwdErr({ status: true, msg: "password is too small" });
      return;
    }
    if (password.length > 30) {
      setPwdErr({ status: true, msg: "password is too big" });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPwdErr({
        status: true,
        msg: "Password must include a capital alphabet",
      });
      return;
    }
    if (!/[0-9]/.test(password)) {
      setPwdErr({
        status: true,
        msg: "Password must contain atleast 1 number",
      });
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      setPwdErr({ status: true, msg: "incorrect password" });
      return;
    }
    setPwdErr({ status: false, msg: "" });
    setInitial(false);
  };

  const validateName = (e) => {
    setName(e.target.value);
    if (name === "") {
      setNameErr({ status: true, msg: "name is required" });
      return;
    }
    setNameErr({ status: false, msg: "" });
    setInitial(false);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      dispatch(
        signUp({
          name: name,
          email: email,
          password: password,
        })
      );
    } catch (error) {
      toast.error("User already exists");
      setNameErr({ status: true, msg: "invalid name" });
      setEmailErr({ status: true, msg: "invalid email" });
      setPwdErr({ status: true, msg: "invalid password" });
    }
  };

  useEffect(() => {
    user && navigate("/");
  }, [user]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 750,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="filled"
                required
                autoFocus
                fullWidth
                id="name"
                value={name}
                onChange={(e) => {
                  validateName(e);
                }}
                label="Name"
                error={nameErr.status}
                helperText={nameErr.msg}
                name="name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                value={email}
                required
                label="Email"
                onChange={(e) => validateEmail(e)}
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                value={password}
                required
                onChange={(e) => validatePwd(e)}
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
              />
            </Grid>
          </Grid>
          <Button
            disabled={
              initial || emailErr.status || nameErr.status || pwdErr.status
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="http://localhost:5173/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
