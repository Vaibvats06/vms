import React, { useState } from "react";
import axios from "axios";
import { FcScatterPlot } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Order from "../components/dasboard/Order";

import AddProduct from "../components/dasboard/AddProduct";
import ProductSearch from "../components/dasboard/ProductSearch";
const Dashboard = () => {
  const [dashboard, setDashboard] = useState("order");
  return (
    <>
      <div className="border-b  border-gray-400 border-2 shadow-2xs shadow-gray-600">
        <p className="px-10 py-3 font-bold text-2xl flex items-center text-blue-400 cursor-default">
          <span>
            <FcScatterPlot />
          </span>
          VMS
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-300 flex via-gray-400 to-gray-500 h-full ">
        <div className="w-1/5  border-r border-white bg-[#E6E6E6] text-gray-700 container">
          <p
            onClick={() => {
              setDashboard("rate");
            }}
            className={`${
              dashboard === "rate" ? "text-blue-500" : ""
            } p-2 border-b tracking-wide shadow-sm  border-white cursor-pointer`}
          >
            Rate Check
          </p>
          <p
            onClick={() => {
              setDashboard("addProd");
            }}
            className={`${
              dashboard === "addProd" ? "text-blue-500" : ""
            } p-2 border-b tracking-wide shadow-sm  border-white cursor-pointer`}
          >
            Add Product
          </p>
          <p
            onClick={() => {
              setDashboard("order");
            }}
            className={`${
              dashboard === "order" ? "text-blue-500" : ""
            } p-2 border-b tracking-wide shadow-sm  border-white cursor-pointer`}
          >
            Order
          </p>
        </div>

        {/* Check Rate */}
        <div className="min-w-5/6 bg-amber-50">
          {dashboard === "rate" ? <ProductSearch /> : null}
          {dashboard === "addProd" ? <AddProduct /> : null}
          {dashboard === "order" ? <div className="w-full overflow-hidden"><Order /></div> : null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
