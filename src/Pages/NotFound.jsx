import pagenot from "../assets/pagenot.svg"

const NotFound = () => {
  return (
    <div className=" h-[80vh] w-full flex items-center justify-center flex-col">
      <img src={pagenot} alt="" className="h-[300px] drop-shadow-lg"/>
      <h1 className="pt-10">NOT FOUND</h1>
    </div>
  )
}

export default NotFound