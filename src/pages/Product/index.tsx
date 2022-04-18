import { CREATE, DETAIL } from "@/configs";
import ProductList from "@/containers/ProductList";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const ErrorPage = lazy(() => import("@/pages/Error"));
const AddForm = lazy(() => import("@/containers/AddForm"));

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
    return (
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={DETAIL} element={<></>} />
            <Route path={CREATE} element={<AddForm />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
