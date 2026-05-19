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
  font-family: 'Nunito', ital;
  font-size: 4rem;
  color: #105561;
  text-align: center;
  margin: 2rem 0 1rem;
  font-weight: 700;
  letter-spacing: 1px;
}


/* ===== PROFILE IMAGE SECTION ===== */
.profile-image {
  text-align: center;
  margin: 1rem 0;
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
  margin: 5rem 0;
  padding: 5rem;
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: 0 2px 10px rgba(245, 178, 178, 0.67);
}

.social-media h3 {
  font-family: 'Nunito', ital;
  font-size: 3.2rem;
  color: #e0c17e;
  margin-bottom: 5rem;
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