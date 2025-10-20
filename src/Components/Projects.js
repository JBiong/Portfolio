import React from 'react';
import { Github, SquareArrowOutUpRight, FileText } from 'lucide-react';
import '../Styles/Projects.css';

const projects = [
  {
    title: "Leave Credits",
    description:
      "Monitor their leave balances and view how leaves, such as vacation or sick leaves that affect their credited salary. The app has been locally deployed.",
    image: "LeaveCredits.png", 
    link: "",
    github: "https://github.com/Ininyow/deped-app",
    techStack: ["Javascript", "ReactJS", "NestJS", "HTML", "Tailwind CSS", "MySQL", "TypeScript"],
  },
  {
    title: "InvestTrack",
    description:
      "InvestTrack is a financial app for startups to track funding, manage investors, and handle budgeting. It helps with planning, compliance, and building investor trust, supporting growth and fundraising. Click the link to explore the app (Backend not deployed).",
    image: "InvestTrack.png",
    link: "https://investtrack-ten.vercel.app/",
    github: "https://github.com/JBiong/startupvest-front.git",
    paperLink: "https://iiari.org/journal_article/investtrack-design-and-development-of-online-system-for-startups-investment-funding/",
    techStack: ["Javascript", "ReactJS", "NestJS", "TypeScript", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Acadzen",
    description:
      "Acadzen is a platform for students to learn and study in easy way by uploading the documents and transforming it to a flashcards. The app has not been deployed.",
    image: "AcadZen.png", 
    link: "",
    github: "https://github.com/JBiong/AcadzenTest",
    techStack: ["Javascript", "Java", "ReactJS", "Spring Boot", "HTML", "CSS", "MySQL"],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Projects I worked on during college days and as an intern, and applying the knowledge I have learned to these projects.
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech-box">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.link || "#"}
                className={`project-link ${!project.link ? "disabled" : ""}`}
                target={project.link ? "_blank" : ""}
                rel={project.link ? "noopener noreferrer" : ""}
                title={project.link ? "View Deployed Project" : "No Link Available"}>
                <SquareArrowOutUpRight />
              </a>
              <a href={project.github || "#"}
                className={`project-link ${!project.github ? "disabled" : ""}`}
                target={project.github ? "_blank" : ""}
                rel={project.github ? "noopener noreferrer" : ""}
                title={project.github ? "View GitHub Repository" : "No Link Available"}>
                <Github/>
              </a>
              
                <a
                  href={project.paperLink}
                  className={`project-link ${!project.paperLink ? "disabled" : ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read Research Paper"
                >
                  <FileText /> {/* Optional icon for paper */}
                </a>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;