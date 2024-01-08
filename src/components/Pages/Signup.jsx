import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Register } from "../../redux/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { CheckStatus } from "../../Hooks/checkStatus";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { login, status } = CheckStatus();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = form;

  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match!");
    } else {
      // toast.loading("Promise is pending");
      dispatch(Register(form));
    }
  };

  const handleInput = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, isLoading, isSuccess, isError, message]);

  return (
    <Box
      component="form"
      onSubmit={(e) => handlesubmit(e)}
      sx={{
        // height: "auto",
        display: "flex",
        flexDirection: "column",
        paddingX: "15%",
        paddingY: "5%",
        // width: "500px",
        height: "400px",
        // display: "flex",
        // flexDirection: "column",
        justifyContent: "space-around ",
      }}
    >
      <Typography variant="h3" align="center">
        Sign up
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        name="name"
        required
        onChange={(e) => handleInput(e)}
        value={name}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        required
        onChange={(e) => handleInput(e)}
        value={email}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
        onChange={(e) => handleInput(e)}
        value={password}
      />
      <TextField
        label="confirm password"
        variant="outlined"
        type="password"
        name="password2"
        required
        onChange={(e) => handleInput(e)}
        value={password2}
      />
      <Button variant="contained" type="submit" sx={{ color: "white" }}>
        Sign up
      </Button>
    </Box>
  );
};

export default Signup;
