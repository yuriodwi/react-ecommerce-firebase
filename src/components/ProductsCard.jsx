/* eslint-disable react/prop-types */
const ProductsCard = ({ product }) => {
  return (
    <div className="group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={product.image}
          alt="productImage"
        />
      </div>
    </div>
  );
};

export default ProductsCard;
