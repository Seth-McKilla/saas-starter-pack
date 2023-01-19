"use client";

import type { InputHTMLAttributes } from "react";

type Props = {
  id: string;
  name: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, name, label, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={label}
        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none sm:text-sm"
        {...rest}
      />
    </div>
  );
}
