import {
  Paper,
  Box,
  Typography,
  FormControl,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Box1 = styled(Box)({
  width: {xs:"50%", sm:"70%"},
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding:"0 0.5rem",
  paddingBottom: "3rem"
});


const Box2 = styled(Typography)(({ theme }) => ({
  width: "100%",
  background:
    "linear-gradient(0deg, rgba(253,253,255,1) 0%, rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%)",
  display: "flex",
  paddingBottom: "4rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft:"1rem"
  },
}));

const Footer = () => {
  
  return (
    <Paper
      style={{ display: "flex", flexDirection: "column", alignItems: "center"}}
    >
      <Box1 >
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          Stay In Touch
        </Typography>
        <Typography style={{ marginBottom: "1rem", textAlign: "center" }}>
          Don't forget to stay in touch with us to get instant information about
          new products!
        </Typography>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          </FormControl>
          <Button sx={{ height: "55px", width: "80px" }} variant="contained">
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box1>
      <Box2>
        <Box
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{fontSize:"smaller", display:{xs:"block", sm:"none"}}}>
            <h3>OUR ADDRESS:</h3>
            <p>
              19 Mayis Street <br />
              Kecioren / Ankara TURKEY
            </p>
            <h3>Phone Number:</h3>
            <p>+90 544 962 23 37</p>
          </Box>
          <Box sx={{display:{xs:"none", sm:"block"}}}>
            <h3>OUR ADDRESS:</h3>
            <p>
              19 Mayis Street <br />
              Kecioren / Ankara TURKEY
            </p>
            <h3>Phone Number:</h3>
            <p>+90 544 962 23 37</p>
          </Box>
        </Box>
        <Box
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Follow us:</h3>
          <ul style={{ listStyle: "none"}}>
            <li>
              <a href="https://www.instagram.com/kelesmevlut71/" style={{color:"black"}}>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/cevahir72" style={{color:"black"}}>
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mevlut-keles-435607215" style={{color:"black"}}>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </Box>
      </Box2>
    </Paper>
  );
};

export default Footer;
