import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL_PRODUCT } from "../../../middleware/environment";
import { useParams } from "react-router-dom";
import { Product } from "..";

export const ShowProduct = () => {
  const [id, getId] = useParams().id;

  const [product, getProduct] = useState({
    id: useParams().id,
    name: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    axios
      .get(`${URL_PRODUCT}/ ${product.id}`)
      .then((response) => {
        console.log(response.data);
        getProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Vous êtes entrain d'afficher le produit {product.name} </h1>
      <br />
      <p>Description : {product.description}</p>

      <p>Prix : {product.price} </p>

    </>
  );
};
