import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const linkElements = links.map((link) => {
  //   return <a href={`#${link}`}>{link}</a>
  // })

  return (
          <nav>
            {links.map((item) => {
              return <a key={item} href={`#${item}`}>{item}</a>
            })}
          </nav>
        )
}

export default NavBar;




// links.map((item) => {
//   return <a href={`#${item}`}>{item}</a>
// })