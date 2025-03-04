import { useState } from "react";
import Data from "../../data.json";
import ProductItem from "../components/ProductItem";
import { ProductType } from "../types/ProductType";
import Section from "../components/Section";
import { HoverImageLinks } from "../components/HoverLink";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>(Data.Products);
  console.log(setProducts);

  return (
    <div className="container mx-auto p-4">
      <Section/>
      <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductItem product={p} key={p.id} />
        ))}
      </div>
      <HoverImageLinks />
    </div>
  );
};

export default Product;
