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
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 50, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass=""
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass=""
      itemClass=""
      partialVisible
      customDot={<CustomDot />}
    >
      <Image src={t1} alt="Testimonial" />
      <Image src={t2} alt="Testimonial" />
      <Image src={t3} alt="Testimonial" />
      <Image src={t4} alt="Testimonial" />
      <Image src={t5} alt="Testimonial" />
      <Image src={t6} alt="Testimonial" />
      <Image src={t7} alt="Testimonial" />
      <Image src={t8} alt="Testimonial" />
      <Image src={t9} alt="Testimonial" />
      <Image src={t10} alt="Testimonial" />
      <Image src={t11} alt="Testimonial" />
    </Carousel>
  );
};

export default TestimonialCarousel;
