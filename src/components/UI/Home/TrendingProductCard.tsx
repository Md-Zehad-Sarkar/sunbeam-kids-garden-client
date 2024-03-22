"use client";
import Ratings from "@/components/shared/Ratings/Ratings";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const TrendingProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      key={product?._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product?.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <Ratings rating={product?.ratings} />

        <h2 className="card-title relative">
          {product?.title}
          <p className="badge badge-secondary max-w-24 py-4 ">
            {product?.price}
          </p>
        </h2>
        <p>{product?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">add to cart</button>
          <button className="btn btn-secondary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
