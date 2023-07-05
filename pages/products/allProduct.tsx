import React from "react";
import ProductLayout from "@/components/products/products";
import { Inter } from "next/font/google";
import { fetchProducts } from "@/lib/product/productServices";
import { ProductList } from "@/models/product.model";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  allProductData: ProductList[];
}

export const getServerSideProps = async () => {
  try {
    const allProductData = await fetchProducts();
    return {
      props: {
        allProductData,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const allProduct: React.FC<HomeProps> = ({ allProductData }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ProductLayout allProductData={allProductData} />
    </main>
  );
};

export default allProduct;
