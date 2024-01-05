import { Product } from "@/types";
import qs from "query-string";

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringify({
    url: URL,
    query: {
      colorId,
      categoryId,
      sizeId,
      isFeatured,
    },
  });
  const res = await fetch(URL);
  return res.json();
};

export default getProducts;
