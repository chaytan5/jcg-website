"use client";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export function AskQuestionDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ask a Question</DialogTitle>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4 text-white">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}

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
                I agree with <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
