import { TProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      key={product._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <p className="badge badge-secondary max-w-24 py-3">
            $ {product.price}
          </p>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          {/* <div className="btn btn-secondary">add to cart</div>
          <div className="btn btn-secondary">Order now</div> */}
          <Link href={`/products/${product._id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
