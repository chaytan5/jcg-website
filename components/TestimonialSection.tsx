"use client";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl space-y-10">
      <div className="space-y-2 text-center">
        <h2 className="md:yellow-gradient-text py-2 text-center text-[42px] font-bold text-white md:text-5xl ">
          Testimonials
        </h2>
        <h5 className="hidden text-2xl md:block">
          Hear from those who have experienced James&apos; courses
        </h5>
      </div>
      {/* <div className="grid grid-cols-3 gap-8">
            <Image src={testimonialOne} alt="" />
            <Image src={testimonialTwo} alt="" />
            <Image src={testimonialThree} alt="" />
          </div> */}

      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialSection;
