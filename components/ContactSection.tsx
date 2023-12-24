import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import artBg from "@/assets/images/art-bg.png";
import ContactForm from "./ContactForm";

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
                      className="yellow-gradient-text text-sm font-semibold sm:text-base md:text-lg"
                    >
                      contact@jamescryptoguru.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-4xl bg-gradient-to-r from-[#191A1B] to-[#131415] p-7 md:px-10 md:py-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
