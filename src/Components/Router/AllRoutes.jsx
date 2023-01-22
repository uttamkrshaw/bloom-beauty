import React from "react";
import { Route, Routes  } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Main/Login";
import SignUp from "../Main/Sign-Up";
import SingleProduct from "../Pages/Product/SingleProductPage";
import Product from "../Pages/Product/ProductPage";

function AllRouters(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
        </div>
    )
}
export default AllRouters;