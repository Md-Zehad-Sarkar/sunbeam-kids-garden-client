// ("use client");
import { TProduct } from "@/types/products.type";
import Image from "next/image";

export const getSalesOfferDuration = () => {
  const today: Date = new Date();
  const futureDate: Date = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  let diffInMilliseconds: number = futureDate.getTime() - today.getTime();

  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  diffInMilliseconds -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  diffInMilliseconds -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
  diffInMilliseconds -= minutes * 1000 * 60;

  const seconds = Math.floor(diffInMilliseconds / 1000);

  // Check if offer has expired
  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return "Offer Expired";
  }

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
};

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
        <p>
          <span className="badge badge-accent text-red-500 py-6">
            {getSalesOfferDuration()}
          </span>
        </p>
        <h2 className="card-title relative">
          {flashSale.title}
          <p className="badge badge-secondary  ">{flashSale.price}</p>
        </h2>
        <p>{flashSale.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">add to cart</div>
          <div className="badge badge-outline">Order now</div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
