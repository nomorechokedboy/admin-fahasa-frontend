import Display from "@/containers/Display";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const AddForm = lazy(() => import("@/containers/AddForm"));

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
    return (
        <Routes>
            <Route index element={<Display />} />
            <Route path="detail" element={<></>} />
            <Route path="add" element={<AddForm />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
}
