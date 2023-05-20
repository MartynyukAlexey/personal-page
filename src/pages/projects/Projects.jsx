import ProjectCard from "./projectCard/ProjectCard.jsx";
import "./style.css"

import { projects } from "../../utils/projects.js";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <div className="projects">
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} title={project.title} image={project.image} />;
                    })}
                </div>
            </div>
        </main>
    );
};

export default Projects;
