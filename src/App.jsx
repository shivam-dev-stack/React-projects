import { useEffect, useState } from "react";

import "./App.css";

function App() {

  const [color, setColor] = useState("red");

  

  const handleClick=  (e) =>{
      setColor(e)
  }

  useEffect (()=>{
    document.body.style.backgroundColor = color;
  },[color])
  

  return (
    <>
     <div class="bottom h-32 w-32">
        <div class="absolute inset-x-0 bottom-0 h-16 rounded-lg bg-gray-500 px-6 m-8 grid grid-cols-6 gap-4 content-center font-semibold italic">
          
          <div class="m-1 h-8  text-white rounded-lg bg-red-600 " onClick={()=>handleClick("Red")} >
            Red
          </div>

          <div class="m-1 h-8 text-white rounded-lg bg-green-600" onClick={()=>handleClick("Green")} >
            Green
          </div>

          <div class="m-1 h-8 text-white rounded-lg bg-blue-600" onClick={()=>handleClick("Blue")}>
            Blue
          </div>

          <div class="m-1 h-8 text-white rounded-lg bg-yellow-300" onClick={()=>handleClick("Yellow")}>
            Yellow
          </div>

          <div class="m-1 h-8 text-black rounded-lg bg-white" onClick={()=>handleClick("White")}>
            White
          </div>

          <div class="m-1 h-8 text-white rounded-lg bg-black" onClick={()=>handleClick("Black")}>
            Black
          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;