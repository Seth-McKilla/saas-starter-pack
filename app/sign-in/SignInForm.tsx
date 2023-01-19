"use client";

import { LockClosedIcon } from "@heroicons/react/20/solid";

import Button from "@/components/Button";
import Input from "@/components/Input";

export default function SignInForm() {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <Input
        id="email-address"
        name="email"
        label="Email address"
        type="email"
        required
      />

      <Button type="submit">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
          />
        </span>
        Sign in
      </Button>
    </form>
  );
}
