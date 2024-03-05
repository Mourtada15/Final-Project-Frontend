import axios from "axios";
import instance from "../api";

export const fetchProductsAndCategoriesAndSubCategories = async () => {
  try {
    const [productsResponse, categoriesResponse, subCategoriesResponse] = await axios.all([
      instance.get('/api/products'),
      instance.get('/api/categories'),
      instance.get('/api/subcategories'),
    ]);
    return [productsResponse.data, categoriesResponse.data, subCategoriesResponse.data];
  } catch (error) {
    console.error('Error fetching data', error.message);
    return null;
  }
};