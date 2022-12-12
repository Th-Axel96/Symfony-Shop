import React, { useState } from "react";
import axios from "axios";
import { URL_PRODUCT } from "../../../middleware/environment";

export const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // faire un set product de name pour la fonction on change name
  const OnChangeName = (event) => {
    console.log(event.target.value);
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const OnChangeDescription = (event) => {
    console.log(event.target.value);
    setProduct({
      ...product,
      description: event.target.value,
    });
  };

  const OnChangePrice = (event) => {
    console.log(event.target.value);
    setProduct({
      ...product,
      price: parseInt(event.target.value),
    });
  };

  let formData = {
    name: product.name,
    description: product.description,
    price: product.price,
  };

  const SubmitProduct = (event) => {
    event.preventDefault();

    axios.post(`${URL_PRODUCT}`, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Créer un produit</h1>
      <form onSubmit={() => SubmitProduct()}>
        <label htmlFor="name">Nom du produit</label>
        <input
          id={"name"}
          value={product.name}
          onChange={OnChangeName}
          type="text"
          name="name"
        />
        <label htmlFor="description">Description du produit</label>
        <input
          id="description"
          value={product.description}
          onChange={OnChangeDescription}
          name="description"
          type="text"
        />

        <label htmlFor="price">Prix du produit</label>
        <input
          id="price"
          value={product.price}
          onChange={OnChangePrice}
          name="price"
          type="text"
        />

        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

// event prevent default, permet de submit mais sans refresh tout le contenu de la page
