"use client";

import type { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md group"
      {...rest}
    >
      {children}
    </button>
  );
}
