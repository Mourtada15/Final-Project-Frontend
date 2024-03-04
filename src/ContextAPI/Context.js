import React, { createContext, useEffect, useState } from "react";
import { fetchProductsAndCategoriesAndSubCategories } from "./DataFetching";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const [productsResponse, categoriesResponse, subCategoriesResponse] = await fetchProductsAndCategoriesAndSubCategories();
        if (productsResponse && categoriesResponse && subCategoriesResponse) {
          setProducts(productsResponse);
          setCategories(categoriesResponse);
          setSubCategories(subCategoriesResponse);
        }
      } catch (error) {
        console.error('Error fetching data at Context', error.message);
      }
    };

    fetchDataAndUpdateState();
  }, []);

  return (
    <DataContext.Provider value={{ products, categories, subCategories }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;