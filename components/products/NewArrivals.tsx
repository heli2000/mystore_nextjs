import { ProductList } from "@/models/product.model";
import { ProductCategoryList } from "@/models/product_category.model";
import Image from "next/image";
import React from "react";

interface HomeProps {
  newArrival: ProductList[];
  productCategories: ProductCategoryList[];
}

const NewArrivals: React.FC<HomeProps> = ({
  newArrival,
  productCategories,
}) => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4">
      <div className="row-span-3">
        <Image
          src="/static/discount.jpg"
          alt="discount"
          className="h-[48rem] w-[50rem]"
          height={100}
          width={780}
        />
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-x-4">
          {newArrival?.length > 0 &&
            newArrival.map((obj: ProductList) => {
              return (
                <div className="group relative text-sm" key={obj.product_id}>
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={obj.image}
                      alt={obj.name}
                      className="object-cover object-center h-80"
                      height={200}
                      width={400}
                    />
                  </div>
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span
                      className="absolute inset-0 z-10"
                      aria-hidden="true"
                    />
                    New Arrivals
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row-span-2 col-span-2">
        <div className="grid grid-cols-4 gap-4">
          {productCategories?.length > 0 &&
            productCategories.map((obj: ProductCategoryList) => {
              return (
                <div className="group relative text-sm" key={obj.id}>
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={obj.image}
                      alt={obj.name}
                      className="object-cover object-center h-80"
                      height={100}
                      width={192}
                    />
                  </div>
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span
                      className="absolute inset-0 z-10"
                      aria-hidden="true"
                    />
                    {obj.name}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
