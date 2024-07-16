 
import React from 'react';
import './about.css';
function About() {
    return (
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              {/* <img src="./placeholder.png" alt="img" /> */}
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title"><b>About <span>us</span></b></h1>
            <p className="text">
              Медтравма эмнэлэг нь 2007 онд анх байгуулагдсан цагаасаа эхлэн дүрс оношилгооны тусламж үйлчилгээг улсын хэмжээнд 24 цагаар тасралтгүй үзүүлж байна.
              Дүрс оношилгооны тэргүүлэх болон ахлах мэргэжилийн зэрэгтэй эмч технологич нараас бүрдсэн манай хамт олон сүүлийн үеийн дэлхийн чиг хандлагатай хөл нийлүүлэн ажиллаж, тасралтгүй суралцан, иргэдэд эрүүл мэндийн тусламж үйлчилгээг чанартай үзүүлэхийг эрхэмлэж ажилладаг.
            </p>
          </div>
        </div>
      </section>
    );
  }
  export default About;