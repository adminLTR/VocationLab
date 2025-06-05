import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Autoplay, FreeMode } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface CardProps {
    profilePhotoUrl: string,
    name: string,
    username: string,
    comment: string,
}
function Card({ profilePhotoUrl, name, username, comment }: CardProps) {
  return (
    <div className="rounded-3xl font-inter text-black w-[326px] p-4 bg-gradient-to-tr bg-red-100">
      <img src={profilePhotoUrl} alt="Usuario" className="block m-auto mb-2" width={50} />
      <div className="text-center">
        <p className="font-bold text-[18px]">{name}</p>
        <p className="text-[10px]">{username}</p>
        <p className="text-[13px] my-4">{comment}</p>
        <p className="text-[20px] text-[#BDCFE2] shadow rounded-full w-[30px] m-auto">
          <i className="fa-solid fa-quote-left"></i>
        </p>
      </div>
    </div>
  );
}

interface SliderProps {
    data: CardProps[]
}
export default function Slider({ data }: SliderProps) {
  const [firstData, setFirstData] = useState<CardProps[]>([]);
  const [secondData, setSecondData] = useState<CardProps[]>([]);

  useEffect(() => {
    const half = Math.ceil(data.length / 2);
    setFirstData(data.slice(0, half));
    setSecondData(data.slice(half));
  }, [data]);

  const swiperSettings = {
    slidesPerView: "auto" as const,
    spaceBetween: 20,
    loop: true,
    // freeMode: true,
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
    simulateTouch: false,
    modules: [Autoplay, FreeMode],
    className: "mySwiper",
  };

  return (
    <div className="overflow-hidden">
      {/* Primera fila */}
      <Swiper {...swiperSettings}>
        {firstData.map((user, index) => (
          <SwiperSlide key={index} className="!w-[326px]">
            <Card {...user} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Segunda fila (intercalada visualmente) */}
      <Swiper {...swiperSettings}  className="mySwiper">
        {secondData.map((user, index) => (
          <SwiperSlide key={index} className="!w-[326px] translate-x-[100px] my-4">
            <Card {...user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}