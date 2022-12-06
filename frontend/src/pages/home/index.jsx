import React from "react";
import { Navbar } from "../../components/navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <h1 class="text-3xl font-bold underline text-red-500 bg-blue-800">Hello world!</h1>
      <p className="bg-purple-500 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet itaque
        eaque, laborum perspiciatis libero inventore fuga commodi quis natus,
        unde mollitia omnis voluptas eum reprehenderit doloremque placeat
        debitis sint culpa.
      </p>
    </>
  );
};
