"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import t1 from "@/assets/images/testimonials/testimonial-1.png";
import t2 from "@/assets/images/testimonials/testimonial-2.png";
import t3 from "@/assets/images/testimonials/testimonial-3.png";
import t4 from "@/assets/images/testimonials/testimonial-4.png";
import t5 from "@/assets/images/testimonials/testimonial-5.png";
import t6 from "@/assets/images/testimonials/testimonial-6.png";
import t7 from "@/assets/images/testimonials/testimonial-7.png";
import t8 from "@/assets/images/testimonials/testimonial-8.png";
import t9 from "@/assets/images/testimonials/testimonial-9.png";
import t10 from "@/assets/images/testimonials/testimonial-10.png";
import t11 from "@/assets/images/testimonials/testimonial-11.png";
import Image from "next/image";
import { CustomDot } from "./ReviewSection";

const TestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      minimumTouchDrag={80}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass=""
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass=""
      itemClass=""
      customDot={<CustomDot />}
    >
      <Image
        priority
        src={t1}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t2}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t3}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t4}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t5}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t6}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t7}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t8}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t9}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t10}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
      <Image
        priority
        src={t11}
        alt="Testimonial"
        className="drag-none cursor-grab select-none"
      />
    </Carousel>
  );
};

export default TestimonialCarousel;
