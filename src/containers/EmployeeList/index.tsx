import { TO_EMPLOYEES } from "@/configs";
import SubPageLayout from "@/layout/SubPageLayout";
import styles from "./styles.module.scss";

interface EmployeeListProps {}

export default function EmployeeList({}: EmployeeListProps) {
    return (
        <SubPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
            <div>EmployeeList</div>
        </SubPageLayout>
    );
}
