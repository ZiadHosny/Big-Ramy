import { Box, Container, Grid } from "@mui/material";
import { Link as BaseLink } from 'react-router-dom';
import { Logo } from "../../assets/Logo";

export default function Header() {
  return (
    <Grid>
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box component={BaseLink} to={'/'}>
          <Logo />
        </Box>
        <Box component={BaseLink} to={'/login'}>signup or signin</Box>
      </Container>
    </Grid>
  );
}
