import banner from "../assets/banner.webp"
const Home = () => {
  return (
    <section className="">
      <div className="matter">
        <h1>Hi, Iam Bhanu Prakash <br /><br />
          <span>WEB DEVELOPER</span>
        </h1>
        <p>I am a full-stack web developer with a strong proficiency in this dynamic field. 
          My expertise extends across both front-end and back-end development, enabling me 
          to create seamless and feature-rich web applications. With a deep understanding 
          of languages, frameworks, and databases, I have successfully contributed to numerous 
          projects, from crafting intuitive user interfaces to architecting robust server-side 
          solutions.
        </p>
      </div>
      <img src={banner} alt="" className="w-[90%] ml-[5%] mt-6 rounded-md shadow-sm max-sm:h-60"/>
    </section>
  )
}

export default Home