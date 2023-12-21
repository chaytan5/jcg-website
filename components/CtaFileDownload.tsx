import Link from "next/link";
import React from "react";
import { LuFileText } from "react-icons/lu";

const CtaFileDownload = () => {
  return (
    <div className="rounded-4xl mx-auto grid w-11/12 max-w-[1050px] grid-cols-1 place-items-center overflow-hidden sm:grid-cols-2 ">
      <div className="space-y-[10px] bg-[#F2B833] px-8 py-8 lg:pl-[70px] lg:pr-[50px]">
        <h3 className="text-balance text-4xl font-bold">
          <span className="text-primary">Wait!</span> Before you go ... get your
          free PDF file!
        </h3>
        <p className="text-primary text-xl font-medium">
          Learn the first three steps James would take if he lost all his money!
        </p>
      </div>
      <div className="yellow-gradient-bg grid h-full w-full place-items-center ">
        <div className="space-y-5 px-8 py-8 lg:pl-[50px] lg:pr-[70px] ">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="border-secondary text-secondary placeholder:text-secondary w-full rounded-lg border bg-white/80 px-5 py-[10px]"
          />

          <div className="flex flex-wrap items-center gap-[14px]">
            <button className="bg-primary grid place-items-center whitespace-nowrap rounded-full text-sm font-medium text-white ">
              <Link
                href={"/"}
                className="flex items-center gap-[10px] px-6 py-3"
              >
                <p>Get free pdf</p>
                <LuFileText size={18} className="text-white" />
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
      </div>
    </div>
  );
};

export default CtaFileDownload;
