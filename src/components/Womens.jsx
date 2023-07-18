import { useLocation } from "react-router-dom";
import { hats } from "../constants/data";
import Common from "./Common";

const Womens = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-wrap space-x-2 space-y-2 ">
      <h2>Womens</h2>
      {hats.map((val, id) => (
        <>
          {pathname === "/womens" ? (
            <Common key={id} val={val} />
          ) : (
            id < 4 && <Common key={id} val={val} />
          )}
        </>
      ))}
    </div>
  );
};

export default Womens;
