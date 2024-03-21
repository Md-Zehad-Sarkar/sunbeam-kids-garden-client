import { TProduct } from "@/types/products.type";
import Image from "next/image";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: { revalidate: 30 },
  });
  const { data: products } = await res.json();
  const flashSales = products.filter(
    (product: TProduct) => product.flashSale === true
  );

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold mb-3">Flash Sale</h2>
        <button className="btn btn-secondary ">View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {flashSales.slice(0, 4).map((flashSale: TProduct) => (
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
        ))}
        b
      </div>
    </div>
  );
};

export default FlashSale;
