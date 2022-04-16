import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
const ProductPage = lazy(() => import("../ProductPage"));

const AdminPage = memo(() => {
    console.log("AdminPage render");

    return (
        <Routes>
            <Route index element={<></>} />
            <Route path="manage" element={<></>} />
            <Route path="products/*" element={<ProductPage />} />
            <Route path="detail" element={<></>} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
});

export default AdminPage;
