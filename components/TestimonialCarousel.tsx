"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonialOne from "@/assets/images/testimonial-1.png";
import testimonialTwo from "@/assets/images/testimonial-2.png";
import testimonialThree from "@/assets/images/testimonial-3.png";
import Image from "next/image";

const TestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass=" "
      itemClass=""
    >
      <Image src={testimonialOne} alt="" />
      <Image src={testimonialTwo} alt="" />
      <Image src={testimonialThree} alt="" />
      <Image src={testimonialTwo} alt="" />
      <Image src={testimonialOne} alt="" />
      <Image src={testimonialThree} alt="" />
      {/* <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div> */}
    </Carousel>
  );
};

export default TestimonialCarousel;
