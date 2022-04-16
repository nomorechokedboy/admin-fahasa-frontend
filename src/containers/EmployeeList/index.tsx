import { TO_EMPLOYEES } from "@/configs";
import ListPageLayout from "@/layout/SubPageLayout";
import styles from "./styles.module.scss";

interface EmployeeListProps {}

export default function EmployeeList({}: EmployeeListProps) {
    return (
        <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
            <div>EmployeeList</div>
        </ListPageLayout>
    );
}
