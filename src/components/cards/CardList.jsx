import { useEffect, useState } from "react";
import Cards from ".";

function CardList() {
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [viewData, setViewData] = useState({});
  const [searchProduct, setSearchProduct] = useState("");

  // render the products
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    }
    getData();
  }, []);

  // handle view functionality
  const handleVisibility = function (id) {
    setModal(true);

    const viewData = product.filter((data) => data.id === id);
    setViewData(viewData);
  };

  // search product
  const handleSearch = function (e) {
    setSearchProduct(e.target.value);
  };

  const filteredProducts = product.filter((data) =>
    data.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center [&>*]:mx-5">
        <h1 className="text-xl font-bold">Products</h1>

        {/* search the item */}
        <form className="w-[20%]">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm border-2 border-black rounded-full focus:outline-none"
              placeholder="Enter Product Name"
              required
              value={searchProduct}
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>
      <div className="flex flex-1 justify-center flex-wrap">
        {filteredProducts.map((data) => (
          <Cards
            key={data.id}
            product={data}
            setProduct={setProduct}
            handleVisibility={handleVisibility.bind(null, data.id)}
          />
        ))}
      </div>

      {/* open modal */}
      <div
        className={`${
          modal ? "flex" : "hidden"
        } fixed top-0 left-0 w-[100vw] h-screen border-[1px] bg-white/[0.9] overflow-hidden justify-center items-center`}
      >
        <div
          className="flex flex-col z-30 w-[90%] md:w-[60%] h-[80%] md:h-[70%] rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="flex justify-end pe-2 text-black text-sm font-extrabold"
            onClick={() => {
              setModal(false);
              setViewData({});
            }}
          >
            X
          </button>

          {/* view the product */}
          {viewData && (
            <div className="h-full p-4">
              <div className="flex justify-between">
                <h2 className="m-2 text-left text-lg font-semibold ">
                  {viewData[0]?.title}
                </h2>
                <h3 className="font-bold text-xl">${viewData[0]?.price}</h3>
              </div>
              <p className="text-left text-sm font-semibold text-gray-600 m-2">
                {viewData[0]?.description}
              </p>

              <h3 className="text-left mt-4 text-md m-2 font-medium decoration-gray-300 underline-offset-4 cursor-pointer">
                <strong> Product Category:</strong> {viewData[0]?.category}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardList;
