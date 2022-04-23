import { getAllProduct } from '../../src/api';

describe('Product api test', () => {
  it('should return all products', async () => {
    const data = await getAllProduct('/product');
    expect(data).length.to.be.greaterThan(0);
  });
});
