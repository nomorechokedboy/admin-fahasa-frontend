import { EMPLOYEES, ORDERS, PRODUCTS, REVIEWS } from "@/configs";
import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "../Employee";
import ErrorPage from "../Error";
import OrderPage from "../Order";
import ReviewPage from "../Review";
const ProductPage = lazy(() => import("../Product"));

const AdminPage = memo(() => {
    console.log("AdminPage render");

    return (
        <Routes>
            {/* Dashboard here */}
            <Route index element={<></>} />
            <Route path={PRODUCTS} element={<ProductPage />} />
            <Route path={ORDERS} element={<OrderPage />} />
            <Route path={EMPLOYEES} element={<EmployeePage />} />
            <Route path={REVIEWS} element={<ReviewPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
});

export default AdminPage;
