import profile from "../assets/profile.png"
import BioData from "../components/BioData"
import Tabs from "../components/Tabs"

const About = () => {

  return (
    <section className="about-section">
      <div className="data">
        <img src={profile} alt="" />
        <BioData/>
      </div>
      <div className="ab">
        <Tabs/>
      </div>
    </section>
  )
}

export default About