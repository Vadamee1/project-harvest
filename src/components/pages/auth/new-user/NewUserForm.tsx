"use client";

import CreateUser from "@/actions/auth/new-user";
import { Button, Input, Link } from "@nextui-org/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import NextLink from "next/link";
import * as yup from "yup";

export default function NewUserForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      nickname: yup
        .string()
        .max(20, "El apodo no puede contener más de 20 letras"),
      email: yup.string().email(),
      password: yup.string(),
    }),
    onSubmit: async (values) => {
      const resp = await CreateUser(values);
      if (resp.severity === "success") {
        router.push("/auth");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input
          name="nickname"
          label="Nombre o apodo"
          variant="bordered"
          required
          value={formik.values.nickname}
          onChange={formik.handleChange}
          errorMessage={formik.errors.nickname}
        />
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
      <div className="flex flex-col mt-5 mb-6">
        <Button type="submit" variant="shadow">
          Registrarse
        </Button>
      </div>
      <Link as={NextLink} color="warning" href="/auth">
        ¿Aún no tienes una cuenta? ¡Registrate!
      </Link>
    </form>
  );
}
