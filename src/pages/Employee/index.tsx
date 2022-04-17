import ProtectedRoute from "@/components/ProtectedPage";
import { CREATE, DETAIL, TO_EMPLOYEES } from "@/configs";
import AddEmployee from "@/containers/AddEmployee";
import EmployeeList from "@/containers/EmployeeList";
import { getLoginState } from "@/redux";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
const ErrorPage = lazy(() => import("@/pages/Error"));

interface EmployeePageProps {}

export default function EmployeePage({}: EmployeePageProps) {
    console.log("EmployeePage render");
    const { user } = useSelector(getLoginState);

    return (
        <Routes>
            <Route index element={<EmployeeList />} />
            <Route path={DETAIL} element={<>Detail</>} />
            <Route
                path={CREATE}
                element={
                    <ProtectedRoute
                        isAllowed={!!user && user.role === "admin"}
                        redirectLink={TO_EMPLOYEES}
                    >
                        <AddEmployee />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
