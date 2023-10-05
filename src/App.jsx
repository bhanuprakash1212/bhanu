import NavBar from "./components/NavBar"
import { Route,Routes } from "react-router-dom"
import {Home,NotFound} from "./Pages/index"
import AboutTab from "./tabs/AboutTab"
import EducationTab from "./tabs/EducationTab"
import React from "react"
import All from "./Project-tabs/All"
import PortFolio from "./Project-tabs/PortFolio"
import SkillsTab from "./tabs/SkillsTab"
import Features from "./Project-tabs/Features"
import DashBoard from "./Project-tabs/DashBoard"

const AboutLazy = React.lazy(()=>import("./Pages/About"))
const ProjectLazy = React.lazy(()=>import("./Pages/Project"))
const ExpLazy = React.lazy(()=>import("./Pages/Exp"))

const App = () => {

  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={
          <React.Suspense fallback="loadding.....">
            <AboutLazy/>
          </React.Suspense>
          }>
          <Route index element={<AboutTab/>}/>
          <Route path="abt" element={<AboutTab/>}/>
          <Route path="edu" element={<EducationTab/>}/>
          <Route path="skills" element={<SkillsTab/>}/>
        </Route>
        <Route path="/project" element={
          <React.Suspense fallback="loadding.....">
            <ProjectLazy/>
          </React.Suspense>
          }>
          <Route index element={<All/>}/>
          <Route path="all" element={<All/>}/>
          <Route path="port" element={<PortFolio/>}/>
          <Route path="feature" element={<Features/>}/>
          <Route path="db" element={<DashBoard/>}/>
        </Route>
        <Route path="/exp" element={
          <React.Suspense fallback="loading....">
            <ExpLazy/>
          </React.Suspense>
        }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default App
