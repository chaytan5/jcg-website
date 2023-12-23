"use client";
import Image from "next/image";
import reviewImg from "@/assets/images/james-speaking.png";
import reviewIcon from "@/assets/icons/review.svg";
import useMatchMedia from "@/hooks/useMediaQuery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CustomDot = ({ onClick, active, index, carouselState }: any) => {
  const { currentSlide } = carouselState;
  return (
    <li
      className={`mr-1 h-[2px] cursor-pointer transition-all ${
        active ? "bg-secondary w-6" : "w-4 bg-white"
      }`}
      onClick={() => onClick()}
    ></li>
  );
};

const ReviewSection = () => {
  const isMobile = useMatchMedia(640);

  const responsive = {
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="relative mx-auto w-11/12 max-w-screen-xl ">
      {isMobile ? (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          customDot={<CustomDot />}
          infinite={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="w-full h-[320px]"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass=""
          itemClass="px-2"
        >
          <div className="gray-gradient drag-none mx-auto w-full max-w-3xl cursor-grab  select-none rounded-3xl xl:mx-0">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  James is an{" "}
                  <span className="yellow-gradient-text">
                    18-year industry veteran
                  </span>{" "}
                  with a diverse background in business and investing.
                </h6>
                <p className="text-sm md:text-base">Newsinsider.com</p>
              </div>
            </div>
          </div>
          <div className="gray-gradient mx-auto w-full  max-w-3xl rounded-3xl xl:mx-0 2xl:mx-auto">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  A multi-millionaire with{" "}
                  <span className="yellow-gradient-text">
                    unequaled knowledge of the cryptocurrency and stock markets
                  </span>{" "}
                  who is semi-retired.
                </h6>
                <p className="text-sm md:text-base">Bitcoinist.com</p>
              </div>
            </div>
          </div>
          <div className="gray-gradient mx-auto w-full max-w-3xl rounded-3xl xl:mx-0 2xl:max-w-4xl">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  He is a{" "}
                  <span className="yellow-gradient-text">
                    well-known YouTube analyst and lecturer
                  </span>{" "}
                  who has a track record of{" "}
                  <span className="yellow-gradient-text">
                    correctly predicting daily Bitcoin prices.
                  </span>
                </h6>
                <p className="text-sm md:text-base">Investing.com</p>
              </div>
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="space-y-7">
          <div className="gray-gradient mx-auto w-full max-w-3xl rounded-3xl xl:mx-0">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  James is an{" "}
                  <span className="yellow-gradient-text">
                    18-year industry veteran
                  </span>{" "}
                  with a diverse background in business and investing.
                </h6>
                <p className="text-sm md:text-base">Newsinsider.com</p>
              </div>
            </div>
          </div>
          <div className="gray-gradient mx-auto w-full  max-w-3xl rounded-3xl xl:mx-0 2xl:mx-auto">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  A multi-millionaire with{" "}
                  <span className="yellow-gradient-text">
                    unequaled knowledge of the cryptocurrency and stock markets
                  </span>{" "}
                  who is semi-retired.
                </h6>
                <p className="text-sm md:text-base">Bitcoinist.com</p>
              </div>
            </div>
          </div>
          <div className="gray-gradient mx-auto w-full max-w-3xl rounded-3xl xl:mx-0 2xl:max-w-4xl">
            <div className="flex items-start gap-[22px] px-[30px] py-10 md:gap-7 md:px-9 md:py-12">
              <Image src={reviewIcon} alt="Review" />
              <div className="space-y-2">
                <h6 className="text-lg font-bold md:text-[22px]">
                  He is a{" "}
                  <span className="yellow-gradient-text">
                    well-known YouTube analyst and lecturer
                  </span>{" "}
                  who has a track record of{" "}
                  <span className="yellow-gradient-text">
                    correctly predicting daily Bitcoin prices.
                  </span>
                </h6>
                <p className="text-sm md:text-base">Investing.com</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="-right-10 bottom-0 hidden w-full max-w-md xl:absolute xl:block">
        <Image src={reviewImg} alt="James Crypto Guru" />
      </div>
    </section>
  );
};

export default ReviewSection;
