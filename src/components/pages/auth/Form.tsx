"use client";

import { authenticate } from "@/actions/auth/authenticate";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoEye, IoEyeOff, IoInformationCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import NextLink from "next/link";

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form action={dispatch}>
      <div className="flex flex-col gap-4 mb-2">
        <Input
          type="email"
          name="email"
          label="Email"
          id="email"
          variant="bordered"
          required
          labelPlacement="outside"
          endContent={
            <MdEmail className="text-2xl text-default-400 pointer-events-none" />
          }
        />
        <Input
          type={isVisible ? "text" : "password"}
          label="Contraseña"
          name="password"
          id="password"
          variant="bordered"
          required
          labelPlacement="outside"
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
        <Link color="danger" className="text-tiny" href="/auth/reset-password">
          ¿Olvidaste tu contraseña?
        </Link>
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
      <Link as={NextLink} color="warning" href="/auth/new-user">
        ¿Aún no tienes una cuenta? ¡Registrate!
      </Link>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full"
      aria-disabled={pending}
      type="submit"
      variant="shadow"
    >
      Log in
    </Button>
  );
}
