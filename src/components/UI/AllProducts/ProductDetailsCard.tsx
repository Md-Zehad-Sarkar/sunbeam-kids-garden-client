import { TProduct } from "@/types/products.type";
import Image from "next/image";

const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="card max-w-[800px] bg-base-100 shadow-xl mt-24 mb-10 mx-auto">
      <figure>
        <Image
          src={product?.image}
          alt="fashion image"
          width={500}
          height={500}
          className="max-w-[800px] h-[400px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">product name: {product?.title}</h2>
        <p>
          price:
          <span className="badge badge-secondary ml-2">$ {product?.price}</span>
        </p>
        <p>brand: {product?.brand}</p>
        <p>category: {product?.category}</p>
        <p>description: {product?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Add To Cart</button>
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
