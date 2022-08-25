import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
//Redux imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../redux/cartSlice";



 const CardContainer= styled(Card)(({ theme }) =>({
    width:"21%",
    margin: "1rem",
    marginBottom: "2rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "14px",
    [theme.breakpoints.down("sm")]: {
      width:"90%"
    },
 }));

    
 const Content = styled(CardContent) ({
    minHeight: "11rem",
  })


const ItemCard = ({ item}) => {
  

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (a) => {
    dispatch(addToCart(a));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
      <CardContainer>
        <CardMedia
          component="img"
          height="250"
          image={item.image}
          alt="image"
        />
        <Content >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ height: "4rem" }}
          >
            {item.title}
          </Typography>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Description
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {item.about}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <Typography component="legend">User Rating</Typography>
          <Rating name="simple-controlled" value={item.rate} readOnly />
          <Divider />
          <Typography variant="h4">${item.price}</Typography>
        </Content>
        <CardActions>
          <Button variant="contained" onClick={() => handleAddToCart(item)}>
            ADD TO CART
          </Button>
        </CardActions>
      </CardContainer>
      
   
    
  );
};

export default ItemCard;
