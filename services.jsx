import React from 'react';
import './services.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Stack } from "@mui/material";
import ButtonComponent from './ButtonComponent';

 
 

   
function Services() {
  return (
    <Stack direction="column" spacing={5} justifyContent="center" alignItems="center">
      <Box className="w-64" textAlign="center">
      <h2 className="custom-title"> Үйлчилгээ </h2>
      </Box>
      
      <Stack direction="row" spacing={4}>
        <ButtonComponent 
        
        href="./mri"
        
         backgroundImage="https://cdn.bimedis.com/search/aimage/big/1075246/3/mri-machines-siemens-magnetom-aera-15t?iv=1522824715" 
        


         />
        <ButtonComponent 
        
        href="./ct" 
          
         backgroundImage="https://cdn.dotmed.com/images/listingpics2/3/0/1/0/3010830_3.jpg" />


      </Stack>
    
    <Box>
      <h5 className='caption'>Magnetic resonance imaging</h5>
      </Box>   
   
    </Stack>

     
  );
}

export default Services; 