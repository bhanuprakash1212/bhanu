import { imgData } from "../content"
import { useState,useEffect } from "react"
const DashBoard = () => {

  const [Data, setData] = useState([])

  useEffect(()=>{
    const res = imgData.filter((each)=>each.type == "db")
    setData(res)
  },[])
  
  return (
    <div className="fbox">
      {
        Data.map((each,index)=>{
          const {src,info} = each;
          return (
            <div key={index} className="pcard">
              <img src={src} alt="" />
              <h1>{info}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default DashBoard