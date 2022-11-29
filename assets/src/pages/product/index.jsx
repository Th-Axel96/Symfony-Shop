import React, { useEffect, useState } from "react";
import axios from "axios";
import { async } from "regenerator-runtime";

const URL = "http://localhost:8000/api/products";

export const Product = () => {
  const [products, getProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      await axios
        .get(`${URL}`)
        .then((response) => {
          getProducts(response.data["hydra:member"]);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = () => {
    try {
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>Hello product</h1>
      <hr style={{ marginTop: "5rem" }} />
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <label htmlFor="text">Nom du produit :</label>
        <input type="text" />
        <label htmlFor="desciption">Description :</label>
        <textarea type="desciption" />
        <label htmlFor="price">Prix :</label>
        <input type="number" />
        <button type="button" onClick={() => submitForm()}>
          Envoyer
        </button>
      </form>

      <hr style={{ marginBottom: "5rem" }} />

      {products.map((product) => {
        const addProduct = () => {
          alert(`Votre id est : ${product.id}`);
        };

        const deleteProduct = () => {
          alert(`produit supp : ${product.id}`);
        };

        const updateProduct = () => {
          alert(`produit mise a jour : ${product.id}`);
        };

        return (
          <div key={product.id}>
            <ul>
              <li>Nom du produit :{product.name}</li>
              <li>Description du produit : {product.desciption}</li>
              <li>Prix du produit : {product.price} $</li>
            </ul>
            <button onClick={() => addProduct()}>Ajouter au panier</button>
            <button type="button" onClick={() => deleteProduct()}>
              Supprimer un produit
            </button>
            <button type="button" onClick={() => updateProduct()}>
              Mise a jour
            </button>
          </div>
        );
      })}
    </>
  );
};
