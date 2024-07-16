import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import './mri.css';
import Contact from './contact';

const myStyle = {
  backgroundImage: "url('https://www.maudsleybrc.nihr.ac.uk/media/407122/microsite-desktop-banner-21.png')",
  height: "100vh",
  marginTop: "-70px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const cardStyle = {
  position: "absolute",
  top: "50%",
  left: "70%",
  right: "-30%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "220px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: '50px',
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const MRI = () => {
  return (
    <Box>
      <Box style={myStyle}>
        <div style={cardStyle}>
          <Typography variant="h2" component="h2">Соронзон үелзүүрт томографийн оношилгоо</Typography>

          <Typography variant="body1" width=" 200px"> MRI буюу Соронзон Резонанс Томографи нь соронзон орон болон радио долгион ашиглан тархи, нугас, зөөлөн эд, үе холбоос, булчингийн өөрчлөлт, судасны эмгэг, хэвлийн хөндийн эрхтэнүүдийн эрүүл ба эмгэг үеийн өөрчлөлтийг орон зайн гурван хэмжээст хавтгайд тод ялгарал сайтай дүрсэлж шинжилдэг оношлогооны орчин үеийн арга юм.
          Манай Медтравма эмнэлэг нь бүхий төрлийн Соронзон Резонанс Томографи-СРТ оношилгоог мөн тодосгогч бодистой оношилгоог Siemens брендийн 1,5 тесла хүчин чадалтай аппаратаар хийж байна..</Typography>
        </div>
      </Box>
      <Contact />
    </Box>
  );
}

export default MRI;
