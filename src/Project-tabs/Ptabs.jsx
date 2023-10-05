import { NavLink } from "react-router-dom";
import { Ptabs } from "../content"
const Pstabs = () => {
  return (
    <div className="project-tabs">
        <ul>
            {
                Ptabs.map((each,index)=>{
                    const {name,path} =each;
                    return (
                        <li key={index}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Pstabs