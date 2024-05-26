"use client";

import CreateUser from "@/actions/auth/new-user";
import { Button, Input, Link } from "@nextui-org/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import NextLink from "next/link";
import * as yup from "yup";
import resetPassword from "@/actions/auth/reset-password";

export default function ResetPasswordForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email(),
      password: yup.string(),
    }),
    onSubmit: async (values) => {
      const resp = await resetPassword(values);
      if (resp.severity === "success") {
        router.push("/auth");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input
          name="email"
          label="Correo electronico"
          variant="bordered"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={formik.errors.email}
        />
        <Input
          name="password"
          label="Contraseña"
          variant="bordered"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          errorMessage={formik.errors.password}
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
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
      </div>
      <div className="flex justify-between mt-5 mb-6">
        <Button color="danger" as={NextLink} href="/auth" variant="ghost">
          Cancelar
        </Button>
        <Button type="submit" variant="shadow">
          Cambiar
        </Button>
      </div>
    </form>
  );
}
