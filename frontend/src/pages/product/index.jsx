import React from "react";
import { GetAllProducts } from "./functions/getAllProduct";

export const Product = () => {
  return (
    <>
      <h1 className="text-red-500">HELLO PRODUCT</h1>
      <GetAllProducts />
    </>
  );
};
