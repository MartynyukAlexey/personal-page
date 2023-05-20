import "./style.css"

const ProjectCard = (props) => {
    return (
        <div className="project">
            <img src={props.image} alt={props.title} className="project__img" />
            <h3 className="project__title">{props.title}</h3>
        </div>
    );
}
 
export default ProjectCard;