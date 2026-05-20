import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `

    <div class="logo-container">
      <img src="assets/originalLogo.jpg" alt="a personal logo with a bunny in a circle with flowers." class="logo1">
      <img src="assets/fallLogo.png" alt="personal logo with a bunny in the middle surrounded by fall leaves." class="logo2">
      <img src="assets/portfoliophoto2.jpg" alt="picture of my face with makeup." class="logo3">
      <img src="assets/halloweenLogo.png" alt="personal logo with a bunny in the middle with spider webs around." class="logo4">
      <img src="assets/springLogo.png" alt="personal logo with a bunny in the middle with flowers and flower pedals around it." class="logo5">
    </div>


  <div class="about-container">
  <h1>About Aisha Keller</h1>

  <h2>About Me</h2>
  <p>Hello, I'm Aisha Keller!</p>
  <p>I am a passionate software developer with a love for creating colorful and engaging web applications. With a background in Web Development and Digital Marketing I have a good foundation of skills that partains to both fields. I am always eager to learn new technologies and take on exciting projects that allow me to grow as a developer.</p>
  <h2>Bucket List & Aspirations</h2>
  <ul>
    <li>Create fun projects that develop and showcase my skills</li>
    <li>Learn new programming languages and frameworks</li>
    <li>Contribute to open-source projects</li>
    <li>Collaborate with other developers on exciting projects</li>
    <li>Attend tech conferences and meetups to network and learn from industry experts</li>
    <li>Continuously improve my skills and stay up-to-date with the latest trends in web development</li>
    <li>Learn more about AI technologies and how they can be integrated into web applications respectfully</li>
  </ul>
</div>
  `,
  styles: `

  /* ===== LOGO CONTAINER ===== */
  .logo-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  /* ===== LOGO IMAGES ===== */

  .logo-container img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
  

  /* ===== ABOUT CONTAINER ===== */

 .about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 60px;
  box-shadow: 0 2px 10px rgba(245, 178, 178, 0.67);
}

.about-container h1 {
  font-family: 'Nunito', ital;
  font-size: 3rem;
  color: #9e549e;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.about-container h2 {
  font-family: 'Nunito', ital;
  font-size: 1.8rem;
  color: #e0c17e;
  margin-bottom: 1rem;
  border-bottom: 3px solid #f0baba;
  padding-bottom: 0.5rem;
}

.about-container p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about-container ul {
  list-style-image: url('/assets/butterflyOrb.png');
  padding-left: 2rem;
  color: #555;
  line-height: 1.8;
}

.about-container li {
  margin-bottom: 0.5rem;
  color: #555;
}
  `
})
export class AboutComponent {

}
