import { useState } from "react";
import Form from "../form";

function Cards({ product, setProduct, handleVisibility }) {
  const [form, setForm] = useState(false);

  // delete the card
  const handleDelete = () => {
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setProduct((prevProducts) => {
          return prevProducts.filter((item) => item.id !== product.id);
        });
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  // handle update
  const handleUpdate = function () {
    setForm(true);
  };

  return (
    <>
      {/* card */}
      <div
        className={`border-[1px] border-gray-600 rounded-lg p-4 h-auto pt-6 bg-white m-4 w-[20rem] shadow-lg drop-shadow-md"
      }`}
      >
        <div className="flex justify-between items-baseline">
          <h2 className="text-base text-left font-semibold ">
            {product.title}
          </h2>
          <h3 className="font-bold text-xl">${product.price}</h3>
        </div>
        <p className="text-left text-xs font-semibold text-gray-600">
          {product.description}
        </p>

        <h3 className="text-left mt-4 text-sm font-medium underline decoration-gray-300 underline-offset-4 cursor-pointer">
          Product Category: {product.category}
        </h3>

        <div className="flex mt-2">
          <button
            className="border-[1px] rounded-full px-6 mt-2 border-gray-600 hover:shadow-lg transition-all duration-150"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="border-[1px] rounded-full px-6 mt-2 border-gray-600 hover:shadow-lg transition-all duration-150"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="border-[1px] rounded-full px-6 mt-2 border-gray-600 hover:shadow-lg transition-all duration-150"
            onClick={handleVisibility}
          >
            View
          </button>
        </div>
      </div>

      {/* open modal to update the product */}
      {form && (
        <div
          className={`${
            form ? "flex" : "hidden"
          } fixed top-0 left-0 w-[100vw] h-screen border-[1px] bg-white/[0.9] overflow-hidden justify-center items-center`}
        >
          <div
            className="flex flex-col z-30 w-[90%] md:w-[60%] h-[80%] md:h-[70%] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex justify-end pe-2 text-black text-sm font-extrabold"
              onClick={() => {
                setForm(false);
              }}
            >
              X
            </button>
            <Form
              setProduct={setProduct}
              product={product}
              form={form}
              setForm={setForm}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
