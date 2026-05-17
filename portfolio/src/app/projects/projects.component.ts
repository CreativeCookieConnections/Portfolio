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
  styles: ``
})
export class ProjectsComponent {

}
