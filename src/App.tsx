import React from "react";
import "./App.css";
import { Container, TextField, Button, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE8A58",
    },
    secondary: {
      main: "#FCF1ED",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header style={{ padding: "14px" }}>
        <Typography
          variant="h1"
          sx={({ palette }) => ({
            fontSize: "1.75rem",
            color: palette.primary.main,
          })}
        >
          Save Buck
        </Typography>
      </header>
      <main>
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
            <TextField
              fullWidth
              label="Search"
              placeholder="Please put your product here"
              variant="filled"
            />
            <Button
              variant="contained"
              sx={({ palette }) => ({
                textTransform: "capitalize",
                color: palette.secondary.main,
              })}
            >
              Search
            </Button>
          </Container>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
