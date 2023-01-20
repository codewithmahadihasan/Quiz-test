import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";
export const UseCosntext = createContext();

const Main = () => {
  const datas = useLoaderData();
  return (
    <UseCosntext.Provider value={datas}>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </UseCosntext.Provider>
    // <div>
    //
    // </div>
  );
};

export default Main;
