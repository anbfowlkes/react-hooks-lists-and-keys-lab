

import React from "react";
let c = 0

function ProjectItem({name, about, technologies}) {
  return (
    <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        {technologies.map((tech) => {
          return <span key={c++}>{tech}</span>
        })}
    </div>
  )
}

export default ProjectItem;
// {/* // {/* render a <span> for each technology in the technologies array */ }

// {/* { */}
//   projects.map((item) => {
//     <div>
//       <h3>{item.name}</h3>
//       <p>{item.about}</p>
//       <div className="technologies">
//         {technologies.map((tech) => {
//           return (
//             <span>{tech}</span>
//           )
//         })}
//       </div>
//     </div>
//         ) */}
// // }


//{name, about, technologies}