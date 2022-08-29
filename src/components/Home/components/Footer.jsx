import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import landing from "../../../assets/img/landing.jpg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{
          display: "block",
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "bottom",
          height: "auto",
        }}
        src={landing}
        alt="landingPage"
      />
      <Box
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          top: "40%",
          left: "3%",
          right: "3%",
        }}
      >
        <Button
          variant="outlined"
          href="#outlined-buttons"
          style={{ border: "none" }}
        >
          <Typography color="white">for emergency phone number</Typography>
        </Button>
        <Button
          style={{ border: "none" }}
          variant="outlined"
          href="#outlined-buttons"
        >
          <Typography color="white">Fix your Appointment</Typography>
        </Button>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "75%",
          left: "10%",
          right: "10%",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <Box
            pb={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <FacebookIcon />
            <TwitterIcon />
          </Box>
          <Box style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="white">Home</Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="white">About Us</Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="white">Doctor lineup</Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="white">Appointment Schedule</Typography>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};
