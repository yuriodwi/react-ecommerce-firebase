import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmount, setTotalAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price);
    console.log("🚀 ~ file: Cart.jsx:15 ~ productData.map ~ price:", price);
  }, [productData]);

  // console.log("🚀 ~ file: Cart.jsx:5 ~ Cart ~ productData:", productData);
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#FAFAFA] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-tittleFont font-bold text-lg">
                ${totalAmount}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                earum aliquid quia placeat repellat veritatis?
              </span>
            </p>
          </div>
          <p className="font-tittleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmount}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
        dela
      />
    </div>
  );
};

export default Cart;
