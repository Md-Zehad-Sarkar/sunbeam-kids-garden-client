import AllProducts from "@/components/UI/AllProducts/AllProducts";
import FilterProducts from "@/components/UI/AllProducts/FilterProducts";
import ProductsCard from "@/components/UI/AllProducts/ProductsCard";
import { TProduct } from "@/types/products.type";

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      <FilterProducts products={products} />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default ProductPage;
