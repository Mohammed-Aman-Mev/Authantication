import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Log_out } from "../redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(Log_out());
  };

  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static" sx={{ background: "#0E2954" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/home"} component="div">
            <Typography
              variant="h4"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Authantication
            </Typography>
          </Link>
          <Box>
            {user ? (
              <Button
                color="inherit"
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  background: "#4B527E",
                  marginLeft: "5px",
                  border: "1px solid #007fff",
                }}
                onClick={handlelogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to={"/"}>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      background: "#4B527E",
                      marginLeft: "5px",
                      border: "1px solid #007fff",
                      color: "white",
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to={"/Login"}>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      background: "#4B527E",
                      marginLeft: "5px",
                      border: "1px solid #007fff",
                      color: "white",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
