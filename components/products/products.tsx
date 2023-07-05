import { ProductList } from "@/models/product.model";
import Image from "next/image";
import React from "react";

interface HomeProps {
  allProductData: ProductList[];
}

const products: React.FC<HomeProps> = ({ allProductData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
        {allProductData?.length > 0 &&
          allProductData.map((obj: ProductList) => {
            return (
              <div className="w-full px-4 lg:px-0" key={obj.product_id}>
                <div className="p-3 bg-white rounded shadow-md">
                  <div className="">
                    <div className="relative w-[30rem] mb-3 h-96 lg:mb-0">
                      <Image
                        src={obj.image}
                        alt={obj.name}
                        className="object-fill w-full h-full rounded"
                        fill
                      />
                    </div>
                    <div className="flex-auto p-2 justify-evenly">
                      <div className="flex flex-wrap ">
                        <div className="flex items-center justify-between w-full min-w-0 ">
                          <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                            {obj.name}
                          </h2>
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-semibold">
                        ${obj.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default products;
