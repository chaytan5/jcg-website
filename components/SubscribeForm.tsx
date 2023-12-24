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
    <form
      className="flex flex-col items-center gap-5 lg:flex-row lg:gap-6"
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
            className="yellow-gradient-bg text-primary grid w-32 place-items-center whitespace-nowrap rounded-full text-sm font-medium disabled:opacity-70"
          >
            <div className="flex items-center gap-[10px]  py-3">
              {loading ? "Please wait" : <p>Subscribe</p>}
            </div>
          </button>
        </div>
        <p className="h-1 text-xs text-red-500">
          {errors.email && <span>Please enter a valid Email</span>}
        </p>
      </div>
    </form>
  );
};

export default SubscribeForm;
