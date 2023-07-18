import Hats from "./Hats";
import Mens from "./Mens";
import Womens from "./Womens";
import Sneakers from "./Sneakers";
import Jackets from "./Jackets";
const Shop = () => {
  return (
    <div className="space-y-4">
      <Hats />
      <Mens />
      <Womens />
      <Sneakers />
      <Jackets />
    </div>
  );
};

export default Shop;
