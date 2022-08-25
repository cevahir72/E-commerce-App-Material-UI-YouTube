import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CarouselSub from "./Carousel-sub";
import slider from "../helper/slider.json"

function Example()
{
   
    return (
        <Carousel>
            {
                slider.map( item => <CarouselSub key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default Example