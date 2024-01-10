import Image from "next/image";
import Link from "next/link";
import gumroadIcon from "@/assets/icons/gumroad-icon.svg";
import jamesPortrait from "@/assets/images/james-new.png";
import img1 from "@/assets/images/jamesGallery/img1.png";
import img2 from "@/assets/images/jamesGallery/img2.png";
import img3 from "@/assets/images/jamesGallery/img3.png";
import img4 from "@/assets/images/jamesGallery/img4.png";
import img5 from "@/assets/images/jamesGallery/img5.png";
import img6 from "@/assets/images/jamesGallery/img6.png";
import img7 from "@/assets/images/jamesGallery/img7.png";
import img8 from "@/assets/images/jamesGallery/img8.png";
import img9 from "@/assets/images/jamesGallery/img9.png";
import img10 from "@/assets/images/jamesGallery/img10.png";
import img11 from "@/assets/images/jamesGallery/img11.png";
import { LuArrowUpRight } from "react-icons/lu";

const JamesInfoSection = () => {
  return (
    <section
      className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32"
      id="about-james"
    >
      <h2 className="block pb-20 text-center text-[42px] font-bold lg:hidden">
        Who is James?
      </h2>
      <div className="flex">
        <div className="hidden w-[40%] flex-shrink-0 space-y-8 pb-10 lg:block">
          <div className="flex items-center gap-2">
            <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
              International Speaker
            </div>
            <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
              Investor
            </div>
            <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
              Entrepreneur
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="yellow-gradient-text text-6xl font-bold">
              Who is James?
            </h2>
            <p className="w-11/12 max-w-md text-balance text-lg">
              James is a versatile industry veteran with 18 years of business
              and investing expertise. As a semi-retired multi-millionaire, his
              impeccable knowledge, analysis, and predictions of the crypto and
              stock markets set him apart. He has a remarkable track record in
              daily Bitcoin price prediction on YouTube, making him a trusted
              professional in the field. Join James for valuable insights and
              stay ahead of the market trends.
            </p>
          </div>

          <div>
            <button className="yellow-gradient-bg grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
              <Link
                href={"https://jamescryptoguru.gumroad.com/"}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-6 py-3"
              >
                <p>All courses on</p>
                <Image src={gumroadIcon} className="w-28" alt="Gumroad" />
              </Link>
            </button>
          </div>
        </div>
        <div className="relative left-0 top-0 w-1/2 flex-grow py-8  lg:-left-16 lg:w-auto lg:py-0 ">
          <div
            style={{ writingMode: "vertical-rl" }}
            className="absolute right-10 top-0 z-0 h-full select-none bg-gradient-to-l from-gray-300/80 to-gray-300/10 bg-clip-text text-8xl font-semibold uppercase tracking-tighter text-transparent opacity-40 md:bg-gradient-to-b md:from-secondary md:to-transparent md:to-60% lg:top-2"
          >
            JAMES
          </div>
          <Image
            className="absolute bottom-0 right-0 z-10 w-full min-w-[350px] md:right-[10%] lg:left-0 lg:max-w-[450px]"
            src={jamesPortrait}
            alt="James Crypto Guru"
          />
        </div>
        <div className="flex w-1/2 flex-shrink-0 flex-grow-0 flex-col divide-y divide-white/40 self-end py-10  text-lg lg:w-[20%] lg:pb-10">
          <div className="pb-[30px]">
            <span className="yellow-gradient-text font-bold">
              Top-rated YouTube analyst
            </span>{" "}
            whose content provides people with tips and tricks on how to become
            successful and profitable traders.
          </div>
          <div className="pt-[30px]">
            With over{" "}
            <span className="yellow-gradient-text font-bold">6,000+</span>
            students worldwide,{" "}
            <span className="yellow-gradient-text font-bold">
              James Crypto Guru
            </span>{" "}
            Academy is the Premier Educational Platform for Crypto Enthusiasts.
          </div>
        </div>
      </div>
      <div className="block space-y-8 pb-[60px] lg:hidden">
        <div className="flex flex-wrap items-center  gap-2 pt-10 sm:justify-center">
          <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
            International Speaker
          </div>
          <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
            Investor
          </div>
          <div className="whitespace-nowrap rounded-full bg-lightYellow/10 px-4 py-1 text-secondary">
            Entrepreneur
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-balance text-left text-base sm:text-center">
          James is a versatile industry veteran with 18 years of business and
          investing expertise. As a semi-retired multi-millionaire, his
          impeccable knowledge, analysis, and predictions of the crypto and
          stock markets set him apart. He has a remarkable track record in daily
          Bitcoin price prediction on YouTube, making him a trusted professional
          in the field. Join James for valuable insights and stay ahead of the
          market trends.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="yellow-gradient-bg grid place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
            <Link
              href={"https://jamescryptoguru.gumroad.com/"}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-6 py-3"
            >
              <p>Buy on</p>
              <Image src={gumroadIcon} className="w-20" alt="Gumroad" />
            </Link>
          </button>
          <button className=" grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
            <Link
              href={"#trailer"}
              className="yellow-gradient-text flex items-center gap-2 "
            >
              <p>More Information</p>
              <LuArrowUpRight className="text-secondary" />
            </Link>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute hidden h-full  w-full bg-gradient-to-b from-primary via-transparent to-primary lg:block "></div>
        <div className=" grid grid-cols-3 gap-[10px] lg:grid-cols-4 lg:gap-[30px]">
          <div className="flex flex-col gap-[10px] lg:gap-[30px]">
            <Image src={img1} alt="James Crypto Guru" placeholder="blur" />
            <Image src={img2} alt="James Crypto Guru" placeholder="blur" />
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[30px]">
            <Image src={img3} alt="James Crypto Guru" placeholder="blur" />
            <Image
              src={img4}
              alt="James Crypto Guru"
              placeholder="blur"
              className="hidden lg:block"
            />
            <Image
              src={img5}
              alt="James Crypto Guru"
              placeholder="blur"
              className="hidden lg:block"
            />

            <Image
              src={img10}
              alt="James Crypto Guru"
              placeholder="blur"
              className="block lg:hidden"
            />
            <Image
              src={img11}
              alt="James Crypto Guru"
              placeholder="blur"
              className="block lg:hidden"
            />
            <Image
              src={img9}
              alt="James Crypto Guru"
              placeholder="blur"
              className="block lg:hidden"
            />
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[30px]">
            <Image src={img6} alt="James Crypto Guru" placeholder="blur" />
            <Image src={img7} alt="James Crypto Guru" placeholder="blur" />
          </div>
          <div className="hidden flex-col gap-[10px] lg:flex lg:gap-[30px]">
            <Image src={img8} alt="James Crypto Guru" placeholder="blur" />
            <Image src={img9} alt="James Crypto Guru" placeholder="blur" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JamesInfoSection;
