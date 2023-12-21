import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import gumroadIcon from "@/assets/icons/gumroad-icon.svg";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="-top-12 left-0 hidden w-full place-items-center text-center uppercase md:absolute md:grid lg:-top-20">
        <p className="font-outline text-primary bg-gradient-to-b from-[#806322] to-transparent to-75% bg-clip-text text-[150px] font-bold tracking-tight lg:text-[240px]">
          Course
        </p>
      </div>
      <div className="relative z-10 mx-auto flex w-11/12 max-w-screen-xl flex-col items-stretch justify-between gap-12 md:pt-28 lg:flex-row">
        <div className="w-full space-y-8 self-end lg:w-1/2 ">
          <div className="gray-gradient hidden w-fit items-center gap-4 divide-x-2 divide-dotted divide-white/30 rounded-xl bg-gradient-to-r px-6 py-2 lg:flex">
            <p className="from-lightYellow to-darkYellow bg-gradient-to-r bg-clip-text text-[40px] font-bold text-transparent">
              Starts in{" "}
            </p>
            <p className="pl-6 text-2xl font-medium">January 2024</p>
          </div>
          <h1 className="text-center text-5xl font-bold text-[#F2F2F2] md:text-left md:text-8xl">
            The Laws <br />
            <span className="from-lightYellow to-darkYellow bg-gradient-to-r bg-clip-text text-transparent">
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
          <div className="light-gray-gradient rounded-4xl flex flex-col divide-y divide-dotted divide-white/30 px-5 text-center md:hidden">
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

          <div className="flex items-center justify-center gap-4 md:hidden">
            <button className="yellow-gradient-bg text-primary grid place-items-center whitespace-nowrap rounded-full text-sm font-medium ">
              <Link href={"/"} className="flex items-center gap-2 px-5 py-3">
                <p>Sign Up & Save 10%*</p>
                <LuArrowUpRight size={18} />
              </Link>
            </button>
            <button className=" text-primary  grid place-items-center whitespace-nowrap rounded-full text-sm font-medium ">
              <Link
                href={"/"}
                className="yellow-gradient-text flex items-center gap-2 "
              >
                <p>More Information</p>
                <LuArrowUpRight className="text-secondary" />
              </Link>
            </button>
          </div>

          <div className="hidden space-y-5 md:block">
            <div className="flex items-center gap-6">
              <input
                className="bg-lightGray/10 max-w-sm flex-grow rounded-xl border border-white/30 bg-gradient-to-r  px-5 py-[10px] text-base placeholder:text-white/40"
                type="email"
                placeholder="Enter your email"
              />
              <button className="from-lightYellow to-darkYellow  text-primary grid place-items-center whitespace-nowrap rounded-full bg-gradient-to-r text-sm font-medium ">
                <Link
                  href={"/"}
                  className="flex items-center gap-[10px] px-6 py-3"
                >
                  <p>Sign up for the course</p>
                  <LuArrowUpRight size={18} className="text-primary" />
                </Link>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="privacy policy"
                id="privacy-policy"
                className="border-darkYellow bg-gunmetal accent-darkYellow checked:bg-darkYellow checked:accent-darkYellow focus:text-darkYellow h-4 w-4 appearance-none rounded-full border "
              />
              <p>
                I agree with <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md self-center md:max-w-xl md:self-start md:pb-16 ">
          <Image className="" src={heroImg} alt="James Crypto Guru" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
