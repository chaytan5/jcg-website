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
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <footer className="bg-primary mx-auto w-11/12 max-w-screen-2xl text-white">
      <div className="pb-14 pt-28">
        <div className="flex flex-col items-center justify-center  gap-10 pb-10 lg:flex-row lg:items-stretch lg:justify-between lg:pb-32">
          <div className="flex max-w-sm flex-col items-center justify-between gap-4 pb-8 lg:max-w-64 lg:items-start lg:justify-normal">
            <Image src={jcgLogo} alt="JCG logo" />

            <p className="text-balance text-center text-lg lg:text-left">
              Activate your Millionaire Mindset with Expert Guidance
            </p>
          </div>

          <div className="space-y-5 ">
            <h6 className="yellow-gradient-text text-center text-lg font-bold lg:text-left">
              Navigation
            </h6>
            <ul className="text-footer flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium lg:max-w-full lg:flex-col">
              <li>About James</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>Trailer</li>
              <li>Topics</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h6 className="yellow-gradient-text text-center text-lg font-bold lg:text-left">
              For you
            </h6>
            <ul className="text-footer flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium lg:max-w-full lg:flex-col">
              <li>Main Page</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div className="max-w-xl lg:max-w-2xl ">
            <div className="flex h-full flex-col justify-between ">
              <div className=" flex flex-col justify-center gap-5 pt-8 lg:pt-0">
                <h6 className="yellow-gradient-text text-center text-lg font-bold lg:text-left">
                  Subscribe to newsletters
                </h6>

                {/* <form>
                  <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-6">
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
                </form> */}

                <SubscribeForm />

                <p className="text-footer text-sm">
                  or via email:{" "}
                  <Link
                    href="mailto:contact@jamescryptoguru.com"
                    className="text-secondary"
                  >
                    contact@jamescryptoguru.com
                  </Link>
                </p>
              </div>
              <div className="flex justify-center gap-5 pt-10 text-2xl text-white/50 md:justify-normal lg:pt-0">
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

        <div className="py-16 text-center lg:pb-0">
          <p className="text-secondary text-sm font-medium">
            &copy; 2023 James Crypto Guru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
