import { Box, Container, Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as BaseLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Grid
      container
      sx={{ background: "#1e1e1e", paddingY: "1rem", marginY: "1rem" }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            gap: 3,
            fontSize: 22,
            cursor: 'pointer',
            '& :hover': {
              color: 'green'
            },
            display: "flex",
            color: "white",
            "& > div": { paddingRight: "1rem" },
          }}
          xs={8}
        >
          <Box component={BaseLink} to={'/'}>Home</Box>
          <Box component={BaseLink} to={'/'}>News</Box>
          <Box component={BaseLink} to={'/'}>Courses</Box>
          <Box component={BaseLink} to={'/Ebook'}>E-books</Box>
          <Box component={BaseLink} to={'/'}>Contact Us</Box>
        </Grid>
        <Grid item sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <ShoppingCartIcon /> <Box>Cart</Box>
        </Grid>
      </Container>
    </Grid>
  );
}
