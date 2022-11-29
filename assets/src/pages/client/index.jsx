import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/clients";

export const Client = () => {
  const [clients, getClients] = useState([]);

  const getAllClients = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getClients(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <>
      <h1>Hello Client</h1>7
      {clients.map((client) => {
        return (
          <div key={client.id}>
            <ul>
              <li>Votre nom complet est : {client.full_name}</li>
              <li>Votre email est : {client.email}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
