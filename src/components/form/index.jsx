import React, { useState } from "react";

function Form({ product, form, setForm, setProduct }) {
  const [inputValue, setInputValue] = useState({
    productId: product.id,
    productTitle: product.product_title,
    productDescription: product.product_description,
    productCategory: product.product_category,
  });

  const handleSubmit = async function (e) {
    e.preventDefault();

    const updateData = await fetch(
      `http://localhost:3000/product/${product.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_title: inputValue.productTitle,
          product_description: inputValue.productDescription,
          product_category: inputValue.productCategory,
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
          <label htmlFor="title">Product Title:</label>
          <input
            className="border-[1px] rounded-full px-6 m-2 border-black"
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
          <label htmlFor="description">Product Description:</label>
          <input
            className="border-[1px] rounded-full px-6 m-2 border-black"
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
          <label htmlFor="category">Product Category:</label>
          <input
            className="border-[1px] rounded-full px-6 m-2 border-black"
            type="text"
            name="category"
            id="category"
            value={inputValue.productCategory}
            onChange={(e) =>
              setInputValue({ ...inputValue, productCategory: e.target.value })
            }
          />
        </div>

        <button
          className="border-[1px] rounded-full px-6 mt-2 border-gray-600"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Form;
