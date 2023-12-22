import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import artBg from "@/assets/images/art-bg.png";

const ContactSection = () => {
  return (
    <div className="relative md:pb-40">
      <div className="bottom-0 left-0 z-0 hidden xl:absolute xl:block">
        <Image src={artBg} alt="Background artwork" />
      </div>
      <section className="bg-contact-texture relative mx-auto w-11/12 max-w-screen-xl">
        <div className="relative z-10 space-y-16">
          <h2 className="text-center text-[42px] font-bold md:text-6xl">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            <div className="space-y-8">
              <h4 className="text-xl font-bold md:text-2xl">
                <span className="yellow-gradient-text">
                  Please use the following
                </span>{" "}
                contact information to get in touch:
              </h4>

              <div className="rounded-4xl bg-gradient-to-r from-[#191A1B] to-[#131415] p-7 md:px-10 md:py-8">
                <div className="flex items-center gap-4 sm:gap-[30px]">
                  <HiOutlineMailOpen className="text-lightYellow h-10 w-10 flex-shrink-0" />

                  <div>
                    <h4 className="text-xl font-bold md:text-2xl">Email</h4>
                    <Link
                      href="mailto:contact@jamescryptoguru.com"
                      className="yellow-gradient-text text-base font-semibold md:text-lg"
                    >
                      contact@jamescryptoguru.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-4xl bg-gradient-to-r from-[#191A1B] to-[#131415] p-7 md:px-10 md:py-8">
              <form className="space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="email-input">Email</label>
                    <input
                      type="email"
                      name="email-input"
                      id="email-input"
                      placeholder="Enter your email"
                      className="light-gray-gradient focus:ring-lightYellow focus-visible:ring-lightYellow rounded-[10px] border border-white/30 px-5 py-[10px] placeholder:text-white/40"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message..."
                      className="light-gray-gradient focus:ring-lightYellow focus-visible:ring-lightYellow min-h-24 rounded-[10px] border border-white/30 px-5 py-[10px] placeholder:text-white/40"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col-reverse items-center justify-center gap-7 sm:flex-row sm:justify-normal sm:gap-4">
                  <button className="yellow-gradient-bg text-primary grid place-items-center whitespace-nowrap rounded-full text-sm font-medium ">
                    <Link
                      href={"/"}
                      className="flex items-center gap-[10px] px-6 py-3"
                    >
                      <p>Send</p>
                      <LuArrowUpRight size={18} className="text-primary" />
                    </Link>
                  </button>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="privacy policy"
                      id="privacy-policy"
                      className="border-darkYellow bg-gunmetal accent-darkYellow checked:bg-darkYellow checked:accent-darkYellow focus:text-darkYellow h-4 w-4 appearance-none rounded-full border "
                    />
                    <p className="text-sm">
                      I agree with{" "}
                      <span className="underline">Privacy Policy</span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
