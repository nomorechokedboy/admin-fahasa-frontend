import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';

interface EmployeeListProps {}

export default function EmployeeList() {
  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      <div>EmployeeList</div>
    </ListPageLayout>
  );
}
