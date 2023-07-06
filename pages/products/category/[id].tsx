import { fetchProductsByCategory } from "@/lib/product/productServices";
import { ProductList } from "@/models/product.model";
import { GetServerSidePropsContext } from "next";
import React from "react";
import ProductLayout from "@/components/products/products";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  productList: ProductList[];
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { params } = context;
    const pageId = params?.id;
    const productList = await fetchProductsByCategory(pageId);
    return {
      props: {
        productList,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const ProductListByCategory: React.FC<HomeProps> = ({ productList }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-<center justify-between p-24 ${inter.className}`}
    >
      <ProductLayout allProductData={productList} />
    </main>
  );
};

export default ProductListByCategory;
