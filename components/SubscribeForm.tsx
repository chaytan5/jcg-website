"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  email: string;
  privacyPolicy: boolean;
};

const SubscribeForm = () => {
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
      const response = await axios.post("/api/subscribe", data);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-6">
        <div className="w-full space-y-1 lg:w-auto">
          <input
            className="w-full flex-grow rounded-xl border border-white/30 bg-lightGray/10 bg-gradient-to-r px-5  py-[10px] text-base placeholder:text-white/40 sm:max-w-sm"
            type="string"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          <p className="h-1 text-xs text-red-500">
            {errors.email && <span>Please enter a valid Email</span>}
          </p>
        </div>

        <button
          disabled={loading}
          className="yellow-gradient-bg grid w-32 place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary disabled:opacity-70"
        >
          <div className="flex items-center gap-[10px]  py-3">
            {loading ? "Please wait" : <p>Subscribe</p>}
          </div>
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
