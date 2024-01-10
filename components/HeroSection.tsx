import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import gumroadIcon from "@/assets/icons/gumroad-icon.svg";
import HeroSideButton from "./HeroSideButton";
import { SignUpDialog } from "./SignUpDialog";
import HeroForm from "./HeroForm";

const HeroSection = () => {
  return (
    <section className="relative" id="hero">
      <div className="-top-12 left-0 hidden w-full select-none place-items-center text-center uppercase md:absolute md:grid lg:-top-20">
        <p className="font-outline bg-gradient-to-b from-[#806322] to-transparent to-75% bg-clip-text text-[150px] font-bold tracking-tight text-primary lg:text-[240px]">
          Course
        </p>
      </div>
      <div className="relative z-10 mx-auto flex w-11/12 max-w-screen-xl flex-col items-stretch justify-between gap-12 md:pt-28 lg:flex-row">
        <HeroSideButton />

        <div className="w-full space-y-8 self-end lg:w-1/2 ">
          <div className="gray-gradient hidden w-fit items-center gap-4 divide-x-2 divide-dotted divide-white/30 rounded-xl bg-gradient-to-r px-6 py-2 lg:flex">
            <p className="bg-gradient-to-r from-lightYellow to-darkYellow bg-clip-text text-[40px] font-bold text-transparent">
              Starts in{" "}
            </p>
            <p className="pl-6 text-2xl font-medium">January 2024</p>
          </div>
          <h1 className="text-center text-5xl font-bold text-[#F2F2F2] md:text-left md:text-8xl">
            The Laws <br />
            <span className="bg-gradient-to-r from-lightYellow to-darkYellow bg-clip-text text-transparent">
              of Money
            </span>
          </h1>
          <h4 className="hidden text-balance text-left text-2xl md:block">
            <span className="font-bold">
              Unlock Your Financial Potential with James Crypto Guru
            </span>{" "}
            through wealth mindset, and personal growth. Discover the power of
            money to create a life of abundance
          </h4>

          {/* visible on tablet and mobile */}
          <h4 className="text-balance text-center text-xl md:hidden">
            Discover the power of money with JamesCG to create a life of
            abundance
          </h4>
          <div className="light-gray-gradient flex flex-col divide-y divide-dotted divide-white/30 rounded-4xl px-5 text-center md:hidden">
            <div className="grid grid-cols-2 place-items-center divide-x divide-dotted divide-white/30">
              <div className="my-5 space-y-2 pr-5">
                <h4 className=" yellow-gradient-text text-xl font-bold">
                  *10% discount
                </h4>
                <p className=" text-sm font-bold">
                  Exclusive 10% Discount for the First 50 Enrollees!
                </p>
              </div>
              <div className="my-5 space-y-2 pl-5">
                <h4 className="yellow-gradient-text text-xl font-bold">
                  11 lessons
                </h4>
                <p className="text-sm">
                  Instant access to all lessons covering diverse financial
                  topics
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 place-items-center divide-x divide-dotted divide-white/30">
              <div className="my-5 space-y-2 pr-5">
                <h4 className=" yellow-gradient-text text-xl font-bold">
                  PDF Summaries
                </h4>
                <p className="text-sm">
                  Convenient summaries in PDF format provided after each lesson
                </p>
              </div>
              <div className="my-5 space-y-2 pl-5">
                <h4 className="yellow-gradient-text text-xl font-bold">
                  Unlimited Access
                </h4>
                <p className="text-sm">
                  Lifetime access to all course materials, including video
                  content
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 md:hidden">
            <SignUpDialog>
              <button className="yellow-gradient-bg grid place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                <div className="flex items-center gap-2 px-4 py-3">
                  <p>Sign Up & Save 10%*</p>
                  <LuArrowUpRight size={18} />
                </div>
              </button>
            </SignUpDialog>

            <button className=" grid place-items-center rounded-full  text-sm font-medium text-primary ">
              <Link
                href={"#trailer"}
                className="yellow-gradient-text flex items-center gap-2 "
              >
                <p>More Information</p>
                <LuArrowUpRight className="text-secondary" />
              </Link>
            </button>
          </div>

          <HeroForm />
        </div>
        <div className="max-w-md self-center md:max-w-xl md:self-start md:pb-16 ">
          <Image src={heroImg} alt="James Crypto Guru" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
