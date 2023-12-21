import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import jamesPhoto from "@/assets/images/james-photo-2.png";

const CTA = () => {
  return (
    <div className="rounded-4xl bg-secondary relative mx-auto w-11/12 max-w-5xl">
      <div className="w-1/2 space-y-5 py-8 pl-[70px]">
        <h2 className="text-5xl font-bold">Register Now for Early Access</h2>
        <p className="text-primary/50 text-base">
          Be among the first 50 to receive a{" "}
          <span className="text-primary text-lg font-bold">10% discount</span>
        </p>

        <input
          type="email"
          required
          placeholder="Enter your email"
          className="border-secondary text-secondary placeholder:text-secondary w-full rounded-lg border bg-white/80 px-5 py-[10px]"
        />

        <div className="flex items-center gap-[14px]">
          <button className="bg-primary grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-white ">
            <Link href={"/"} className="flex items-center gap-[10px] px-6 py-3">
              <p>Sign Up</p>
              <LuArrowUpRight size={18} className="text-white" />
            </Link>
          </button>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="privacy policy"
              id="privacy-policy"
              // checked
              className="h-4 w-4 appearance-none rounded-full bg-white/60 "
            />
            <p className="text-primary text-xs">
              I agree with <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-10 z-10 h-auto w-[420px]">
        <Image src={jamesPhoto} alt="James Crypto Guru" />
      </div>
    </div>
  );
};

export default CTA;
