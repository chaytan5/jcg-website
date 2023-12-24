"use client";
import { ReactNode, useEffect, useState } from "react";
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
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

type Inputs = {
  email: string;
  message: string;
  privacyPolicy: boolean;
};

export function AskQuestionDialog({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/message", data);

      toast.success(response.data.message);
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", message: "", privacyPolicy: false });
    }
  }, [formState, reset]);

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

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email-input">Email</label>
              <input
                type="string"
                id="email-input"
                placeholder="Enter your email"
                className="light-gray-gradient focus:ring-lightYellow focus-visible:ring-lightYellow rounded-[10px] border border-white/30 px-5 py-[10px] placeholder:text-white/40"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                })}
              />
              <p className="text-secondary h-1 text-sm">
                {errors.email && <span>Please enter a valid Email</span>}
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                className="light-gray-gradient focus:ring-lightYellow focus-visible:ring-lightYellow min-h-24 rounded-[10px] border border-white/30 px-5 py-[10px] placeholder:text-white/40"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Please enter a Message",
                  },
                  maxLength: {
                    value: 300,
                    message: "Too many characters",
                  },
                })}
              ></textarea>
              <p className="text-secondary h-1 text-sm">
                {errors.message && <span>{errors.message.message}</span>}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center gap-7 sm:flex-row sm:justify-normal sm:gap-4">
            <button
              disabled={loading}
              type="submit"
              className="yellow-gradient-bg text-primary grid place-items-center whitespace-nowrap rounded-full text-sm font-medium disabled:opacity-70"
            >
              <div className="flex items-center gap-[10px] px-6 py-3">
                {loading ? (
                  "Please wait"
                ) : (
                  <>
                    <p>Send</p>
                    <LuArrowUpRight size={18} className="text-primary" />
                  </>
                )}
              </div>
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="border-darkYellow bg-gunmetal accent-darkYellow checked:bg-darkYellow checked:accent-darkYellow focus:text-darkYellow h-4 w-4 appearance-none rounded-full border"
                  {...register("privacyPolicy", { required: true })}
                />
                <p className="text-sm">
                  I agree with <span className="underline">Privacy Policy</span>
                </p>
              </div>

              <p className="text-secondary h-1 text-center text-sm">
                {errors.privacyPolicy && <span>This field is required</span>}
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
