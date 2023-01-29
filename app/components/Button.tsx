"use client";

import type { ButtonHTMLAttributes } from "react";

import { classNames } from "@/utils/styles";

export default function Button({
  children,
  disabled,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={classNames(
        "relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md group",
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
