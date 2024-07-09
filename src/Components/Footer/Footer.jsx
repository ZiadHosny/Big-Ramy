import { Box, Container, Grid, Input } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Logo } from "../../assets/Logo";
export default function Footer() {
  return (
    <Grid>
      <Container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Logo />
          </Box>
          <Box>
            <Box color={"#959595"}>Join Our</Box>
            Newsetter
          </Box>
          <Box>
            <Input></Input>
          </Box>
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#959595",
            marginY: "1rem",
          }}
        ></Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={4} sx={{ "& div": { marginY: ".5rem" } }}>
            <Box sx={{ color: "#959595", fontSize: ".7rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesett ing
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Box>
            <Box fontSize={".9rem"}>Follow us on</Box>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "start",
                "& div": {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  color: "black",
                  background: "#55e748",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: ".5rem",
                },
              }}
            >
              <Box>
                <TwitterIcon />
              </Box>
              <Box>
                <LinkedInIcon />
              </Box>
              <Box>
                <InstagramIcon />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ fontSize: ".8rem", "& div": { paddingBottom: "1rem" } }}
          >
            <Box>News</Box>
            <Box>Tournaments</Box>
            <Box>Courses</Box>
            <Box>E-Books</Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ fontSize: ".8rem", "& div": { paddingBottom: "1rem" } }}
          >
            <Box>News</Box>
            <Box>Privacy policies</Box>
            <Box>Terms & Conditions</Box>
            <Box>Contact Us</Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
