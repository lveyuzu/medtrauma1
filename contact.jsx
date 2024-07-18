import React from 'react';
import { Box, Container, Typography, Divider, Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const ContactPage = () => {
    return (
        <Box
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%', 
                padding: 4, 
                backgroundColor: 'teal',
                width: '100%',
                
                 
            }}
        >
            <Typography color={'white'} variant="h3" component="h1" gutterBottom textAlign="center">
                Бидэнтэй холбогдох
            </Typography>
            <Divider sx={{ width: '100%', marginBottom: 4 }} />
            <Grid container spacing={6} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                       <a href='https://www.google.com/maps/place/Med+Trauma+Hospital/@47.920032,106.8523818,16z/data=!4m14!1m7!3m6!1s0x5d9692da1710d663:0x5b3c5b271af1439b!2sMed+Trauma+Hospital!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf!3m5!1s0x5d9692da1710d663:0x5b3c5b271af1439b!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf?entry=ttu' > 
                         <IconButton sx={{ fontSize: 80, marginBottom: 2 }}>
                            <LocationOnIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                        </a>
                        <a href='https://www.google.com/maps/place/Med+Trauma+Hospital/@47.920032,106.8523818,16z/data=!4m14!1m7!3m6!1s0x5d9692da1710d663:0x5b3c5b271af1439b!2sMed+Trauma+Hospital!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf!3m5!1s0x5d9692da1710d663:0x5b3c5b271af1439b!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf?entry=ttu' >  <Typography variant="h5" component="h2">
                            Хаяг
                        </Typography>
                        <Typography variant="h8" color="textSecondary">
                        Гэмтэл Согог Судлалын Үндэсний Төвийн баруун талд, 3-р Хороолол, Ulaanbaatar
                        </Typography>
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <IconButton  sx={{ fontSize: 80, marginBottom: 2 }}>
                            <PhoneIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                             Утас
                        </Typography>
                        <Typography variant="body1" >
                        7711 0351
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <IconButton sx={{ fontSize: 80, marginBottom: 2 }}>
                            <EmailIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Email
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        brain.expert01@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <IconButton  sx={{ fontSize: 80, marginBottom: 2 }}>
                            <InstagramIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Инстаграм хаяг
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            info@example.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <IconButton  sx={{ fontSize: 80, marginBottom: 2 }}>
                            <FacebookIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                        Facebook хаяг
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            info@example.com
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactPage;
