"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamSlider({ teamMembers = [] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-2xl font-normal text-gray-600 uppercase tracking-widest block mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gray-600">
            Our Awesome Team
          </span>
          <h3 className="text-6xl font-light text-gray-700 uppercase tracking-widest">
            MEET OUR TEAM
          </h3>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".team-swiper-button-prev",
              nextEl: ".team-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".team-swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="text-center group px-4">
                  <div className="relative overflow-hidden mb-6 rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={360}
                      height={470}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors duration-300"
                    >
                      {member.name}
                    </a>
                  </h4>
                  <span className="text-gray-600 uppercase tracking-widest text-sm font-bold">
                    {member.role}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="team-swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="team-swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Custom Pagination Dots */}
          <div className="team-swiper-pagination flex justify-center space-x-3 mt-8"></div>
        </div>
      </div>
    </section>
  );
}
