"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuArrowUpRight } from "react-icons/lu";
import { toast } from "sonner";

type Inputs = {
  email: string;
  privacyPolicy: boolean;
};

const HeroForm = () => {
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
      const response = await axios.post("/api/register", data);

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
      reset({ email: "", privacyPolicy: false });
    }
  }, [formState, reset]);

  return (
    <form
      className="hidden space-y-5 md:block"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-6">
          <input
            className="bg-lightGray/10 max-w-sm flex-grow rounded-xl border border-white/30 bg-gradient-to-r  px-5 py-[10px] text-base placeholder:text-white/40"
            type="string"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />

          <button
            disabled={loading}
            className="yellow-gradient-bg  text-primary grid place-items-center whitespace-nowrap rounded-full text-sm font-medium disabled:opacity-70"
          >
            <div className="flex items-center gap-[10px] px-6 py-3">
              {loading ? (
                "Please wait"
              ) : (
                <>
                  <p>Sign up for the course</p>
                  <LuArrowUpRight size={18} className="text-primary" />
                </>
              )}
            </div>
          </button>
        </div>
        <p className="text-secondary h-1 text-sm">
          {errors.email && <span>Please enter a valid Email</span>}
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="privacy-policy"
            className="border-darkYellow bg-gunmetal accent-darkYellow checked:bg-darkYellow checked:accent-darkYellow focus:text-darkYellow h-4 w-4 appearance-none rounded-full border "
            {...register("privacyPolicy", { required: true })}
          />

          <p>
            I agree with <span className="underline">Privacy Policy</span>
          </p>
        </div>
        <p className="text-secondary h-1 text-sm">
          {errors.privacyPolicy && <span>This field is required</span>}
        </p>
      </div>
    </form>
  );
};

export default HeroForm;
