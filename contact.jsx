// src/ContactPage.js
import React from 'react';
import { Box, Container, Typography, Divider, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
    return (
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh', 
                padding: 4 
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                Contact Information
            </Typography>
            <Divider sx={{ width: '100%', marginBottom: 4 }} />
            <Grid container spacing={6} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <LocationOnIcon color="primary" sx={{ fontSize: 80, marginBottom: 2 }} />
                        <Typography variant="h5" component="h2">
                            Address
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            123 Street Name, City, Country
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <PhoneIcon color="primary" sx={{ fontSize: 80, marginBottom: 2 }} />
                        <Typography variant="h5" component="h2">
                            Phone
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            +123 456 7890
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <EmailIcon color="primary" sx={{ fontSize: 80, marginBottom: 2 }} />
                        <Typography variant="h5" component="h2">
                            Email
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            info@example.com
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPage;

