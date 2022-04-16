import { CREATE, DETAIL } from "@/configs";
import EmployeeList from "@/containers/EmployeeList";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../Error";

interface EmployeePageProps {}

export default function EmployeePage({}: EmployeePageProps) {
    console.log("EmployeePage render");

    return (
        <Routes>
            <Route index element={<EmployeeList />} />
            <Route path={DETAIL} element={<>Detail</>} />
            <Route path={CREATE} element={<>Add</>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
