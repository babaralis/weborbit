"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Swiper CSS – yahan import kar lo taake sure ho ke styles aa rahe hain
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    logoInitial: "G",
    companyName: "GrowthMetrics",
    companyTagline: "B2B Analytics Platform",
    quote:
      "Before working with Webs Orbit our site looked fine but did nothing. Now it's a core part of our sales process—and our team actually loves using it.",
    person: "Marcus Thompson",
    role: "CEO",
  },
  {
    id: 2,
    logoInitial: "R",
    companyName: "RevenuePilot",
    companyTagline: "SaaS Growth Studio",
    quote:
      "Webs Orbit turned our brochure site into a real sales engine. Demo bookings went up and the messaging finally matches what we actually do.",
    person: "Elena Rodriguez",
    role: "Head of Marketing",
  },
  {
    id: 3,
    logoInitial: "D",
    companyName: "DataStride",
    companyTagline: "Customer Intelligence Suite",
    quote:
      "We used to treat the website like a checkbox. Now it's our best-performing channel. The structure, copy, and flow just make sense.",
    person: "James Carter",
    role: "Co-Founder",
  },
];

export const FinalTestimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="dark-section text-white py-16 md:py-20">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <Swiper
            className="testimonial-swiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000, // normal speed
              disableOnInteraction: false,
            }}
            speed={600}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {item.logoInitial}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{item.companyName}</p>
                    <p className="text-white/60 text-sm">
                      {item.companyTagline}
                    </p>
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 italic mb-6">
                  "{item.quote}"
                </blockquote>

                <p className="text-white/60">
                  — {item.person}, {item.role} at {item.companyName}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows: sirf desktop + iPad Pro (lg and up) */}
          <div className="mt-8 hidden lg:flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/30 hover:bg-white/10 transition"
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white text-sm"
              />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/30 hover:bg-white/10 transition"
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white text-sm"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
