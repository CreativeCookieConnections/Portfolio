import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="profileImage">
      <img src="assets/profile.jpg" alt="Profile Image">
    </div>

    <div class="basicInfo">
      <h1>Contact Information</h1>
      <p>Email: </p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: Centerview, MO</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/aisha-keller-b82529166/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aisha-keller-b82529166</a></p>

      <h1>Education</h1>
      <p><strong>Bachelor of Science in Web Development</strong>, Bellevue University, 2025 - 2026</p>
      <p><strong>Bachelor of Science in Digital Marketing</strong>, Bryant & Stratton College, 2024 - 2025</p>

      <h1>Skills</h1>
      <ul>
        <li>Proficient in HTML, CSS, JavaScript, and TypeScript</li>
        <li>Experience with Angular and React frameworks</li>
        <li>Familiarity with RESTful APIs and backend development</li>
        <li>Strong problem-solving and debugging skills</li>
        <li>Excellent communication and teamwork abilities</li>
        <li>Creative and detail-oriented approach to web design</li>
        <li>Familiar with data analysis and visualization tools</li>
        <li>Experience with SEO and digital marketing strategies</li>
        <li>Proficient in Content Creation and Social Media Management</li>
        <li>Experience with E-commerce Platforms and Online Store Management</li>
      </ul>

      <h1>Titles</h1>
      <p><strong>Web Developer</strong></p>
      <p><strong>Digital Marketer</strong></p>
      <p><strong>Content Creator</strong></p>
      <p><strong>Retail Team Lead</strong></p>
    </div>

    <div class="resume">
      <h1>Resume</h1>

      <h2>Summary</h2>
      <p>Creative and detail-oriented web developer and digital marketer with a passion for creating engaging online experiences. Proficient in HTML, CSS, JavaScript, and TypeScript, with experience in Angular frameworks. Strong problem-solving skills and a collaborative approach to teamwork. Seeking opportunities to leverage my skills in web development and digital marketing to contribute to innovative projects. All inspired to further develop education by obtaining a Masters Degree in Computer Systems Information with a focus on Software Development.</p>

      <h2>Experience</h2>
      <h3>Web Developer Student</h3>
      <ul>
        <li>Developed and maintained responsive websites using HTML, CSS, JavaScript, and Angular.</li>
        <li>Collaborated with cross-functional teams to design and implement new features.</li>
        <li>Optimized website performance and ensured cross-browser compatibility.</li>
        <li>Participated in code reviews and provided constructive feedback to peers.</li>
        <li>Assisted in the development of RESTful APIs and backend services.</li>
        <li>Contributed to the creation of engaging user interfaces and improved user experience.</li>
        <li>Utilized version control systems (Git) for code management and collaboration.</li>
        <li>Conducted testing and debugging to ensure high-quality code and functionality.</li>
        <li>Stayed up-to-date with industry trends and best practices in web development.</li>
        <li>Collaborated with designers and content creators to ensure cohesive and visually appealing web designs.</li>
      </ul>

      <h3>Digital Marketing Student</h3>
      <ul>
        <li>Conducted market research and analyzed consumer behavior to inform marketing strategies.</li>
        <li>Created and executed digital marketing campaigns across various platforms.</li>
        <li>Managed social media accounts and engaged with the audience to build brand awareness.</li>
        <li>Developed compelling content for websites, emails, and social media channels.</li>
        <li>Utilized analytics tools to measure campaign performance and optimize results.</li>
        <li>Collaborated with cross-functional teams to align marketing efforts with business objectives.</li>
      </ul>

      <h3>Retail Team Lead at Walmart</h3>
      <ul>
        <li>Led a team of retail associates to achieve sales targets and provide excellent customer service.</li>
        <li>Trained and mentored team members to enhance their skills and performance.</li>
        <li>Managed inventory and ensured proper stock levels to meet customer demand.</li>
        <li>Implemented visual merchandising strategies to enhance the shopping experience.</li>
        <li>Handled customer inquiries and resolved issues to maintain high customer satisfaction.</li>
        <li>Collaborated with management to develop and execute sales strategies.</li>
        <li>Monitored team performance and provided feedback to drive continuous improvement.</li>
      </ul>

      <h3>Content Creator</h3>
      <ul>
        <li>Created engaging and informative content for websites, blogs, and social media platforms.</li>
        <li>Worked on video content for video games, products, and services to enhance brand visibility and engagement.</li>
        <li>Created and managed social media accounts of Facebook, LinkedIn, Instagram, TikTok, and YouTube.</li>
      </ul>

      <h2>Technology Experience</h2>
      <ul>
        <li>GitHub</li>
        <li>Visual Studio Code</li>
        <li>Google Analytics</li>
        <li>SEO Tools (e.g., SEMrush, Moz)</li>
        <li>Content Management Systems (e.g., WordPress, Shopify)</li>
        <li>Social Media Platforms (e.g., Facebook, LinkedIn, Instagram, TikTok, YouTube)</li>
        <li>Email Marketing Platforms (e.g., Mailchimp, Constant Contact)</li>
        <li>OBS Studio for video content creation</li>
        <li>Capcut for video editing and content creation</li>
        <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
        <li>Canva for graphic design and content creation</li>
        <li>Adobe Photoshop for graphic design and content creation</li>
        <li>Discord for community engagement and content creation</li>
        <li>Slack for team communication and collaboration</li>
      </ul>

      <h2>Resume PDF</h2>
      <p><a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a></p>
    </div>

  `,
  styles: `
  
    .profileImage {
      display: flex;
      justify-content: left;
      margin-bottom: 20px;
    }
      
    .profileImage img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
      
    .basicInfo {
      max-width: 200px;
      margin: 0 auto;
      text-align: left;
      font-size: 14px;
      margin-bottom: 40px;
      background-color: #f9f9f9;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
      

    .basicInfo h1 {
      text-align: left;
      margin-bottom: 20px;
      margin-top: 20px;
      color: #14743c;
      font-size: 20px;
      font-weight: bold;
    }
      
    .resume {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      align-items: center;
    }
      
    .resume h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #14743c;
    }
      
    .resume h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      color: #d376cb;
    }
      
    .resume h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      color: #14743c;
    }
      
    .resume ul {
      list-style-type: disc;
      padding-left: 0;
      margin-left: 20px;
      }
      
    .resume p {
      margin-bottom: 10px;
      color: #333;
    }

    `
})
export class ResumeComponent {

}
