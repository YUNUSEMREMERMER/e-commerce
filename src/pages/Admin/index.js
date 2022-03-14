import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home"
import Products from './Products';
import Orders from "./Orders";
import 'antd/dist/antd.css';
import ProductDetail from './ProductDetail';
import NewProduct from './Products/new';

function Admin() {

    return (

        <div>

            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders" >Orders</Link>
                    </li>
                    <li>
                        <Link to={`/admin/products`}>Products</Link>
                    </li>

                </ul>
            </nav>



            <Box mt="10">

                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route exact path="/products/:product_id" element={<ProductDetail />} />
                    <Route path={`/products`} element={<Products />} />
                    <Route path={`/products/new`} element={<NewProduct />} />
                </Routes>


            </Box>

        </div>

    )
}

export default Admin