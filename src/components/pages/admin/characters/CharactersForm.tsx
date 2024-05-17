"use client";

import { UserOptions } from "@/types/user";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormik } from "formik";
import * as yup from "yup";
import EndAvatar from "./Avatar";
import createCharacter from "@/actions/characters/create";
import { useRouter } from "next/navigation";

interface Props {
  users: UserOptions[];
}

export default function CharactersForm({ users }: Props) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      faction: "",
      profile: "",
      userId: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Debes ingresar un nombre"),
      faction: yup.string().required("Selecciona una facción"),
      profile: yup.string(),
      userId: yup.string(),
    }),
    onSubmit: async (values) => {
      const resp = await createCharacter(values);
      if (resp.severity === "success") {
        router.push("/");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-7 ml-5 mr-5">
        <Input
          label="Nombre del personaje"
          name="name"
          size="lg"
          variant="underlined"
          isRequired
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={formik.errors.name}
        />
        <Input
          label="Facción"
          name="faction"
          size="lg"
          variant="underlined"
          isRequired
          value={formik.values.faction}
          onChange={formik.handleChange}
          errorMessage={formik.errors.faction}
        />
        <Select
          label="Usuario"
          variant="underlined"
          items={users}
          size="lg"
          name="userId"
          onChange={formik.handleChange}
          errorMessage={formik.errors.userId}
        >
          {users.map((user) => (
            <SelectItem
              key={user.id}
              value={formik.values.userId}
              endContent={<EndAvatar image={user.image} name={user.nickname} />}
            >
              {user.nickname}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Perfil"
          name="profile"
          size="lg"
          variant="underlined"
          value={formik.values.profile}
          onChange={formik.handleChange}
          errorMessage={formik.errors.profile}
        />
      </div>
      <div className="flex justify-end mt-8 mr-5">
        <Button variant="ghost" color="primary" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}
