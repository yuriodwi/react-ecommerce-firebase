import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log("🚀 ~ file: Header.jsx:7 ~ Header ~ productData:", productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-tittleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className=" flex absolute w-6 top-2 text-sm items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="userLogo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
