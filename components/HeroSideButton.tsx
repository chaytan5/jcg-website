"use client";
import Image from "next/image";
import jcgLogo from "@/assets/icons/jcg-logo.svg";
import { useState } from "react";
import { SignUpDialog } from "./SignUpDialog";
import { AskQuestionDialog } from "./AskQuestionDialog";

const HeroSideButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="dark-gray-gradient fixed bottom-10 right-10 z-[999] hidden cursor-pointer place-items-center rounded-full border-[10px] border-neutral-800 p-5 shadow-hero-button transition-all hover:scale-110 xl:grid"
      >
        <Image src={jcgLogo} alt="James Crypto Guru" />
      </div>

      {open ? (
        <>
          <AskQuestionDialog>
            <div className="dark-gray-gradient fixed bottom-40 right-[60px] z-[999] hidden h-[70px] w-[70px] cursor-pointer place-items-center rounded-full border border-lightYellow/40 p-3 text-center text-[10px] font-bold text-lightYellow shadow-hero-button xl:grid">
              Ask a question
            </div>
          </AskQuestionDialog>
          <SignUpDialog>
            <div className="dark-gray-gradient fixed bottom-60 right-[60px] z-[999] hidden h-[70px] w-[70px] cursor-pointer place-items-center rounded-full border border-lightYellow/40 p-3 text-center text-[10px] font-bold text-lightYellow shadow-hero-button xl:grid">
              Sign up for the course
            </div>
          </SignUpDialog>
        </>
      ) : null}
    </>
  );
};

export default HeroSideButton;
