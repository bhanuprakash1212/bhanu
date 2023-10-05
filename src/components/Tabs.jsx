import { NavLink, Outlet } from "react-router-dom"

const Tabs = () => {
  return (
    <>
    <div className="tab -z-20">
        <ul>
            <li><NavLink to="abt">about</NavLink></li>
            <li><NavLink to="edu">education</NavLink></li>
            <li><NavLink to="skills">skills</NavLink></li>
        </ul>
    </div>
    <div>
     <Outlet/>   
    </div> 
    </>
  )
}

export default Tabs