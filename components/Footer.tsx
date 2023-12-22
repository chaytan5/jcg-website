import Image from "next/image";
import Link from "next/link";
import jcgLogo from "@/assets/icons/jcg-logo.svg";
import {
  FaDiscord,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaPatreon,
  FaTelegram,
} from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary mx-auto w-11/12 max-w-screen-2xl text-white">
      <div className="pb-14 pt-28">
        <div className="flex flex-col flex-wrap items-center justify-center gap-10 pb-10 md:flex-row md:items-stretch md:justify-between md:pb-32">
          <div className="flex max-w-sm flex-col items-center  justify-between gap-4 pb-8 md:max-w-64 md:justify-normal">
            <Image src={jcgLogo} alt="JCG logo" />

            <p className="text-balance text-center text-lg md:text-left">
              Activate your Millionaire Mindset with Expert Guidance
            </p>
          </div>

          <div className="space-y-5">
            <h6 className="yellow-gradient-text text-center text-lg font-bold md:text-left">
              Navigation
            </h6>
            <ul className="text-footer flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium md:max-w-full">
              <li>About James</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>Trailer</li>
              <li>Topics</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h6 className="yellow-gradient-text text-center text-lg font-bold">
              For you
            </h6>
            <ul className="text-footer flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium md:max-w-full">
              <li>Main Page</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div className="max-w-xl ">
            <div className="flex h-full flex-col justify-between ">
              <div className=" flex flex-col justify-center gap-5 pt-8 md:pt-0">
                <h6 className="yellow-gradient-text text-center text-lg font-bold md:text-left">
                  Subscribe to newsletters
                </h6>

                <div className="flex flex-col items-center gap-5 md:flex-row md:gap-6">
                  <input
                    className=" light-gray-gradient w-full flex-grow rounded-xl border border-white/30  px-5 py-[10px] text-base placeholder:text-white/40"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="from-lightYellow to-darkYellow  text-primary grid place-items-center whitespace-nowrap rounded-full bg-gradient-to-r text-sm font-medium ">
                    <Link
                      href={"/"}
                      className="flex items-center gap-[10px] px-6 py-3"
                    >
                      <p>Subscribe</p>
                    </Link>
                  </button>
                </div>

                <p className="text-footer text-sm">
                  or via email:{" "}
                  <span className="text-secondary">
                    contact@jamescryptoguru.com
                  </span>
                </p>
              </div>
              <div className="flex gap-5 pt-10 text-2xl text-white/50 md:pt-0">
                <FaDiscord />
                <FaYoutube />
                <FaXTwitter />
                <FaInstagram />
                <FaPatreon />
                <MdOutlineAlternateEmail />
                <FaTelegram />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-footer h-px w-full opacity-50" />

        <div className="py-16 text-center md:pb-0">
          <p className="text-secondary text-sm font-medium">
            &copy; 2023 James Crypto Guru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
