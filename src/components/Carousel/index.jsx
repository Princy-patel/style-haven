import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Images() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[50%] h-[5%]">
        <Carousel autoPlay>
          <div>
            <img src="public/images/Coffee 1.jpg" />
          </div>
          <div>
            <img
              src="public/images/Coffee 2.webp"
              className="!w-[50%] !h-[50%]"
            />
          </div>
          <div>
            <img src="public/images/Coffee 3.jpg" />
          </div>
          <div>
            <img src="public/images/Coffee 3.webp" />
          </div>
          <div>
            <img src="public/images/Coffee 4.jpg" />
          </div>
          <div>
            <img src="public/images/Coffee 4.webp" />
          </div>
          <div>
            <img src="public/images/Coffee 5.webp" />
          </div>
          <div>
            <img src="public/images/Coffee 6.webp" />
          </div>
          <div>
            <img src="public/images/Coffee 7.webp" />
          </div>
          <div>
            <img src="public/images/Coffee 8.webp" />
          </div>
          <div>
            <img src="public/images/Coffee.jpg" />
          </div>
          <div>
            <img src="public/images/Coffee.png" className="!w-[30%] !h-[40%]" />
          </div>
          <div>
            <img
              src="public/images/Coffee.webp"
              className="!w-[50%] !h-[50%]"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Images;
