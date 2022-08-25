import { Paper, Button, Box, Typography } from '@mui/material';



function Item({item})
{

    return (
        <Paper >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"45rem"}}/>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"15rem"}}/>
            </Box>
            <Box sx={{display: { xs: "none", sm: "flex" }, justifyContent:"center", alignItems:"center", flexDirection:"column",paddingBottom:"1rem" }}>
            <Typography variant="h4">{item.title}</Typography>
            <Button variant="contained">
                Shop Now
            </Button>
            </Box> 
            <Box sx={{display: { xs: "flex", sm: "none" }, justifyContent:"center", alignItems:"center", flexDirection:"column",paddingBottom:"1rem" }}>
            <Typography variant="h6">{item.title}</Typography>
            <Button variant="contained" size='small'>
                Shop Now
            </Button>
            </Box>     
        </Paper>
    )
}

export default Item