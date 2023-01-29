"use client";

import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";

import { classNames } from "@/utils/styles";

type Props = {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  loading?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  name,
  label,
  register,
  loading,
  error,
}: Props) {
  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        placeholder={label}
        className={classNames(
          "relative block w-full px-3 py-2 text-gray-900 border rounded-md appearance-none sm:text-sm",
          loading
            ? "cursor-not-allowed bg-gray-300 animate-pulse"
            : "cursor-text",
          error
            ? "border-red-500 placeholder-red-400 focus:ring-red-500 focus:border-red-500 focus:outline-2 focus:outline-red-500 focus:z-10"
            : "placeholder-gray-500 border-gray-300"
        )}
        disabled={loading}
        {...register(name)}
      />
      {error && (
        <p className="text-sm text-left text-red-500" id={`${name}-error`}>
          {error}
        </p>
      )}
    </>
  );
}
