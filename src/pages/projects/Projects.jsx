import ProjectCard from "../../components/project-card/ProjectCard";
import { projects } from "../../utils/projects.js";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <div className="projects">
                    {projects.map((project) => {
                        return <ProjectCard title={project.title} image={project.image} />;
                    })}
                </div>
            </div>
        </main>
    );
};

export default Projects;
