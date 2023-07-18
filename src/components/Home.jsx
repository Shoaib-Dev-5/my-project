import { Link } from "react-router-dom";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="">
      <span className="">
      </span>
      <div className=" space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-hidden">
          <div>
            <span>
              <p>Hats</p>
              <p>Shop Now</p>
            </span>
            <Link to="/hats">
              <img
                src="https://media.istockphoto.com/id/1205706420/photo/excited-confident-young-indian-girl-winner-celebrate-win-looking-at-camera-scream-yes.jpg?s=612x612&w=0&k=20&c=rfljl5J0o49ut6DG0spCn04UxCR52Nv2af0gSHnjnCI="
                alt=""
                className="cursor-pointer  hover:scale-125  transition duration-500 ease-in object-cover overflow-hidden"
              />
            </Link>
          </div>
          <div>
            <Link to="/jackets">
              <img
                src="https://media.istockphoto.com/id/1205706420/photo/excited-confident-young-indian-girl-winner-celebrate-win-looking-at-camera-scream-yes.jpg?s=612x612&w=0&k=20&c=rfljl5J0o49ut6DG0spCn04UxCR52Nv2af0gSHnjnCI="
                alt=""
                className="cursor-pointer  hover:scale-125  transition duration-500 ease-in object-cover overflow-hidden"
              />
            </Link>
          </div>
          <div>
            <Link to="/sneakers">
              <img
                src="https://media.istockphoto.com/id/1205706420/photo/excited-confident-young-indian-girl-winner-celebrate-win-looking-at-camera-scream-yes.jpg?s=612x612&w=0&k=20&c=rfljl5J0o49ut6DG0spCn04UxCR52Nv2af0gSHnjnCI="
                alt=""
                className="cursor-pointer  hover:scale-125  transition duration-500 ease-in object-cover overflow-hidden"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
          <div>
            <Link to="/womens">
              <img
                src="https://media.istockphoto.com/id/1205706420/photo/excited-confident-young-indian-girl-winner-celebrate-win-looking-at-camera-scream-yes.jpg?s=612x612&w=0&k=20&c=rfljl5J0o49ut6DG0spCn04UxCR52Nv2af0gSHnjnCI="
                alt=""
                className="cursor-pointer  hover:scale-125  transition duration-500 ease-in object-cover overflow-hidden"
              />
            </Link>
          </div>
          <div>
            <Link to="/mens">
              <img
                src="https://media.istockphoto.com/id/1205706420/photo/excited-confident-young-indian-girl-winner-celebrate-win-looking-at-camera-scream-yes.jpg?s=612x612&w=0&k=20&c=rfljl5J0o49ut6DG0spCn04UxCR52Nv2af0gSHnjnCI="
                alt=""
                className="cursor-pointer  hover:scale-125  transition duration-500 ease-in object-cover overflow-hidden"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
