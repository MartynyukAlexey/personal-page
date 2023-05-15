const Projects = () => {
    return (  
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="#" alt="Project img" className="project__img" />
                            <h3 className="project__title">Something 1</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="#" alt="Project img" className="project__img" />
                            <h3 className="project__title">Something 2</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="#" alt="Project img" className="project__img" />
                            <h3 className="project__title">Something 3</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src="#" alt="Project img" className="project__img" />
                        <h3 className="project__title">Something 4</h3>
                    </li>
                    <li className="project">
                        <img src="#" alt="Project img" className="project__img" />
                        <h3 className="project__title">Something again</h3>
                    </li>
                    <li className="project">
                        <img src="#" alt="Project img" className="project__img" />
                        <h3 className="project__title">Final something</h3>
                    </li>

                </ul>
            </div>
        </main>
    );
}
 
export default Projects;