"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuArrowUpRight } from "react-icons/lu";
import { toast } from "sonner";

type Inputs = {
  email: string;
  privacyPolicy: boolean;
};

const CTAForm = () => {
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
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1">
        <input
          type="string"
          placeholder="Enter your email"
          className="border-secondary text-secondary placeholder:text-secondary w-full rounded-lg border bg-white/80 px-5 py-[10px]"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
        />
        <p className="h-1 text-xs text-red-600">
          {errors.email && <span>Please enter a valid Email</span>}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-[14px]">
        <button
          disabled={loading}
          className="bg-primary grid  min-w-36 place-items-center whitespace-nowrap rounded-full text-sm font-medium text-white disabled:opacity-70"
        >
          <div className="flex items-center justify-center gap-[10px]  py-3">
            {loading ? (
              "Please wait"
            ) : (
              <>
                <p>Sign Up</p>
                <LuArrowUpRight size={18} className="text-white" />
              </>
            )}
          </div>
        </button>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy-policy"
              className="h-4 w-4 appearance-none rounded-full bg-white/60 "
              {...register("privacyPolicy", { required: true })}
            />
            <p className="text-primary text-xs">
              I agree with <span className="underline">Privacy Policy</span>
            </p>
          </div>
          <p className="h-1 text-xs text-red-600">
            {errors.privacyPolicy && <span>This field is required</span>}
          </p>
        </div>
      </div>
    </form>
  );
};

export default CTAForm;
