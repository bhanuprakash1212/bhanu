import { NavLink } from "react-router-dom";
import { NavLinks } from "../content"
import { useState } from "react";

const NavBar = () => {

  const [Dark, setDark] = useState(false) 

  const themeChange = () =>{
    document.documentElement.classList.toggle('dark')
    if(Dark === true){
      setDark(false)
    }
    else{
      setDark(true)
    }
  }

  return (
    <nav>
        <span className="material-symbols-outlined logo">school</span>
        <div className="navbar">
            {
                NavLinks.map((eachLink)=>{
                    const {title,path} = eachLink;
                    return <NavLink key={path} to={path}>{title}</NavLink>
                })
            }
            <button onClick={themeChange}>
              {
              Dark ? <span className="material-symbols-outlined switch">light_mode</span>
              :<span className="material-symbols-outlined switch">dark_mode</span>
              }
            </button>
        </div>  
    </nav>
    
  )
}

export default NavBar