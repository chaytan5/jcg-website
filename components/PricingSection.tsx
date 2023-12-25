import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import lightPackage from "@/assets/images/light-package.png";
import mediumPackage from "@/assets/images/medium-package.png";
import vipPackage from "@/assets/images/vip-package.png";
import { SignUpDialog } from "./SignUpDialog";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32"
    >
      <div className="space-y-[60px]">
        <h2 className="md:yellow-gradient-text py-2 text-center text-[42px] font-bold text-white md:text-5xl">
          Pricing
        </h2>

        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-t-4xl">
            <div className="relative h-[90px] w-full">
              <Image
                src={lightPackage}
                alt="Light package"
                className="h-full rounded-t-4xl object-cover"
              />

              <p className="absolute bottom-5 left-5 text-[26px] font-bold tracking-wider drop-shadow">
                Light package
              </p>
            </div>
            <div className="gray-gradient space-y-[30px] rounded-b-4xl px-[30px] pb-[30px] pt-10">
              <div>
                <h3 className="yellow-gradient-text text-[30px] font-bold">
                  <span className="pr-px align-super text-lg">$</span>333
                </h3>
              </div>
              <div>
                <ul className="list-outside list-disc text-balance pl-4 text-base">
                  <li className="">
                    <span className="yellow-gradient-text font-bold">
                      Comprehensive Learning:
                    </span>{" "}
                    Access to all 11 meticulously crafted lessons.
                  </li>
                  <li>
                    <span className="yellow-gradient-text font-bold">
                      In-Depth Study Aids:
                    </span>{" "}
                    Detailed PDF notes accompanying each lesson for easy
                    reference and review. Unrestricted
                  </li>
                  <li>
                    <span className="yellow-gradient-text font-bold">
                      Course Access:
                    </span>{" "}
                    Lifetime access to the course, allowing for flexible
                    learning at your own pace.
                  </li>
                  <li>
                    <span className="yellow-gradient-text font-bold">
                      Continuous Learning:
                    </span>{" "}
                    Benefit from all future updates and enhancements to the
                    course, ensuring you stay abreast of the latest insights.
                  </li>
                </ul>
              </div>
              <div>
                <SignUpDialog packageSelected="light">
                  <button className="yellow-gradient-bg grid w-full  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                    <div className="flex items-center gap-[10px] px-6 py-3">
                      <p>Sign up for the course</p>
                      <LuArrowUpRight size={18} className="text-primary" />
                    </div>
                  </button>
                </SignUpDialog>
              </div>
            </div>
          </div>
          <div className="rounded-t-4xl">
            <div className="relative h-[90px] w-full">
              <Image
                src={mediumPackage}
                alt="Medium package"
                className="h-full rounded-t-4xl object-cover opacity-70"
              />
              <p className="absolute bottom-5 left-5 text-[26px] font-bold tracking-wider drop-shadow">
                Medium package
              </p>
            </div>
            <div className="gray-gradient space-y-[30px] rounded-b-4xl px-[30px] pb-[30px] pt-10">
              <div>
                <h3 className="yellow-gradient-text text-[30px] font-bold">
                  <span className="pr-px align-super text-lg">$</span>799
                </h3>
              </div>
              <div className="space-y-2">
                <ul className="list-outside list-disc text-balance pl-4 text-base">
                  <li>
                    Get everything from{" "}
                    <span className="font-extrabold">the Light package</span>{" "}
                    for a more comprehensive learning experience.
                  </li>
                </ul>

                <p className="text-base ">
                  <span className="yellow-gradient-text font-bold">
                    + Advanced Trading Tool:
                  </span>{" "}
                  Gain access to the powerful CG trading bot equipped with
                  Buy/Sell indicators, enhancing your trading strategy.
                </p>

                <p>
                  <span className="yellow-gradient-text font-bold">
                    + Additional Savings:
                  </span>{" "}
                  Receive a 20% discount on other courses offered by James,
                  expanding your learning opportunities.
                </p>
              </div>
              <div>
                <SignUpDialog packageSelected="medium">
                  <button className="yellow-gradient-bg grid w-full  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                    <div className="flex items-center gap-[10px] px-6 py-3">
                      <p>Sign up for the course</p>
                      <LuArrowUpRight size={18} className="text-primary" />
                    </div>
                  </button>
                </SignUpDialog>
              </div>
            </div>
          </div>
          <div className="rounded-t-4xl">
            <div className="relative h-[90px] w-full">
              <Image
                src={vipPackage}
                alt="Medium package"
                className="h-full rounded-t-4xl object-cover"
              />
              <p className="absolute bottom-5 left-5 text-[26px] font-bold tracking-wider drop-shadow">
                VIP package
              </p>
            </div>
            <div className="gray-gradient space-y-[30px] rounded-b-4xl px-[30px] pb-[30px] pt-10">
              <div>
                <h3 className="yellow-gradient-text text-[30px] font-bold">
                  <span className="pr-px align-super text-lg">$</span>
                  {Number(3000).toLocaleString("en", { useGrouping: true })}
                </h3>
              </div>
              <div className="space-y-2">
                <ul className="list-outside list-disc text-balance pl-4 text-base">
                  <li>
                    All features of ,
                    <span className="font-extrabold">
                      the Light and Medium packages included,
                    </span>{" "}
                    for the most extensive and enriching experience.
                  </li>
                </ul>

                <p className="text-base ">
                  <span className="yellow-gradient-text font-bold">
                    + Personalized Guidance:
                  </span>{" "}
                  A 15-minute one-on-one call with James, providing personalized
                  advice and insights.
                </p>

                <p>
                  <span className="yellow-gradient-text font-bold">
                    + Exclusive Group Sessions:
                  </span>{" "}
                  Participate in two group Mastermind ZOOM sessions led by
                  James, offering a collaborative and interactive learning
                  environment.
                </p>
              </div>
              <div>
                <SignUpDialog packageSelected="vip">
                  <button className="yellow-gradient-bg grid w-full  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                    <div className="flex items-center gap-[10px] px-6 py-3">
                      <p>Sign up for the course</p>
                      <LuArrowUpRight size={18} className="text-primary" />
                    </div>
                  </button>
                </SignUpDialog>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link
            href={"https://jamescryptoguru.gumroad.com/"}
            target="_blank"
            className="mx-auto flex w-fit items-center gap-4 p-2"
            rel="noreferrer noopener"
          >
            <p className="yellow-gradient-text text-lg font-medium">
              James&apos; Other Courses
            </p>
            <LuArrowUpRight size={18} className="text-darkYellow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
