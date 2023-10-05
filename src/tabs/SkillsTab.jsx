import { Skills } from "../content"

const SkillsTab = () => {
  return (
    <div className="about-para flex  h-[640px] flex-wrap gap-6 gap-y-16 w-[97%] overflow-auto max-sm:w-[94%]">
        {
          Skills.map((each,index)=>{
            const {src,name,info} = each;
            return (
              <div key={index} className="skill-card">
                <img src={src} alt="" className="mb-10"/>
                <div className="ml-5">
                  <h1 className=" font-bold">{name}</h1>
                  <p>{info}</p>
                </div>
              </div>
            )
          })
        }  
    </div>
  )
}

export default SkillsTab