export interface ProjectsItem {
  title: string;
  where: string;
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
  <div>
    <h1>Creative Projects</h1>
    <p>Here are some of my projects that I have done throughout my educational journey. Some of the projects contain Web Development skills, Digital Marketing knowledge, and other creative endeavors.</p>

    <ul class="projects-list">
      @for (item of projects; track item) {
        <li class="projects-item">
          <div class="card">
            <h2>{{item.title}}</h2>
            <h3>{{item.where}}</h3>
            <p>{{item.description}}</p>
            <a href="{{item.link}}" target="_blank">View Project</a>
          </div>
        </li>
      }
    </ul>
  </div>
  `,
  styles: [`
  
    .projects-list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 1rem;
      align-items: stretch;
    }
      
    .projects-item {
      flex: 0 1 calc(25% - 20px);
      margin: 10px;
      display: flex;
      
    }

    .card {
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    h1 {
    text-align: center;
    padding-top: 1rem;
    }
    
    h2 {
    font-size: 20px;
    text-align: center;
    color: #12701e
    }

    h3 {
    padding-bottom: 1rem;
    font-size: 15px;
    text-align: center;
    color: #835ba3;
    }
    `
  ]
})

export class ProjectsComponent {
  projects: ProjectsItem[];

  constructor() {
    this.projects = [
      {
        "title": "BioSite Project",
        "where": "Bellevue University",
        "description": "A biosite created as an assignment for a Web Development course at Bellevue University. The biosite features my daughter and cool little information about her. It was created using HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/bioSite"
      },

      {
        "title": "JavaScript I Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the JavaScript I course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-231"
      },

      {
        "title": "Node.js Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the Node.js course at Bellevue University. The projects include a variety of tasks that demonstrate my skills in Node.js, and Express.",
        "link": "https://github.com/CreativeCookieConnections/web-340"
      },

      { 
        "title": "JavaScript II Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the JavaScript II course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-330"
      },

      {
        "title": "RESTful APIs Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the RESTful API course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in API.",
        "link": "https://github.com/CreativeCookieConnections/web-420"
      },

      {
        "title": "NoSQL Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the NoSQL course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in NoSQL and MongoDB.",
        "link": "https://github.com/CreativeCookieConnections/web-335"
      },

      {
        "title": "Angular Projects",
        "where": "Bellevue University",
        "description": "A collection of all the projects completed for the Angular course at Bellevue University. The projects include a vareity of web development tasks that demonstrate my skills in Angular, sing-page-application development.",
        "link": "https://github.com/CreativeCookieConnections/web-425"
      },

      {
        "title": "Digital Marketing Projects",
        "where": "Bryant & Stratton College",
        "description": "A collection of some of the projects completed while studying for my Digital marketing Bachelors Degree at Bryant & Stratton Online College.",
        "link": "http://mycred.com/p/1987059580/"
      },

      {
        "title": "MineCraft Baddies Discord Chat Logo",
        "where": "Canva",
        "description": "Wanted to make a Logo for a Discord Chat that incorporates friendship and gaming time.",
        "link": "https://canva.link/0c7s0alxnvvmwep"
      },

      {
        "title": "Hershey Advertisement Design",
        "where": "Bryant & Stratton College / Canva",
        "description": "A design made as an Assignment for a Digital Marketing Course at Bryant & Stratton Online College. It is mean to go in an email.",
        "link": "https://canva.link/js09silgwzyivgs" 
      },

      {
        "title": "Self Advertisement Design",
        "where": "Bryant & Stratton College / Canva",
        "description": "A design made as an Assignment for Digital Marketing for professional development and self advertisement. It was made as a simple little article which showcases who I am as a Digital Marketer and what I represent.",
        "link": "https://canva.link/q4ys9cvzuohc7yj"
      },

      {
        "title": "TenTree and Adopt a Pet Day Ad Designs",
        "where": "Bryant & Stratton College / Canva",
        "description": "Images created to advertise a make-believe marketing strategy for a company. A chosen company is to partner up with an organization, and I was to create a marketing strategy to incorporate their products and online website along with the organization's cause. These are the designs I created to be put in emails, for display advertisements, social media content, and more.",
        "link": "https://canva.link/6oo9f5b82v1x9ma"
      },

      {
        "title": "Bows That Grow Logo Designs",
        "where": "Bryant & Stratton College / Canva",
        "description": "These designs were all made for a group project that had us create a digital and traditional marketing stratgy in order to extend its reach out to a global target market. Each design was put together to signify the group, business, and products.",
        "link": "https://canva.link/1z5loddh6t29tg3"
      },

      {
        "title": "CreativeCookieConnections Logo",
        "where": "Canva",
        "description": "This logo is my identiy as a creator, developer, and marketer. This logo has been utilized primarily for my social media accounts to share my creative content. This logo represents CreativeCookieConnections.",
        "link": "https://canva.link/7jc7clk5yp5clxy"
      },

      {
        "title": "CreativeCookieConnections Fall Logo",
        "where": "Canva",
        "description": "This logo is the updated fall themed logo. This was used for some TikTok content. I wanted to incorporate my icon, but update it to fit the trend of the season.",
        "link": "https://canva.link/rlrduye9t2lxmo8"
      },

      {
        "title": "CreativeCookieConnections Halloween Logo",
        "where": "Canva",
        "description": "The logo is updated to be Halloween themed. This was used for TikTok content at the time. Wanted to incorporate the original icon, and update it to fit the season trend.",
        "link": "https://www.canva.com/design/DAFPoO9nDJ0/q1xcg2DMSlQbExQsrU9lNg/edit"
      },

      {
        "title": "CreativeCookieConnections Spring Time Logo",
        "where": "Canva",
        "description": "The logo is updated to be Spring themed. This was used for TikTok content. Wanted to incorporate the original icon, and update it to fit the season trend.",
        "link": "https://canva.link/al0t4acziwfpb6u"
      },

      {
        "title": "CreativeCookieConnections Mobile Wallpaper",
        "where": "Canva",
        "description": "Created a mobile wall paper for my cellphone device. I incorporated my original icon design, modern and decorative elements to it.",
        "link": "https://www.canva.com/design/DAFPiRh3-sQ/2UHCdoCNiGuPtFkkjh1jAA/edit"
      },

      {
        "title": "Anime Sticker Haul",
        "where": "TikTok",
        "description": "My first TikTok video showcasing some Anime Sticker products. Seen this was a trend and decided to try and make it myself.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156015039961451818?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

      {
        "title": "Samurai Kid Dagashi Japanese Snack Haul Ad",
        "where": "TikTok",
        "description": "My first TikTok video doing a snack haul. I am a major foodie who enjoys trying new things. This time I wanted to film the process of unbagging the candy and upload it to TikTok as content.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156049911186836782?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

      {
        "title": "Manga Mystery Box Ad",
        "where": "TikTok",
        "description": "My first TikTok video which advertises for my Manga Mystery Box unboxing video. Wanted to try and create an actual video advertisement to get views.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156063566523845934?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615",
      },

      {
        "title": "Pokemon Elite Trainer Box Unboxing",
        "where": "TikTok",
        "description": "A TikTok video that markets the actual unboxing video on TikTok. I am a Pokemon Card collector and I made quite a bit of Pokemon Unboxing Content.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156239434034269482?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

    ];
  }
}