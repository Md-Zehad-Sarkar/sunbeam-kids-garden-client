import AllProducts from "@/components/UI/AllProducts/AllProducts";
import ProductsCard from "@/components/UI/AllProducts/ProductsCard";
import { TProduct } from "@/types/products.type";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    cache: "no-store",
  });
  const { data: products } = await res.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* <AllProducts /> */}
      {products?.map((product: TProduct) => (
        <ProductsCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default page;
