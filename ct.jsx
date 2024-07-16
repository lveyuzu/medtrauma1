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
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const MRI = () => {
  return (
    <Box>
      <Box style={myStyle}>
        <div style={cardStyle}>
          <Typography variant="h2" component="h2">Компьютерт томографийн шинжилгээ</Typography>

          <Typography variant="body1" width=" 200px"> Медтравма эмнэлэг нь PHILIPS брендийн Brilliance 64 slice-ийн спираль Компьютерт Томографийн Оношилогооны аппаратыг ашиглаж байна. Манай аппарат нь эдийн 0,75 мм нарийвчлалтай гурван тэнхлэгийн дагуу / аксиаль, корональ, сагиталь / зүслэгүүд болон 3н жэмжээст /3D дүрслэл/ дүрслэлээр хүний бүтэн биеийг /Толгойн оройноос хөлийн ул хүртэл/ 25 секундын дотор буюу хамгийн хурдан оношлох чадвартай. 
          Компьютерт томографийн шинжилгээ нь гэмтлийн болон бүтцийн эмгэг өөрчлөлтийг оношилох оношилгооны өндөр ач холбогдолтой. Компьютерт томографийн шинжилгээнд тодосгогч бодисыг хэрэглэснээр ижил нягтралтай эрхнүүдийг ялган оношлох болон голомтод өөрчлөлтүүд болох буглаа, үрэвсэл, хавдар, ясны-зөөлөн эдийн сүрьеэ, ёудасны эмгэг өөрчлөлтийг ялган оношлох, хавдрын үсэрхийллийн тархалт, байршлыг тогтоох зэрэг давуу талуудтай.  </Typography>
        </div>
      </Box>
      <Contact />
    </Box>
  );
}

export default MRI;

