import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const Wiki = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef();
  const wiki = [
    {
      foto: "/photo_team/farrel_amroe.png",
      nama: "Farrel Amroe Azhari",
      jurusan: "Computer Science 2021",
    },
  ];
  return (
    <>
      <div className="w-screen bg-white h-full relative overflow-hidden z-[100]">
        <Image
          src="/assets/up.svg"
          width={50}
          height={50}
          className={`left-4 -rotate-90 top-[50%]  absolute z-40 hidden lg:block hover:cursor-pointer ${
            swiperIndex == 0 ? "opacity-50" : ""
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <p className="font-montserrat text-6xl text-primary-300  lg:mt-12 lg:ml-12 text-center lg:text-start ">
          Wiki
        </p>
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
          className="my-6 h-[75%] mx-12"
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          // effect="coverflow"
          coverflowEffect={{
            scale: 0,
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          // autoplay={{
          //   delay: 2500,
          // }}
          direction="horizontal"
          centeredSlides={true}
          breakpoints={{
            640: {
              coverflowEffect: {
                scale: 1,
                rotate: 0,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              },
              direction: "horizontal",
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: true,
            },
            1024: {
              coverflowEffect: {
                scale: 1,
                rotate: 0,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              },
              direction: "horizontal",
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: true,
            },
          }}>
          {wiki.map(({ nama, jurusan, foto }, i) => {
            return (
              <div className="h-full w-full relative overflow-hidden bg-white">
                <SwiperSlide className=" h-fit font-poppins text-center text-2xl w-fit">
                  <Image
                    src={foto}
                    alt=""
                    width={200}
                    height={200}
                    className="block mx-auto rounded-xl w-fit mb-6 shadow-xl"
                  />
                  <p>{nama}</p>
                  <p>{jurusan}</p>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
        <Image
          src="/assets/up.svg"
          width={50}
          height={50}
          className={`right-4 rotate-90 top-[50%]  absolute z-40 hidden lg:block hover:cursor-pointer ${
            swiperIndex == 0 ? "opacity-50" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </>
  );
};

export default Wiki;
