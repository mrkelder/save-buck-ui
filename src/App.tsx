import React from "react";
import "./App.css";
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Stack,
} from "@mui/material";
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
  const mockItems = [
    { id: 0, name: "Nike Air Force 1", price: 24.61 },
    { id: 1, name: "Nike Air Force 1", price: 62.61 },
    { id: 2, name: "Nike Air Force 1", price: 96.61 },
    { id: 3, name: "Nike Air Force 1", price: 18.61 },
    { id: 4, name: "Nike Air Force 1", price: 53.61 },
  ].sort((a, b) => a.price - b.price);

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
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            minHeight: "calc(100vh - 60px)",
            gap: "24px",
          }}
        >
          <Container
            sx={{
              display: "flex",
            }}
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
          {mockItems.map(({ id, name, price }) => (
            <Container
              key={id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Container style={{ display: "flex", gap: "10px" }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  alt="Air Force 1"
                  src="https://www.famousfootwear.ca/blob/product-images/21000/71/21/05/712105_right_medium.jpg"
                />
                <Stack>
                  <Typography>{name}</Typography>
                  <Typography>Price: {price}$</Typography>
                  <Link href="https://www.famousfootwear.ca/en/product/nike-mens-court-vision-low-sneaker-1049115/white-712105">
                    The listing
                  </Link>
                </Stack>
              </Container>
            </Container>
          ))}
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
