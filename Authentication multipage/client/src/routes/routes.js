import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../pages/Login"
import Home from "../pages/Home"
import Register from "../pages/Register"

const user = localStorage.getItem('@user');

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                    {user && <Route path="/" element={<Home />} />}
                    {!user && <Route path="/" exact element={<Login />} />}
                    {user && <Route path="/login" element={<Home />} />}
                    {!user && <Route path="/login" element={<Login />} />}
                    {!user && <Route path="/register" exact element={<Register user={user}/>} />}
            </Routes>
        </BrowserRouter>
    );
};

export default AllRoutes;