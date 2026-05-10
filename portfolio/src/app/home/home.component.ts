import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
<div class="home-container">
<h1>Aisha Keller</h1>

<div class="profile-image">
  <img src="assets/profileImage.png" alt="Profile Image of Aisha Keller in the shape of a circle with flower border" />
</div>

<div class="info-section">
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

<div class="social-media">
  <h3>Connect With Me</h3>
  <div class="social-links">
    <a href="https://www.linkedin.com/in/aisha-keller-b82529166/" target="_blank" rel="noopener noreferrer"><img src="assets/linkedinLogo.png" width="250" height="250" alt="LinkedIn Logo with Flowers"></a>
    <a href="https://github.com/CreativeCookieConnections?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="assets/githubLogo.png" width="250" height="250" alt="GitHub Logo"></a>
    <a href="https://www.facebook.com/CreativeCookieConnectionss" target="_blank" rel="noopener noreferrer"><img src="assets/facebookLogo.png" width="250" height="250" alt="Facebook Logo"></a>
    <a href="https://www.tiktok.com/@createcookieconnect" target="_blank" rel="noopener noreferrer"><img src="assets/tiktokLogo.png" width="250" height="250" alt="TikTok Logo"></a>
    <a href="https://www.youtube.com/@CreativeCookieConnections" target="_blank" rel="noopener noreferrer"><img src="assets/youtubeLogo.png" width="250" height="250" alt="YouTube Logo"></a>
  </div>
</div>
  `,
  styles: [`
    /* ===== TITLE (H1) ===== */
h1 {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin: 2rem 0 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* ===== PROFILE IMAGE SECTION ===== */
.profile-image {
  text-align: center;
  margin: 2rem 0;
}

.profile-image img {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.profile-image img:hover {
  transform: scale(1.05);
}

/* ===== INFO SECTION (Bucket List, Aspirations, Brief Info) ===== */
.info-section {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.info-section h2 {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1.8rem;
  color: #4c9450;
  margin-bottom: 1rem;
  border-bottom: 3px solid #488b45;
  padding-bottom: 0.5rem;
}

.info-section p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.info-section ul {
  list-style-position: inside;
  margin-left: 1rem;
}

.info-section li {
  margin-bottom: 0.8rem;
  color: #555;
}

/* ===== SOCIAL MEDIA LINKS ===== */
.social-media {
  text-align: center;
  margin: 5rem 0;
  padding: 5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.social-media h3 {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.social-links a:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}


  `]
})
export class HomeComponent {

}