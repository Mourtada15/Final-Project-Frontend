import React, { createContext, useEffect, useState } from "react";
import { fetchProductsAndCategoriesAndSubCategories } from "./DataFetching";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const [productsResponse, categoriesResponse, subCategoriesResponse, usersResponse] = await fetchProductsAndCategoriesAndSubCategories();
        if (productsResponse && categoriesResponse && subCategoriesResponse && usersResponse) {
          setProducts(productsResponse);
          setCategories(categoriesResponse);
          setSubCategories(subCategoriesResponse);
          setUsers(usersResponse);
        }
      } catch (error) {
        console.error('Error fetching data at Context', error.message);
      }
    };

    fetchDataAndUpdateState();
  }, []);

  return (
    <DataContext.Provider value={{ products, categories, subCategories, users }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;