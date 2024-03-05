import axios from "axios";
import instance from "../api";

export const fetchProductsAndCategoriesAndSubCategories = async () => {
  try {
    const [productsResponse, categoriesResponse, subCategoriesResponse, usersResponse] = await axios.all([
      instance.get('/api/products'),
      instance.get('/api/categories'),
      instance.get('/api/subcategories'),
      instance.get('/api/users')
    ]);
    return [productsResponse.data, categoriesResponse.data, subCategoriesResponse.data, usersResponse.data];
  } catch (error) {
    console.error('Error fetching data', error.message);
    return null;
  }
};