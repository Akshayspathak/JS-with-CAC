import { useState } from "react"


function Click() {

const [buttonColor,setButtonColor] = useState("")

const handleButtonClick = (color) => {
  setButtonColor(color)
}


  return (
    <div className="Click">

      <button className=" p-5 m-5 rounded-lg bold " onClick={()=>handleButtonClick("red")}
    style={{ backgroundColor: buttonColor === "red" ? "red" : "lightgray"}}> Red
      </button>
      <button className=" p-5 m-5 rounded-lg bold " onClick={()=>handleButtonClick("green")}
    style={{ backgroundColor: buttonColor === "green" ? "green" : "lightgray"}}> Green
      </button>
      <button className=" p-5 m-5 rounded-lg bold " onClick={()=>handleButtonClick("yellow")}
    style={{ backgroundColor: buttonColor === "yellow" ? "yellow" : "lightgray"}}> Yellow
      </button>
    </div>
  )
}

export default Click