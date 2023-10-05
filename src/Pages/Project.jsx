import { Outlet } from "react-router-dom"
import Ptabs from "../Project-tabs/Ptabs"

const Project = () => {
  return (
    <div>
        <Ptabs/>
        <div className=" w-[90%] ml-[5%] bg-slate-100 dark:bg-slate-800 h-[80vh] overflow-auto">
            <Outlet/>    
        </div>
    </div>
  )
}

export default Project