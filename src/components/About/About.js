import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/quangthang.jpg" alt="Quang Thang" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>BackEnd Developer</h3>
        <p>Hello! My name is Thang. I have over 5 years of experience working with .NET technology. 
        From the very beginning, I was captivated by the ability to build robust and flexible applications that .NET offers...</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}

export default About;
