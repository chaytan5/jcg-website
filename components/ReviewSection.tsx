import Image from "next/image";
import reviewImg from "@/assets/images/james-speaking.png";
import reviewIcon from "@/assets/icons/review.svg";

const ReviewSection = () => {
  return (
    <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-7">
      <div className="gray-gradient mx-auto w-full max-w-3xl rounded-3xl xl:mx-0">
        <div className="flex items-start gap-7 px-9 py-12">
          <Image src={reviewIcon} alt="Review" />
          <div className="space-y-2">
            <h6 className="text-[22px] font-bold">
              James is an{" "}
              <span className="yellow-gradient-text">
                18-year industry veteran
              </span>{" "}
              with a diverse background in business and investing.
            </h6>
            <p>Newsinsider.com</p>
          </div>
        </div>
      </div>
      <div className="gray-gradient mx-auto w-full  max-w-3xl rounded-3xl xl:mx-0 2xl:mx-auto">
        <div className="flex items-start gap-7 px-9 py-12">
          <Image src={reviewIcon} alt="Review" />
          <div className="space-y-2">
            <h6 className="text-[22px] font-bold">
              A multi-millionaire with{" "}
              <span className="yellow-gradient-text">
                unequaled knowledge of the cryptocurrency and stock markets
              </span>{" "}
              who is semi-retired.
            </h6>
            <p>Bitcoinist.com</p>
          </div>
        </div>
      </div>
      <div className="gray-gradient mx-auto w-full  max-w-3xl rounded-3xl xl:mx-0 2xl:max-w-4xl">
        <div className="flex items-start gap-7 px-9 py-12">
          <Image src={reviewIcon} alt="Review" />
          <div className="space-y-2">
            <h6 className="text-[22px] font-bold">
              He is a{" "}
              <span className="yellow-gradient-text">
                well-known YouTube analyst and lecturer
              </span>{" "}
              who has a track record of{" "}
              <span className="yellow-gradient-text">
                correctly predicting daily Bitcoin prices.
              </span>
            </h6>
            <p>Investing.com</p>
          </div>
        </div>
      </div>

      <div className="-right-10 bottom-0 hidden w-full max-w-md xl:absolute xl:block">
        <Image src={reviewImg} alt="James Crypto Guru" />
      </div>
    </section>
  );
};

export default ReviewSection;
