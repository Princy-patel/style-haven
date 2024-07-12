import { useEffect, useState } from "react";
import Cards from ".";

function CardList() {
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [viewData, setViewData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/product/");
      const data = await response.json();
      setProduct(data);
    }

    getData();
  }, []);

  const handleVisibility = function (id) {
    setModal(true);

    const viewData = product.filter((data) => data.id === id);
    setViewData(viewData);
  };

  return (
    <>
      <div className="flex flex-1 justify-center flex-wrap">
        {product.map((data) => (
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
        } fixed top-0 left-0 w-[100vw] h-screen border-[1px] bg-white/[0.8] overflow-hidden justify-center items-center`}
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

          {viewData && (
            <div className="h-full p-4">
              <div className="flex justify-between">
                <h2 className="text-base text-left font-semibold ">
                  {viewData[0]?.product_title}
                </h2>
                <h3 className="font-bold text-xl">{viewData[0]?.id} $</h3>
              </div>
              <p className="text-left text-xs font-semibold text-gray-600">
                {viewData[0]?.product_description}
              </p>

              <h3 className="text-left mt-4 text-sm font-medium decoration-gray-300 underline-offset-4 cursor-pointer">
                Product Category: {viewData[0]?.product_category}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardList;
