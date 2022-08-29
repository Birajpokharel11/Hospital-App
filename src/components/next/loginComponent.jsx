import { Button, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const loginComponent = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "300px", width: "80%" }}>
      <Paper style={{ padding: "50px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Paper
            style={{ background: "#1976d2", padding: "6px 16px" }}
            disableElevation
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              Please Sign In
            </Typography>
          </Paper>
          <TextField
            fullWidth
            id="email"
            label="Email"
            // value={}
            // onChange
          />
          <TextField fullWidth id="email" label="Password" type="password" />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default loginComponent;
