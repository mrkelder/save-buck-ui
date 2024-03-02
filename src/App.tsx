import React from "react";
import "./App.css";
import { Container, TextField, Button } from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
        }}
        maxWidth="md"
      >
        <TextField fullWidth label="Filled" variant="filled" />
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Search
        </Button>
      </Container>
    </Container>
  );
}

export default App;
