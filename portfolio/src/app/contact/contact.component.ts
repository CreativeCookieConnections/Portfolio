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
    height: 60vh;
  }

  .error-image img {
    width: 800px;
    height: auto;
  }

  .link-router {
    text-align: center;
    background-color: #aa8888;
    border-radius: 60px;
    box-shadow: 2px 2px 8px #22180b;
    text-decoration: underline;
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  
  `
})
export class ContactComponent {

}
