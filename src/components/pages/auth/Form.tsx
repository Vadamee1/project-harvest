"use client";

import { authenticate } from "@/actions/auth/authenticate";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  IoArrowForward,
  IoEye,
  IoEyeOff,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form action={dispatch}>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          name="email"
          label="Email"
          id="email"
          required
          endContent={
            <MdEmail className="text-2xl text-default-400 pointer-events-none" />
          }
        />
        <Input
          type={isVisible ? "text" : "password"}
          label="Contraseña"
          name="password"
          id="password"
          required
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
      <LoginButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <IoInformationCircleOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending} type="submit">
      Log in <IoArrowForward className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
