import React from 'react';
import 'boxicons/css/boxicons.min.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's me</h3>
        <h1>Quang Thang</h1>
        <h3>And I'm a <span>Backend Developer</span></h3>
        <p>I'm a diligent individual. I'm driven to learn new things and have a strong sense of advancement.
          I never pass up an opportunity to turn it into an advantage.</p>
        <div className="social-media">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src="../assets/img/quangthang.jpg" alt="Quang Thang" />
      </div>
    </section>
  );
}

export default Home;
