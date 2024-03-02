import React from "react";
import "./App.css";
import { Container, TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE8A58", // change primary color here
    },
    secondary: {
      main: "#FCF1ED", // change secondary color here
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
