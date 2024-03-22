import ProductTableRow from "@/components/UI/Dashboard/allProducts/ProductTableRow";
import { TProduct } from "@/types/products.type";

const DashboardAllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const { data: products } = await res.json();

  return (
    <div className="mt-24 mb-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Items</th>
              <th>Brand</th>
              <th>ProductId</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProduct,i:string) => (
              <ProductTableRow key={product?._id} product={product} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllProductsPage;