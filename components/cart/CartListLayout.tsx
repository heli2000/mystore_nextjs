import { CartList } from "@/models/cartWithoutLogin.model";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";

const CartListLayout = () => {
  const [localCart, setLocalCart] = useState<CartList[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    try {
      let CartDataObj = localStorage.getItem("CartData");
      if (
        CartDataObj !== undefined &&
        CartDataObj !== null &&
        CartDataObj !== ""
      ) {
        let CartData: CartList[] = JSON.parse(CartDataObj);
        setLocalCart(CartData);

        const totalSum: number = CartData.reduce(
          (sum, data) => sum + data.price * data.qty,
          0
        );

        setSubTotal(totalSum);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [update]);

  const deleteProduct = (id: number) => {
    let CartDataObj = localStorage.getItem("CartData");
    if (
      CartDataObj !== undefined &&
      CartDataObj !== null &&
      CartDataObj !== ""
    ) {
      let deleteData = JSON.parse(CartDataObj).filter(
        (obj: CartList) => obj.product_id !== id
      );
      localStorage.setItem("CartData", JSON.stringify(deleteData));
      setUpdate(!update);
    }
  };

  const updateQty = (id: number, type: string) => {
    let CartDataObj = localStorage.getItem("CartData");
    if (
      CartDataObj !== undefined &&
      CartDataObj !== null &&
      CartDataObj !== ""
    ) {
      let data = JSON.parse(CartDataObj);
      let findIndex = data.findIndex((obj: CartList) => obj.product_id === id);
      let updateData = data;
      if (updateData[findIndex].qty - 1 === 0 && type === "Sub") {
        updateData.splice(findIndex, 1);
      } else {
        updateData[findIndex].qty =
          type === "Add"
            ? updateData[findIndex].qty + 1
            : updateData[findIndex].qty - 1;
      }

      localStorage.setItem("CartData", JSON.stringify(updateData));
      setUpdate(!update);
    }
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {localCart?.length > 0 ? (
          <>
            <div className="rounded-lg md:w-2/3">
              {localCart.map((obj: CartList) => {
                return (
                  <>
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <Image
                        src={obj.image}
                        alt={obj.name}
                        className="w-full rounded-lg sm:w-40"
                        width={100}
                        height={100}
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {obj.name}
                          </h2>
                          <p>${obj.price}</p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() => updateQty(obj.product_id, "Sub")}
                            >
                              -
                            </span>
                            <input
                              className="h-8 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              value={obj.qty}
                              min={1}
                            />
                            <span
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() => updateQty(obj.product_id, "Add")}
                            >
                              +
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">${obj.price * obj.qty}</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              onClick={() => deleteProduct(obj.product_id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div>
                  <p className="mb-1 text-lg font-bold">${subTotal + 4.99}</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>Cart is Empty</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CartListLayout;
