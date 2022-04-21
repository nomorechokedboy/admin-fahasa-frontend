import Product from '@/types/product';
import Joi from 'joi';

const productFormSchema = Joi.object<Product>({
  _id: Joi.string().min(5).message('Invalid Sku'),
  amount: Joi.number().min(1).message('Invalid amount'),
  author: Joi.string().min(3).max(20).message('Invalid author name'),
  description: Joi.string()
    .min(10)
    .message('Description must greater than 10 character'),
  genres: Joi.string().min(3).max(50).message('Invalid genres'),
  name: Joi.string()
    .min(3)
    .message('Product name must greater than 3 characters'),
  price: Joi.number().min(10000).message('Price must greater than 10.000 đ'),
  productSupplier: Joi.string()
    .min(3)
    .max(50)
    .message(
      'Product supplier must greater than 3 and less than 50 characters',
    ),
  publicYear: Joi.number().min(2000).max(2022),
  publishingCompany: Joi.string()
    .min(3)
    .max(50)
    .message(
      'Publishing company must greater than 3 and less than 50 characters',
    ),
  image: Joi.any(),
});

export default productFormSchema;
