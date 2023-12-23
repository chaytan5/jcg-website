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
        className="dark-gray-gradient shadow-hero-button absolute -right-10 bottom-0 z-20 hidden cursor-pointer place-items-center rounded-full border-[10px] border-neutral-800 p-5 transition-all hover:scale-110 xl:grid"
      >
        <Image src={jcgLogo} alt="James Crypto Guru" />
      </div>

      {open ? (
        <>
          <AskQuestionDialog>
            <div className="dark-gray-gradient shadow-hero-button border-lightYellow/40 text-lightYellow absolute -right-5 bottom-32 z-20 hidden h-[70px] w-[70px] cursor-pointer place-items-center rounded-full border p-3 text-center text-[10px] font-bold xl:grid">
              Ask a question
            </div>
          </AskQuestionDialog>
          <SignUpDialog>
            <div className="dark-gray-gradient shadow-hero-button border-lightYellow/40 text-lightYellow absolute -right-5 bottom-52 z-20 hidden h-[70px] w-[70px] cursor-pointer place-items-center rounded-full border p-3 text-center text-[10px] font-bold xl:grid">
              Sign up for the course
            </div>
          </SignUpDialog>
        </>
      ) : null}
    </>
  );
};

export default HeroSideButton;
