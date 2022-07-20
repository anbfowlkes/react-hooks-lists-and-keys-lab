import React from "react";
import ProjectItem from "./ProjectItem";
let c = 0

function ProjectList({ projects }) {
  // console.log(projects.name)
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => {
          // console.log(project)
          return <ProjectItem key={c++} name={project.name} about={project.about} technologies={project.technologies} />
        })}
      </div>
    </div>
  );
}

export default ProjectList;
// {/* render ProjectItem components here */}

// props = {
//   name: ///////////   
//   about:   ////////////
//   technologies:    //////////
// }

// { name, about, technologies } = props

// name = { project.name } about = { project.about } technologies = { project.technologies } 