export interface ProjectsItem {
  title: string;
  where: string;
  tools: string;
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

    <div class ="top-container">
    <h1>Creative Projects</h1>
    <p>Here are some of my projects that I have done throughout my educational journey. Some of the projects contain Web Development skills, Digital Marketing knowledge, and other creative endeavors.</p>
    </div>

    <ul class="projects-list">
      @for (item of projects; track item) {
        <li class="projects-item">
          <div class="card">
            <h2>{{item.title}}</h2>
            <h3>{{item.where}}</h3>
            <h3>{{item.tools}}</h3>
            <p>{{item.description}}</p>
            <a href="{{item.link}}" target="_blank">View Project</a>
          </div>
        </li>
      }
    </ul>
  </div>
  `,
  styles: [`

    .top-container {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: 2px solid #b89090;
      background-color: #d3abab;
      padding: 2rem;
      border-radius: 60px;
      box-shadow: 4px 4px 6px rgba(245, 178, 178, 0.67);

      }
  
    .projects-list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 1rem;
      align-items: stretch;
      text-align: center;
    }
      
    .projects-item {
      flex: 0 1 calc(25% - 20px);
      margin: 10px;
      display: flex;
      
    }

    .card {
      padding: 20px;
      border-radius: 60px;
      border: 2px solid #b89090;
      background-color: #fff;
      box-shadow: 4px 4px 8px rgba(245, 178, 178, 0.67);
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    h1 {
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 4px #4d2727;
    padding-top: 1rem;
    font-size: 3rem;
    }
    
    h2 {
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px #6d5050;
    border: 2px solid #b89090;
    background-color: #c29b9bef;
    border-radius: 60px;
    padding: 1rem;
    }

    h3 {
    padding-bottom: 1rem;
    font-size: 15px;
    text-align: center;
    color: #a188b6;
    text-shadow: 1px 1px 1px #bb9595;
    }

    p {
    color: #555;
    font-size: 0.9rem; 
    margin-bottom: 0.8rem;
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
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A biosite created as an assignment for a Web Development course at Bellevue University. The biosite features my daughter and cool little information about her. It was created using HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/bioSite"
      },

      {
        "title": "JavaScript I",
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A collection of all the projects completed for the JavaScript I course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-231"
      },

      {
        "title": "Node.js",
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A collection of all the projects completed for the Node.js course at Bellevue University. The projects include a variety of tasks that demonstrate my skills in Node.js, and Express.",
        "link": "https://github.com/CreativeCookieConnections/web-340"
      },

      { 
        "title": "JavaScript II",
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A collection of all the projects completed for the JavaScript II course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in JavaScript, HTML, and CSS.",
        "link": "https://github.com/CreativeCookieConnections/web-330"
      },

      {
        "title": "RESTful APIs",
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A collection of all the projects completed for the RESTful API course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in API.",
        "link": "https://github.com/CreativeCookieConnections/web-420"
      },

      {
        "title": "NoSQL",
        "where": "Bellevue University",
        "tools": "VSC and MongoDB",
        "description": "A collection of all the projects completed for the NoSQL course at Bellevue University. The projects include a variety of web development tasks that demonstrate my skills in NoSQL and MongoDB.",
        "link": "https://github.com/CreativeCookieConnections/web-335"
      },

      {
        "title": "Angular",
        "where": "Bellevue University",
        "tools": "VSC",
        "description": "A collection of all the projects completed for the Angular course at Bellevue University. The projects include a vareity of web development tasks that demonstrate my skills in Angular, sing-page-application development.",
        "link": "https://github.com/CreativeCookieConnections/web-425"
      },

      {
        "title": "Digital Marketing",
        "where": "Bryant & Stratton College",
        "tools": "Word, PowerPoint and Canva Tools",
        "description": "A collection of some of the projects completed while studying for my Digital marketing Bachelors Degree at Bryant & Stratton Online College.",
        "link": "http://mycred.com/p/1987059580/"
      },

      {
        "title": "Discord Chat Logo",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "Wanted to make a Logo for a Discord Chat that incorporates friendship and gaming time.",
        "link": "https://canva.link/0c7s0alxnvvmwep"
      },

      {
        "title": "Hershey Ad",
        "where": "Bryant & Stratton College / Canva",
        "tools": "Canva Tools",
        "description": "A design made as an Assignment for a Digital Marketing Course at Bryant & Stratton Online College. It is mean to go in an email.",
        "link": "https://canva.link/js09silgwzyivgs" 
      },

      {
        "title": "Self Advertisement",
        "where": "Bryant & Stratton College / Canva",
        "tools": "Canva Tools",
        "description": "A design made as an Assignment for Digital Marketing for professional development and self advertisement. It was made as a simple little article which showcases who I am as a Digital Marketer and what I represent.",
        "link": "https://canva.link/q4ys9cvzuohc7yj"
      },

      {
        "title": "TenTree and Adopt a Pet Day",
        "where": "Bryant & Stratton College / Canva",
        "tools": "Canva Tools",
        "description": "Content created to advertise a make-believe marketing strategy for a company that is partnering up with a good cause to help spread awareness and boost sales.",
        "link": "https://canva.link/6oo9f5b82v1x9ma"
      },

      {
        "title": "Bows That Grow Logo",
        "where": "Bryant & Stratton College / Canva",
        "tools": "Canva Tools",
        "description": "These designs were all made for a group project that had us create a digital and traditional marketing stratgy in order to extend its reach out to a global target market. Each design was put together to signify the group, business, and products.",
        "link": "https://canva.link/1z5loddh6t29tg3"
      },

      {
        "title": "Original Logo",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "This logo is my identiy as a creator, developer, and marketer. This logo has been utilized primarily for my social media accounts to share my creative content. This logo represents who I am as a creator.",
        "link": "https://canva.link/7jc7clk5yp5clxy"
      },

      {
        "title": "Original Fall Logo",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "This logo is the updated fall themed logo. This was used for some TikTok content. I wanted to incorporate my icon, but update it to fit the trend of the season.",
        "link": "https://canva.link/rlrduye9t2lxmo8"
      },

      {
        "title": "Original Halloween Logo",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "The logo is updated to be Halloween themed. This was used for TikTok content at the time. Wanted to incorporate the original icon, and update it to fit the season trend.",
        "link": "https://www.canva.com/design/DAFPoO9nDJ0/q1xcg2DMSlQbExQsrU9lNg/edit"
      },

      {
        "title": "Original Spring Logo",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "The logo is updated to be Spring themed. This was used for TikTok content. Wanted to incorporate the original icon, and update it to fit the season trend.",
        "link": "https://canva.link/al0t4acziwfpb6u"
      },

      {
        "title": "Original Mobile Wallpaper",
        "where": "Canva",
        "tools": "Canva Tools",
        "description": "Created a mobile wall paper for my cellphone device. I incorporated my original icon design, modern and decorative elements to it.",
        "link": "https://www.canva.com/design/DAFPiRh3-sQ/2UHCdoCNiGuPtFkkjh1jAA/edit"
      },

      {
        "title": "Anime Sticker Haul",
        "where": "TikTok",
        "tools": "Mobile Camera, TikTok video editor",
        "description": "My first TikTok video showcasing some Anime Sticker products. Seen this was a trend and decided to try and make it myself.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156015039961451818?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

      {
        "title": "Snack Haul",
        "where": "TikTok",
        "tools": "Mobile Camera, TikTok video editor",
        "description": "My first TikTok video doing a snack haul. I am a major foodie who enjoys trying new things. This time I wanted to film the process of unbagging the candy and upload it to TikTok as content.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156049911186836782?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

      {
        "title": "Manga Mystery Box",
        "where": "TikTok",
        "tools": "Mobile Camera, TikTok video editor",
        "description": "My first TikTok video which advertises for my Manga Mystery Box unboxing video. Wanted to try and create an actual video advertisement to get views.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156063566523845934?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615",
      },

      {
        "title": "Pokemon Unboxing",
        "where": "TikTok",
        "tools": "Mobile Camera, TikTok video editor",
        "description": "A TikTok video that markets the actual unboxing video on TikTok. I am a Pokemon Card collector and I made quite a bit of Pokemon Unboxing Content.",
        "link": "https://www.tiktok.com/@createcookieconnect/video/7156239434034269482?is_from_webapp=1&sender_device=pc&web_id=7542634216107394615"
      },

      {
        "title": "Royale High Content",
        "where": "YouTube",
        "tools": "OBS Studio, CapCut",
        "description": "A YouTube video of a game on Roblox called Royale High. In the video I showcase my ways of earning diamonds which is the ingame currency.",
        "link": "https://www.youtube.com/shorts/-RNVT7cSNG0"
      },

      {
        "title": "Creative Cookie Tutorial",
        "where": "YouTube",
        "tools": "OBS Studio, CapCut",
        "description": "A YouTube tutorial for a popular Roblox game called Royale High. In the tutorial I give simple instructions on how to dance during an event.",
        "link": "https://www.youtube.com/watch?v=3jRogqBr0cg&t=5s"
      }

    ];
  }
}