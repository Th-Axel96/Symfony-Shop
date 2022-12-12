import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { async } from "regenerator-runtime";
import { URL_PRODUCT } from "../../../middleware/environment";

export const EditProduct = () => {
  const [product, setProduct] = useState({
    id: useParams().id,
    name: "",
    description: "",
    price: 0,
  });

  const OnChangeName = (event) => {
    setProduct({
      // recupere les autres valeurs à ne pas modifier
      ...product,
      // recupere la valeur de l'input
      name: event.target.value,
    });
  };
  const OnChangeDesc = (event) => {
    setProduct({
      // recupere les autres valeurs à ne pas modifier
      ...product,
      // recupere la valeur de l'input
      description: event.target.value,
    });
  };
  const OnChangePrice = (event) => {
    setProduct({
      // recupere les autres valeurs à ne pas modifier
      ...product,
      // recupere la valeur de l'input
      price: parseFloat(event.target.value),
    });
  };

  const SubmitProduct = async () => {
    await axios
      .put(`${URL_PRODUCT} / ${product.id}`, {
        name: product.name,
        description: product.description,
        price: product.price,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <label htmlFor="">Nom :</label>
      {/* onChange permet de modifier la valeur sans clic */}
      <input type="text" onChange={OnChangeName} value={product.name} />
      <label htmlFor="">Description :</label>
      <input type="text" onChange={OnChangeDesc} value={product.description} />
      <label htmlFor="">Prix</label>
      <input type="text" onChange={OnChangePrice} value={product.price} />
      <button type="button" onClick={() => SubmitProduct()}>
        Envoyer
      </button>
    </form>
  );
};
