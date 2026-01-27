import useProducts from "../../hooks/useProducts.js";
import SecHeading from "../atoms/SecHeading.jsx";
import BestSellingProduct from "../molecules/BestSellingProduct.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BestSellingSec() {
  const { data: bestSellers, error } = useProducts("", true, true);

  if (error) console.error(error);

  const products = bestSellers || [];

  return (
    <section className="px-4 md:px-16 mx-auto py-16 relative z-0" dir="rtl">
      {/* Sec Title */}
      <SecHeading>الأكثر مبيعاً</SecHeading>
      <div className="flex justify-between items-center mb-4 px-4 ">
        {/* Swiper Navigation */}
        <div className="hidden md:flex gap-2">{/* Next Button */}</div>
      </div>

      <div className=" p-2 w-full  ">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={6} // Space between each slide
          slidesPerView={1} // Number of slides per view
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // Small Screen & Mobile
            0: {
              slidesPerView: 1.2, // Number of slides per view
            },
            // Large Mobile & Tablet
            500: {
              slidesPerView: 2,
            },
            // Medium Screen
            992: {
              slidesPerView: 3,
            },
            // Large Screen
            1200: {
              slidesPerView: 4,
            },
          }}
          className="best-seller-swiper cursor-grab " // For Pagination
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="py-12 px-4">
                {" "}
                <BestSellingProduct
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.main_image}
                  description={product.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f9f9f9 !important;
          background: #5e3b37;
          width: 38px !important;
          height: 38px !important;
          padding: 8px !important;
          border-radius: 50%;
          box-shadow: 0 0px 11px rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-horizontal.swiper-pagination-bullets {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet-active {
          background: #8d6e63 !important;
        }
      `}</style>
    </section>
  );
}

export default BestSellingSec;
