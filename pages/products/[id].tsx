import React from "react";
import { fetchProductsById } from "@/lib/product/productServices";
import { ProductList } from "@/models/product.model";
import { GetServerSidePropsContext } from "next";
import ProductDetails from "@/components/products/ProductDetails";

interface HomeProps {
  product: ProductList;
  pageId: string | string[] | undefined;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { params } = context;
    const pageId = params?.id;
    const product = await fetchProductsById(pageId);
    return {
      props: {
        product,
        pageId,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const ProductDetailPage: React.FC<HomeProps> = ({ product, pageId }) => {
  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
