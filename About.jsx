import React from 'react';
import './About.css';
import img from "./hosp.png"
import img2 from "./flat-hand.png"
import img3 from "./patient.png"
import img4 from "./hosp.png"

function About() {
  return (
  <div id='container'>
    <section id='about'>
      <h1 className="section-title"><b>Бидний тухай</b></h1>
      <h4 className="title-slogan">Гэмтэл согог, дүрс оношилгооны чиглэлээр 24 цагийн үйлчилгээ үзүүлдэг</h4>
    </section>
      <section id='box'>
      <div className="about-img" class="col1">
          <img src="https://unread.today/webroot/files/64b7edabebbbe2376fb3677892039b36.jpg" alt="img" />
      </div>
        <p className='text' class="col2">
        " Манай эмнэлэг нь технологийн шийдлийг ашиглан хөдөө орон нутаг, алслагдсан газар, боловсон хүчин дутмаг жижиг хувийн эмнэлгүүдэд хүртэл хүрч үйлчилдэг. Яаралтай оношилгоо шаардсан хүмүүст маш богино хугацаанд хүрч үйлчлэх зорилготой тул өдөр шөнөгүй ажилладаг."
        <p class="caption">
        Ерөнхий захирал, клиникийн профессор Д. Бархүү
        </p>
        </p>
    </section>
    <section id='box'>
      <div className="about-img" class="col3">
          <img src={img} alt="png" />
      </div>
        <p className='text' class="col4">
        Гэмтэл согогийн тэргүүлэх болон ахлах зэргийн мэс заслын эмч нар гэмтлийн тусламж үйлчилгээг цаг алдалгүй үзүүлдэг гэмтлийн чиглэлийн цөөхөн эмнэлгийн нэг юм.
        <ul>- Нийт 12 их эмч</ul>
        <ul>- 14 дүрс оношилгооны технологич</ul>
        <ul>- 20 гаруй эмнэлгийн тусгай мэргэжилтэн</ul>
        <ul>- Нийт 50 ажилтантай хамт олон юм</ul>
        </p>
    </section>
    <section id='box'>
      <div className="about-img" class="col5">
          <img src={img2} alt="img" />
      </div>
        <p className='text' class="col7">
        Манай хамт олон БНСУ-н нуруу нугас, үе мөчний төрөлжсөн эмнэлэг болох “НЭ” эмнэлэгтэй хамтран Монгол улсдаа шинэ дэвшилтэт эмчилгээний арга болох нуруу нугасны өвдөлт болон нурууны эмгэгийн эмчлэх аргуудыг нэвтрүүлэн ажиллаж эмч, эмнэлгийн мэргэжилтнүүдээ энэ чиглэлээр өөрийн орондоо дадлагажуулах, БНСУ-д сургах зэрэг ажлуудыг амжилттай хийж гүйцэтгэж байна.

        </p>
    </section>
    <section id='box'>
      <div className="about-img" class="col6">
          <img src={img3} alt="img" />
      </div>
        <p className='text' class="col4">
        Манай тасаг нь Монгол улсын хэмжээнд анх удаагаа дүрс оношилгооны бүхий л шинжилгээний дүгнэлтийг өндөр хурдны интернет ашиглан цаг алдалгүй Улаанбаатар хотын төрийн болон хувийн хэвшлийн эмнэлгүүд, аймаг, дүүргийн дүрс оношилгооны тасгуудтай холбогдон мэргэжлийн төвшинд гаргаж өгөх бололцоотой төвийг нээн ажиллуулаад байна.
        </p>
    </section>
  </div>    
  );
}

export default About;