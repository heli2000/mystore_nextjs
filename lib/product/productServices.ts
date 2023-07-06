import axios from "axios";
import { ProductList } from "@/models/product.model";
import { ProductCategoryList } from "@/models/product_category.model";

export const fetchProducts = async () => {
  try {
    const response = await axios.get<ProductList[]>(
      "http://localhost:3000/api/product/getProducts"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductsById = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.post<ProductList[]>(
      "http://localhost:3000/api/product/getProductById",
      {
        id: id,
      }
    );
    return response.data[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductsByCategory = async (
  id: string | string[] | undefined
) => {
  try {
    const response = await axios.post<ProductList[]>(
      "http://localhost:3000/api/product/getProductsByCategory",
      {
        id: id,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchNewArrivals = async () => {
  try {
    const response = await axios.get<ProductList[]>(
      "http://localhost:3000/api/product/getNewArrivals"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductCategories = async () => {
  try {
    const response = await axios.get<ProductCategoryList[]>(
      "http://localhost:3000/api/product/getProductCategory"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
