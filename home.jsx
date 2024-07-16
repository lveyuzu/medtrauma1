// components/home.js
import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css';
import { Element } from 'react-scroll';
import About from './about';
import Services from './services';
import Contact from './contact';

const myStyle = {
  backgroundImage:
      "url('https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg')",
  height: "100vh",

  marginTop: "-70px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const HomePage = () => {
  return (

    

    <Container className='base' style={myStyle}>
       <Element name="home"> 
        <Box className='container'  > 
      <Box className="header" my={4}>
        <Typography className='title' variant="h1" component="h1" gutterBottom>
          Welcome to Medtrauma
        </Typography>
        <Typography variant="body1" paragraph className="description">
          24HR MRI/CT 
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/about" className="button">
          Learn More About Us
        </Button>
      </Box>
      </Box>
      </Element> 

      <Element name="about">
        <Box my={4} textAlign="center">
         <About/>
    
          
        </Box>
      </Element>


      <Element name="services">
        <Box my={4} textAlign="center">
        <Services/>
        </Box>
      </Element>

      <Element name="contact">
        <Box my={4} textAlign="center">
        <Contact/>
        </Box>
      </Element>

   
    </Container>
  );
};

export default HomePage;



 