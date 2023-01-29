"use client";

import { LockClosedIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Input from "@/components/Input";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid format of name@example.com")
    .required("Email address is required"),
});
type FormData = yup.InferType<typeof schema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await signIn("email", {
      email: data.email,
      redirect: false,
    });
  };

  return isSubmitSuccessful ? (
    <div className="relative mt-4 w-full">
      <div className="-mt-4 flex w-full items-center justify-center">
        <PaperAirplaneIcon className="h-20 w-20 -rotate-45 text-gray-300" />
      </div>
      <p className="absolute top-0 left-0 text-lg font-bold">
        {
          "We've just sent you an email with a link to sign in! If you don't see it, please check your spam folder."
        }
      </p>
    </div>
  ) : (
    <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        label="Email address"
        register={register}
        loading={isSubmitting}
        error={errors?.email?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </span>
        Send sign in link
      </Button>
    </form>
  );
}
