import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import * as Yup from "yup";
import { useFormik } from "formik";
import {useNavigate} from "react-router-dom";
import {register} from "../redux/userSlice";
import { useDispatch } from "react-redux";


// const loginValidationSchema = Yup.object().shape({
//   username: Yup.string()
//     .required("Display name is required")
//     .min(2, "Too short")
//     .max(15, "Must be 15 char or less"),
//   password: Yup.string()
//     .required("No password provided.")
//     .min(8, "Password is too short - should be 8 chars minimum.")
//     .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
//     .matches(/\d+/, "Password must have a number")
//     .matches(/[a-z]+/, "Password must have a lowercase")
//     .matches(/[A-Z]+/, "Password must have a uppercase")
//     .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
// });

const Register = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(register(values))
      navigate("/")
    },
  });
  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate("/login")
  }

  return (
    <div>
      <Container
        sx={{
          marginTop: "5rem",
          height: "calc(80vh)",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "3rem",
          borderRadius: "20px",
        }}
        maxWidth="sm"
      >
        <Avatar
          sx={{
            margin: "auto",
            bgcolor: "primary.main",
            // bgcolor: blue[500],
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ margin: "1rem" }} variant="h4">
          REGISTER
        </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                name="username"
                label="User Name"
                variant="outlined"
                onChange={formik.handleChange}
                fullWidth
                value={formik.values.username}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="password"
                label="Password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginBottom: "1rem" }}
              >
                REGISTER
              </Button>
            </Grid>
          </Grid>
            </form>
          <Grid container justifyContent='flex-end'>
                  <p>
                    Already have an account?
                    <Link
                      sx={{
                        textDecoration: 'none',
                        fontWeight: '600',
                        paddingLeft: '0.5rem',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleNavigate()}
                    >
                      Login
                    </Link>
                  </p>
                </Grid>
      </Container>
    </div>
  );
};

export default Register;
