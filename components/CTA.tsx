import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import jamesPhoto from "@/assets/images/james-photo-2.png";
import CTAForm from "./CTAForm";

const CTA = () => {
  return (
    <div
      id="discount-deal"
      className="rounded-4xl bg-secondary relative mx-auto w-11/12 max-w-5xl scroll-mt-32  overflow-clip md:overflow-visible"
    >
      <div className="w-full space-y-5 px-8 pb-36 pt-8 md:w-1/2 md:py-8 md:pl-[70px]">
        <h2 className="text-5xl font-bold">Register Now for Early Access</h2>
        <p className="text-primary/50 text-base">
          Be among the first 50 to receive a{" "}
          <span className="text-primary text-lg font-bold">10% discount</span>
        </p>
        <CTAForm />
      </div>

      <div className="absolute -bottom-5 -right-8 z-10 ml-auto h-auto w-[280px] md:bottom-0 md:right-5 md:w-[380px] lg:w-[420px]">
        <Image src={jamesPhoto} alt="James Crypto Guru" />
      </div>
    </div>
  );
};

export default CTA;
