import { Notifications } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import logo from "../helper/logo.png";
import PersonIcon from '@mui/icons-material/Person';
import {logout} from "../redux/userSlice";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const basket = useSelector((state)=> state.cart);
  const loggedIn = useSelector((state)=>state.user.loggedIn)

  const dispatch = useDispatch()

  const handleLogout = ()=> {
    dispatch(logout())
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Link to="/" >
          <img  src={logo} alt="logo"  />
        </Link>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Link to="/" >
          <img  src={logo} alt="logo" style={{width:"100px"}} />
        </Link>
        </Box>
        <SearchIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Link to="/checkout">
          <Badge badgeContent={basket.cartTotalQuantity} color="error">
            <ShoppingCartIcon sx={{color:"white"}}/>
          </Badge>
          </Link>
          {loggedIn ? (
              <Badge  badgeContent={2} color="error">
              <Notifications/>
            </Badge>
          ): (
            <Badge sx={{display:"none"}} badgeContent={2} color="error">
            <Notifications sx={{display:"none"}}/>
          </Badge>
          )}
          
          {loggedIn ? (
            <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://media.istockphoto.com/photos/closeup-of-a-young-man-smiling-laughing-male-person-picture-id1036082182?k=20&m=1036082182&s=170667a&w=0&h=7eqDlCK0WH5P1qfakYdSYAO1v33WCAQoOHs3JOuByF8="
            onClick={(e) => setOpen(true)}
          />
          ) : (
             <PersonIcon onClick={(e) => setOpen(true)} sx={{marginLeft:"10px"}}/>
          )}
          
        </Icons>
        
        {loggedIn ? (
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
            sx={{ width: 30, height: 30 ,marginLeft:"10px"}}
            src="https://media.istockphoto.com/photos/closeup-of-a-young-man-smiling-laughing-male-person-picture-id1036082182?k=20&m=1036082182&s=170667a&w=0&h=7eqDlCK0WH5P1qfakYdSYAO1v33WCAQoOHs3JOuByF8="
            onClick={(e) => setOpen(true)}
          />
          </UserBox>
          ) : (
            <UserBox onClick={(e) => setOpen(true)}><PersonIcon onClick={(e) => setOpen(true)} sx={{marginLeft:"10px"}}/></UserBox>   
          )}
        
      </StyledToolbar>
      {
        loggedIn ? (
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
        <Link to="/profile" style={{textDecoration:"none", color:"black"}}>
        Profile
        </Link>
        </MenuItem>
        <MenuItem>
         <Link to="/register" style={{textDecoration:"none", color:"black"}}>
         New User
         </Link>
        </MenuItem>
        <MenuItem onClick={()=>handleLogout()}>
          <Link to="/login" style={{textDecoration:"none", color:"black"}}>
          Logout
          </Link>
          </MenuItem>
      </Menu>
        ): (
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem><Link style={{textDecoration:"none",color:"black"}} to="/login">Login</Link> </MenuItem>
        <MenuItem><Link style={{textDecoration:"none",color:"black"}} to="/register">Register</Link> </MenuItem>
      </Menu>
        )
      }
    </AppBar>
  );
};

export default Navbar;