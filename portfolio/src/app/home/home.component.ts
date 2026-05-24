import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `

<div class="home-container">

<svg viewBox="0 0 1200 400" width="100%" height="260px">
  <!-- The path for the text to follow (invisible or styled) -->
  <path id="curvePath" d="M 10 280 Q 600 80 1190 280" fill="transparent" />

  <!-- The h1 text that curves along the path -->
  <text font-size="135" font-family="Nunito" fill="#836083">
    <textPath href="#curvePath" startOffset="50%" text-anchor="middle">
    Creative Garden
    </textPath>
  </text>
</svg>


<div class="profile-image">
  <img src="assets/profileImage.png" alt="Profile Image of Aisha Keller in the shape of a circle with flower border" />
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


/* ===== TITLE (H1 CURVE TEXT) ===== */

svg {
  display: block;
  margin: 0 auto;
  max-width: 600px;
}

textPath {
  font-weight: bold;
  text-shadow: 3px 3px 8px #fff;
  letter-spacing: 5px;
}

/* ===== PROFILE IMAGE SECTION ===== */
.profile-image {
  text-align: center;
  margin: -12rem 0 1rem 0;
}

.profile-image img {
  width: 600px;
  height: 600px;
  border-radius: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image img:hover {
  transform: scale(1.05);
}

/* ===== SOCIAL MEDIA LINKS ===== */

.social-media {
  text-align: center;
  margin-top: -4rem;
  padding: 2rem;
  background-color: #7a6c7a;
  border-radius: 100px;
  border: 2px solid #b89090;
  box-shadow: 2px 2px 8px #22180b;
}

.social-media h3 {
  font-family: 'Nunito', ital;
  font-size: 3.2rem;
  color: #ffffff;
  text-shadow: 2px 2px 2px #4d2727;
  margin-bottom: 7rem;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 5rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: -3rem;
  padding-bottom: 4rem;
  width: 60px;
  height: 60px;
  color: #f0baba;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
}


  `]
})
export class HomeComponent {

}