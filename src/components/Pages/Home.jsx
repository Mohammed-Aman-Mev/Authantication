import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const nevigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      nevigate("/");
    }
  }, [user]);

  return (
    <div>
      <Typography variant="h2" align="center">
        Welcome to Home
      </Typography>
    </div>
  );
};

export default Home;
