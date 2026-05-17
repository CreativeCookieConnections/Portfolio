export interface ProjectsItem {
  title: string;
  description: string;
  link: string;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  <div class="projects-container">
    <h1>Creative Projects</h1>
    <p>Here are some of my projects that I have done throughout my educational journey. Some of the projects contain Web Development skills, Digital Marketing knowledge, and other creative endeavors.</p>

    <ul class="projects-list">
      @for (item of projects; track item) {
        <li class="project-item">
          <div class="card">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <a href="{{item.link}}" target="_blank">View Project</a>
          </div>
        </li>
      }
    </ul>
  </div>
  `,
  styles: [`
  
    .projects-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }
      
    .projects-list {
      flex 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background-color: #fff;
      }
    `
  ]
})

export class ProjectsComponent {
  projects: ProjectsItem[];

  constructor() {
    this.projects = [
      {
        "title": "BioSite",
        "description": "A biosite created as an assignment for a Web Development course at Bellevue University. The biosite features my daughter and cool little information about her. It was created using HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/bioSite"
      },

      {
        "title": "All the Projects Completed for JavaScript I Course",
        "description": "A collection of all the projects completed for the JavaScript I course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-231"
      },

      {
        "title": "All the Projects Completed for Node.js Course",
        "description": "A collection of all the projects completed for the Node.js course at Bellevue University. The projects include a variety of tasks that demonstrate my skills in Node.js, and Express.",
        "link": "https://github.com/CreativeCookieConnections/web-340"
      },

      { 
        "title": "All the Projects Completed for JavaScript II Course",
        "description": "A collection of all the projects completed for the JavaScript II course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-330"
      },

      {
        "title": "All the Projects Completed for RESTful API's Course",
        "description": "A collection of all the projects completed for the RESTful API course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in API.",
        "link": "https://github.com/CreativeCookieConnections/web-420"
      },

      {
        "title": "All the projects Completed for NoSQL Course",
        "description": "A collection of all the projects completed for the NoSQL course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in NoSQL and MongoDB.",
        "link": "https://github.com/CreativeCookieConnections/web-335"
      },

      {
        "title": "All the Projects Completed for the Angular Course",
        "description": "A collection of all the projects completed for the Angular course at Bellevue University. The projects include a vareity of web development tasks that demonstrate my skills in Angular, sing-page-application development.",
        "link": "https://github.com/CreativeCookieConnections/web-425"
      },

}

    ];