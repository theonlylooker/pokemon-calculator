import React, { FC } from "react";
import { layout } from "../types/types";
import Mylogo from "./Mylogo";
import Mysearch from "./Mysearch";

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className="m-7 grid place-items-center">
      <Mylogo />
      {/* <Mysearch /> */}
      {children}
    </div>
  );
};

export default Layout;
