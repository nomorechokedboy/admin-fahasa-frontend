import { LoadingOverlay } from "@mantine/core";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Display = lazy(() => import("@/containers/Display"));
const AddForm = lazy(() => import("@/containers/AddForm"));

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Suspense fallback={<LoadingOverlay visible />}>
                        <Display />
                    </Suspense>
                }
            />
            <Route path="detail" element={<></>} />
            <Route
                path="add"
                element={
                    <Suspense fallback={<LoadingOverlay visible />}>
                        <AddForm />
                    </Suspense>
                }
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
}
