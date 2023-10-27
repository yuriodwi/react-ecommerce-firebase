/* eslint-disable react/prop-types */
const ProductsCard = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="productImage" />
      </div>
    </div>
  );
};

export default ProductsCard;
