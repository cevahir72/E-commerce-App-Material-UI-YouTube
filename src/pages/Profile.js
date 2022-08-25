import {
  Button,
  Container,
  Grid,
  Typography,
  styled,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleNavigate = () => {
    navigate("/");
  };
  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const ProfileContainer = styled(Container)(({ theme }) => ({
    width: "50%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "9rem",
    },
  }));

  const ProfileBox = styled(Grid)(({ theme }) => ({
    height: "50vh",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "2rem",
    padding: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0.5rem",
    },
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
    },
  }));

  const ProfileTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "2rem",
    },
  }));

  const Img = styled("img")(({ theme }) => ({
    width: "7rem",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "5rem",
    },
  }));

  const currentUser = useSelector((state) => state.user.username);

  return (
    <div>
      <ProfileContainer>
        {loggedIn ? (
          <ProfileBox
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <ImageContainer>
                <Img src="https://media.istockphoto.com/photos/closeup-of-a-young-man-smiling-laughing-male-person-picture-id1036082182?k=20&m=1036082182&s=170667a&w=0&h=7eqDlCK0WH5P1qfakYdSYAO1v33WCAQoOHs3JOuByF8=" />
              </ImageContainer>
            </Grid>
            <Grid item xs={8}>
              <ProfileTitle>
                <Typography variant="h4">Profile</Typography>
              </ProfileTitle>
            </Grid>
            <Grid item xs={4} style={{ paddingTop: "1rem" }}>
              <Typography>Username</Typography>
            </Grid>
            <Grid item xs={8} style={{ paddingTop: "1rem" }}>
              <Typography>{currentUser}</Typography>
            </Grid>
            <Grid item xs={4} style={{ paddingTop: "1rem" }}>
              <Typography>E-mail</Typography>
            </Grid>
            <Grid item xs={8} style={{ paddingTop: "1rem" }}>
              <Typography>MK.store@gmail.com</Typography>
            </Grid>
            <Grid item xs={4} style={{ paddingTop: "1rem" }}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={8} style={{ paddingTop: "1rem" }}>
              <Typography>Edinger Ave. 92705 Santa Ana CA</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton
                color="primary"
                aria-label="Back to shopping"
                size="large"
                onClick={() => handleNavigate()}
              >
                <ArrowCircleLeftIcon fontSize="inherit" />
              </IconButton>
              <Typography>Back To Shopping</Typography>
            </Grid>
          </ProfileBox>
        ) : (
          <Box
            sx={{
              marginTop: "5rem",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "3rem",
              width: "100%",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            maxWidth="sm"
          >
            <Typography variant="h5">You have to Login First!</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"1rem"
              }}
            >
              <Button size="large" variant="contained" onClick={()=>handleNavigateLogin()}>
                LOGIN PAGE
              </Button>
            </Box>
          </Box>
        )}
      </ProfileContainer>
    </div>
  );
};

export default Profile;
