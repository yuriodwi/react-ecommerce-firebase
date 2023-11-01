import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  // console.log(
  // "🚀 ~ file: CartItem.jsx:6 ~ CartItem ~ productData:",
  // productData
  // );
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-tittleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="productImg"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
