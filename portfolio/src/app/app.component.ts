import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <div class="wrapper">
    <header class="banner">
    </header>

    <main class="main-content">

    <nav class="navbar">
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/resume">Resume</a></li>
        <li><a routerLink="/projects">Projects</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </nav>

    <section class="content">
      <router-outlet></router-outlet>
    </section>
    </main>

    <footer class="footer">
    <nav class="footer-nav">
      <a routerLink="/home">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/resume">Resume</a> |
      <a routerLink="/projects">Projects</a> |
      <a routerLink="/contact">Contact</a>
    </nav>
    <p>&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>

  </div>
`,

styles: [
  `
  .wrapper {
    min-height: 100vh;
    background-image: url('/assets/backgroundButterfly.png'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    }
  `
]
})
export class AppComponent {
}
