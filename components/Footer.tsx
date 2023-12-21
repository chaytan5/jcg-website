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
        <div className="flex flex-wrap items-stretch justify-between pb-32">
          <div className="max-w-64 space-y-4">
            <Image src={jcgLogo} alt="JCG logo" />

            <p className="text-balance text-lg">
              Activate your Millionaire Mindset with Expert Guidance{" "}
            </p>
          </div>

          <div className="space-y-5">
            <h6 className="yellow-gradient-text text-lg font-bold">
              Navigation
            </h6>
            <ul className="text-footer space-y-4 font-medium">
              <li>About James</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>Trailer</li>
              <li>Topics</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h6 className="yellow-gradient-text text-lg font-bold">For you</h6>
            <ul className="text-footer space-y-4 font-medium">
              <li>Main Page</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div className="max-w-xl ">
            <div className="flex h-full flex-col justify-between ">
              <div className="space-y-5">
                <h6 className="yellow-gradient-text text-lg font-bold">
                  Subscribe to newsletters
                </h6>

                <div className="flex items-center gap-6">
                  <input
                    className="bg-lightGray/10 flex-grow rounded-xl border border-white/30 bg-gradient-to-r  px-5 py-[10px] text-base placeholder:text-white/40"
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
              <div className="flex gap-5 text-2xl text-white/50">
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

        <div className="pt-16 text-center">
          <p className="text-secondary text-sm font-medium">
            &copy; 2023 James Crypto Guru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
