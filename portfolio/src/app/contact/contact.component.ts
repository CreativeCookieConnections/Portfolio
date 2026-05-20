import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-image">
    <img src="assets/errorPage.png" alt="404 page not found error image that consists of flowers, butterflies, and a piece of paper in the center saying that the page is unavailable." />
    </div>

    <div class="link-router">
    <a routerLink="/home">Go back Home</a>
    </div>
  `,
  styles: `
  
  .error-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
  }

  .link-router {
    text-align: center;
    margin-top: 4rem;
    background-color: #649c80;
    border-radius: 60px;
    box-shadow: 0 2px 10px rgba(245, 178, 178, 0.67);
    color: #0f5b8d;
    text-decoration: underline;
    font-size: 3rem;
    margin: 0.5rem 0;
  }

  
  `
})
export class ContactComponent {

}
