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

const testimonials = [
  {
    id: 1,
    image: t4,
  },
  {
    id: 2,
    image: t10,
  },
  {
    id: 3,
    image: t9,
  },
  {
    id: 4,
    image: t11,
  },
  {
    id: 5,
    image: t1,
  },
  {
    id: 6,
    image: t2,
  },
  {
    id: 7,
    image: t3,
  },
  {
    id: 8,
    image: t5,
  },
  {
    id: 9,
    image: t6,
  },
  {
    id: 10,
    image: t7,
  },
  {
    id: 11,
    image: t8,
  },
];

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
      {testimonials.map((item) => (
        <Image
          key={item.id}
          priority
          src={item.image}
          alt="Testimonial"
          className="drag-none cursor-grab select-none"
        />
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
