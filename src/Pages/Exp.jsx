import { expDetails } from "../content/Expindex"
const Exp = () => {
  return (
    <section className="about-section flex flex-col overflow-auto gap-4 p-10">
      {
        expDetails.map((each,index)=>{
          const {type,role,src,info,dwn} =each
          return (
            <div key={index} className="card-exp">
              <div className="cont">
                <h1>{type} <span>{role}</span></h1>
                <p>{info}</p>
                <button><a href="" download={dwn}>downlad</a></button>
              </div>
              <img src={src} alt="" />
            </div>
          )
        })
      }
    </section>
  )
}

export default Exp