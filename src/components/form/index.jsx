import React, { useState } from "react";

function Form({ product, form, setForm, setProduct }) {
  const [inputValue, setInputValue] = useState({
    productId: product.id,
    productTitle: product.title,
    productDescription: product.description,
    productCategory: product.category,
    productPrice: product.price,
  });

  // update the product
  const handleSubmit = async function (e) {
    e.preventDefault();

    const updateData = await fetch(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: inputValue.productTitle,
          description: inputValue.productDescription,
          category: inputValue.productCategory,
          price: inputValue.productPrice,
        }),
      }
    );

    const updatedProduct = await updateData.json();

    setProduct((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? updatedProduct : item
      )
    );

    setForm(false);
  };
  return (
    <div className="p-5">
      <form className="[&>*]:m-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <strong>Product Title:</strong>
          </label>
          <input
            className="border-[1px] rounded-full w-full px-6 m-2 border-black"
            type="text"
            name="title"
            id="title"
            value={inputValue.productTitle}
            onChange={(e) =>
              setInputValue({ ...inputValue, productTitle: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">
            <strong>Product Description:</strong>
          </label>
          <input
            className="border-[1px] rounded-full w-full px-6 m-2 border-black"
            type="text"
            name="description"
            id="description"
            value={inputValue.productDescription}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                productDescription: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="category">
            <strong>Product Category:</strong>
          </label>
          <input
            className="border-[1px] rounded-full w-full px-6 m-2 border-black"
            type="text"
            name="category"
            id="category"
            value={inputValue.productCategory}
            onChange={(e) =>
              setInputValue({ ...inputValue, productCategory: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="category">
            <strong>Product Price:</strong>
          </label>
          <input
            className="border-[1px] rounded-full px-6 m-2 border-black w-full"
            type="text"
            name="prince"
            id="prince"
            value={inputValue.productPrice}
            onChange={(e) =>
              setInputValue({ ...inputValue, productPrice: e.target.value })
            }
          />
        </div>

        <button
          className="border-[1px] rounded-full px-6 mt-2 border-gray-600 hover:bg-gray-100 transition duration-150 ease-out hover:ease-in"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Form;
