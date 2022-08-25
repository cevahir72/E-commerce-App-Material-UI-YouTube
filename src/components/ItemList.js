import React from 'react'
import { Paper, Box } from '@mui/material';
import products from "../helper/products.json";
import ItemCard from "./ItemCard";
import { styled } from '@mui/material/styles';


const MainPaper = styled(Paper)({
    display:"flex",
    width: "100%",
    flexDirection:"column"

})
const Header = styled("div")({
  display:"flex",
  width:"100%",
  justifyContent:"center"

})


const ItemList = () => {
  return (
    <MainPaper>
      <Header>
      <h1>Featured Items</h1>
      </Header>
      <Box sx={{
    display:"flex",
    flexWrap:"wrap",
    width:"100%",
    justifyContent:"center",
    marginBottom:"3rem"}}>
      {
            products.map(item=>(
                <ItemCard key={item.id} item={item}/>
            ))
        }

      </Box>
        
    </MainPaper>
  )
}

export default ItemList