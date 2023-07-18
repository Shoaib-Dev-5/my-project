import { useLocation } from "react-router-dom";
import { hats } from "../constants/data"
import Common from "./Common"

const Sneakers = () => {
  const {pathname}=useLocation();
  return (
    <div className="flex flex-wrap space-x-2 space-y-2 ">
    <h2>Sneakers</h2>
    {
      hats.map((val,id)=>(
        <>
        {
          pathname === '/sneakers' ?  <Common key={id} val={val} /> :
          (id < 4) && <Common key={id} val={val}/>
        }
        </>
      ))
    }
  </div>
  )
}

export default Sneakers