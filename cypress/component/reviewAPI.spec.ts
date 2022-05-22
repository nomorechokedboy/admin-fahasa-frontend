import { getAllReviews, deleteEmployee } from '../../src/api';

import fakeDataReview from '../../src/api/review/mockData';

describe('Employee api test', () => {
  it('should return all Reviews', async () => {
    const data = await getAllReviews('/review');
    expect(data).length.to.be.greaterThan(0);
    expect(data).to.eq(fakeDataReview);
  });

  it('should delete review in the list', async () => {
    const deletedId = 'aaa11';
    const deletedList = fakeDataReview.filter((rev) => rev.id !== deletedId);
    const data = await deleteEmployee(deletedId);
    expect(data).length.to.be.greaterThan(0);
    expect(data).to.deep.eq(deletedList);
  });
});
