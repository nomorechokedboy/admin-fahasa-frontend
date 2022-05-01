import {
  deleteEmployee,
  getAllEmployee,
  getEmployee,
  updateEmployee,
} from '../../src/api';
import fakeData from '../../src/api/employee/mockData';
import Employee from '../../src/types/employee';

describe('Employee api test', () => {
  it('should return all employees', async () => {
    const data = await getAllEmployee('/employee');

    expect(data).length.to.be.greaterThan(0);
    expect(data).to.eq(fakeData);
  });

  it('should return employee with given id', async () => {
    const data = await getEmployee('/employee', 'a5aaa');

    expect(data).to.eq(fakeData[3]);
  });

  it('should update employee in the list', async () => {
    const updated: Employee = {
      id: 'a5aaa',
      name: 'This name has been updated',
      image:
        'https://i.pinimg.com/280x280_RS/56/2a/00/562a005b38ca84265cbc0a1ebab430d8.jpg',
      role: 'employee',
      gender: 'male',
      birthday: '22/2/2002',
    };

    const result = fakeData.map((el) =>
      el.id === updated.id ? { ...el, ...updated } : el,
    );

    const data = await updateEmployee(updated);

    expect(data).length.to.be.greaterThan(0);
    expect(data).to.eq(result);
  });

  it('should delete employee in the list', async () => {
    const deletedId = 'a5aaa';
    const deletedList = fakeData.filter((el) => el.id !== deletedId);

    const data = await deleteEmployee(deletedId);

    expect(data).length.to.be.greaterThan(0);
    expect(data).to.eq(deletedList);
  });
});
