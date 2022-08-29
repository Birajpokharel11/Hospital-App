import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{ padding: "0px 20px 0px 20px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              style={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              style={{
                display: "flex",
                justifycontent: "space-between",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
              <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Us
              </Link>
              <Link
                to="/doctorlineup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Doctors Lineup
              </Link>
              <Link
                to="/appointment"
                style={{ textDecoration: "none", color: "white" }}
              >
                Appointment Schedule
              </Link>
            </Box>
            <Box>
              <Button
                variant="outlined"
                style={{ borderRadius: "17px", background: "white" }}
              >
                <Link
                  passHref
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "orange",
                    fontWeight: "700",
                    fontVariant: "normal",
                    textTransform: "capitalize",
                  }}
                >
                  Log In
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
