import Image from "next/image";
import { Inter } from "next/font/google";
import NewArrivals from "@/components/products/NewArrivals";
import { ProductList } from "@/models/product.model";
import {
  fetchNewArrivals,
  fetchProductCategories,
} from "@/lib/product/productServices";
import { ProductCategoryList } from "@/models/product_category.model";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  newArrival: ProductList[];
  productCategories: ProductCategoryList[];
}

export const getServerSideProps = async () => {
  try {
    const [newArrival, productCategories] = await Promise.all([
      await fetchNewArrivals(),
      await fetchProductCategories(),
    ]);

    return {
      props: {
        newArrival,
        productCategories,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const Home: React.FC<HomeProps> = ({
  newArrival,
  productCategories,
}) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <NewArrivals
        newArrival={newArrival}
        productCategories={productCategories}
      />
    </main>
  );
};

export default Home;
