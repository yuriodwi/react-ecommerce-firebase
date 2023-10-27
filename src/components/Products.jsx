import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black "></span>
        <p className="max-w-[700px] text-gray-600 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          tempore adipisci quos vitae! Blanditiis adipisci consectetur suscipit
          molestiae eius hic dolorum, minus eum ullam repellendus natus tempora
          itaque, totam voluptate placeat voluptatem possimus aspernatur. Est,
          pariatur architecto? Enim, quidem asperiores!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
