import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Log_in } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, } = useSelector((state) => state.auth);

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(Log_in(data));
  };

  const handleData = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <Box
      component="form"
      onSubmit={(e) => handleLogin(e)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10%",
        height: "250px",
      }}
    >
      <Typography variant="h3" align="center">
        Log In
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        required
        onChange={(e) => handleData(e)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
        onChange={(e) => handleData(e)}
      />
      <Button variant="contained" color="primary" type="submit">
        Log In
      </Button>
    </Box>
  );
};

export default Login;
