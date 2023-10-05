import { imgData } from "../content"
const All = () => {
  return (
    <div className="fbox">
      {
        imgData.map((each,index)=>{
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

export default All