import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MenuItemLg from './MenuItemlg';
import { Grid } from '@mui/material';
 
function Menu() {
  const categories = [

    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      name: "biryani",
      price:100,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
      name: "Kesari Bath",
      price:200,
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      name: "Chicken",
      price:130,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      name: "Chaat",
      price:10,
    },
  ];
  return (
       <>
      <div>
      {categories.map((food) => (
            <MenuItem {...food} />
            
          ))}
          </div>
          <div>
          <Grid container spacing={3}>
          {categories.map((food) => (
            <MenuItemLg {...food} />
            
          ))}
        </Grid>
    
          </div>
          </>
     
  )
}

export default Menu;