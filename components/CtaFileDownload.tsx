import Link from "next/link";
import React from "react";
import { LuFileText } from "react-icons/lu";
import DownloadForm from "./DownloadForm";

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
        <DownloadForm />
      </div>
    </div>
  );
};

export default CtaFileDownload;
