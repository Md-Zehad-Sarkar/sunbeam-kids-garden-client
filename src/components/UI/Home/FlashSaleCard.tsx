// ("use client");
import Ratings from "@/components/shared/Ratings/Ratings";
import { TProduct } from "@/types/products.type";
import Image from "next/image";

const FlashSaleCard = ({ flashSale }: { flashSale: TProduct }) => {
  return (
    <div
      key={flashSale._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={flashSale.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <Ratings rating={flashSale?.ratings} />
        {/* need implement here for offers timers */}
        <h2 className="card-title relative">
          {flashSale.title}
          <p className="badge badge-secondary max-w-24 py-4 ">
            {flashSale.price}
          </p>
        </h2>
        <p>{flashSale.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">add to cart</button>
          <button className="btn btn-secondary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
