import { TProduct } from "@/types/products.type";
import Image from "next/image";

const ProductTableRow = ({ product, i }: { product: TProduct; i: string }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <Image
          src={product?.image}
          alt="product image"
          width={100}
          height={100}
        />
        <p>{product?.title}</p>
      </td>
      <td>{product?.brand}</td>
      <td>{product?._id}</td>
      <td>{product?.price}</td>
    </tr>
  );
};

export default ProductTableRow;
